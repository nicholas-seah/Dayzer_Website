# GridStor Analytics Main Site - Market Ops Integration Instructions

## 🎯 Overview
The "Dayzer" sub-site has been renamed to **"Market Ops"** and completely restructured with a new hierarchical URL system. This requires updates to the main GridStor Analytics site to properly integrate the renamed sub-site.

## 📋 Required Changes Summary

### **CRITICAL CHANGES:**
1. **URL Path Change:** `/dayzer/*` → `/market-ops/*`
2. **Site Name Change:** "Dayzer" → "Market Ops"
3. **Redirect Configuration:** Update Netlify redirects
4. **Navigation Updates:** Update main navigation component
5. **Content Updates:** Update homepage buttons/links

---

## 🔧 Implementation Instructions

### **1. UPDATE NETLIFY CONFIGURATION**

**File to modify:** `netlify.toml` (in main site root)

**Action:** Replace the existing Dayzer redirect with the new Market Ops redirect:

```toml
# REMOVE this old redirect:
# [[redirects]]
#   from = "/dayzer/*"
#   to = "https://gridstordayzer.netlify.app/dayzer/:splat"
#   status = 200

# ADD this new redirect:
[[redirects]]
  from = "/market-ops/*"
  to = "https://gridstordayzer.netlify.app/market-ops/:splat"
  status = 301
  force = true
```

**Key Points:**
- **Path changed:** `/dayzer/*` → `/market-ops/*`
- **Status changed:** `200` (proxy) → `301` (redirect) for better compatibility
- **Target URL includes path:** The sub-site now expects `/market-ops/` in the URL
- **Sub-site domain remains the same:** `https://gridstordayzer.netlify.app`

### **2. UPDATE MAIN NAVIGATION COMPONENT**

**File to modify:** `src/components/MainNav.astro` (or wherever your main nav is located)

**Action:** Update the navigation items array:

```astro
// FIND this section and UPDATE:
const navItems = [
  { href: 'https://gridstoranalytics.com/', label: 'Home', active: false },
  { href: 'https://gridstoranalytics.com/curve-viewer', label: 'Curve Viewer', active: currentPath.startsWith('/curve-viewer') },
  
  // OLD:
  // { href: 'https://gridstoranalytics.com/dayzer', label: 'Dayzer', active: currentPath.startsWith('/dayzer') },
  
  // NEW:
  { href: 'https://gridstoranalytics.com/market-ops', label: 'Market Ops', active: currentPath.startsWith('/market-ops') },
  
  { href: 'https://gridstoranalytics.com/about', label: 'About', active: currentPath.startsWith('/about') },
  // ... other nav items
];
```

### **3. UPDATE HOMEPAGE CONTENT**

**Files to check:** 
- `src/pages/index.astro`
- `src/components/Hero.astro` 
- Any component with buttons/links to the sub-site

**Action:** Find and update any references to Dayzer:

```html
<!-- FIND instances like this: -->
<!-- OLD: -->
<a href="/dayzer" class="btn btn-primary">Launch Dayzer</a>
<a href="/dayzer" class="...">Access Dayzer Dashboard</a>

<!-- REPLACE with: -->
<a href="/market-ops" class="btn btn-primary">Launch Market Ops</a>
<a href="/market-ops" class="...">Access Market Ops Dashboard</a>
```

**Text content updates:**
```html
<!-- OLD: -->
<h2>Dayzer Analytics</h2>
<p>Access the Dayzer dashboard for market analysis...</p>

<!-- NEW: -->
<h2>Market Ops Analytics</h2>
<p>Access the Market Ops dashboard for market analysis...</p>
```

### **4. UPDATE AUTHENTICATION (If Applicable)**

**File to check:** `src/middleware.ts` or authentication configuration

**Action:** If you have authentication that excludes certain paths:

```javascript
// FIND authentication exclusions:
const publicPaths = [
  '/api/*',
  '/login',
  
  // OLD:
  // '/dayzer/*',
  
  // NEW:
  '/market-ops/*',
  
  // ... other public paths
];
```

