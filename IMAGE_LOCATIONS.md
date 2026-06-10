# 🖼️ WHERE TO ADD IMAGES - Visual Guide

## Website Layout with Image Locations

```
┌─────────────────────────────────────────────────────────────────────┐
│                    🌊 NAVIGATION BAR                                │
│     [Home] [About] [Technology] [Features] [Results] [Contact]      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                        HERO SECTION                                 │
│                                                                     │
│  LEFT SIDE:                    │    IMAGE PLACEHOLDER #1            │
│  ========================      │    ┌──────────────────┐           │
│  Sustainable Air              │    │   📐              │           │
│  Conditioning                  │    │                  │           │
│                                │    │  [1200×1200px]   │           │
│  Revolutionary 2 kW...        │    │  Hero Image Zone │           │
│                                │    │                  │           │
│  Experience powerful...        │    │  Replace with:   │           │
│                                │    │  /images/        │           │
│  [Learn More] [View Demo]      │    │  main-system.jpg │           │
│                                │    │                  │           │
│                                │    └──────────────────┘           │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│         Key Stats (2 kW | 4.19 COP | 322W | 56.1%)                │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                       ABOUT SECTION                                 │
│                                                                     │
│  LEFT SIDE (TEXT):             │    IMAGE PLACEHOLDER #2            │
│  =======================       │    ┌──────────────────┐           │
│  Why Sustainable Cooling?      │    │   💧              │           │
│                                │    │                  │           │
│  Air conditioning accounts...  │    │  [1000×1000px]   │           │
│                                │    │  About Image     │           │
│  Greenflow Dynamics presents...│    │                  │           │
│                                │    │  Replace with:   │           │
│  ✓ Uses only water cooling    │    │  /images/        │           │
│  ✓ Eliminates harmful HFCs    │    │  system-         │           │
│  ✓ 75% less electrical power  │    │  design.jpg      │           │
│  ✓ Made from recyclable       │    │                  │           │
│  ✓ Maintains comfortable      │    │                  │           │
│    humidity levels            │    └──────────────────┘           │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    HOW IT WORKS                                     │
│  [1-Air] → [2-Exchange] → [3-Evaporate] → [4-Recirculate] → [5-]  │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                   CORE COMPONENTS (6 Cards)                        │
│  Can replace emoji with component photos if desired               │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│              EXPERIMENTAL RESULTS & COMPARISON                      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│            ENVIRONMENTAL IMPACT (4 Benefits)                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                      CONTACT SECTION                               │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│ © 2026 Greenflow Dynamics | Capstone Project - EMU                │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📍 EXACTLY WHERE TO ADD IMAGES

### IMAGE #1: HERO IMAGE

**Location in HTML:**
```html
<!-- Find this in index.html around line 60 -->
<div class="hero-image">
    <div class="image-placeholder">
        <div class="placeholder-content">
            <span class="placeholder-icon">📐</span>
            <p>Hero Image (30×30 cm System)</p>
            <small>Replace with: /images/main-system.jpg</small>
        </div>
    </div>
</div>

<!-- REPLACE WITH THIS: -->
<div class="hero-image">
    <img src="/images/main-system.jpg" 
         alt="Greenflow RIEC System" 
         style="width: 100%; height: auto; border-radius: 1rem; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
</div>
```

**File Path to Add:**
- Create: `/Users/markbonganimwape/capstone web/public/images/`
- Add file: `main-system.jpg` (1200×1200px)

**Suggested Content:**
- Your RIEC system prototype photo
- High-quality product photo
- 3D CAD rendering
- System assembled and ready
- Well-lit, professional photo

---

### IMAGE #2: ABOUT SECTION IMAGE

**Location in HTML:**
```html
<!-- Find this in index.html around line 140 -->
<div class="about-image">
    <div class="image-placeholder">
        <div class="placeholder-content">
            <span class="placeholder-icon">💧</span>
            <p>System Design Image</p>
            <small>Replace with: /images/system-design.jpg</small>
        </div>
    </div>
