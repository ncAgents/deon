# Portfolio Landing Page

A simple, clean personal portfolio landing page built with React 18, TypeScript, Vite, and Tailwind CSS.

## Features

- **Minimal Design**: Clean, tech-minimalist theme with custom color palette
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Vite**: Fast build tool and development server

## Color Palette

- Primary: #0A0A0A (main text / dark)
- Secondary: #00BFA6 (accent)
- Background: #F5F5F5 (page background)
- White: #FFFFFF
- Hover: #008F7A

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx      # Navigation component
│   └── Hero.tsx        # Hero section component
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles with Tailwind
```

## Customization

To personalize the portfolio:

1. Update the name in `src/components/Navbar.tsx` and `src/components/Hero.tsx`
2. Modify the hero text in `src/components/Hero.tsx`
3. Add your own sections by extending the `App.tsx` component
4. Customize colors in `tailwind.config.js`

## Technologies Used

- React 18 with Hooks
- TypeScript
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer
