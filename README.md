# ChargeAfter Landing Page

A modern, responsive landing page for ChargeAfter - a point-of-sale financing platform that connects merchants with multiple lenders to offer consumer financing options.

![ChargeAfter](https://chargeafter.com/wp-content/uploads/2023/01/chargeafter-logo.svg)

## 🎨 Project Overview

This landing page was built as a pixel-perfect implementation of a Figma design. The page showcases ChargeAfter's embedded lending platform with the following sections:

- **Navigation** - Header with logo and navigation links
- **Hero Section** - Main banner with headline, subheadline, and CTA button
- **Trusted Partners** - Partner logos and waterfall illustration showing Prime/Near-Prime/Sub-Prime lenders
- **Features Section** - 3-step flow (Apply → Get Approved → Start The Project) and 6 feature cards
- **Footer** - CTA section, link columns, social media icons, and copyright bar

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React 18** | UI component library |
| **Vite** | Build tool and development server |
| **Tailwind CSS v4** | Utility-first CSS framework |
| **JavaScript (ES6+)** | Programming language |
| **PostCSS** | CSS processing |
| **ESLint** | Code linting |

## 📁 Project Structure

```
landing-page/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, icons, and SVGs
│   ├── components/      # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── TrustedPartners.jsx
│   │   ├── Features.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css          # App-specific styles
│   ├── index.css        # Global styles & Tailwind imports
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/michellefishman71-del/ChargeAfterLandingPage.git
   cd ChargeAfterLandingPage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   The app will be running at [http://localhost:5173](http://localhost:5173)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🎯 Features

- ✅ Pixel-perfect implementation from Figma design
- ✅ Responsive button hover effects (green → dark/white transitions)
- ✅ Smooth CSS transitions and animations
- ✅ Optimized assets and SVG icons
- ✅ Clean, maintainable component architecture
- ✅ Modern React best practices

## 📐 Design Reference

This project was built based on a Figma design file:
- **Figma File**: ChargeAfter_Michelle_Fishman
- **Design System**: Custom colors, Montserrat & Inter fonts

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Green | `#1fef8a` | CTA buttons |
| Dark Gray | `#302f37` | Text, hover states |
| Light Background | `#f9f8fd` | Page background |
| White | `#ffffff` | Text on dark backgrounds |

## 👩‍💻 Author

**Michelle Fishman**

## 📄 License

This project is for demonstration purposes as part of a ChargeAfter designer assignment.
