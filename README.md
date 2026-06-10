# 🌊 Greenflow Dynamics - Sustainable Air Conditioning System

A modern, responsive landing page for your RIEC (Regenerative Indirect Evaporative Cooling) system capstone project at Eastern Mediterranean University.

## 🚀 Features

### ✨ Fully Responsive Design
- Mobile-friendly navigation with hamburger menu
- Adaptive layouts for all screen sizes
- Smooth scrolling and animations

### 📑 Complete Sections
1. **Navigation Bar** - Sticky header with smooth scrolling links
2. **Hero Section** - Eye-catching introduction with call-to-action buttons
3. **Key Statistics** - Display of main project metrics
4. **About Section** - Project overview and key advantages
5. **Technology Process** - 5-step cooling process explanation
6. **Core Components** - 6 major system components with details
7. **Experimental Results** - Performance data and comparison with conventional AC
8. **Sustainability** - Environmental benefits highlight
9. **Contact Section** - Call-to-action for inquiries
10. **Footer** - Project attribution

### 🎨 Modern Design Elements
- Professional color scheme (Blue primary, Green secondary)
- Light/Dark mode support
- Beautiful shadows and hover effects
- Smooth animations on scroll
- Interactive buttons with feedback

### 📱 Mobile Optimized
- Hamburger menu for mobile navigation
- Touch-friendly buttons and links
- Responsive grid layouts
- Optimized font sizes for readability

## 📂 Project Structure

```
capstone web/
├── index.html              # Main HTML file
├── src/
│   ├── style.css          # All styling
│   ├── main.js            # Interactivity & animations
│   ├── counter.js         # (optional)
│   └── assets/
│       ├── hero.png
│       ├── javascript.svg
│       └── vite.svg
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── images/            # CREATE THIS FOLDER - Add your images here
├── package.json
└── IMAGE_GUIDE.md         # Detailed image placement guide
```

## 🖼️ Image Placeholders

The website has **2 main image placeholders** ready for your custom images:

### 1. Hero Section Image (Top Right)
- **Suggested Content:** Your RIEC system prototype or 3D rendering
- **Recommended Path:** `/images/main-system.jpg`
- **Size:** 1:1 aspect ratio (square), 1200×1200px

### 2. About Section Image (Below "Why Sustainable Cooling?")
- **Suggested Content:** System design diagram or component layout
- **Recommended Path:** `/images/system-design.jpg`
- **Size:** 1:1 aspect ratio (square), 1000×1000px

**📖 See `IMAGE_GUIDE.md` for detailed instructions on adding images.**

## 🛠️ Quick Setup

### 1. Create Images Directory
```bash
mkdir public/images
```

### 2. Add Your Images
Place your images in `/public/images/`:
- `main-system.jpg` - Hero image
- `system-design.jpg` - About section image

### 3. Update Image References
Edit `/index.html` and replace the image placeholders with actual images (see IMAGE_GUIDE.md for exact code).

## 🎯 Sections Overview

### Navigation & Hero
- Logo with wave emoji (🌊)
- 6 main navigation links with smooth scrolling
- Hero title: "Sustainable Air Conditioning"
- Subtitle and description
- Two call-to-action buttons
- Large image placeholder

### Key Statistics
- 2 kW Cooling Capacity
- 4.19 COP (Coefficient of Performance)
- 322 W Power Consumption
- 56.1% Cooling Effectiveness

### About Section
- **Why Sustainable Cooling?** overview
- Key advantages in a highlight box:
  - Water-only cooling medium
  - No harmful refrigerants
  - 75% less electrical power
  - Recyclable materials
  - Comfortable humidity levels
- System design image placeholder

### Technology Section
- 5-step process visualization:
  1. Air Intake
  2. Heat Exchange
  3. Water Evaporation
  4. Air Recirculation
  5. Supply Output
- Hover effects on step cards

### Components Section
6-card grid featuring:
- Aluminum Heat Exchangers (4 units)
- Plexiglass Frame (PMMA)
- Water Reservoir (HDPE)
- Axial Fans (2x BDRAX 200-2K)
- Pump System (15PBG-10-N)
- Spray Nozzles (Fine mist)

### Results Section
- **Temperature Performance**
  - Inlet: 36.98°C
  - Output: 24.70°C
  - Reduction: 12.28°C
