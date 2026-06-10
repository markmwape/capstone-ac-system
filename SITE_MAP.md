# 📋 Website Structure & Navigation Map

## Page Layout Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     NAVIGATION BAR                          │
│  🌊 Greenflow Dynamics  [Home] [About] [Tech] [Features]   │
│                         [Results] [Contact] ☰               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      HERO SECTION                           │
│  Left Content:              Right: Image Placeholder       │
│  • Main Title              📐                              │
│  • Subtitle                [Hero Image Zone]               │
│  • Description                                            │
│  • 2 CTA Buttons                                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    KEY STATISTICS                          │
│  [2 kW] [4.19 COP] [322 W] [56.1% Effectiveness]          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    ABOUT SECTION                           │
│  Left: About Text & Highlights    Right: Image            │
│  ✓ Water only cooling            [Design Image Zone]      │
│  ✓ No harmful refrigerants       💧                       │
│  ✓ 75% less power                                        │
│  ✓ Recyclable materials                                  │
│  ✓ Comfortable humidity                                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  TECHNOLOGY SECTION                         │
│  How It Works - 5 Step Process:                            │
│  ┌─────┐    ┌─────┐    ┌─────┐    ┌─────┐    ┌─────┐     │
│  │ 1   │    │ 2   │    │ 3   │    │ 4   │    │ 5   │     │
│  │Air  │ → │Heat │ → │Water│ → │Air  │ → │Supply│    │
│  │Intake   │Exch │  │Evap │   │Recir    │Output│    │
│  └─────┘    └─────┘    └─────┘    └─────┘    └─────┘     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              COMPONENTS SECTION (6-Grid)                   │
│  ⚙️               🔲               💧                      │
│  Aluminum Heat    Plexiglass      Water                    │
│  Exchangers       Frame           Reservoir               │
│  [Card]           [Card]          [Card]                  │
│                                                            │
│  💨               🚿               🌊                      │
│  Axial Fans       Pump System      Spray Nozzles         │
│  [Card]           [Card]          [Card]                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              EXPERIMENTAL RESULTS (3-Grid)                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────┐│
│  │ Temperature     │  │ Efficiency      │  │ Humidity &  ││
│  │ Performance     │  │ Metrics         │  │ Comfort     ││
│  │ • Inlet: 36.98°C│  │ • Capacity: 2.09│  │ • Supply: 56%
│  │ • Output: 24.70°│  │ • Power: 322 W  │  │ • Range: 30-60
│  │ • Reduction: 12 │  │ • COP: 4.19 ⚡  │  │ • Effectiveness
│  └─────────────────┘  └─────────────────┘  │ • 98.8% ✓   ││
│                                             └─────────────┘│
│  ┌────────────────────────────────────────────────────────┐│
│  │         Comparison vs Conventional AC                  ││
│  │  Metric          │ Greenflow   │ Conventional         ││
│  │  COP             │ 4.19        │ 2.5-3.5              ││
│  │  Refrigerant     │ None        │ HFC/CFC              ││
│  │  Power           │ 322 W       │ ~1200+ W             ││
│  │  Maintenance     │ Minimal     │ Regular              ││
│  └────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│           SUSTAINABILITY SECTION (4-Grid)                  │
│  ♻️ Recyclable    🌍 Zero        ⚡ Energy        💧 Water  │
│  Materials       Refrigerant    Efficient      Based      │
│  [Item]          [Item]         [Item]         [Item]     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│               CONTACT SECTION                              │
│  "Get in Touch"                                            │
│  [Request Information Button] [Schedule Demo Button]       │
│                                                            │
│  Greenflow Dynamics                                        │
│  Eastern Mediterranean University                          │
│  📧 info@greenflowdynamics.com                            │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      FOOTER                                │
│  © 2026 Greenflow Dynamics. All rights reserved.          │
│  Capstone Project - Eastern Mediterranean University      │
└─────────────────────────────────────────────────────────────┘
```

---

## 🗂️ File Organization

```
capstone web/
│
├── 📄 index.html
│   └── Contains entire HTML structure for all sections
│
├── 📂 src/
│   ├── 🎨 style.css          (All styling & responsive design)
│   ├── 🔧 main.js            (Interactivity & animations)
│   ├── counter.js            (Optional utility)
│   └── 📂 assets/
│       ├── hero.png
│       ├── javascript.svg
│       └── vite.svg
│
├── 📂 public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── 📂 images/            ← ADD YOUR IMAGES HERE
│       ├── main-system.jpg           (Hero image)
│       ├── system-design.jpg         (About image)
│       └── (other images)
│
├── 📄 package.json
├── 📄 README.md              (Project overview)
├── 📄 IMAGE_GUIDE.md         (Detailed image guide)
└── 📄 SITE_MAP.md            (This file)
```

---

## 🔗 Navigation Links & Scroll Targets

```
Click on Nav Link  →  Smooth Scroll to Section
─────────────────────────────────────────────
Home        (#home)       → Hero Section
About       (#about)      → About Section  
Technology  (#technology) → Technology Section
Features    (#features)   → Components Section
Results     (#results)    → Results Section
Contact     (#contact)    → Contact Section
```

---

## 🎨 Component Breakdown

### Navigation Bar (`navbar`)
- Fixed position (stays at top while scrolling)
- Responsive hamburger menu on mobile
- Active link highlighting
- Smooth scroll to all sections

### Hero Section (`#home`)
- Full viewport height
- Split layout: text left, image right
- Call-to-action buttons
- Image placeholder for main product photo

### Statistics Row (`stats`)
- Blue background (primary color)
- 4-column grid
- Shows key metrics at a glance
- Responsive to 1 column on mobile

### About Section (`#about`)
- 2-column layout (text + image)
- Highlight box with key advantages
- Green accent colors
- Image placeholder for system design

### Technology Section (`#technology`)
- 5 step process visualization
- Numbered cards with descriptions
- Hover animations
- Light gray background

### Components Section (`#features`)
- 6-card grid layout
- Emoji icons (can be replaced with photos)
- Technical specifications
- Hover effects with shadow/lift

### Results Section (`#results`)
- 3-card result metrics display
- Comparison table
- Performance highlights
- Light background

### Sustainability Section
- Green gradient background
- 4-item grid
- Highlights environmental benefits
- White text overlay

### Contact Section (`#contact`)
- Centered layout
- Call-to-action buttons
- Contact information card
- Blue accent border

### Footer
- Dark background
- Company info
- University attribution
- Copyright notice

---

## 📱 Responsive Behavior

### Desktop (1024px+)
```
Navbar: Full width with all links visible
Hero: 2-column grid (text | image)
Stats: 4-column grid
About: 2-column grid (text | image)
Technology: 5-column grid
Components: 3-column grid
Results: 3-column grid
Sustainability: 4-column grid
```

### Tablet (768px - 1023px)
```
Navbar: Full width with reduced spacing
Hero: 2-column (adjusted gap)
Stats: 2-column grid
About: Stacked vertically
Technology: 2-column grid
Components: 2-column grid
Results: 2-column grid
Sustainability: 2-column grid
```

### Mobile (Below 768px)
```
Navbar: Hamburger menu appears
Hero: 1-column (stacked vertically)
Stats: 1-column
About: 1-column (text, then image)
Technology: 1-column
Components: 1-column
Results: 1-column
Sustainability: 1-column
Buttons: Full width
```

---

## 🎯 CSS Class Structure

```
Root Styles
├── navbar (sticky header)
│   ├── nav-container
│   ├── logo
│   ├── nav-links
│   ├── nav-link
│   └── menu-toggle
│
├── hero (#home)
│   ├── hero-content
│   │   ├── hero-title
│   │   ├── hero-subtitle
│   │   ├── hero-description
│   │   └── hero-buttons
│   └── hero-image
│       └── image-placeholder
│
├── stats
│   ├── stats-container
│   └── stat-card
│
├── about (#about)
│   ├── about-content
│   │   ├── about-text
│   │   └── about-image
│   └── highlight-box
│
├── technology (#technology)
│   ├── process-steps
│   └── step
│       ├── step-number
│       └── (h3, p content)
│
├── components (#features)
│   ├── components-grid
│   └── component-card
│       ├── component-icon
│       ├── h3
│       └── p
│
├── results (#results)
│   ├── results-grid
│   ├── result-card
│   │   ├── result-metric
│   │   ├── result-label
│   │   └── result-value
│   └── comparison
│       └── comparison-table
│
├── sustainability
│   ├── sustainability-content
│   └── sustainability-item
│
├── contact (#contact)
│   ├── contact-buttons
│   └── contact-info
│
└── footer
    └── footer-content
```

---

## 🎨 Color Palette

### Light Mode
- **Primary:** #1e40af (Blue)
- **Primary Light:** #3b82f6 (Light Blue)
- **Secondary:** #10b981 (Green)
- **Accent:** #f59e0b (Gold/Amber)
- **Text:** #1f2937 (Dark Gray)
- **Text Light:** #6b7280 (Light Gray)
- **Background:** #ffffff (White)
- **Background Light:** #f9fafb (Off-white)

### Dark Mode
- **Primary:** #60a5fa (Light Blue)
- **Primary Light:** #93c5fd (Lighter Blue)
- **Secondary:** #34d399 (Light Green)
- **Accent:** #fbbf24 (Light Gold)
- **Text:** #f3f4f6 (Off-white)
- **Text Light:** #d1d5db (Light Gray)
- **Background:** #111827 (Dark)
- **Background Light:** #1f2937 (Slightly lighter dark)

---

## 🔄 Scroll Animations

- Cards fade in (opacity 0 → 1) as you scroll into view
- Smooth scroll behavior when clicking nav links
- Hover effects on buttons and cards
- Active navigation link highlights current section

---

## 📝 Text Content Sources

All text content comes directly from your `IMAGE_GUIDE.md` file and includes:
- Project overview
- Technical specifications
- Experimental results
- Component descriptions
- Process steps
- Sustainability benefits

---

## ✅ Feature Checklist

- [x] Responsive design (mobile, tablet, desktop)
- [x] Navigation with smooth scrolling
- [x] Hero section with CTA
- [x] Statistics display
- [x] About section with highlights
- [x] 5-step process visualization
- [x] 6-component grid
- [x] Experimental results display
- [x] Comparison table
- [x] Sustainability section
- [x] Contact section
- [x] Footer
- [x] Light/Dark mode support
- [x] Mobile menu toggle
- [x] Scroll animations
- [x] Hover effects
- [x] Image placeholders with guides
- [x] Accessibility features

---

## 🚀 Next Steps

1. **Add Images:** See `IMAGE_GUIDE.md`
2. **Customize Colors:** Edit CSS variables in `src/style.css`
3. **Update Contact Info:** Change email/address in footer
4. **Deploy:** Choose hosting platform and launch
5. **Track Analytics:** Add Google Analytics if desired

---

**Website is fully functional and ready to showcase your innovation! 🌊**
