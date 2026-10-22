import { Project } from '../models/Project.js';
import { Blog } from '../models/Blog.js';
import { dbStore } from '../data/dbStore.js';

export const residentialProjects = [
  {
    title: "Golden Grande",
    subtitle: "LUXURY LIVING REDEFINED",
    type: "residential",
    location: "Noida",
    image: "/images/r1.png",
    description: "Experience ultra-luxury high-rise living crafted with modern Italian architecture and panoramic city views.",
    badge: "Bestseller",
    badgeBg: "bg-amber-600/60",
    features: [
      { text: "Premium Apartments", iconName: "Building" },
      { text: "Modern Amenities", iconName: "Sparkles" },
      { text: "Prime Location", iconName: "MapPin" }
    ],
    featured: true
  },
  {
    title: "Godrej Majesty",
    subtitle: "A ROYAL WAY OF LIVING",
    type: "residential",
    location: "Delhi",
    image: "/images/r2.png",
    description: "Designed for royalty with lush private green lawns, double-height grand lobbies, and premier security.",
    badge: "Exclusive",
    badgeBg: "bg-emerald-600/60",
    features: [
      { text: "Spacious Homes", iconName: "Home" },
      { text: "Green Surroundings", iconName: "Trees" },
      { text: "World-Class Amenities", iconName: "Award" }
    ],
    featured: true
  },
  {
    title: "Diligent Builders",
    subtitle: "HOMES FOR A BRIGHTER TOMORROW",
    type: "residential",
    location: "Uttar Pradesh",
    image: "/images/r3.png",
    description: "Exceptional quality homes designed to foster community, family comfort, and long-term asset value.",
    badge: "Value Plus",
    badgeBg: "bg-blue-600/60",
    features: [
      { text: "Quality Construction", iconName: "ShieldCheck" },
      { text: "Trusted Developer", iconName: "CheckCircle" },
      { text: "Family Friendly", iconName: "Users" }
    ],
    featured: true
  },
  {
    title: "Brook & Rivulet",
    subtitle: "MODERN WATERFRONT LIVING",
    type: "residential",
    location: "Noida Extension",
    image: "/images/r4.png",
    description: "Waterfront tranquility with designer residences overlooking pristine landscaped streams and walking trails.",
    badge: "Waterfront",
    badgeBg: "bg-cyan-600/60",
    features: [
      { text: "High-Rise Living", iconName: "Building2" },
      { text: "Luxury Amenities", iconName: "Sparkles" },
      { text: "Scenic Views", iconName: "Eye" }
    ],
    featured: true
  },
  {
    title: "RN Construction",
    subtitle: "CRAFTED WITH PRECISION",
    type: "residential",
    location: "Greater Noida",
    image: "/images/r5.png",
    description: "Architectural precision paired with premium engineering materials for residences that stand the test of time.",
    badge: "Architectural",
    badgeBg: "bg-indigo-600/60",
    features: [
      { text: "Modern Elevation", iconName: "Layers" },
      { text: "Premium Quality", iconName: "Award" },
      { text: "Independent Homes", iconName: "Home" }
    ],
    featured: true
  },
  {
    title: "La Royale",
    subtitle: "ROYAL LIFESTYLE & ELEGANCE",
    type: "residential",
    location: "Noida",
    image: "/images/r6.png",
    description: "Stately neoclassical residences designed for connoisseurs of timeless elegance and elite society.",
    badge: "Signature",
    badgeBg: "bg-purple-600/60",
    features: [
      { text: "Grand Entry", iconName: "Door" },
      { text: "Prime Connectivity", iconName: "MapPin" },
      { text: "Secure Gated Community", iconName: "Shield" }
    ],
    featured: true
  },
  {
    title: "KVD Wind Park",
    subtitle: "SERENE LANDSCAPES",
    type: "residential",
    location: "Greater Noida",
    image: "/images/r7.png",
    description: "Aerodynamic windward design keeping every home breezy, natural, and harmonious with Vastu principles.",
    badge: "Eco Living",
    badgeBg: "bg-teal-600/60",
    features: [
      { text: "Windward Design", iconName: "Wind" },
      { text: "Open Terraces", iconName: "Maximize" },
      { text: "Vastu Compliant", iconName: "Compass" }
    ],
    featured: true
  },
  {
    title: "Oasis Venetia Heights",
    subtitle: "ITALIAN-INSPIRED LIVING",
    type: "residential",
    location: "Greater Noida West",
    image: "/images/r8.png",
    description: "Renaissance aesthetics reimagined for modern life, featuring central plazas, fountains, and private cabanas.",
    badge: "Venetian",
    badgeBg: "bg-rose-600/60",
    features: [
      { text: "Central Courtyard", iconName: "Layout" },
      { text: "Club Facilities", iconName: "Coffee" },
      { text: "Ample Parking", iconName: "Car" }
    ],
    featured: true
  },
  {
    title: "Oasis GrandStand",
    subtitle: "PREMIUM SPORTS ADDRESS",
    type: "residential",
    location: "Greater Noida",
    image: "/images/r9.png",
    description: "A dream address for sports enthusiasts and active families, right next to world-class sports facilities.",
    badge: "Sports City",
    badgeBg: "bg-orange-600/60",
    features: [
      { text: "Stadium Views", iconName: "Activity" },
      { text: "Olympic-Length Pool", iconName: "Droplet" },
      { text: "Tennis & Squash Courts", iconName: "Zap" }
    ],
    featured: true
  }
];

