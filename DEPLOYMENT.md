# Vercel Deployment Guide for BGStore

## Quick Deploy Options

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   # or
   pnpm add -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   For production deployment:
   ```bash
   vercel --prod
   ```

## Project Configuration

- **Framework Preset**: Next.js (auto-detected)
- **Build Command**: `next build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `pnpm install` (auto-detected)

## Environment Variables (if needed)

If you need to add environment variables later:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add any required variables

## Important Notes

- ✅ Your project is ready for deployment
- ✅ All dependencies are properly configured
- ✅ Next.js 16 is compatible with Vercel
- ✅ Static assets (images/videos) will be served automatically
- ✅ The build will happen on Vercel's servers

## Post-Deployment

After deployment, you'll get:
- A production URL (e.g., `bgstore.vercel.app`)
- Automatic HTTPS
- Global CDN
- Automatic deployments on git push (if connected to GitHub)

## Troubleshooting

If you encounter build errors:
1. Check Vercel build logs in the dashboard
2. Ensure Node.js version is 18+ (Vercel uses 20.x by default)
3. Verify all dependencies are in `package.json`

