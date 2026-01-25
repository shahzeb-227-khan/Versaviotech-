# Static Assets Fix for Vite + Vercel Deployment

## Problem
Images stored in `/assets/` folder rendered correctly in development but failed after deployment on Vercel.

## Root Cause
**Vite's static asset handling:**
- Vite only serves files from `/public/` directory in production builds
- Files in `/assets/` are meant for import statements that get processed by Vite's build pipeline
- String references to `/assets/` paths (e.g., `src="/assets/image.png"`) won't work because the folder doesn't exist in the production build

## Solution Applied

### 1. Moved Local Assets
**Action:** Moved all local images from `/assets/` to `/public/assets/`

**Files moved:**
- `aboutus.png` (used in About page)
- `blog2.jpg` (used in blog post #2)
- `new_logo.png` (used in Navbar and SEO metadata)
- `og-default.png` (created for Open Graph metadata)

### 2. Updated Code References

**Navbar.tsx:**
```typescript
// BEFORE (import statement - Vite processes this):
import logo from '../assets/new_logo.png';

// AFTER (string path - served from /public):
const logo = '/assets/new_logo.png';
```

**Why this works:**
- `/public/` contents are copied to dist root during build
- Path `/assets/new_logo.png` resolves correctly in both dev and production
- No import processing needed - served as static file

### 3. Verified All References
All other files already used correct `/assets/` paths:
- ✅ `About.tsx`: `/assets/aboutus.png`
- ✅ `blogPosts.ts`: `/assets/blog2.jpg`
- ✅ `SEOHead.tsx`: `/assets/og-default.png`
- ✅ `index.html`: `/assets/new_logo.png`

## How Vite Handles Static Assets

### Development Mode
- Vite dev server serves `/public` at root `/`
- `/assets/image.png` → serves from `/public/assets/image.png`

### Production Build
```bash
npm run build
```
Creates:
```
dist/
  ├── index.html
  ├── assets/           # Vite-generated JS/CSS bundles (hashed)
  │   ├── js/
  │   ├── css/
  │   └── images/       # Imported images end up here
  ├── assets/           # YOUR static images from /public/assets/
  │   ├── aboutus.png
  │   ├── blog2.jpg
  │   ├── new_logo.png
  │   └── og-default.png
  ├── robots.txt
  └── sitemap.xml
```

### Vercel Deployment
- Vercel serves everything in `dist/` folder
- Path `/assets/new_logo.png` → `dist/assets/new_logo.png`
- ✅ Works correctly in production

## Best Practices

### ✅ DO: Use /public for static assets referenced by path
```tsx
// Images referenced as strings
<img src="/assets/logo.png" />
<link rel="icon" href="/assets/favicon.ico" />
```

### ✅ DO: Use imports for assets in components (processed by Vite)
```tsx
// When you need Vite to optimize/hash the file
import heroImage from './hero.png';
<img src={heroImage} />
```

### ❌ DON'T: Reference /assets folder outside /public
```tsx
// This BREAKS in production
import logo from '../assets/logo.png'; // src/assets/
```

### ❌ DON'T: Use relative paths from public
```tsx
// WRONG - public folder is served at root
<img src="/public/assets/logo.png" />

// CORRECT
<img src="/assets/logo.png" />
```

## Testing

### Local Development
```bash
npm run dev
```
Visit: http://localhost:3000
- ✅ All images load correctly

### Production Preview
```bash
npm run build
npm run preview
```
Visit: http://localhost:4173
- ✅ All images load correctly

### Vercel Deployment
```bash
git add .
git commit -m "fix: move assets to public folder for production"
git push
```
- ✅ Vercel auto-deploys
- ✅ All images load correctly in production

## Files Changed
1. `/components/Navbar.tsx` - Changed import to string path
2. `/public/assets/` - Added all local images
3. *(All other files already used correct paths)*

## Verification Checklist
- [x] Logo appears in Navbar
- [x] About page image loads
- [x] Blog post #2 image loads
- [x] Favicon loads
- [x] Open Graph images work for social sharing
- [x] No 404 errors in browser console
- [x] Works in dev, preview, and production

## Related Documentation
- [Vite Static Asset Handling](https://vitejs.dev/guide/assets.html#the-public-directory)
- [Vercel Build Output](https://vercel.com/docs/concepts/projects/overview#build-output)