- **Efficiency Metrics**
  - Cooling Capacity: 2.09 kW
  - Power: 322 W
  - COP: 4.19
- **Humidity & Comfort**
  - Supply Air Humidity: 56%
  - Comfort Range: 30-60%
  - Wet-bulb Effectiveness: 98.8%
- Comparison table vs. conventional AC

### Sustainability Section
- ♻️ Recyclable Materials
- 🌍 Zero Refrigerant
- ⚡ Energy Efficient
- 💧 Water-Based

### Contact & Footer
- Call-to-action buttons
- Contact information
- University attribution

## 🎨 Customization

### Colors
Edit `/src/style.css` - CSS variables at the top:
```css
:root {
  --primary: #1e40af;        /* Main blue */
  --secondary: #10b981;      /* Green */
  --accent: #f59e0b;         /* Gold */
}
```

### Fonts
```css
--sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto...
--heading: system-ui, 'Segoe UI', Roboto...
```

### Add/Remove Sections
Edit `/index.html` - Remove or duplicate sections as needed.

### Button Styling
Located in `/src/style.css` under `.btn` classes.

## 🔧 JavaScript Interactivity

The website includes:
- **Mobile Menu Toggle** - Click hamburger to show/hide nav
- **Smooth Scrolling** - Click nav links for smooth scroll to sections
- **Scroll Animations** - Cards fade in as you scroll
- **Active Navigation** - Current section highlighted in nav
- **Button Interactions** - Hover effects with smooth transitions

**Edit `/src/main.js` to modify interactivity.**

## 📱 Responsive Breakpoints

- **Desktop:** 1024px+ (2-column layouts)
- **Tablet:** 768px - 1023px (adjusted spacing)
- **Mobile:** Below 768px (single column, hamburger menu)

## 🌓 Light/Dark Mode

The website automatically respects system preferences via `prefers-color-scheme`.

Users can set their OS to light or dark mode, and the website will adapt automatically!

## ♿ Accessibility

- Semantic HTML structure
- Alt text placeholders for images
- Proper heading hierarchy (h1 → h6)
- Keyboard navigation support
- High contrast color ratios

## 📊 SEO Friendly

- Descriptive page title
- Semantic structure
- Image alt text (add when you upload images)
- Meta viewport for mobile
- Proper heading hierarchy

## 🚀 Performance

- Optimized CSS (no external dependencies)
- Vanilla JavaScript (no frameworks)
- Lazy loading ready (for images)
- Fast loading times
- Mobile optimized

## 📋 Checklist Before Launch

- [ ] Add hero image (`/images/main-system.jpg`)
- [ ] Add about image (`/images/system-design.jpg`)
- [ ] Update image references in HTML
- [ ] Test on mobile devices
- [ ] Test in light and dark modes
- [ ] Update contact information
- [ ] Customize colors if desired
- [ ] Deploy to hosting

## 🌐 Deployment Options

- **Vercel** (Recommended) - Free, fast, great for static sites
- **Netlify** - Easy drag-and-drop deployment
- **GitHub Pages** - Free hosting with GitHub
- **Firebase Hosting** - Google's solution
- **Traditional Hosting** - Any web host that serves HTML/CSS/JS

## 📚 Resources

- **MDN Web Docs:** https://developer.mozilla.org/
- **CSS Variables:** https://developer.mozilla.org/en-US/docs/Web/CSS/--*
- **Responsive Design:** https://web.dev/responsive-web-design-basics/
- **Web Performance:** https://web.dev/performance/

## 🤝 Contributing

Feel free to customize this template for your specific needs!

## 📄 License

This project is for educational purposes (Eastern Mediterranean University Capstone Project).

## 📞 Support

For questions about this website:
1. Check `IMAGE_GUIDE.md` for image setup
2. Review the comments in `/src/style.css`
3. Explore `/src/main.js` for interactive features
4. Refer to `/index.html` for structure

---

## 🎉 Ready to Go!

Your front page is complete and ready to showcase your innovative sustainable cooling system. Add your images and launch it to the world!

**Happy presenting! 🌿💨**

---

**Built with ❤️ for Greenflow Dynamics**
*Eastern Mediterranean University Capstone Project*
