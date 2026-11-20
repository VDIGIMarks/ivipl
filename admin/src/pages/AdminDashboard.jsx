import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Inbox,
  Building2,
  FileText,
  Mail,
  Users,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  RefreshCw
} from 'lucide-react';
import api from '../services/api';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    enquiriesCount: 0,
    newEnquiriesCount: 0,
    projectsCount: 0,
    blogsCount: 0,
    contactsCount: 0,
    subscribersCount: 0
  });
  const [recentEnquiries, setRecentEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [backendStatus, setBackendStatus] = useState('checking');

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      // Parallel requests for optimal speed
      const [enquiriesRes, projectsRes, blogsRes, contactsRes, subscribersRes] =
        await Promise.allSettled([
          api.getEnquiries(),
          api.getProjects(),
          api.getBlogs(),
          api.getContacts(),
          api.getSubscribers()
        ]);

      const enquiries = enquiriesRes.status === 'fulfilled' ? enquiriesRes.value.data || [] : [];
      const projects = projectsRes.status === 'fulfilled' ? projectsRes.value.data || [] : [];
      const blogs = blogsRes.status === 'fulfilled' ? blogsRes.value.data || [] : [];
      const contacts = contactsRes.status === 'fulfilled' ? contactsRes.value.data || [] : [];
      const subscribers = subscribersRes.status === 'fulfilled' ? subscribersRes.value.data || [] : [];

      const newEnq = enquiries.filter(
        (e) => (e.status || '').toLowerCase() === 'new'
      ).length;

      setStats({
        enquiriesCount: enquiries.length,
        newEnquiriesCount: newEnq,
        projectsCount: projects.length,
        blogsCount: blogs.length,
        contactsCount: contacts.length,
        subscribersCount: subscribers.length
      });

      setRecentEnquiries(enquiries.slice(0, 5));
      setBackendStatus('connected');
    } catch (err) {
      console.error('Failed to load dashboard statistics:', err);
      setBackendStatus('offline');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const statCards = [
    {
      title: 'Total Enquiries',
      value: stats.enquiriesCount,
      badge: `${stats.newEnquiriesCount} New`,
      icon: Inbox,
      color: 'from-blue-600 to-indigo-600',
      link: '/enquiries'
    },
    {
      title: 'Active Projects',
      value: stats.projectsCount,
      badge: 'Portfolio',
      icon: Building2,
      color: 'from-indigo-600 to-purple-600',
      link: '/projects'
    },
    {
      title: 'Blogs & Insights',
      value: stats.blogsCount,
      badge: 'Articles',
      icon: FileText,
      color: 'from-amber-600 to-orange-600',
      link: '/blogs'
    },
    {
      title: 'Contact Messages',
      value: stats.contactsCount,
      badge: 'Queries',
      icon: Mail,
      color: 'from-emerald-600 to-teal-600',
      link: '/contacts'
    },
    {
      title: 'Newsletter Subscribers',
      value: stats.subscribersCount,
      badge: 'Subscribers',
      icon: Users,
      color: 'from-pink-600 to-rose-600',
      link: '/subscribers'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Overview & Analytics</h1>
          <p className="text-sm text-slate-400 mt-1">
            Real-time status of real estate listings, user queries and incoming leads.
          </p>
        </div>
        <button
          onClick={fetchDashboardData}
          disabled={loading}
          className="inline-flex items-center gap-2 px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 transition"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh Data</span>
        </button>
      </div>

      {backendStatus === 'offline' && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span>
            Cannot connect to the backend server at <strong>http://localhost:5000</strong>. Make sure backend is started with <code className="bg-slate-800 px-1 py-0.5 rounded">npm run dev</code> inside <code className="bg-slate-800 px-1 py-0.5 rounded">backend/</code>.
          </span>
        </div>
      )}

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {statCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <Link
              key={idx}
              to={card.link}
              className="group p-5 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl transition duration-200 hover:shadow-xl hover:shadow-indigo-500/5 relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">{card.title}</span>
                <span className="p-2 rounded-xl bg-slate-800 text-indigo-400 group-hover:scale-110 transition">
                  <Icon className="w-4 h-4" />
                </span>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <div className="text-2xl font-bold text-white">
                  {loading ? '...' : card.value}
                </div>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  {card.badge}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Recent Enquiries Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-base font-semibold text-white">Recent Enquiries</h2>
            <p className="text-xs text-slate-400 mt-0.5">Latest project visit & brochure requests</p>
          </div>
          <Link
            to="/enquiries"
            className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300"
          >
            <span>View All</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {recentEnquiries.length === 0 ? (
          <div className="py-8 text-center text-sm text-slate-500">
            {loading ? 'Fetching enquiries...' : 'No enquiries found yet.'}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase bg-slate-800/40 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4 font-semibold">Lead Name</th>
                  <th className="py-3 px-4 font-semibold">Project</th>
                  <th className="py-3 px-4 font-semibold">Type</th>
                  <th className="py-3 px-4 font-semibold">Phone</th>
                  <th className="py-3 px-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {recentEnquiries.map((enq) => (
                  <tr key={enq._id || enq.id} className="hover:bg-slate-800/30 transition">
                    <td className="py-3 px-4 font-medium text-white">{enq.name}</td>
                    <td className="py-3 px-4 text-slate-300">{enq.project || 'General'}</td>
                    <td className="py-3 px-4 text-slate-400 text-xs">{enq.inquiryType || 'Site Visit'}</td>
                    <td className="py-3 px-4 text-slate-400 text-xs">{enq.phone}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                          enq.status === 'new'
                            ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                            : enq.status === 'contacted'
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            : enq.status === 'scheduled'
                            ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        }`}
                      >
                        {enq.status || 'new'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

