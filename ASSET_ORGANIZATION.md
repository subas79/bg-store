// README for organizing assets
# Asset Organization Guide

## Current Assets
Your WhatsApp images and videos are currently in the `assets/` folder.

## Organization Structure
Assets should be organized in the `public/` folder for Next.js to serve them:

- **Images**: `public/images/products/` - Product photos
- **Videos**: `public/videos/products/` - Product videos

## How to Organize Assets

### Option 1: Manual Organization
1. Review images in `assets/` folder
2. Rename them with descriptive names (e.g., `product-001.jpg`, `product-002.jpg`)
3. Move them to `public/images/products/`
4. Move videos to `public/videos/products/`

### Option 2: Use the Organization Script
A script is available at `scripts/organize-assets.ts` that will:
- Automatically rename files to `product-XXX.jpg` and `product-XXX.mp4` format
- Move images to `public/images/products/`
- Move videos to `public/videos/products/`

To run the script:
```bash
npx ts-node scripts/organize-assets.ts
```

## Naming Convention
- Images: `product-001.jpg`, `product-002.jpg`, etc.
- Videos: `product-001.mp4`, `product-002.mp4`, etc.
- Or use descriptive names: `product-name-angle-1.jpg`

## Usage in Components
Once organized, reference assets like this:
```tsx
// In Next.js components
<Image src="/images/products/product-001.jpg" alt="Product name" />
<video src="/videos/products/product-001.mp4" />
```

