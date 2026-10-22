import React, { useState, useRef } from 'react';

// Exponential backoff helper for Gemini API calls
async function fetchWithBackoff(url, options, maxRetries = 3) {
  let delay = 1000;
  for (let i = 0; i < maxRetries; i++) {
    try {
      const res = await fetch(url, options);
      if (res.ok) return res;
      if (res.status === 429 || res.status >= 500) {
        await new Promise((r) => setTimeout(r, delay));
        delay *= 2;
        continue;
      }
      return res;
    } catch (e) {
      if (i === maxRetries - 1) throw e;
      await new Promise((r) => setTimeout(r, delay));
      delay *= 2;
    }
  }
}

// Helper to convert signed PCM16 ArrayBuffer to a playable WAV Blob URL
function pcmToWavBlobUrl(pcm16Array, sampleRate = 24000) {
  const numChannels = 1;
  const bytesPerSample = 2;
  const blockAlign = numChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = pcm16Array.length * bytesPerSample;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  const writeString = (v, offset, str) => {
    for (let i = 0; i < str.length; i++) {
      v.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // Raw PCM
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, 'data');
  view.setUint32(40, dataSize, true);

  let offset = 44;
  for (let i = 0; i < pcm16Array.length; i++, offset += 2) {
    view.setInt16(offset, pcm16Array[i], true);
  }

  const blob = new Blob([buffer], { type: 'audio/wav' });
  return URL.createObjectURL(blob);
}

function base64ToArrayBuffer(base64) {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

// 1. Text Generation & Grounded Market Insights via gemini-3.1-flash-preview
async function askGeminiAdvisor(userQuery, useSearch = false) {
  const apiKey = "";
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-preview:generateContent?key=${apiKey}`;
  
  const systemPrompt = `You are Investvedya AI, an elite luxury real estate consultant and investment expert. 
Provide concise, elegant, highly professional, and informative advice regarding properties, investment ROI, eco-friendly architectures, and buying strategies. Keep responses succinct.`;

  const payload = {
    contents: [{ parts: [{ text: userQuery }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] }
  };

  if (useSearch) {
    payload.tools = [{ google_search: {} }];
  }

  const response = await fetchWithBackoff(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const result = await response.json();
  const candidate = result.candidates?.[0];
  const text = candidate?.content?.parts?.[0]?.text || "I apologize, I couldn't process your real estate query at this time.";
  
  let sources = [];
  if (candidate?.groundingMetadata?.groundingAttributions) {
    sources = candidate.groundingMetadata.groundingAttributions
      .map(attr => ({ uri: attr.web?.uri, title: attr.web?.title }))
      .filter(s => s.uri && s.title);
  }

  return { text, sources };
}

// 2. Structured JSON Dream Home Recommendation
async function getDreamHomeMatches(criteria) {
  const apiKey = "";
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-preview:generateContent?key=${apiKey}`;

  const prompt = `Based on these customer preferences: 
- Location: ${criteria.location}
- Budget: ${criteria.budget}
- Property Type: ${criteria.propertyType}
- Key Priorities: ${criteria.priorities}

Generate 3 realistic high-end luxury property recommendations.`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "ARRAY",
        items: {
          type: "OBJECT",
          properties: {
            propertyName: { type: "STRING" },
            tagline: { type: "STRING" },
            estimatedPrice: { type: "STRING" },
            bedrooms: { type: "STRING" },
            areaSqFt: { type: "STRING" },
            matchScore: { type: "STRING" },
            highlights: {
              type: "ARRAY",
              items: { type: "STRING" }
            },
            whyItFits: { type: "STRING" }
          },
          propertyOrdering: ["propertyName", "tagline", "estimatedPrice", "bedrooms", "areaSqFt", "matchScore", "highlights", "whyItFits"]
        }
      }
    }
  };

  const response = await fetchWithBackoff(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const result = await response.json();
  const jsonText = result.candidates?.[0]?.content?.parts?.[0]?.text;
  return JSON.parse(jsonText || "[]");
}

