import type { APIRoute } from 'astro';

// Logout API removed - no password protection needed
// This file can be deleted

export const POST: APIRoute = async ({ redirect }) => {
  // No authentication system, just redirect to home
  return redirect('/');
}; 