#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const subsiteName = process.argv[2];

if (!subsiteName) {
  console.error('Usage: node setup-subsite.js <subsite-name>');
  console.error('Example: node setup-subsite.js forecasts');
  process.exit(1);
}

const netlifyConfig = `[build]
  command = "npm install && npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"

[dev]
  command = "npm run dev"
  port = 4321

# Password protection for sub-sites
[context.production]
  [context.production.environment]
    SITE_PASSWORD = "your_secure_password_here"

# Headers to allow embedding in main site
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    Content-Security-Policy = "frame-ancestors 'self' https://gridstoranalytics.com https://*.gridstoranalytics.com"

# Catch-all redirect for SPA routing
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
`;

const middlewareCode = `import type { APIRoute, MiddlewareNext } from 'astro';
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
`;

const readmeContent = `# ${subsiteName.charAt(0).toUpperCase() + subsiteName.slice(1)} Sub-site

This is a sub-site for the GridStor Analytics multi-site architecture.

## Deployment

1. Connect this repository to Netlify
2. Set the site name to: \`${subsiteName}--gridstoranalytics\`
3. Add environment variable: \`SITE_PASSWORD=your_secure_password_here\`
4. Deploy!

## Access

After deployment, the site will be accessible at:
- Direct: \`https://${subsiteName}--gridstoranalytics.netlify.app\`
- Via main site: \`https://gridstoranalytics.com/${subsiteName}\`

## Development

\`\`\`bash
npm install
npm run dev
\`\`\`

The site will be available at \`http://localhost:4321\`
`;

// Create the files
const targetDir = `./${subsiteName}-subsite-config`;

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

fs.writeFileSync(path.join(targetDir, 'netlify.toml'), netlifyConfig);
fs.writeFileSync(path.join(targetDir, 'middleware.ts'), middlewareCode);
fs.writeFileSync(path.join(targetDir, 'README.md'), readmeContent);

console.log(`✅ Sub-site configuration created in: ${targetDir}`);
console.log('');
console.log('Next steps:');
console.log(`1. Copy these files to your ${subsiteName} repository:`);
console.log(`   - netlify.toml (to root)`);
console.log(`   - middleware.ts (to src/)`);
console.log('');
console.log('2. Add this redirect to your main site netlify.toml:');
console.log('');
console.log(`[[redirects]]
  from = "/${subsiteName}/*"
  to = "https://${subsiteName}--gridstoranalytics.netlify.app/:splat"
  status = 200
  force = true
  headers = {X-Frame-Options = "SAMEORIGIN"}`);
console.log('');
console.log('3. Deploy the sub-site to Netlify with the name:', `${subsiteName}--gridstoranalytics`);
console.log('4. Add the SITE_PASSWORD environment variable');
console.log('5. Test the setup!'); 