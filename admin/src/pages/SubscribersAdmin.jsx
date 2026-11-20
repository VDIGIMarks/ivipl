import React, { useState, useEffect } from 'react';
import { Users, Trash2, Search, Copy, Check, RefreshCw } from 'lucide-react';
import api from '../services/api';

export default function SubscribersAdmin() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState(false);

  const loadSubscribers = async () => {
    setLoading(true);
    try {
      const res = await api.getSubscribers();
      setSubscribers(res.data || []);
    } catch (err) {
      console.error('Failed to load subscribers:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubscribers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Remove this subscriber from the mailing list?')) return;
    try {
      await api.deleteSubscriber(id);
      setSubscribers((prev) => prev.filter((s) => (s._id || s.id) !== id));
    } catch (err) {
      alert('Failed to delete subscriber: ' + err.message);
    }
  };

  const handleCopyAllEmails = () => {
    const emails = subscribers.map((s) => s.email).join(', ');
    navigator.clipboard.writeText(emails);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filtered = subscribers.filter((s) =>
    (s.email || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Newsletter Subscribers</h1>
          <p className="text-sm text-slate-400 mt-1">
            Registered subscribers for market reports, launch alerts, and newsletter updates.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyAllEmails}
            disabled={subscribers.length === 0}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-xs font-semibold rounded-lg shadow-sm shadow-indigo-600/30 transition"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy All Emails'}</span>
          </button>
          <button
            onClick={loadSubscribers}
            disabled={loading}
            className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition"
            title="Refresh"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search subscriber by email address..."
          className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="py-12 text-center text-slate-400 text-sm">Loading subscribers...</div>
        ) : filtered.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-sm">No subscribers found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase bg-slate-800/60 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Email Address</th>
                  <th className="py-3 px-4">Subscribed Date</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {filtered.map((s, index) => {
                  const id = s._id || s.id;
                  const date = s.createdAt
                    ? new Date(s.createdAt).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })
                    : 'Recently';
                  return (
                    <tr key={id || index} className="hover:bg-slate-800/30 transition">
                      <td className="py-3.5 px-4 text-xs text-slate-500">{index + 1}</td>
                      <td className="py-3.5 px-4 font-medium text-white">{s.email}</td>
                      <td className="py-3.5 px-4 text-xs text-slate-400">{date}</td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => handleDelete(id)}
                          className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition"
                          title="Remove subscriber"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

