# Dayzer Sub-site Deployment Guide

## Architecture Overview

This repository contains the **Dayzer** sub-site for the main GridStor Analytics platform. It is deployed at `https://gridstordayzer.netlify.app/` and will be accessible under the main domain structure.

### Structure:
- **Main Site**: `gridstoranalytics.com` (separate repository)
- **This Sub-site (Dayzer)**: `gridstoranalytics.com/dayzer` → `https://gridstordayzer.netlify.app/`
- **Other Sub-sites**: `gridstoranalytics.com/curve-viewer`, `gridstoranalytics.com/about`, etc.

## Current Deployment Status

✅ **Already Deployed**: The Dayzer site is live at `https://gridstordayzer.netlify.app/`

## Integration with Main Site

### Configure Main Site Redirects

The main GridStor Analytics site needs to add this redirect in their `netlify.toml`:

```toml
[[redirects]]
  from = "/dayzer/*"
  to = "https://gridstordayzer.netlify.app/:splat"
  status = 200
  force = true
  headers = {X-Frame-Options = "SAMEORIGIN"}
```

### Password Protection Setup

#### Environment Variables

Set this in the existing Netlify site's environment variables:
- `SITE_PASSWORD`: Your shared password (same across all GridStor Analytics sub-sites)

#### How It Works

1. Users visit the main site at `gridstoranalytics.com`
2. When they click "Launch Dayzer", they're directed to `gridstoranalytics.com/dayzer`
3. This redirects to `https://gridstordayzer.netlify.app/`
4. If not authenticated, they're redirected to the login page
5. After successful login, they can navigate seamlessly between all GridStor Analytics tools
6. All sub-sites share the same authentication cookie

## Current GridStor Analytics Structure

Based on the main site at https://gridstoranalytics.com/, the platform includes:

- **Home**: Main landing page
- **Curve Viewer**: Advanced curve analysis and visualization tools
- **Dayzer**: This sub-site - day-by-day analysis tools
- **About**: Platform information

## Integration with Main Site

### Navigation
The navigation component in this sub-site links back to the main GridStor Analytics platform:
- Home button goes to `https://gridstoranalytics.com/`
- Curve Viewer button goes to `https://gridstoranalytics.com/curve-viewer`
- Dayzer shows as active (current site)
- About button goes to `https://gridstoranalytics.com/about`

### Shared Branding
- Uses "GridStor Analytics" branding
- Consistent styling with main platform
- Shared authentication system

## Benefits of This Sub-site Architecture

1. **Independent Development**: Dayzer team can work independently
2. **Independent Deployments**: Deploy Dayzer without affecting other tools
3. **Shared Authentication**: Users log in once and access all tools
4. **Consistent Experience**: Seamless navigation between tools
5. **Scalable**: Easy to add more analysis tools as sub-sites

## Security Considerations

1. **HTTPS Only**: The sub-site uses HTTPS at `gridstordayzer.netlify.app`
2. **Cookie Security**: Cookies are set with `secure`, `httpOnly`, and `sameSite` flags
3. **Content Security Policy**: Allows embedding only from GridStor Analytics domains
4. **Environment Variables**: Keep passwords in Netlify environment variables

## For Other Sub-sites

To create additional sub-sites (forecasts, analytics, etc.), use the helper script:

```bash
node scripts/setup-subsite.js forecasts
```

This will generate the necessary configuration files for new sub-sites.

## Troubleshooting

### Common Issues:

1. **Authentication Issues**: Verify the same password is set across all GridStor Analytics sites
2. **Navigation Issues**: Check that main site redirects are properly configured
3. **CORS Errors**: Ensure `X-Frame-Options` is set to `SAMEORIGIN`

### Testing:

1. Test the Dayzer sub-site URL directly: `https://gridstordayzer.netlify.app/`
2. Test via main site: `https://gridstoranalytics.com/dayzer` (after main site adds redirect)
3. Test authentication flow
4. Test navigation between different GridStor Analytics tools

## Next Steps

1. **Add Environment Variable**: Set `SITE_PASSWORD` in the Netlify dashboard for `gridstordayzer.netlify.app`
2. **Coordinate with Main Site**: Share the integration instructions with the main GridStor Analytics team
3. **Test Integration**: Verify the redirect and authentication flow works properly

## Maintenance

- Keep the same password across all GridStor Analytics sub-sites
- Coordinate with main site team when updating navigation
- Monitor deployment status
- Regular security updates for this repository 