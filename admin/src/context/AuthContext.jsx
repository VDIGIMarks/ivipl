import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [adminUser, setAdminUser] = useState(() => {
    try {
      const saved = localStorage.getItem('ivipl_admin_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      // Basic authentication validation (can be plugged into a backend JWT endpoint)
      if (
        (email === 'admin@ivipl.com' && password === 'admin123') ||
        (email === 'admin' && password === 'admin')
      ) {
        const user = {
          email,
          name: 'Super Admin',
          role: 'Administrator',
          token: `token_${Date.now()}`
        };
        localStorage.setItem('ivipl_admin_user', JSON.stringify(user));
        setAdminUser(user);
        return { success: true };
      }
      return { success: false, message: 'Invalid email or password. Default: admin@ivipl.com / admin123' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('ivipl_admin_user');
    setAdminUser(null);
  };

  return (
    <AuthContext.Provider value={{ adminUser, isAuthenticated: !!adminUser, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