</div>

<!-- REPLACE WITH THIS: -->
<div class="about-image">
    <img src="/images/system-design.jpg" 
         alt="RIEC System Design" 
         style="width: 100%; height: auto; border-radius: 1rem; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
</div>
```

**File Path to Add:**
- Same folder: `/Users/markbonganimwape/capstone web/public/images/`
- Add file: `system-design.jpg` (1000×1000px)

**Suggested Content:**
- System component diagram/schematic
- Cross-section of heat exchangers
- CAD design visualization
- Assembly diagram showing layout
- Interior component arrangement
- Technical drawing/blueprint

---

## 🛠️ STEP-BY-STEP IMAGE SETUP

### Step 1: Create Images Folder
```bash
# Open Terminal and run:
mkdir -p /Users/markbonganimwape/capstone\ web/public/images
```

### Step 2: Prepare Your Images
- **Hero Image:** 1200×1200px square, JPEG format, ~150-300KB
- **About Image:** 1000×1000px square, JPEG format, ~100-200KB

**To compress:**
- Go to tinypng.com
- Drag and drop your images
- Download compressed versions
- Keep same filenames

### Step 3: Add Files to Folder
```bash
# Copy your files to the images folder
cp ~/Downloads/main-system.jpg "/Users/markbonganimwape/capstone web/public/images/"
cp ~/Downloads/system-design.jpg "/Users/markbonganimwape/capstone web/public/images/"
```

### Step 4: Edit HTML File
Open `index.html` in VS Code and:

**Find Line ~60** (Hero image placeholder):
```html
<div class="image-placeholder">...</div>
```

**Replace entire hero-image div** with image code above

**Find Line ~140** (About image placeholder):
```html
<div class="image-placeholder">...</div>
```

**Replace entire about-image div** with image code above

### Step 5: Save & Test
- Save `index.html`
- Open in browser or deploy
- Check both images appear correctly

---

## 📁 FOLDER STRUCTURE AFTER ADDING IMAGES

```
/Users/markbonganimwape/capstone web/
│
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── images/                    ← YOU CREATE THIS FOLDER
│       ├── main-system.jpg        ← Hero image
│       └── system-design.jpg      ← About image
│
├── index.html                     ← EDIT THIS
├── src/
│   ├── style.css
│   └── main.js
│
├── README.md
├── IMAGE_GUIDE.md
└── QUICKSTART.md
```

---

## ✅ VERIFICATION CHECKLIST

After adding images:

- [ ] Images folder created at `/public/images/`
- [ ] Both JPG files in the images folder
- [ ] HTML hero-image div replaced with `<img>` tag
- [ ] HTML about-image div replaced with `<img>` tag
- [ ] File paths use `/images/` prefix
- [ ] Alt text added to both images
- [ ] Browser cache cleared (Cmd+Shift+R or Ctrl+Shift+R)
- [ ] Images display on desktop view
- [ ] Images display on mobile view
- [ ] Images look sharp and professional
- [ ] No broken image symbols appearing

---

## 🎨 OPTIONAL: ADDITIONAL IMAGES

If you want to enhance further, you can also add:

### Component Photos (Replace Emojis)
```html
<!-- Current -->
<div class="component-icon">⚙️</div>

<!-- Optional enhancement -->
<div class="component-icon">
    <img src="/images/heat-exchanger.jpg" 
         alt="Heat Exchanger" 
         style="width: 60px; height: 60px; border-radius: 50%;">
