# 🌊 Greenflow Dynamics - Image Placement Guide

Welcome to your front page! Here's a comprehensive guide on where and how to add images to make your website shine.

---

## 📍 Image Placeholder Locations

Your website has **2 main image placeholders** that are clearly marked with dashed borders and icon indicators:

### 1. **Hero Section Image** (Top Right)
- **Location:** Hero section (main landing area)
- **Current Placeholder:** Shows "📐" icon
- **Recommended Path:** `/images/main-system.jpg`
- **Suggested Image:** 
  - Your 30×30×30 cm RIEC system prototype
  - High-quality product photo
  - 3D rendering of the system
  - Technical schematic/diagram
- **Dimensions:** 1:1 aspect ratio (square) recommended
- **Resolution:** 1200×1200px or higher

**How to Add:**
```html
<!-- In index.html, replace the hero-image div with: -->
<div class="hero-image">
  <img src="/images/main-system.jpg" alt="Greenflow RIEC System" style="width: 100%; border-radius: 1rem;">
</div>
```

---

### 2. **About Section Image** (Right Side of About)
- **Location:** About section (after the project description)
- **Current Placeholder:** Shows "💧" icon
- **Recommended Path:** `/images/system-design.jpg`
- **Suggested Image:**
  - System component diagram/layout
  - CAD design visualization
  - Cross-section of heat exchangers
  - Assembly diagram
  - Interior component arrangement
- **Dimensions:** 1:1 aspect ratio recommended
- **Resolution:** 1000×1000px or higher

**How to Add:**
```html
<!-- In index.html, replace the about-image div with: -->
<div class="about-image">
  <img src="/images/system-design.jpg" alt="RIEC System Design" style="width: 100%; border-radius: 1rem;">
</div>
```

---

## 📂 File Organization

Create an `images` folder in your public directory:

```
capstone web/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── images/          ← Create this folder
│       ├── main-system.jpg
│       ├── system-design.jpg
│       ├── components.jpg      (optional)
│       └── testing-setup.jpg   (optional)
├── src/
│   ├── style.css
│   ├── main.js
│   └── counter.js
└── index.html
```

---

## 🎯 Additional Image Recommendations

Here are other high-impact images you could add to enhance the website:

### Optional Additions:

1. **Process Flow Diagram** (Technology Section)
   - Could replace step numbers with visual icons
   - Location: `/src/assets/process-flow.svg`

2. **Component Close-ups** (Components Section)
   - Replace emoji icons with actual component photos
   - Examples: Heat exchanger, fans, pump, nozzles

3. **Testing/Experimental Results Photo**
   - Could add to Results section
   - Shows the actual prototype in action

4. **Team Photo** (In a potential Team section)
   - Add to Footer or new section

5. **Before & After Comparison**
   - Visual showing temperature change
   - Could be an infographic

---

## 🖼️ Image Optimization Tips

### Best Practices:

1. **Format:** Use JPEG for photos, PNG for graphics, SVG for icons
2. **Size:** Compress images to ~200-500KB for web
3. **Resolution:** 
   - Desktop: 1200-1600px width
   - Mobile-friendly: Create responsive images
4. **Tools to Use:**
   - TinyPNG/TinyJPG for compression
   - ImageOptim for Mac
   - GIMP or Photoshop for editing

### Recommended Tools:
- **Compression:** tinypng.com
- **Resizing:** pixlr.com
- **Design:** Figma, Canva Pro (for infographics)

---

## 📝 HTML Code Templates

### Replace Hero Image
```html
<!-- Find this section in index.html -->
<div class="hero-image">
    <!-- PLACEHOLDER: Add your main product/system image here -->
    <div class="image-placeholder">
        <div class="placeholder-content">
            <span class="placeholder-icon">📐</span>
            <p>Hero Image (30×30 cm System)</p>
            <small>Replace with: /images/main-system.jpg</small>
        </div>
    </div>
</div>

<!-- Replace with: -->
<div class="hero-image">
    <img src="/images/main-system.jpg" alt="Greenflow RIEC System" style="width: 100%; height: auto; border-radius: 1rem; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
</div>
```

### Replace About Image
```html
<!-- Find this section in index.html -->
<div class="about-image">
    <!-- PLACEHOLDER: Add system design or process image -->
    <div class="image-placeholder">
        <div class="placeholder-content">
            <span class="placeholder-icon">💧</span>
            <p>System Design Image</p>
            <small>Replace with: /images/system-design.jpg</small>
        </div>
    </div>
</div>

<!-- Replace with: -->
<div class="about-image">
    <img src="/images/system-design.jpg" alt="System Design" style="width: 100%; height: auto; border-radius: 1rem; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
</div>
```

---

## 🎨 Component Icons Enhancement

The component cards currently show emojis (⚙️, 🔲, 💧, etc.). You can replace these with actual icons or photos:

```html
<!-- Current -->
<div class="component-icon">⚙️</div>

<!-- Replace with image -->
<div class="component-icon">
  <img src="/images/icons/heat-exchanger.png" alt="Heat Exchanger" style="width: 60px; height: 60px;">
</div>

<!-- Or use Font Awesome / Icon library -->
<div class="component-icon">
  <i class="fas fa-cog"></i>
</div>
```

---

## 🚀 Quick Start Checklist

- [ ] Create `/public/images/` folder
- [ ] Prepare 2 main images (hero + about)
- [ ] Optimize images for web
- [ ] Update HTML with image paths
- [ ] Test on mobile and desktop
- [ ] Update alt text for accessibility
- [ ] Add any additional images
- [ ] Deploy!

---

## 📱 Responsive Images

For better mobile experience, consider using:

```html
<picture>
  <source media="(max-width: 768px)" srcset="/images/main-system-mobile.jpg">
  <img src="/images/main-system.jpg" alt="Greenflow RIEC System" style="width: 100%; height: auto;">
</picture>
```

---

## 🎬 Animation & Effects

The website already includes:
- ✅ Smooth scroll behavior
- ✅ Fade-in animations for cards
- ✅ Hover effects on buttons
- ✅ Mobile menu toggle
- ✅ Active navigation highlighting

Your images will inherit these effects automatically!

---

## 💡 Pro Tips

1. **Use high-quality images** - They reflect your project quality
2. **Keep aspect ratios consistent** - Use 1:1 (square) or 16:9 (widescreen)
3. **Add captions** - Include alt text for accessibility and SEO
4. **Compress images** - Faster loading = better user experience
5. **Test on mobile** - Ensure images look good on all devices
6. **Consider lighting** - Well-lit product photos look professional
7. **Use consistent styling** - Apply same border radius and shadows

---

## 🆘 Need Help?

If you need to modify the styling for your images:

**Edit `/src/style.css` and adjust:**
```css
.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Adjust these if needed */
  min-height: 500px;
  background: var(--bg-light);
  border-radius: 1rem;
}

.about-image {
  /* Same as above */
}
```

---

## 🎉 You're All Set!

Your front page is ready to showcase your innovative sustainable cooling system. Just add the images and watch it come to life!

For questions or further customization, refer to the CSS in `/src/style.css` and HTML structure in `/index.html`.

**Happy building! 🌿💨**
