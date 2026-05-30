# Framer Motion Project 2

A modern animated portfolio-style landing page built with Next.js, React, Tailwind CSS, and Framer Motion.

The project is still in progress and currently includes only the hero section with:

- A bold gradient background
- Animated profile reveal
- Personal intro text
- Call-to-action buttons
- Custom image assets and visual effects

## Live Preview

Preview the current deployment here:

https://framer-motion-project-2.netlify.app

Run the app locally and open it in your browser:

```bash
npm run dev
```

Then visit:

```text
http://localhost:3000
```

## Tech Stack

- **Next.js 16** - App Router project structure
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** - entrance and hover animations
- **next/image** - optimized image handling
- **DM Sans** - global font

## Features

- Responsive full-screen hero layout
- Animated profile image reveal
- Smooth text and button animations
- Custom gradient and glow effects
- Local static assets stored in `public/assets`
- Scroll-smooth behavior and black base theme

## Project Structure

- `app/page.tsx` - home page entry point
- `app/layout.tsx` - root layout and metadata
- `app/globals.css` - global styles and Tailwind setup
- `components/Hero.tsx` - main hero section
- `components/Navbar.tsx` - navbar component placeholder
- `public/assets/` - images and visual assets used by the page

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Start the production server

```bash
npm run start
```

### 5. Run lint checks

```bash
npm run lint
```

## How It Works

The homepage renders the `Hero` component from `app/page.tsx`. Inside `Hero`, the profile image and headline animate into view using Framer Motion. The background is created with layered gradients and glow effects, while the global stylesheet defines the base black theme and utility animation helpers.

## Customization

If you want to personalize the project, the main places to edit are:

- `components/Hero.tsx` for the headline, description, buttons, and animation behavior
- `public/assets/profilepic.png` for the profile image
- `app/layout.tsx` for the page title and metadata
- `app/globals.css` for theme colors and global styling

You can also extend the site by replacing `Navbar.tsx` with a real navigation bar and adding more sections below the hero.

## Notes

- The current `Navbar` component is only a placeholder.
- The hero text and name are sample content and should be replaced with your real details.
- The project is designed to be easy to adapt into a personal portfolio or agency landing page.

## Deployment

This project can be deployed easily to Vercel or any platform that supports Next.js.

For Vercel, connect the repository and deploy with the default build command:

```bash
npm run build
```

## License

Add a license if you want to publish or share this project publicly.