export const commercialProjects = [
  {
    title: "Iris Trehan",
    subtitle: "A NEW ERA OF BUSINESS SPACES",
    type: "commercial",
    location: "Noida",
    image: "/images/iris.png",
    description: "High-density retail corridors and grade-A corporate suites designed for maximum footfall and investment yield.",
    badge: "Retail & Office",
    badgeBg: "bg-blue-600/60",
    features: [
      { text: "Retail Spaces", iconName: "Store" },
      { text: "Food & Entertainment", iconName: "Coffee" },
      { text: "High Footfall", iconName: "TrendingUp" }
    ],
    highlights: [
      { text: "Prime Location", iconName: "MapPin" },
      { text: "Modern Design", iconName: "Building2" },
      { text: "High Footfall", iconName: "TrendingUp" }
    ],
    featured: true
  },
  {
    title: "U:Fairia",
    subtitle: "WHERE BUSINESS MEETS OPPORTUNITY",
    type: "commercial",
    location: "Delhi",
    image: "/images/ukpimg.png",
    description: "A signature commercial address blending executive corporate towers with vibrant lifestyle and gourmet avenues.",
    badge: "Business Hub",
    badgeBg: "bg-blue-600/60",
    features: [
      { text: "Premium Offices", iconName: "Building" },
      { text: "Business Ecosystem", iconName: "Briefcase" },
      { text: "Strategic Location", iconName: "Compass" }
    ],
    highlights: [
      { text: "Strategic Location", iconName: "MapPin" },
      { text: "World-Class Amenities", iconName: "Sparkles" },
      { text: "Great Connectivity", iconName: "TrendingUp" }
    ],
    featured: true
  },
  {
    title: "NX One",
    subtitle: "A DESTINATION FOR MODERN BUSINESSES",
    type: "commercial",
    location: "Uttar Pradesh",
    image: "/images/r9.png",
    description: "An integrated commercial ecosystem featuring smart office suites, boutique retail, and entertainment centers.",
    badge: "Premium Spaces",
    badgeBg: "bg-amber-800/60",
    features: [
      { text: "Office Spaces", iconName: "Building2" },
      { text: "Retail & F&B", iconName: "Store" },
      { text: "Modern Infrastructure", iconName: "Cpu" }
    ],
    highlights: [
      { text: "Iconic Architecture", iconName: "Building2" },
      { text: "Flexible Spaces", iconName: "Expand" },
      { text: "Strong Investment Value", iconName: "TrendingUp" }
    ],
    featured: true
  },
  {
    title: "Golden I",
    subtitle: "COMMERCIAL LANDMARK WITH ENDLESS OPPORTUNITIES",
    type: "commercial",
    location: "Greater Noida",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    description: "Iconic glass-facade tower commanding top visibility on the expressway, ideal for flagship retail and enterprise headquarters.",
    badge: "Mixed Use",
    badgeBg: "bg-purple-900/60",
    features: [
      { text: "High Visibility", iconName: "Eye" },
      { text: "Excellent Connectivity", iconName: "Layers" },
      { text: "Ideal for Retail & Office", iconName: "Store" }
    ],
    highlights: [
      { text: "High Visibility", iconName: "Eye" },
      { text: "Excellent Connectivity", iconName: "Layers" },
      { text: "Ideal for Retail & Office", iconName: "Store" }
    ],
    featured: true
  }
];

