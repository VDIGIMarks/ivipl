import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  Trash2,
  Search,
  RefreshCw,
  FileSpreadsheet,
  FileDown
} from 'lucide-react';
import api from '../services/api';
import { exportToExcel, exportToPDF } from '../utils/exportUtils';

export default function ContactsAdmin() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const loadContacts = async () => {
    setLoading(true);
    try {
      const res = await api.getContacts();
      setContacts(res.data || []);
    } catch (err) {
      console.error('Failed to load contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this contact message?')) return;
    try {
      await api.deleteContact(id);
      setContacts((prev) => prev.filter((c) => (c._id || c.id) !== id));
    } catch (err) {
      alert('Failed to delete message: ' + err.message);
    }
  };

  const filteredContacts = contacts.filter((c) => {
    const q = search.toLowerCase();
    return (
      !search ||
      (c.name || '').toLowerCase().includes(q) ||
      (c.email || '').toLowerCase().includes(q) ||
      (c.phone || '').toLowerCase().includes(q)
    );
  });

  // Export to Excel (.xlsx)
  const handleExportExcel = () => {
    const exportData = filteredContacts.map((c, index) => ({
      '#': index + 1,
      'Sender Name': c.name || '',
      'Email Address': c.email || '',
      'Phone Number': c.phone || 'N/A',
      'Property Type': c.propertyType ? c.propertyType.replace('_', ' ') : 'General',
      'Message': c.message || '',
      'Date Submitted': c.createdAt
        ? new Date(c.createdAt).toLocaleString('en-IN')
        : 'N/A'
    }));
    exportToExcel(exportData, 'IVIPL_Contact_Messages', 'Contacts');
  };

  // Export to PDF (.pdf)
  const handleExportPDF = () => {
    const headers = [
      '#',
      'Sender Name',
      'Email Address',
      'Phone Number',
      'Property Interest',
      'Submitted Date'
    ];
    const rows = filteredContacts.map((c, index) => [
      index + 1,
      c.name || '',
      c.email || '',
      c.phone || 'N/A',
      c.propertyType ? c.propertyType.replace('_', ' ') : 'General',
      c.createdAt
        ? new Date(c.createdAt).toLocaleDateString('en-IN')
        : 'N/A'
    ]);
    exportToPDF({
      title: 'IVIPL — Website Contact Messages Report',
      subtitle: `Total Submissions Exported: ${rows.length}`,
      headers,
      rows,
      fileName: 'IVIPL_Contact_Messages'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Contact Messages</h1>
          <p className="text-sm text-slate-400 mt-1">
            Submissions received through the public Contact Us page.
          </p>
        </div>

        {/* Action & Export buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Export to Excel */}
          <button
            onClick={handleExportExcel}
            disabled={filteredContacts.length === 0}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-semibold shadow-xs disabled:opacity-40 disabled:cursor-not-allowed transition"
            title="Download formatted Excel spreadsheet (.xlsx)"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span>Excel (.xlsx)</span>
          </button>

          {/* Export to PDF */}
          <button
            onClick={handleExportPDF}
            disabled={filteredContacts.length === 0}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-lg text-xs font-semibold shadow-xs disabled:opacity-40 disabled:cursor-not-allowed transition"
            title="Download printable PDF document (.pdf)"
          >
            <FileDown className="w-4 h-4 text-rose-400" />
            <span>PDF (.pdf)</span>
          </button>

          <button
            onClick={loadContacts}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg border border-slate-700 transition"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by sender name, email, or phone..."
          className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        {loading ? (
          <div className="py-12 text-center text-slate-400 text-sm">Loading messages...</div>
        ) : filteredContacts.length === 0 ? (
          <div className="py-12 text-center text-slate-400 text-sm">No contact inquiries found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase bg-slate-800/60 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Sender</th>
                  <th className="py-3 px-4">Contact Info</th>
                  <th className="py-3 px-4">Property Interest</th>
                  <th className="py-3 px-4">Message</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {filteredContacts.map((c) => {
                  const id = c._id || c.id;
                  return (
                    <tr key={id} className="hover:bg-slate-800/30 transition">
                      <td className="py-3.5 px-4 font-semibold text-white">{c.name}</td>
                      <td className="py-3.5 px-4 text-xs">
                        <div className="flex items-center gap-1.5 text-slate-300">
                          <Phone className="w-3.5 h-3.5 text-slate-500" />
                          <span>{c.phone || 'N/A'}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400 mt-0.5">
                          <Mail className="w-3.5 h-3.5 text-slate-500" />
                          <span>{c.email}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-xs">
                        <span className="capitalize px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {c.propertyType ? c.propertyType.replace('_', ' ') : 'General'}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-slate-400 max-w-sm">
                        <p className="line-clamp-2">{c.message || 'No additional message provided.'}</p>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => handleDelete(id)}
                          className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition"
                          title="Delete message"
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
