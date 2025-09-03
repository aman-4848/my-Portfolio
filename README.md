# Amanuel Markos - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth scrolling, hover effects, and animated skill bars
- **Contact Form**: Functional contact form with validation
- **Social Integration**: Links to LinkedIn, GitHub, and Instagram

## Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Build Tool**: Vite

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Navigation bar with theme toggle
│   ├── HeroSection.jsx     # Hero section with profile and stats
│   ├── ExperienceSection.jsx # Project timeline and experience
│   ├── EducationSection.jsx  # Education and achievements
│   ├── SkillsSection.jsx     # Skills with animated progress bars
│   └── ContactSection.jsx    # Contact form and information
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## Customization

### Personal Information
Update personal details in the respective components:
- **Contact Info**: `ContactSection.jsx`
- **Social Links**: `HeroSection.jsx` and `ContactSection.jsx`
- **Projects**: `ExperienceSection.jsx`
- **Skills**: `SkillsSection.jsx`
- **Education**: `EducationSection.jsx`

### Styling
- **Colors**: Modify the primary color palette in `tailwind.config.js`
- **Animations**: Customize animations in `src/index.css`
- **Layout**: Adjust component layouts in individual component files

### Profile Image
Replace the GitHub profile image URL in `HeroSection.jsx` with your own image URL.

## Deployment

The project can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use GitHub Actions for automated deployment

## Contact Information

- **Email**: amanuelmark747@gmail.com
- **Phone**: +251934216600
- **Location**: Addis Abeba, Ethiopia
- **LinkedIn**: [linkedin.com/in/amanuel-markos-02280431a](https://linkedin.com/in/amanuel-markos-02280431a)
- **GitHub**: [github.com/aman-4848](https://github.com/aman-4848)

## License

This project is open source and available under the [MIT License](LICENSE).
