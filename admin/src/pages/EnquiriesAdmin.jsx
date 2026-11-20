import React, { useState, useEffect } from 'react';
import {
  Search,
  Trash2,
  Phone,
  Mail,
  RefreshCw,
  FileSpreadsheet,
  FileDown
} from 'lucide-react';
import api from '../services/api';
import { exportToExcel, exportToPDF } from '../utils/exportUtils';

export default function EnquiriesAdmin() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');

  const loadEnquiries = async () => {
    setLoading(true);
    try {
      const res = await api.getEnquiries();
      setEnquiries(res.data || []);
    } catch (err) {
      console.error('Failed to load enquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEnquiries();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await api.updateEnquiryStatus(id, newStatus);
      setEnquiries((prev) =>
        prev.map((e) => ((e._id || e.id) === id ? { ...e, status: newStatus } : e))
      );
    } catch (err) {
      alert('Failed to update status: ' + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      await api.deleteEnquiry(id);
      setEnquiries((prev) => prev.filter((e) => (e._id || e.id) !== id));
    } catch (err) {
      alert('Failed to delete enquiry: ' + err.message);
    }
  };

  const filteredEnquiries = enquiries.filter((item) => {
    const matchesStatus =
      statusFilter === 'all' ||
      (item.status || '').toLowerCase() === statusFilter.toLowerCase();
    const query = search.toLowerCase();
    const matchesSearch =
      !search ||
      (item.name || '').toLowerCase().includes(query) ||
      (item.phone || '').toLowerCase().includes(query) ||
      (item.email || '').toLowerCase().includes(query) ||
      (item.project || '').toLowerCase().includes(query);

    return matchesStatus && matchesSearch;
  });

  // Export to Excel (.xlsx)
  const handleExportExcel = () => {
    const exportData = filteredEnquiries.map((e, index) => ({
      '#': index + 1,
      'Lead Name': e.name || '',
      'Phone Number': e.phone || '',
      'Email Address': e.email || '',
      'Project': e.project || 'General Portfolio',
      'Inquiry Type': e.inquiryType || 'Site Visit',
      'Preferred Time': e.preferredTime || 'Anytime',
      'Status': (e.status || 'new').toUpperCase(),
      'User Message': e.message || '',
      'WhatsApp Opt-in': e.whatsappOptIn !== false ? 'Yes' : 'No',
      'Source': e.source || 'Website',
      'Date Submitted': e.createdAt
        ? new Date(e.createdAt).toLocaleString('en-IN')
        : 'N/A'
    }));
    exportToExcel(exportData, 'IVIPL_Enquiries_Report', 'Enquiries');
  };

  // Export to PDF (.pdf)
  const handleExportPDF = () => {
    const headers = [
      '#',
      'Lead Name',
      'Phone',
      'Email',
      'Project',
      'Inquiry Type',
      'Status',
      'Date'
    ];
    const rows = filteredEnquiries.map((e, index) => [
      index + 1,
      e.name || '',
      e.phone || '',
      e.email || '',
      e.project || 'General Portfolio',
      e.inquiryType || 'Site Visit',
      (e.status || 'new').toUpperCase(),
      e.createdAt
        ? new Date(e.createdAt).toLocaleDateString('en-IN')
        : 'N/A'
    ]);
    exportToPDF({
      title: 'IVIPL — Customer Enquiries & Leads Report',
      subtitle: `Total Leads Exported: ${rows.length} • Filter Status: ${statusFilter.toUpperCase()}`,
      headers,
      rows,
      fileName: 'IVIPL_Enquiries_Report'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Project Enquiries & Leads</h1>
          <p className="text-sm text-slate-400 mt-1">
            Track user inquiries, schedule visits, and export customer data.
          </p>
        </div>

        {/* Action & Export buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Export to Excel */}
          <button
            onClick={handleExportExcel}
            disabled={filteredEnquiries.length === 0}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-semibold shadow-xs disabled:opacity-40 disabled:cursor-not-allowed transition"
            title="Download formatted Excel spreadsheet (.xlsx)"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span>Excel (.xlsx)</span>
          </button>

          {/* Export to PDF */}
          <button
            onClick={handleExportPDF}
            disabled={filteredEnquiries.length === 0}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-lg text-xs font-semibold shadow-xs disabled:opacity-40 disabled:cursor-not-allowed transition"
            title="Download printable PDF document (.pdf)"
          >
            <FileDown className="w-4 h-4 text-rose-400" />
            <span>PDF (.pdf)</span>
          </button>

          <button
            onClick={loadEnquiries}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 transition"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2 relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by lead name, phone, email, project..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full py-2.5 px-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-indigo-500"
          >
            <option value="all">All Statuses ({enquiries.length})</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="scheduled">Scheduled</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="py-12 text-center text-slate-400 text-sm">Loading enquiries...</div>
        ) : filteredEnquiries.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-sm">
            No enquiries found matching your search.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase bg-slate-800/60 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Lead</th>
                  <th className="py-3 px-4">Contact</th>
                  <th className="py-3 px-4">Project & Type</th>
                  <th className="py-3 px-4">Time Preference</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {filteredEnquiries.map((enq) => {
                  const id = enq._id || enq.id;
                  return (
                    <tr key={id} className="hover:bg-slate-800/30 transition">
                      <td className="py-3.5 px-4 font-semibold text-white">
                        <div>{enq.name}</div>
                        {enq.message && (
                          <div className="text-xs font-normal text-slate-400 mt-0.5 line-clamp-1 italic">
                            "{enq.message}"
                          </div>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-xs">
                        <div className="flex items-center gap-1.5 text-slate-300">
                          <Phone className="w-3.5 h-3.5 text-slate-500" />
                          <span>{enq.phone}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400 mt-0.5">
                          <Mail className="w-3.5 h-3.5 text-slate-500" />
                          <span>{enq.email}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-xs">
                        <span className="font-medium text-slate-200">{enq.project || 'General'}</span>
                        <div className="text-slate-400">{enq.inquiryType || 'Site Visit'}</div>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-slate-400">
                        {enq.preferredTime || 'Anytime'}
                      </td>
                      <td className="py-3.5 px-4">
                        <select
                          value={enq.status || 'new'}
                          onChange={(e) => handleStatusChange(id, e.target.value)}
                          className="text-xs bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none focus:border-indigo-500 cursor-pointer"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="scheduled">Scheduled</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => handleDelete(id)}
                          className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition"
                          title="Delete enquiry"
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
