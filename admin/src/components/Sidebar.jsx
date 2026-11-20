import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Inbox,
  Building2,
  FileText,
  Mail,
  Users,
  LogOut,
  ExternalLink
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Enquiries', path: '/enquiries', icon: Inbox },
  { name: 'Projects', path: '/projects', icon: Building2 },
  { name: 'Blogs & Insights', path: '/blogs', icon: FileText },
  { name: 'Contact Messages', path: '/contacts', icon: Mail },
  { name: 'Subscribers', path: '/subscribers', icon: Users }
];

export default function Sidebar({ isOpen, onClose }) {
  const { logout, adminUser } = useAuth();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-64 bg-slate-900 border-r border-slate-800 transition-transform duration-200 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
              IV
            </div>
            <div>
              <h1 className="font-bold text-base text-white tracking-wide">IVIPL Admin</h1>
              <p className="text-xs text-slate-400">Control Center</p>
            </div>
          </div>
        </div>

        {/* Navigation items */}
        <nav className="flex-1 px-3 py-6 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                  }`
                }
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Live Site Link & Footer Profile */}
        <div className="p-3 border-t border-slate-800 space-y-2">
          <a
            href="http://localhost:5173"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-400 hover:text-indigo-400 hover:bg-slate-800/40 rounded-lg transition"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              View Live Website
            </span>
            <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">5173</span>
          </a>

          <div className="flex items-center justify-between px-3 py-2 bg-slate-800/50 rounded-lg">
            <div className="truncate">
              <p className="text-xs font-semibold text-slate-200 truncate">{adminUser?.name || 'Administrator'}</p>
              <p className="text-[11px] text-slate-400 truncate">{adminUser?.email || 'admin@ivipl.com'}</p>
            </div>
            <button
              onClick={logout}
              title="Logout"
              className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-md transition"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