### **5. UPDATE METADATA AND SEO**

**Files to check:** 
- `src/layouts/Layout.astro`
- `src/pages/index.astro`
- Any sitemap generation

**Action:** Update any hardcoded references:

```html
<!-- Update meta tags if they reference the sub-site -->
<meta property="og:description" content="GridStor Analytics including Market Ops dashboard" />
<link rel="canonical" href="https://gridstoranalytics.com/market-ops" />
```

---

## 🧪 Testing Checklist

After implementing the changes, test these URLs:

### **✅ Primary Tests:**
- [ ] `https://gridstoranalytics.com/market-ops` → Should redirect to Market Ops homepage
- [ ] `https://gridstoranalytics.com/market-ops/likeday` → Should load Likeday page
- [ ] `https://gridstoranalytics.com/market-ops/ml` → Should load ML page
- [ ] `https://gridstoranalytics.com/market-ops/goop` → Should load GOOP page

### **✅ PCM Category Tests:**
- [ ] `https://gridstoranalytics.com/market-ops/pcm/goleta` → Should load Goleta page
- [ ] `https://gridstoranalytics.com/market-ops/pcm/caiso-forecast` → Should load CAISO Forecast page

### **✅ Navigation Tests:**
- [ ] Main nav shows "Market Ops" instead of "Dayzer"
- [ ] Clicking "Market Ops" in nav goes to correct URL
- [ ] Active state highlights correctly when on Market Ops pages

### **✅ Homepage Tests:**
- [ ] Homepage buttons/links point to `/market-ops` not `/dayzer`
- [ ] Button text says "Market Ops" not "Dayzer"
- [ ] All styling and functionality works

### **✅ Legacy URL Tests:**
- [ ] `https://gridstoranalytics.com/dayzer` → Should return 404 (old URL no longer works)
- [ ] Verify no broken links remain on the site

---

## 🚨 Important Notes

### **Deployment Order:**
1. **Market Ops site is already deployed** with new structure
2. **Deploy main site changes** after implementing above updates
3. **Test immediately** after deployment

### **URL Structure Info:**
The Market Ops sub-site now has this internal structure:
```
/market-ops/                     (homepage)
/market-ops/likeday             (direct page)
/market-ops/ml                  (direct page)  
/market-ops/goop                (direct page)
/market-ops/pcm/goleta          (PCM category - Goleta)
/market-ops/pcm/caiso-forecast  (PCM category - CAISO Forecast)
```

### **Technical Details:**
- **Sub-site domain unchanged:** `https://gridstordayzer.netlify.app`
- **Main site should use redirects (301)** not proxying (200) for better compatibility
- **Market Ops site handles its own internal navigation** with dropdown categories

---

## 🔍 Troubleshooting

### **If redirects don't work:**
1. Check Netlify deployment logs for redirect syntax errors
2. Verify the Market Ops site is deployed and accessible at `https://gridstordayzer.netlify.app/market-ops`
3. Test direct access to sub-site first

### **If styling breaks:**
1. Ensure using `status = 301` (redirect) not `200` (proxy)
2. Clear browser cache and test in incognito mode

### **If navigation doesn't update:**
1. Verify component file location and syntax
2. Check if navigation is cached or using static generation

---

## 📞 Support

If issues arise during implementation:
1. **Test direct sub-site access:** `https://gridstordayzer.netlify.app/market-ops`
2. **Check browser developer tools** for redirect chains and errors
3. **Verify Netlify deployment** completed successfully

---

## ✅ Quick Implementation Summary

**For a quick implementation, focus on these 3 critical files:**

1. **`netlify.toml`:** Update redirect from `/dayzer/*` to `/market-ops/*`
2. **Main navigation component:** Change "Dayzer" to "Market Ops" and update href
3. **Homepage:** Update any buttons/links from `/dayzer` to `/market-ops`

The Market Ops sub-site is fully functional and ready - these main site changes will complete the integration! 