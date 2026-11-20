const API_BASE_URL = 
  import.meta.env.VITE_API_URL || 
  (import.meta.env.DEV ? 'http://localhost:5000/api' : 'https://apia.investvedya.com/api');

/**
 * Universal fetch wrapper for backend API calls with JSON handling and timeout
 */
async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };

  try {
    const res = await fetch(url, { ...options, headers });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.message || `Request failed with status ${res.status}`);
    }
    return data;
  } catch (err) {
    console.error(`API Error on [${options.method || 'GET'} ${url}]:`, err);
    throw err;
  }
}

export const api = {
  // Service health
  checkHealth: () => request('/health'),

  // Enquiries
  getEnquiries: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/enquiries${query ? `?${query}` : ''}`);
  },
  getEnquiryById: (id) => request(`/enquiries/${id}`),
  updateEnquiryStatus: (id, status, notes = '') =>
    request(`/enquiries/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status, notes })
    }),
  deleteEnquiry: (id) =>
    request(`/enquiries/${id}`, { method: 'DELETE' }),

  // Contacts
  getContacts: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/contacts${query ? `?${query}` : ''}`);
  },
  deleteContact: (id) =>
    request(`/contacts/${id}`, { method: 'DELETE' }),

  // Projects
  getProjects: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/projects${query ? `?${query}` : ''}`);
  },
  createProject: (projectData) =>
    request('/projects', {
      method: 'POST',
      body: JSON.stringify(projectData)
    }),
  updateProject: (id, projectData) =>
    request(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(projectData)
    }),
  deleteProject: (id) =>
    request(`/projects/${id}`, { method: 'DELETE' }),

  // Blogs
  getBlogs: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/blogs${query ? `?${query}` : ''}`);
  },
  createBlog: (blogData) =>
    request('/blogs', {
      method: 'POST',
      body: JSON.stringify(blogData)
    }),
  updateBlog: (id, blogData) =>
    request(`/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(blogData)
    }),
  deleteBlog: (id) =>
    request(`/blogs/${id}`, { method: 'DELETE' }),

  // Newsletter Subscribers
  getSubscribers: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/subscribers${query ? `?${query}` : ''}`);
  },
  deleteSubscriber: (id) =>
    request(`/subscribers/${id}`, { method: 'DELETE' })
};

export default api;

