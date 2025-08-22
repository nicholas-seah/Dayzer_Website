# GST-Forecast Website - Sub-Site Configuration Instructions

## 🎯 Overview
Configure the GST-Forecast website as a sub-site under the main GridStor Analytics domain. This will allow it to be accessed at `https://gridstoranalytics.com/forecasts` while being deployed separately on Netlify.

## 📋 Required Configuration Files

You need to configure two critical files to integrate this site as a sub-site:

---

## 🔧 1. ASTRO CONFIGURATION

**File to modify:** `astro.config.mjs` (in project root)

**Action:** Replace the entire file content with this configuration:

```javascript
// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://gstforecast.netlify.app', // Replace with your actual Netlify domain
  integrations: [react(), tailwind()],
  output: 'server',
  adapter: netlify(),
  build: {
    assets: '_astro'
  },
  vite: {
    build: {
      rollupOptions: {
        external: ['@prisma/client']
      }
    },
    define: {
      // Ensure assets load from correct domain
      'import.meta.env.ASSET_URL': JSON.stringify('https://gstforecast.netlify.app') // Replace with your actual domain
    }
  }
});
```

**Key Configuration Points:**
- **`site`**: Set to your Netlify sub-site domain (e.g., `https://gstforecast.netlify.app`)
- **`output: 'server'`**: Enables server-side rendering for dynamic content
- **`adapter: netlify()`**: Optimizes for Netlify deployment
- **No `base` configuration**: This allows the site to work both directly and via proxy

---

## 🔧 2. NETLIFY CONFIGURATION

**File to create/modify:** `netlify.toml` (in project root)

**Action:** Create or replace the entire file with this configuration:

```toml
[build]
  command = "npm install && npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"

[dev]
  command = "npm run dev"
  port = 4321
  targetPort = 4321

[functions]
  external_node_modules = ["@prisma/client", "@astrojs/react"]
  node_bundler = "esbuild"

# Headers to allow embedding in main GridStor Analytics site
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    Content-Security-Policy = "frame-ancestors 'self' https://gridstoranalytics.com https://*.gridstoranalytics.com"

# No password protection - remove any authentication middleware
# No conflicting redirects - let main site handle routing
```

**Key Configuration Points:**
- **Build settings**: Standard Astro build with Node 22
- **Headers**: Allow embedding in the main GridStor Analytics site
- **No redirects**: Prevents conflicts with main site proxy/redirect
- **No authentication**: Sub-site accessed through main site auth

---

## 🚀 3. URL STRUCTURE PLANNING

### **Main Site Integration:**
The main GridStor Analytics site will need to add this redirect:

```toml
# In main site's netlify.toml
[[redirects]]
  from = "/forecasts/*"
  to = "https://gstforecast.netlify.app/forecasts/:splat"
  status = 301
  force = true
```

### **Your Sub-Site URLs:**
```
/                                    (redirects to /forecasts)
/forecasts/                         (main homepage)
/forecasts/your-page1              (your content pages)
/forecasts/your-page2              (your content pages)
/forecasts/category/sub-page       (if using hierarchical structure)
```

---

## 📁 4. RECOMMENDED FILE STRUCTURE

### **Create Hierarchical URLs (Optional but Recommended):**

If you want to follow the same pattern as Market Ops, restructure your pages:

```
src/pages/
├── index.astro                 (redirects to /forecasts)
├── api/                       (API routes)
└── forecasts/                 (main section)
    ├── index.astro           (homepage: /forecasts)
    ├── page1.astro          (direct: /forecasts/page1)
    ├── page2.astro          (direct: /forecasts/page2)
    └── category/            (category - if needed)
        ├── sub-page1.astro  (/forecasts/category/sub-page1)
        └── sub-page2.astro  (/forecasts/category/sub-page2)
```

### **Root Redirect Page:**

**File:** `src/pages/index.astro`

```astro
---
// Root page redirects to /forecasts
export const prerender = false;

// Redirect to the forecasts homepage
return Astro.redirect('/forecasts');
---
```

---

## 🎨 5. NAVIGATION COMPONENT

### **Main Navigation Integration:**

**File:** `src/components/MainNav.astro` (create if needed)

