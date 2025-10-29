# Vora Electric Service - Company Website

## Overview
This is a professional website for Vora Electric Service (VES), an electrical services company. The project was automatically generated using Anima with the Shadcn UI library and has been configured to run in the Replit environment.

**Tech Stack:**
- React 18.2.0
- TypeScript
- Vite 6.0.4
- React Router DOM 7.7.1
- Tailwind CSS 3.4.16
- Radix UI components
- EmailJS for contact forms
- Lucide React for icons

**Current State:** Fully functional and deployed on port 5000

## Recent Changes (October 29, 2025)
- Configured Vite to run on 0.0.0.0:5000 for Replit environment
- Fixed TypeScript component prop definitions for VESContactPage and VESAboutPage
- Installed missing @emailjs/browser dependency
- Set up workflow to run development server
- Verified application loads correctly with all pages working

## Project Architecture

### Directory Structure
```
├── public/
│   ├── images/          # Company images, logos, project photos
│   └── videos/          # Video content
├── src/
│   ├── components/
│   │   └── ui/          # Reusable Shadcn UI components
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   └── screens/         # Main page components
│       ├── VESHomePage/
│       │   └── sections/  # Home page sections (Hero, Services, etc.)
│       ├── VESAboutPage/
│       ├── VESContactPage/
│       ├── VESProject/
│       └── VESServicePage/
├── index.html
├── vite.config.ts
└── package.json
```

### Pages
1. **Home (/)** - Hero section, services overview, testimonials, contact form
2. **Services (/services)** - Detailed service offerings
3. **Contact (/contact)** - Contact form with EmailJS integration
4. **About (/about)** - Company information and team details
5. **Projects (/project)** - Portfolio of completed projects

### Key Features
- Responsive design with mobile optimization
- Lazy loading sections for performance
- Contact form with EmailJS integration
- Smooth scrolling navigation
- Modern UI with Tailwind CSS
- Component-based architecture

## Development

### Running Locally
The development server runs automatically via the configured workflow:
- Host: 0.0.0.0
- Port: 5000
- Command: `npm run dev`

### Building for Production
```bash
npm run build
```

## Deployment Configuration
- **Type:** Autoscale (stateless website)
- **Build Command:** `npm run build` (if needed)
- **Run Command:** Configured via Vite

## Notes
- The project uses EmailJS for contact form submissions
- All images are stored in the public/images directory
- The website uses a fixed header with smooth scroll navigation
- Mobile-first responsive design
