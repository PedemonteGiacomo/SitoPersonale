# 🚀 Giacomo Pedemonte - Developer Portfolio

A modern, hacker-style developer portfolio built with React, TypeScript, and Tailwind CSS. Features a terminal interface, command palette, and responsive design optimized for performance and accessibility.

## ✨ Features

- **Terminal Interface** - Interactive terminal with commands like `help`, `about`, `experience`, `projects`, etc.
- **Command Palette** - Press `Ctrl+K` to quickly navigate or perform actions
- **Responsive Design** - Mobile-first approach with smooth animations
- **Dark Theme** - Sleek hacker aesthetic with neon green accents
- **SEO Optimized** - Meta tags, OpenGraph, Twitter cards, structured data
- **Accessibility** - Keyboard navigation, focus management, reduced motion support
- **Firebase Hosting** - Ready for deployment with analytics integration

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3.4
- **Build Tool**: Vite
- **Routing**: React Router
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Command Palette**: cmdk
- **Hosting**: Firebase Hosting
- **Analytics**: Firebase Analytics

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase CLI (for deployment)

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   # Copy the example file
   cp .env.example .env.local
   
   # Edit .env.local with your Firebase config
   # (Values are already provided for the portfolio-d52a5 project)
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Content Updates
Edit [`src/data/portfolio.ts`](src/data/portfolio.ts) to update:
- Personal information
- Work experience
- Education
- Skills/toolbox
- Projects
- Contact information

### Theme & Styling  
- Main colors defined in [`tailwind.config.js`](tailwind.config.js)
- Global styles in [`src/index.css`](src/index.css)
- Component-specific styling uses Tailwind classes

### Firebase Configuration
- Environment variables in [`.env.local`](.env.local) 
- Firebase config in [`src/lib/firebase.ts`](src/lib/firebase.ts)
- Hosting settings in [`firebase.json`](firebase.json)

## 🚀 Deployment to Firebase

### First Time Setup
1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Set the project:**
   ```bash
   firebase use portfolio-d52a5
   ```
   (Or set your own project ID in [`.firebaserc`](.firebaserc))

### Deploy
```bash
# Build the project
npm run build

# Deploy to Firebase Hosting
firebase deploy --only hosting
```

Your site will be available at: https://portfolio-d52a5.web.app

### Automatic Deployments
The project is configured for Firebase Hosting with:
- SPA routing (all routes redirect to `/index.html`)
- Optimized caching headers
- Build output from the `dist` folder

## 🎮 Terminal Commands

The terminal component supports these commands:
- `help` - Show available commands
- `about` - Personal information
- `experience` - Work history  
- `education` - Academic background
- `skills` - Technical skills
- `projects` - Project portfolio
- `contact` - Contact information
- `clear` - Clear terminal
- `theme` - Toggle light/dark theme

## ⌨️ Keyboard Shortcuts

- `Ctrl+K` - Open command palette
- `Esc` - Close command palette/modals
- `Tab/Shift+Tab` - Navigate focusable elements
- Arrow keys - Terminal command history

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Project Structure
```
src/
├── app/          # App setup (Router, Layout)
├── components/   # Reusable components
├── data/         # Portfolio content (single source of truth)
├── lib/          # Firebase configuration
├── pages/        # Route components
├── utils/        # Utility functions
└── index.css     # Global styles
```

### Key Components
- [`Terminal.tsx`](src/components/Terminal.tsx) - Interactive terminal
- [`CommandPalette.tsx`](src/components/CommandPalette.tsx) - Ctrl+K command interface
- [`Navbar.tsx`](src/components/Navbar.tsx) - Navigation bar
- [`ProjectCard.tsx`](src/components/ProjectCard.tsx) - Project display cards

### Performance Notes
- Lazy loading implemented for routes
- Framer Motion respects `prefers-reduced-motion`
- Bundle size optimized (current: ~559KB minified)
- Firebase Analytics only loads in production

## 🐛 Troubleshooting

### Build Issues
- Ensure Node.js 18+ is installed
- Clear `node_modules` and reinstall if needed
- Check that `.env.local` exists and contains Firebase config

### Deployment Issues  
- Verify Firebase CLI is installed and logged in
- Check that Firebase project exists and you have access
- Ensure build completes successfully before deploying

### Runtime Issues
- Firebase Analytics will only work in production
- Check browser console for detailed error messages
- Verify environment variables are properly set

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ in Genova, Italy by Giacomo Pedemonte**

🔗 **Live Demo**: https://portfolio-d52a5.web.app  
🐙 **Source**: https://github.com/PedemonteGiacomo  
📧 **Contact**: giacomopedemonte@libero.it
