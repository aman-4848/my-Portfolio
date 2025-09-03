# Portfolio Setup Instructions

## Quick Setup (Recommended)

1. **Open Terminal/Command Prompt** in your project directory:
   ```bash
   cd "c:\Users\hp\Desktop\aman profile"
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   
   If npm doesn't work, try:
   ```bash
   yarn install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   
   Or with yarn:
   ```bash
   yarn dev
   ```

4. **Open Browser** and go to: `http://localhost:5173`

## Alternative Setup (If above doesn't work)

1. **Install Node.js** from [nodejs.org](https://nodejs.org/) (LTS version)

2. **Verify Installation**:
   ```bash
   node --version
   npm --version
   ```

3. **Install Dependencies Manually**:
   ```bash
   npm install react@18.3.1 react-dom@18.3.1
   npm install lucide-react@0.460.0 framer-motion@11.11.17
   npm install @emailjs/browser@4.3.3
   npm install vite@5.4.10 @vitejs/plugin-react@4.3.3
   npm install tailwindcss@3.4.14 autoprefixer@10.4.20 postcss@8.4.49
   ```

4. **Run Development Server**:
   ```bash
   npx vite
   ```

## Responsive Design Features

Your portfolio includes:

### Mobile (320px - 768px)
- ✅ Collapsible navigation menu
- ✅ Stacked layout for all sections
- ✅ Touch-friendly buttons and links
- ✅ Optimized image sizes
- ✅ Readable font sizes

### Tablet (768px - 1024px)
- ✅ Two-column layouts where appropriate
- ✅ Balanced spacing and typography
- ✅ Hover effects for interactive elements

### Desktop (1024px+)
- ✅ Multi-column layouts
- ✅ Large hero section with prominent profile image
- ✅ Timeline layout for experience
- ✅ Grid layouts for skills and stats

## Profile Image Setup

Your profile image is configured to load from `/public/profile.jpg`. 

To use your uploaded image:
1. Save your profile image as `profile.jpg` in the `public` folder
2. The portfolio will automatically use it
3. Fallback to GitHub profile image if not found

## Testing Responsiveness

1. **Browser DevTools**: Press F12 → Toggle device toolbar
2. **Test Breakpoints**:
   - Mobile: 375px width
   - Tablet: 768px width  
   - Desktop: 1200px width
3. **Check All Sections**: Scroll through entire portfolio
4. **Test Interactions**: Navigation, buttons, forms

## Common Issues & Solutions

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Dependencies Not Installing
```bash
npm cache clean --force
npm install
```

### Vite Not Found
```bash
npx vite --version
npm install vite --save-dev
```

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

Your portfolio is fully responsive and ready for production!
