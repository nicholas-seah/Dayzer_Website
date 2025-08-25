// Utility function to get the correct base URL for API calls
// This handles both direct access and proxy access scenarios
export const getApiBaseUrl = (): string => {
  // If accessed via proxy, use the original site URL
  if (typeof window !== 'undefined' && window.location.hostname === 'gridstoranalytics.com') {
    return 'https://gridstordayzer.netlify.app';
  }
  // Otherwise use the current origin
  return typeof window !== 'undefined' ? window.location.origin : '';
};

// Helper function to make API calls with the correct base URL
export const apiCall = async (endpoint: string, options?: RequestInit): Promise<Response> => {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}${endpoint}`;
  return fetch(url, options);
};