// 3. Image Generation via gemini-3.1-flash-image
async function generateArchitecturalConcept(imagePrompt, aspectRatio = "16:9") {
  const apiKey = "";
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image:generateContent?key=${apiKey}`;

  const fullPrompt = `High-end architectural photography, ultra-realistic luxury real estate concept, photorealistic render: ${imagePrompt}. Architectural digest styling, 8k resolution, elegant mood lighting.`;

  const payload = {
    contents: [{ parts: [{ text: fullPrompt }] }],
    generationConfig: {
      responseModalities: ['IMAGE'],
      imageConfig: { aspectRatio }
    }
  };

  const response = await fetchWithBackoff(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const result = await response.json();
  const part = result?.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
  if (!part) throw new Error("Could not generate architectural concept.");
  
  return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
}

// 4. TTS Property Audio Tour via gemini-2.5-flash-preview-tts
async function generatePropertyAudioTour(scriptText, voiceName = "Zephyr") {
  const apiKey = "";
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{
      parts: [{ text: `Say warmly and enthusiastically as a luxury property host: ${scriptText}` }]
    }],
    generationConfig: {
      responseModalities: ["AUDIO"],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName }
        }
      }
    }
  };

  const response = await fetchWithBackoff(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const result = await response.json();
  const part = result?.candidates?.[0]?.content?.parts?.[0];
  const audioData = part?.inlineData?.data;
  const mimeType = part?.inlineData?.mimeType;

  if (audioData && mimeType) {
    const rateMatch = mimeType.match(/rate=(\d+)/);
    const sampleRate = rateMatch ? parseInt(rateMatch[1], 10) : 24000;
    const pcmData = new Int16Array(base64ToArrayBuffer(audioData));
    return pcmToWavBlobUrl(pcmData, sampleRate);
  } else {
    throw new Error("Failed to generate voice audio tour.");
  }
}

export default function RealEstateLanding() {
  const [activeTab, setActiveTab] = useState('advisor'); // 'advisor' | 'finder' | 'visionizer' | 'audioTour'

  // Advisor State
  const [advisorInput, setAdvisorInput] = useState('');
  const [advisorSearchGrounding, setAdvisorSearchGrounding] = useState(true);
  const [advisorLoading, setAdvisorLoading] = useState(false);
  const [advisorMessages, setAdvisorMessages] = useState([
    {
      role: 'assistant',
      text: 'Greetings! I am your AI Luxury Property Consultant. Ask me anything about property ROI, eco-friendly luxury, or market trends.',
      sources: []
    }
  ]);

  // Dream Home Finder State
  const [finderCriteria, setFinderCriteria] = useState({
    location: 'North India / NCR',
    budget: '$500k - $1.5M',
    propertyType: 'Eco Luxury Villa',
    priorities: 'Private garden, smart automation, solar power'
  });
  const [finderLoading, setFinderLoading] = useState(false);
  const [matches, setMatches] = useState(null);

  // Visionizer State
  const [visionPrompt, setVisionPrompt] = useState('Modern organic luxury villa surrounded by pine forest with infinity pool');
  const [visionAspectRatio, setVisionAspectRatio] = useState('16:9');
  const [visionLoading, setVisionLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);

  // Audio Tour State
  const [selectedPropertyTour, setSelectedPropertyTour] = useState(0);
  const [audioVoice, setAudioVoice] = useState('Zephyr');
  const [audioLoading, setAudioLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const audioRef = useRef(null);

  const samplePropertiesForTour = [
    {
      title: "Royal Palms Reserve",
      location: "Gurugram / NCR",
      description: "Zero-carbon luxury living with state-of-the-art biophilic design, private pools, and garden views.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Aura Sky Penthouses",
      location: "Golf Course Road",
      description: "Skyline vistas, Italian marble finishes, double-height ceilings, and high-speed private elevator access.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Serene Valley Estates",
      location: "Shimla Foothills",
      description: "Nestled in nature with organic orchards, heated indoor plunge pools, and artisanal wooden craftsmanship.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const handleAdvisorSubmit = async (e) => {
    e.preventDefault();
    if (!advisorInput.trim() || advisorLoading) return;

    const userText = advisorInput;
    setAdvisorInput('');
    setAdvisorMessages(prev => [...prev, { role: 'user', text: userText }]);
    setAdvisorLoading(true);

    try {
      const res = await askGeminiAdvisor(userText, advisorSearchGrounding);
      setAdvisorMessages(prev => [...prev, {
        role: 'assistant',
        text: res.text,
        sources: res.sources
      }]);
    } catch (err) {
      setAdvisorMessages(prev => [...prev, {
        role: 'assistant',
        text: "I encountered an issue gathering data. Please try again."
      }]);
    } finally {
      setAdvisorLoading(false);
    }
  };

  const handleFinderSubmit = async (e) => {
    e.preventDefault();
    setFinderLoading(true);
    try {
      const res = await getDreamHomeMatches(finderCriteria);
      setMatches(res);
    } catch (err) {
      alert("Failed to generate recommendations. Please try again.");
    } finally {
      setFinderLoading(false);
    }
  };

  const handleVisionGenerate = async (e) => {
    e.preventDefault();
    if (!visionPrompt.trim() || visionLoading) return;
    setVisionLoading(true);
    try {
      const imgData = await generateArchitecturalConcept(visionPrompt, visionAspectRatio);
      setGeneratedImage(imgData);
    } catch (err) {
      alert("Image generation failed. Please try a different prompt.");
    } finally {
      setVisionLoading(false);
    }
  };

  const handleAudioTourGenerate = async () => {
    setAudioLoading(true);
    setAudioUrl(null);
    try {
      const prop = samplePropertiesForTour[selectedPropertyTour];
      const url = await generatePropertyAudioTour(prop.description, audioVoice);
      setAudioUrl(url);
    } catch (err) {
      alert("Audio generation failed. Please try again.");
    } finally {
      setAudioLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen bg-[#FAF6F0] text-[#1a1a1a] font-sans px-3 py-2 flex flex-col justify-between overflow-hidden">
      
      {/* Top Bar Header */}
      <header className="flex justify-between items-center pb-2 border-b border-[#C49A45]/30 shrink-0">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-[#0A2218] border border-[#C49A45]/60 flex items-center justify-center shadow">
            <svg className="w-4 h-4 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>
          <div>
            <h1 className="text-sm font-serif font-bold text-[#0A2218] tracking-wider uppercase leading-none">INVESTVEDYA</h1>
            <p className="text-[9px] text-[#C49A45] font-sans font-semibold tracking-widest uppercase">Infratech • Gemini AI Suite</p>
          </div>
        </div>

        {/* Compact Navigation Tabs */}
        <nav className="flex items-center space-x-1 bg-[#0A2218]/5 p-1 rounded-full border border-[#C49A45]/30">
          <button
            onClick={() => setActiveTab('advisor')}
            className={`px-3 py-1 rounded-full text-[10px] font-bold transition ${
              activeTab === 'advisor' ? 'bg-[#0A2218] text-[#D4AF37] shadow' : 'text-gray-700 hover:bg-white/50'
            }`}
          >
            🤖 Market Advisor
          </button>

          <button
            onClick={() => setActiveTab('finder')}
            className={`px-3 py-1 rounded-full text-[10px] font-bold transition ${
              activeTab === 'finder' ? 'bg-[#0A2218] text-[#D4AF37] shadow' : 'text-gray-700 hover:bg-white/50'
            }`}
          >
            🔍 Dream Matcher
          </button>

          <button
            onClick={() => setActiveTab('visionizer')}
            className={`px-3 py-1 rounded-full text-[10px] font-bold transition ${
              activeTab === 'visionizer' ? 'bg-[#0A2218] text-[#D4AF37] shadow' : 'text-gray-700 hover:bg-white/50'
            }`}
          >
            🎨 Visionizer AI
          </button>

          <button
            onClick={() => setActiveTab('audioTour')}
            className={`px-3 py-1 rounded-full text-[10px] font-bold transition ${
              activeTab === 'audioTour' ? 'bg-[#0A2218] text-[#D4AF37] shadow' : 'text-gray-700 hover:bg-white/50'
            }`}
          >
            🎙️ Voice Tour
          </button>
        </nav>
      </header>

      {/* Main Content Area (Unified Split View) */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3 my-2 overflow-hidden min-h-0">
        
        {/* Left Column: Hero Overview & Quick Stats */}
        <section className="lg:col-span-5 bg-[#0A2218] rounded-2xl p-3 border border-[#C49A45]/30 shadow-lg flex flex-col justify-between overflow-hidden relative">
          
          <div className="relative h-28 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-[#C49A45]/20">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Property"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-2 left-2 bg-[#0A2218]/90 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-[#C49A45]/40 text-[10px] text-white font-serif">
              ✨ Premium Living & AI Intelligence
            </div>
          </div>

          <div className="space-y-1 my-1">
            <h2 className="text-base sm:text-lg font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA7C11]">
              Investvedya Infratech
            </h2>
            <p className="text-[10px] text-gray-300 font-sans leading-tight opacity-90 line-clamp-2">
              Leading luxury real estate developer in North India, pioneering eco-friendly residences powered by Gemini AI market intelligence.
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-4 gap-1.5 pt-1.5 border-t border-white/10 text-center">
            <div className="bg-white/5 p-1 rounded-lg border border-[#C49A45]/20">
              <span className="block text-xs font-bold text-[#D4AF37]">10+</span>
              <span className="text-[8px] text-gray-300">Years Exp</span>
            </div>
            <div className="bg-white/5 p-1 rounded-lg border border-[#C49A45]/20">
              <span className="block text-xs font-bold text-[#D4AF37]">5k+</span>
              <span className="text-[8px] text-gray-300">Families</span>
            </div>
            <div className="bg-white/5 p-1 rounded-lg border border-[#C49A45]/20">
              <span className="block text-xs font-bold text-[#D4AF37]">50+</span>
              <span className="text-[8px] text-gray-300">Projects</span>
            </div>
            <div className="bg-white/5 p-1 rounded-lg border border-[#C49A45]/20">
              <span className="block text-xs font-bold text-[#D4AF37]">100%</span>
              <span className="text-[8px] text-gray-300">Quality</span>
            </div>
          </div>

        </section>

        {/* Right Column: Dynamic Interactive AI Feature Module */}
        <section className="lg:col-span-7 bg-white rounded-2xl p-3 border border-[#C49A45]/30 shadow-lg flex flex-col justify-between overflow-hidden min-h-0">
          
          {/* Active AI Tab: Advisor */}
          {activeTab === 'advisor' && (
            <div className="h-full flex flex-col justify-between space-y-2">
              <div className="flex justify-between items-center pb-1.5 border-b border-gray-100 shrink-0">
                <div>
                  <h3 className="text-xs font-serif font-bold text-[#0A2218]">Investvedya AI Real Estate Advisor</h3>
                  <p className="text-[9px] text-gray-500">Ask about real estate ROI, eco-friendly luxury trends, or legal advice.</p>
                </div>
                <label className="flex items-center space-x-1 text-[9px] font-medium text-gray-600 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-200">
                  <input
                    type="checkbox"
                    checked={advisorSearchGrounding}
                    onChange={(e) => setAdvisorSearchGrounding(e.target.checked)}
                    className="rounded text-[#C49A45] scale-75"
                  />
                  <span>Live Search</span>
                </label>
              </div>

              {/* Chat Log */}
              <div className="flex-1 overflow-y-auto space-y-2 pr-1 min-h-0 text-xs">
                {advisorMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[90%] rounded-xl p-2.5 text-[11px] leading-snug ${
                      msg.role === 'user'
                        ? 'bg-[#0A2218] text-white rounded-tr-none'
                        : 'bg-[#FAF6F0] text-gray-800 border border-[#C49A45]/20 rounded-tl-none'
                    }`}>
                      <p className="font-semibold text-[9px] mb-0.5 opacity-70">
                        {msg.role === 'user' ? 'You' : 'Investvedya AI'}
                      </p>
                      <div className="whitespace-pre-line">{msg.text}</div>
                      
                      {msg.sources && msg.sources.length > 0 && (
                        <div className="mt-1 pt-1 border-t border-gray-300/40 text-[9px]">
                          <span className="font-semibold text-gray-600">Sources: </span>
                          {msg.sources.map((src, i) => (
                            <a key={i} href={src.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline mr-2">
                              {src.title || "Link"}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {advisorLoading && (
                  <div className="text-[10px] text-gray-500 italic p-1">Analyzing insights...</div>
                )}
              </div>

              {/* Input Form */}
              <form onSubmit={handleAdvisorSubmit} className="flex gap-1.5 pt-1.5 border-t border-gray-100 shrink-0">
                <input
                  type="text"
                  placeholder="e.g. Is buying an eco-luxury villa in NCR a good 5-year investment?"
                  value={advisorInput}
                  onChange={(e) => setAdvisorInput(e.target.value)}
                  className="flex-1 px-3 py-1.5 rounded-full border border-gray-300 text-[11px] focus:outline-none focus:border-[#C49A45]"
                />
                <button
                  type="submit"
                  disabled={advisorLoading}
                  className="bg-[#0A2218] hover:bg-[#123828] text-[#D4AF37] px-4 py-1.5 rounded-full text-[10px] font-bold transition shadow shrink-0"
                >
                  Ask AI
                </button>
              </form>
            </div>
          )}

          {/* Active AI Tab: Matcher */}
          {activeTab === 'finder' && (
            <div className="h-full flex flex-col justify-between space-y-2 overflow-y-auto">
              <div>
                <h3 className="text-xs font-serif font-bold text-[#0A2218]">AI Dream Home Recommendation Engine</h3>
                <p className="text-[9px] text-gray-500">Provide preferences to get structured JSON property matches.</p>
              </div>

              <form onSubmit={handleFinderSubmit} className="grid grid-cols-2 gap-2 text-[10px]">
                <div>
                  <label className="block font-bold text-gray-700">Location</label>
                  <input
                    type="text"
                    value={finderCriteria.location}
                    onChange={(e) => setFinderCriteria({...finderCriteria, location: e.target.value})}
                    className="w-full px-2 py-1 rounded-lg border border-gray-300 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700">Budget</label>
                  <input
                    type="text"
                    value={finderCriteria.budget}
                    onChange={(e) => setFinderCriteria({...finderCriteria, budget: e.target.value})}
                    className="w-full px-2 py-1 rounded-lg border border-gray-300 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-gray-700">Property Type</label>
                  <select
                    value={finderCriteria.propertyType}
                    onChange={(e) => setFinderCriteria({...finderCriteria, propertyType: e.target.value})}
                    className="w-full px-2 py-1 rounded-lg border border-gray-300 focus:outline-none bg-white"
                  >
                    <option value="Eco Luxury Villa">Eco Luxury Villa</option>
                    <option value="Sky Penthouse">Sky Penthouse</option>
                    <option value="Gated Mansion">Gated Mansion</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-gray-700">Priorities</label>
                  <input
                    type="text"
                    value={finderCriteria.priorities}
                    onChange={(e) => setFinderCriteria({...finderCriteria, priorities: e.target.value})}
                    className="w-full px-2 py-1 rounded-lg border border-gray-300 focus:outline-none"
                  />
                </div>

                <div className="col-span-2 pt-1">
                  <button
                    type="submit"
                    disabled={finderLoading}
                    className="w-full bg-[#0A2218] hover:bg-[#123828] text-[#D4AF37] font-bold py-1.5 rounded-lg text-[10px] transition shadow"
                  >
                    {finderLoading ? "Matching Properties..." : "Find Property Matches"}
                  </button>
                </div>
              </form>

              {matches && (
                <div className="grid grid-cols-3 gap-1.5 pt-1 text-[10px]">
                  {matches.slice(0, 3).map((item, index) => (
                    <div key={index} className="bg-[#FAF6F0] p-1.5 rounded-lg border border-[#C49A45]/30">
                      <div className="flex justify-between items-center font-bold text-[#0A2218]">
                        <span className="truncate">{item.propertyName}</span>
                        <span className="text-[9px] text-[#C49A45]">{item.matchScore}</span>
                      </div>
                      <p className="text-[8px] text-gray-600 truncate">{item.tagline}</p>
                      <p className="text-[9px] font-bold mt-0.5">{item.estimatedPrice}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Active AI Tab: Visionizer */}
          {activeTab === 'visionizer' && (
            <div className="h-full flex flex-col justify-between space-y-2">
              <div>
                <h3 className="text-xs font-serif font-bold text-[#0A2218]">AI Architectural Rendering</h3>
                <p className="text-[9px] text-gray-500">Generate architectural design concepts via Gemini 3.1 Flash Image.</p>
              </div>

              <form onSubmit={handleVisionGenerate} className="space-y-1.5 text-[10px]">
                <textarea
                  rows={2}
                  value={visionPrompt}
                  onChange={(e) => setVisionPrompt(e.target.value)}
                  className="w-full p-2 rounded-lg border border-gray-300 text-[10px] focus:outline-none"
                />

                <div className="flex justify-between items-center">
                  <select
                    value={visionAspectRatio}
                    onChange={(e) => setVisionAspectRatio(e.target.value)}
                    className="px-2 py-1 rounded-lg border border-gray-300 text-[10px]"
                  >
                    <option value="16:9">16:9 Aspect</option>
                    <option value="4:3">4:3 Aspect</option>
                    <option value="1:1">1:1 Square</option>
                  </select>

                  <button
                    type="submit"
                    disabled={visionLoading}
                    className="bg-[#0A2218] hover:bg-[#123828] text-[#D4AF37] font-bold px-4 py-1 rounded-full text-[10px] transition shadow"
                  >
                    {visionLoading ? "Rendering..." : "Generate Concept"}
                  </button>
                </div>
              </form>

              <div className="flex-1 rounded-lg overflow-hidden border border-gray-200 bg-[#FAF6F0] flex justify-center items-center min-h-0 relative">
                {visionLoading ? (
                  <p className="text-[10px] text-gray-500">Rendering visual concept...</p>
                ) : generatedImage ? (
                  <img src={generatedImage} alt="Generated Design" className="w-full h-full object-cover" />
                ) : (
                  <p className="text-[10px] text-gray-400">Click "Generate Concept" to display architectural render.</p>
                )}
              </div>
            </div>
          )}

          {/* Active AI Tab: Audio Tour */}
          {activeTab === 'audioTour' && (
            <div className="h-full flex flex-col justify-between space-y-2">
              <div>
                <h3 className="text-xs font-serif font-bold text-[#0A2218]">AI Voice Property Tours</h3>
                <p className="text-[9px] text-gray-500">Listen to voice tour narrations generated by Gemini TTS.</p>
              </div>

              <div className="grid grid-cols-3 gap-1.5">
                {samplePropertiesForTour.map((prop, idx) => (
                  <div
                    key={idx}
                    onClick={() => { setSelectedPropertyTour(idx); setAudioUrl(null); }}
                    className={`cursor-pointer p-1.5 rounded-lg border text-[10px] transition ${
                      selectedPropertyTour === idx
                        ? 'border-[#C49A45] bg-[#0A2218]/5 font-bold'
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    <img src={prop.image} alt={prop.title} className="w-full h-12 object-cover rounded mb-1" />
                    <p className="truncate text-[#0A2218]">{prop.title}</p>
                    <p className="text-[8px] text-[#C49A45] truncate">{prop.location}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#FAF6F0] p-2 rounded-xl border border-[#C49A45]/20 flex justify-between items-center text-[10px]">
                <div className="flex items-center space-x-2">
                  <span>Voice:</span>
                  <select
                    value={audioVoice}
                    onChange={(e) => setAudioVoice(e.target.value)}
                    className="px-2 py-0.5 rounded border border-gray-300 text-[10px] bg-white"
                  >
                    <option value="Zephyr">Zephyr</option>
                    <option value="Puck">Puck</option>
                    <option value="Charon">Charon</option>
                    <option value="Kore">Kore</option>
                  </select>
                </div>

                <button
                  onClick={handleAudioTourGenerate}
                  disabled={audioLoading}
                  className="bg-[#0A2218] hover:bg-[#123828] text-[#D4AF37] font-bold px-3 py-1 rounded-full text-[10px] shadow"
                >
                  {audioLoading ? "Synthesizing..." : "🎙️ Play Tour Audio"}
                </button>
              </div>

              {audioUrl && (
                <div className="pt-1 flex items-center gap-2">
                  <audio ref={audioRef} src={audioUrl} controls autoPlay className="w-full h-8" />
                </div>
              )}
            </div>
          )}

        </section>

      </main>

      {/* Slim Footer */}
      <footer className="pt-1 border-t border-[#C49A45]/30 flex justify-between items-center text-[9px] text-gray-500 shrink-0">
        <p className="font-serif font-bold text-[#0A2218]">Investvedya Infratech Pvt. Ltd.</p>
        <p>© 2026 Investvedya Infratech. All rights reserved.</p>
      </footer>

    </div>
  );
}