export const initialBlogs = [
  {
    title: "Project 2 – A New Benchmark in Modern Living",
    category: "Project Update",
    date: "15 Sep 2025",
    image: "/images/r1.png",
    description: "Discover how Project 2 is redefining urban lifestyles with world-class amenities, sustainable design, and a prime location.",
    content: "Project 2 represents the pinnacle of modern architectural achievement in the NCR region. Combining sustainable engineering with high-performance glass facades and intelligent home automation, this project introduces a holistic luxury lifestyle.",
    author: "IVIPL Research Team",
    views: 124
  },
  {
    title: "Project 1 – Luxury Living Redefined",
    category: "Project Update",
    date: "10 Sep 2025",
    image: "/images/r2.png",
    description: "Explore the elegance and comfort of Project 1, where modern architecture meets a vibrant community lifestyle.",
    content: "Nestled in an exclusive enclave, Project 1 features open sky-decks, Olympic-sized swimming facilities, and landscaped gardens that provide residents an oasis of serenity amid the bustling city.",
    author: "IVIPL Editorial Team",
    views: 98
  },
  {
    title: "Why Project 1 is the Perfect Choice for Your Family",
    category: "Lifestyle",
    date: "05 Sep 2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description: "From premium amenities to serene surroundings, learn why Project 1 offers the ideal balance of luxury and convenience.",
    content: "Choosing a home for your family requires balancing proximity to premier educational institutions, healthcare centers, and serene green environments. Here is why discerning families choose Project 1.",
    author: "Priya Sharma",
    views: 142
  },
  {
    title: "Real Estate Investment Opportunities in 2025",
    category: "Investment",
    date: "28 Aug 2025",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    description: "Explore the top reasons why real estate continues to be one of the most reliable and rewarding investment options.",
    content: "With infrastructural expansion, upcoming metro corridors, and international airport connectivity, Noida and Greater Noida are experiencing exponential appreciation in commercial and residential rental yields.",
    author: "Amitabh Verma, Chief Analyst",
    views: 310
  },
  {
    title: "Project 1 – Construction Milestone Achieved",
    category: "Project Update",
    date: "20 Aug 2025",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f43c3?auto=format&fit=crop&w=800&q=80",
    description: "We are excited to share the latest construction progress of Project 1. A step closer to delivering your dream home.",
    content: "Tower A & B structural framing has officially reached the 24th floor on schedule. Quality inspections and fire safety certifications have met all standard regulatory compliances.",
    author: "Site Engineering Head",
    views: 87
  },
  {
    title: "Building Communities, Not Just Homes",
    category: "Community",
    date: "12 Aug 2025",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    description: "At our core, we believe in creating communities that inspire, connect, and enhance everyday living.",
    content: "Modern developments are more than brick and mortar. They are spaces where families celebrate festivals, children play safely in vehicular-free podiums, and neighbors connect over shared passions.",
    author: "IVIPL Community Lead",
    views: 65
  }
];

export async function seedDatabase(force = false) {
  try {
    const existingProjects = await Project.find();
    if (force || existingProjects.length === 0) {
      console.log('🌱 Seeding projects data...');
      const allProjects = [...residentialProjects, ...commercialProjects];
      for (const p of allProjects) {
        await Project.create(p);
      }
      console.log(`✅ Seeded ${allProjects.length} projects.`);
    } else {
      console.log(`ℹ️ Projects already present (${existingProjects.length} records).`);
    }

    const existingBlogs = await Blog.find();
    if (force || existingBlogs.length === 0) {
      console.log('🌱 Seeding blogs data...');
      for (const b of initialBlogs) {
        await Blog.create(b);
      }
      console.log(`✅ Seeded ${initialBlogs.length} blogs.`);
    } else {
      console.log(`ℹ️ Blogs already present (${existingBlogs.length} records).`);
    }
  } catch (error) {
    console.error('Error during database seeding:', error.message);
  }
}

// If executed directly from CLI: node seed/seedData.js
if (import.meta.url === `file:///${process.argv[1].replace(/\\/g, '/')}`) {
  seedDatabase(true).then(() => {
    console.log('Seeding finished.');
    process.exit(0);
  });
}
