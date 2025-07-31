# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Features a clean design, smooth animations, and dark/light theme toggle.

## 🌟 Features

### Design & UI
- **Modern & Clean Design**: Professional layout with elegant typography
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Gradient Backgrounds**: Beautiful gradient overlays and backgrounds

### Sections
1. **Hero Section**
   - Full-screen gradient background with floating animations
   - Profile image with circular border
   - Typing animation for roles
   - Call-to-action buttons

2. **About Section**
   - Personal bio with statistics
   - Circular profile image
   - Animated counters for experience stats

3. **Projects Section**
   - Grid layout with hover effects
   - Project cards with images and tech stacks
   - Live demo and GitHub links

4. **Skills Section**
   - Progress bars with animations
   - Categorized skills (Frontend/Backend)
   - Icon-based skill representation

5. **Resume Section**
   - Timeline layout for education and experience
   - Download resume functionality

6. **Testimonials Section**
   - Client testimonials with profile images
   - Hover animations

7. **Contact Section**
   - Contact form with validation
   - Social media links
   - Contact information display

8. **Footer**
   - Social links
   - Quick navigation
   - Copyright information

### Interactive Features
- **Smooth Scrolling**: Navigation links with smooth scroll behavior
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Theme Toggle**: Switch between light and dark themes
- **Form Handling**: Contact form with loading states and validation
- **Scroll Animations**: Elements animate as they come into view
- **Parallax Effects**: Subtle parallax on hero section elements
- **Keyboard Navigation**: Support for keyboard shortcuts

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. The website should load with all features working

### File Structure
```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization

### Personal Information
Update the following in `index.html`:

1. **Hero Section**
   ```html
   <h1 class="hero-title">
       Hi, I'm <span class="highlight">Your Name</span>
   </h1>
   <p class="hero-subtitle">Your Title | Your Subtitle</p>
   ```

2. **Profile Images**
   - Replace the Unsplash URLs with your own images
   - Update both hero and about section images

3. **About Section**
   - Update the bio text
   - Modify statistics numbers
   - Change experience details

4. **Projects**
   - Replace project images
   - Update project titles, descriptions, and tech stacks
   - Add your actual project links

5. **Skills**
   - Modify skill names and progress percentages
   - Add or remove skills as needed

6. **Resume**
   - Update education and experience details
   - Add your actual resume file

7. **Contact Information**
   - Update email, phone, and location
   - Add your social media links

### Styling Customization

#### Colors
The website uses CSS custom properties for easy color customization. Update the variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #f59e0b;    /* Accent color */
    --text-primary: #1f2937;       /* Main text color */
    --text-secondary: #6b7280;     /* Secondary text color */
    /* ... other colors */
}
```

#### Typography
The website uses Google Fonts (Inter and Poppins). You can change fonts by:
1. Updating the Google Fonts link in `index.html`
2. Modifying the font-family properties in `styles.css`

#### Animations
Customize animations by modifying:
- Animation durations in CSS
- Scroll trigger points in JavaScript
- Parallax speeds and effects

### JavaScript Customization

#### Typing Animation
Update the roles array in `script.js`:
```javascript
const roles = [
    'Your Role 1',
    'Your Role 2',
    'Your Role 3',
    'Your Role 4'
];
```

#### Contact Form
The contact form currently simulates submission. To make it functional:
1. Replace the setTimeout in `handleContactForm()` with actual form submission
2. Add your preferred form handling service (Formspree, Netlify Forms, etc.)

#### Theme Persistence
The theme preference is saved in localStorage. You can modify the default theme by changing the fallback in `loadTheme()`.

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Mobile hamburger navigation
- Responsive grid layouts
- Flexible typography scaling
- Touch-friendly interactions

## 🎯 Performance Optimizations

- **Throttled scroll events** for smooth performance
- **Intersection Observer** for efficient scroll animations
- **Optimized images** with proper sizing
- **Minimal JavaScript** with efficient event handling
- **CSS animations** for smooth transitions

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue in the repository.

---

**Built with ❤️ using HTML, CSS, and JavaScript** 