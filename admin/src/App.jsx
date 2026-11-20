import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import EnquiriesAdmin from './pages/EnquiriesAdmin';
import ProjectsAdmin from './pages/ProjectsAdmin';
import BlogsAdmin from './pages/BlogsAdmin';
import ContactsAdmin from './pages/ContactsAdmin';
import SubscribersAdmin from './pages/SubscribersAdmin';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="enquiries" element={<EnquiriesAdmin />} />
        <Route path="projects" element={<ProjectsAdmin />} />
        <Route path="blogs" element={<BlogsAdmin />} />
        <Route path="contacts" element={<ContactsAdmin />} />
        <Route path="subscribers" element={<SubscribersAdmin />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