```astro
---
const currentPath = Astro.url.pathname;

const navItems = [
  { href: 'https://gridstoranalytics.com/', label: 'Home', active: false },
  { href: 'https://gridstoranalytics.com/curve-viewer', label: 'Curve Viewer', active: currentPath.startsWith('/curve-viewer') },
  { href: 'https://gridstoranalytics.com/market-ops', label: 'Market Ops', active: currentPath.startsWith('/market-ops') },
  { href: 'https://gridstoranalytics.com/forecasts', label: 'Forecasts', active: true }, // This is the current site
  { href: 'https://gridstoranalytics.com/about', label: 'About', active: currentPath.startsWith('/about') },
];
---

<nav class="bg-white border-b border-gray-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <a href="https://gridstoranalytics.com/" class="text-xl font-bold text-gray-900">GridStor Analytics</a>
        </div>
        
        <!-- Navigation Links -->
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          {navItems.map(item => (
            <a
              href={item.href}
              class={`${item.active 
                ? 'border-indigo-500 text-gray-900' 
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
</nav>
```

### **Internal Sub-Site Navigation:**

**File:** `src/components/ForecastNav.tsx` (create for internal navigation)

```tsx
import React, { useState, useEffect } from 'react';

const ForecastNav: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handlePopstate = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopstate);
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 h-16">
      <div className="max-w-7xl mx-auto h-16 flex items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <a href="/forecasts" className="flex items-center">
            <img src="/logo.svg" alt="Forecasts" className="h-8 w-auto cursor-pointer mr-2" />
            <span className="text-xl font-bold text-gray-900 cursor-pointer">Forecasts</span>
          </a>
        </div>
        
        {/* Navigation - Add your internal pages here */}
        <div className="hidden sm:flex sm:ml-6 flex h-full space-x-8">
          <a
            href="/forecasts/page1"
            className={`h-full flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-150 border-b-2 ${
              currentPath === '/forecasts/page1'
                ? 'border-indigo-500 text-gray-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Page 1
          </a>
          
          <a
            href="/forecasts/page2"
            className={`h-full flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-150 border-b-2 ${
              currentPath === '/forecasts/page2'
                ? 'border-indigo-500 text-gray-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Page 2
          </a>
        </div>
      </div>
    </nav>
  );
};

export default ForecastNav;
```

---

## 🧪 6. TESTING CHECKLIST

### **Direct Site Testing:**
- [ ] Deploy to Netlify and get your domain (e.g., `https://gstforecast.netlify.app`)
- [ ] Test direct access: `https://gstforecast.netlify.app/forecasts`
- [ ] Verify all internal navigation works
- [ ] Check that styling loads correctly
- [ ] Test API endpoints if you have any

### **Integration Testing (After Main Site Updates):**
- [ ] Test via main site: `https://gridstoranalytics.com/forecasts`
- [ ] Verify navigation between main site and forecasts works
- [ ] Check that styling loads when accessed via proxy
- [ ] Test all internal forecasts pages

---

## 🚨 CRITICAL CONFIGURATION NOTES

### **Domain Configuration:**
1. **Replace `https://gstforecast.netlify.app`** with your actual Netlify domain
2. **Update site name "Forecasts"** to match your preferred branding
3. **Customize navigation items** based on your actual pages

### **Dependencies:**
Make sure your `package.json` includes:
```json
{
  "dependencies": {
    "@astrojs/netlify": "^latest",
    "@astrojs/react": "^latest",
    "@astrojs/tailwind": "^latest",
    "astro": "^latest"
  }
}
```

### **Environment Variables (if needed):**
If you need environment variables, add them in Netlify:
```
NODE_VERSION=22
SITE_NAME=Forecasts
```

---

## 📞 NEXT STEPS

### **After Configuration:**
1. **Deploy to Netlify** and note your domain
2. **Test direct access** to ensure everything works
3. **Share your Netlify domain** with main site team
4. **Main site team adds redirect** to their `netlify.toml`
5. **Test integration** via main site

### **For Main Site Team:**
The main GridStor Analytics site will need to add:
```toml
[[redirects]]
  from = "/forecasts/*"
  to = "https://YOUR_NETLIFY_DOMAIN/forecasts/:splat"
  status = 301
  force = true
```

And update their navigation to include:
```astro
{ href: 'https://gridstoranalytics.com/forecasts', label: 'Forecasts', active: currentPath.startsWith('/forecasts') }
```

---

## ✅ QUICK SETUP SUMMARY

**Essential files to configure:**
1. **`astro.config.mjs`** - Set site domain, enable server output, Netlify adapter
2. **`netlify.toml`** - Build config, headers for embedding, no conflicting redirects  
3. **`src/pages/index.astro`** - Root redirect to `/forecasts`
4. **Navigation components** - Integrate with main site navigation

Your forecasts site will be fully integrated into the GridStor Analytics ecosystem! 🚀 