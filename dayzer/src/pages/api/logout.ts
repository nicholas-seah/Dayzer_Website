import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ cookies, redirect }) => {
  // Clear the authentication cookie
  cookies.delete('site-auth', {
    path: '/',
  });
  
  // Redirect to login page
  return redirect('/login');
}; 