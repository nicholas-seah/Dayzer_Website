import type { APIRoute, MiddlewareNext } from 'astro';
import type { APIContext } from 'astro';

const SITE_PASSWORD = import.meta.env.SITE_PASSWORD || 'your_secure_password_here';

export async function onRequest(context: APIContext, next: MiddlewareNext) {
  const { request, cookies, redirect } = context;
  const url = new URL(request.url);

  // Skip password check for login page and API routes
  if (url.pathname === '/login' || url.pathname.startsWith('/api/')) {
    return next();
  }

  // Check if user is authenticated
  const authCookie = cookies.get('site-auth');
  
  if (!authCookie || authCookie.value !== 'authenticated') {
    // If it's a non-HTML request (like API), return 401
    const acceptHeader = request.headers.get('accept') || '';
    if (!acceptHeader.includes('text/html')) {
      return new Response('Unauthorized', { status: 401 });
    }
    
    // Redirect to login page for HTML requests
    return redirect('/login');
  }

  return next();
} 