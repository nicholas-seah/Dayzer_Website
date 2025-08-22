# URL Restructuring Guide: Hierarchical Navigation with Dropdown Categories

## 📋 Overview

This guide explains how to restructure a website's URL hierarchy to create logical groupings with dropdown navigation, where category pages don't have content but sub-pages are organized under them.

## 🎯 Goal Structure

Transform a flat URL structure into a hierarchical one:

**Before (Flat):**
```
/
/page1
/page2  
/page3
/page4
```

**After (Hierarchical):**
```
/
/main-section                    <- Main homepage
/main-section/direct-page1       <- Direct pages
/main-section/direct-page2       
/main-section/category/sub-page1 <- Category sub-pages
/main-section/category/sub-page2
/main-section/category/          <- 404 (no content)
```

## 🛠️ Implementation Steps

### Step 1: Plan Your Hierarchy

1. **Identify your main section name** (e.g., "market-ops", "dashboard", "tools")
2. **Categorize your pages:**
   - **Direct pages**: Standalone pages at the main level
   - **Category pages**: Pages that should be grouped under a dropdown
3. **Choose category names** (e.g., "pcm", "analytics", "reports")

### Step 2: Create Directory Structure

```bash
# Create main section directory
mkdir -p src/pages/[main-section]

# Create category subdirectories  
mkdir -p src/pages/[main-section]/[category-name]

# Example:
mkdir -p src/pages/market-ops
mkdir -p src/pages/market-ops/pcm
```

### Step 3: Move and Reorganize Files

```bash
# Move existing pages to new structure
mv src/pages/old-page.astro src/pages/[main-section]/new-name.astro

# Move category pages to subdirectories
mv src/pages/category-page1.astro src/pages/[main-section]/[category]/page1.astro
mv src/pages/category-page2.astro src/pages/[main-section]/[category]/page2.astro

# Example:
mv src/pages/goleta.astro src/pages/market-ops/pcm/goleta.astro
mv src/pages/caiso-forecast.astro src/pages/market-ops/pcm/caiso-forecast.astro
```

### Step 4: Fix Import Paths

When you move files deeper into directories, update their import paths:

```astro
<!-- Before (when file was at src/pages/page.astro) -->
import Layout from '../layouts/Layout.astro';
import Component from '../components/Component';

<!-- After (when file is at src/pages/main-section/category/page.astro) -->
import Layout from '../../../layouts/Layout.astro';
import Component from '../../../components/Component';
```

**Rule:** Add one more `../` for each directory level deeper.

### Step 5: Update Root Redirect

```astro
<!-- src/pages/index.astro -->
---
export const prerender = false;
return Astro.redirect('/[main-section]');
---
```

### Step 6: Update Navigation Component

```tsx
// Update dropdown items with new hierarchy
const dropdownItems = [
  { name: 'Page 1', href: '/main-section/category/page1' },
  { name: 'Page 2', href: '/main-section/category/page2' },
];

// Update active state detection
const isCategoryActive = currentPath === '/main-section/category/page1' || 
                        currentPath === '/main-section/category/page2';

// Update direct page links
const isDirectPageActive = currentPath === '/main-section/direct-page';
```

### Step 7: Update All Internal Links

Search and replace all internal links throughout your codebase:
- `/old-page` → `/main-section/new-page`
- `/category-page` → `/main-section/category/page`

## 📁 Example Implementation

### Directory Structure
```
src/pages/
├── index.astro                    (redirects to /market-ops)
├── login.astro                    (utility page)
├── api/                          (API routes)
└── market-ops/                   (main section)
    ├── index.astro               (homepage: /market-ops)
    ├── likeday.astro            (direct: /market-ops/likeday)
    ├── ml.astro                 (direct: /market-ops/ml)
    ├── goop.astro               (direct: /market-ops/goop)
    └── pcm/                     (category)
        ├── goleta.astro         (/market-ops/pcm/goleta)
        └── caiso-forecast.astro (/market-ops/pcm/caiso-forecast)
```

### Navigation Component Example
```tsx
const dropdownItems = [
  { name: 'CAISO Fundamentals', href: '/market-ops/pcm/caiso-forecast' },
  { name: 'Goleta', href: '/market-ops/pcm/goleta' },
];

const isPCMActive = currentPath.startsWith('/market-ops/pcm/');
const isLikedayActive = currentPath === '/market-ops/likeday';
const isMLActive = currentPath === '/market-ops/ml';
const isGOOPActive = currentPath === '/market-ops/goop';

// Navbar structure
<nav>
  <a href="/market-ops">Main Title</a>
  <a href="/market-ops/likeday">Direct Page</a>
  <dropdown active={isPCMActive}>
    PCM ▼
    <dropdown-menu>
      {dropdownItems.map(item => <a href={item.href}>{item.name}</a>)}
    </dropdown-menu>
  </dropdown>
  <a href="/market-ops/ml">ML</a>
  <a href="/market-ops/goop">GOOP</a>
</nav>
```

## ✅ Validation Checklist

- [ ] Root redirect works: `/` → `/main-section`
- [ ] Homepage loads: `/main-section`
- [ ] Direct pages work: `/main-section/direct-page`
- [ ] Category pages work: `/main-section/category/sub-page`
- [ ] Category root 404s: `/main-section/category/` (no content)
- [ ] Navigation highlights correctly
- [ ] All import paths fixed
- [ ] All internal links updated
- [ ] Page titles updated with new branding

## 🎨 Benefits

1. **Logical Organization**: Related pages grouped under categories
2. **Clean URLs**: Hierarchical structure reflects content organization
3. **Scalable Navigation**: Easy to add new categories and pages
4. **SEO Friendly**: URL structure indicates content hierarchy
5. **User Experience**: Intuitive navigation with clear groupings

## 🔧 Troubleshooting

### Common Issues:
1. **404 errors**: Check import paths after moving files
2. **Navigation not highlighting**: Verify active state path matching
3. **Broken internal links**: Search for old URL references
4. **Import errors**: Count directory levels for correct `../` paths

### Testing:
1. Test each URL directly in browser
2. Test navigation between pages
3. Verify dropdown behavior
4. Check active states
5. Test on mobile/responsive design

## 📝 Customization Notes

- Replace `[main-section]` with your actual section name
- Replace `[category]` with your actual category names  
- Adjust import paths based on your project structure
- Modify navigation component to match your UI framework
- Update any framework-specific routing configurations

This structure provides a clean, maintainable URL hierarchy that scales well as your application grows! 