import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_PATH || 'http://localhost:5001',
  timeout: 10000,
});

// Helper for making requests that ensures the base URL is correct
export const getApiUrl = (endpoint: string) => {
  const baseUrl = import.meta.env.VITE_API_PATH || 'http://localhost:5001';
  // Ensure exactly one slash between baseURL and endpoint
  const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  // To solve the double /api issue: if baseUrl has /api and endpoint starts with /api
  if (cleanBaseUrl.endsWith('/api') && cleanEndpoint.startsWith('/api')) {
    return cleanBaseUrl + cleanEndpoint.slice(4);
  }
  
  return cleanBaseUrl + cleanEndpoint;
};

export default apiClient;
