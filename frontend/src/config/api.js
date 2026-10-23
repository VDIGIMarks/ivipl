/**
 * Centralized API configuration for IVIPL Real Estate
 * 
 * In Local Development:
 * - Uses 'http://localhost:5000' (or VITE_API_URL if set in .env)
 * 
 * In Production (Hostinger / Live):
 * - Uses import.meta.env.VITE_API_URL if provided (e.g. 'https://api.yourdomain.com' or live backend URL)
 * - If not provided, defaults to '' so requests go to '/api/...' on the same domain
 */
export const API_BASE_URL = 
  import.meta.env.VITE_API_URL || 
  (import.meta.env.DEV ? 'http://localhost:5000' : '');
