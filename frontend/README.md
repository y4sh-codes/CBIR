# Image Seek - CBIR Frontend

A modern, production-ready React + Vite frontend for a Content-Based Image Retrieval (CBIR) system.

## Features

- 🎨 Modern UI with solid black background and white text
- 🔍 Image upload with drag-and-drop functionality
- ⚡ Smooth scrolling powered by Lenis
- 📱 Fully responsive design
- 🎭 Smooth animations with Framer Motion
- 🧭 Client-side routing with React Router
- 📊 Progress bar for upload tracking
- 🖼️ Results grid displaying similar images

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Lenis** - Smooth scrolling
- **Framer Motion** - Animation library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   └── Navbar.css
├── pages/
│   ├── Landing.jsx         # Landing page with hero and features
│   ├── Landing.css
│   ├── Upload.jsx          # Image upload and results page
│   └── Upload.css
├── App.jsx                 # Main app with routing and Lenis setup
├── App.css
├── index.css
└── main.jsx
```

## Pages

### Landing Page (/)
- Hero section with project name and introduction
- Bento grid layout showcasing 6 key features (2 columns, 3 rows)
- Contact section with GitHub and email links

### Upload Page (/upload)
- Drag-and-drop image upload
- File browser support
- Loading progress bar (0-100%)
- Results grid displaying similar images with similarity scores

## Customization

### Update Contact Information

Edit src/pages/Landing.jsx around line 100-110:
- Update GitHub repository URL
- Update email address

### Connect to Backend API

Edit src/pages/Upload.jsx in the handleUpload function:
- Replace the mock implementation with actual API calls to your CBIR backend

## Production Deployment

The app is production-ready and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

```bash
# Build for production
npm run build

# The dist/ folder contains optimized production files
```

## Development Server

The dev server runs at http://localhost:5173/

## License

MIT
