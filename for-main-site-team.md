# Instructions for Main GridStor Analytics Site Team

## Adding Dayzer Sub-site Integration

To integrate the Dayzer sub-site into the main GridStor Analytics platform, please add the following configuration to your main site's `netlify.toml`:

### 1. Add Redirect Rule

```toml
# Add this to your main site's netlify.toml
[[redirects]]
  from = "/dayzer/*"
  to = "https://dayzer--gridstoranalytics.netlify.app/:splat"
  status = 200
  force = true
  headers = {X-Frame-Options = "SAMEORIGIN"}
```

### 2. Update Launch Button

Update the "Launch Dayzer" button on the main site to link to:
```
https://gridstoranalytics.com/dayzer
```

### 3. Shared Authentication

Ensure the main site and Dayzer sub-site use the same:
- Environment variable: `SITE_PASSWORD=your_secure_password_here`
- Cookie name: `site-auth`
- Cookie settings: `httpOnly`, `secure`, `sameSite: 'strict'`

### 4. Netlify Site Configuration

The Dayzer sub-site should be deployed with:
- Site name: `dayzer--gridstoranalytics`
- Environment variable: `SITE_PASSWORD` (same value as main site)

## Expected User Flow

1. User visits `gridstoranalytics.com`
2. User clicks "Launch Dayzer"
3. User is redirected to `gridstoranalytics.com/dayzer`
4. If not authenticated, user sees login page
5. After login, user can navigate seamlessly between all tools

## Contact

If you need any clarification about the Dayzer sub-site integration, please coordinate with the Dayzer development team. 