</div>
```

### Process Diagram
- Add visual showing airflow through system
- Could be SVG or PNG

### Testing Setup Photo
- Experimental setup during tests
- Could go in Results section

---

## 🎬 IMAGE BEST PRACTICES

### Resolution & Size
- Hero: 1200×1200px (1:1 square)
- About: 1000×1000px (1:1 square)
- Components: 400×400px (if adding)
- File size: Keep under 300KB each

### Format
- Use JPEG for photos: Better compression, natural images
- Use PNG for graphics: Better quality, transparent backgrounds
- Use SVG for icons: Scalable, crisp

### Quality
- Professional lighting
- Sharp focus
- Good color accuracy
- High contrast
- Clean background

### Optimization Tools
- **TinyPNG:** https://tinypng.com (JPEG/PNG compression)
- **ImageOptim:** Free Mac tool
- **Pixlr:** Online photo editor
- **Figma:** Design tool (free version)

---

## 🔗 HTML CODE REFERENCE

### Image with Alt Text & Styling
```html
<img src="/images/main-system.jpg" 
     alt="Greenflow RIEC System - 2kW Sustainable Air Conditioning" 
     style="width: 100%; height: auto; border-radius: 1rem; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
```

### Responsive Image (Multiple Sizes)
```html
<picture>
  <source media="(max-width: 768px)" srcset="/images/main-system-small.jpg">
  <img src="/images/main-system.jpg" 
       alt="Greenflow RIEC System" 
       style="width: 100%; height: auto; border-radius: 1rem;">
</picture>
```

### Image with Caption
```html
<figure style="text-align: center;">
  <img src="/images/main-system.jpg" 
       alt="Greenflow RIEC System" 
       style="width: 100%; max-width: 600px; height: auto; border-radius: 1rem;">
  <figcaption style="color: #6b7280; margin-top: 1rem;">
    Greenflow RIEC System - 2 kW Regenerative Indirect Evaporative Cooling
  </figcaption>
</figure>
```

---

## 🎯 QUICK CHECKLIST

### Before Editing HTML:
- [ ] Images downloaded & resized to correct dimensions
- [ ] Images compressed with TinyPNG
- [ ] Folder `/public/images/` created
- [ ] Image files copied to folder
- [ ] Filenames match: `main-system.jpg`, `system-design.jpg`

### When Editing HTML:
- [ ] Find correct section (use line numbers as guide)
- [ ] Replace ENTIRE placeholder div with new img tag
- [ ] Include all styling (width, height, border-radius, shadow)
- [ ] Add meaningful alt text
- [ ] Check syntax (no typos, correct quotes)
- [ ] Save file

### After Editing:
- [ ] Clear browser cache
- [ ] Refresh page
- [ ] Check images appear on desktop
- [ ] Check images appear on mobile
- [ ] Check dark mode appearance
- [ ] Share with team!

---

## 💾 EXACT FILE LOCATIONS

**Hero Image:**
```
/Users/markbonganimwape/capstone web/public/images/main-system.jpg
Used in: index.html, hero-image section
Size: 1200×1200px
```

**About Image:**
```
/Users/markbonganimwape/capstone web/public/images/system-design.jpg
Used in: index.html, about-image section
Size: 1000×1000px
```

---

## ❓ TROUBLESHOOTING

### Images Not Showing?
- Check file names exactly match: `main-system.jpg` (lowercase)
- Check path starts with `/images/`
- Verify files are in `/public/images/` folder
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)

### Images Too Large/Small?
- Check your browser zoom (should be 100%)
- Verify image dimensions match specs above
- Check CSS width styling applied

### Images Look Blurry?
- Verify image resolution is 1200×1200px (hero) or 1000×1000px (about)
- Use high-quality source image
- Don't scale up images (use larger originals instead)

### Path Issues on Windows?
- Use forward slashes: `/images/file.jpg`
- Never use backslashes in web paths

---

## 🎉 FINAL RESULT

After adding images, your website will display:

✅ Professional hero image on landing page
✅ System design image in about section
✅ Beautiful, modern appearance
✅ Fully responsive on all devices
✅ Ready to present to professors/clients

**That's it! You're done! 🚀**

---

**Need more help? See:** `IMAGE_GUIDE.md` or `QUICKSTART.md`
