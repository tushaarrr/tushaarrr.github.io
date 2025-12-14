# ✦ Tushar Shandilya | Interactive Portfolio

> A cinematic, data-driven portfolio for a Data Scientist & AI Product Builder. 
> Built with React, TypeScript, Framer Motion, and Tailwind CSS.

## 🌟 Overview

This portfolio is designed to be more than a resume—it is an interactive experience. It features a "Glass & Light" aesthetic, utilizing high-performance animations, 3D tilt effects, and real-time generative backgrounds to showcase technical expertise in Data Science and AI.

## ✨ Key Features

- **Cinematic Hero Section**: Features a custom `MeshGradientBackground` with a hidden control panel (toggleable) to adjust colors, speed, and complexity of the fluid animation.
- **3D Interactive Skills**: The "Technical Arsenal" section uses physics-based mouse tracking to tilt cards in 3D space.
- **Story Mode**: A dedicated "Personal Story" full-screen overlay that focuses on the narrative journey rather than just bullet points.
- **Glassmorphism UI**: Custom `GlassCard` components with dynamic lighting borders and hover effects.
- **Responsive Design**: Fully fluid layout that adapts from mobile to ultra-wide monitors.
- **Performance Optimized**: Uses `Framer Motion` for hardware-accelerated animations and efficient React rendering.

## 🛠️ Technical Stack

- **Framework**: React 19 (TypeScript)
- **Styling**: Tailwind CSS (via CDN for lightweight setup)
- **Animations**: Framer Motion
- **Icons**: Lucide React & Simple Icons
- **Fonts**: Space Grotesk (Headers) & Inter (Body)

## 📂 Project Structure

```bash
/
├── index.html          # Entry point (Tailwind config embedded here)
├── index.tsx           # React Root
├── App.tsx             # Main Layout & Routing logic
├── constants.ts        # ⚡ CENTRAL CONFIG: All data lives here
├── types.ts            # TypeScript interfaces
└── components/         # Feature components
    ├── Hero.tsx        # Landing section with Mesh Generator
    ├── About.tsx       # Bio & Education
    ├── Experience.tsx  # Timeline
    ├── Projects.tsx    # Project Grid
    ├── Skills.tsx      # 3D Skill Grid
    ├── PersonalStory.tsx # Fullscreen narrative view
    └── ui/             # Reusable UI primitives
        ├── GlassCard.tsx      # 3D Tilt Cards
        ├── RevealBox.tsx      # Scroll reveal wrapper
        ├── SkillCard3D.tsx    # 3D Skill visualizer
        ├── TextReveal.tsx     # Character stagger effects
        └── Typewriter.tsx     # Typing effects
```

## 🚀 Customization

All personal data is decoupled from the UI logic. You can update the entire portfolio by modifying a single file.

### 1. Update Content
Open `constants.ts` to modify:
- **`SOCIAL_LINKS`**: Email, LinkedIn, Portfolio URL.
- **`EXPERIENCE_DATA`**: Job history, roles, and descriptions.
- **`PROJECT_DATA`**: Case studies, tech stacks, and GitHub links.
- **`SKILLS_DATA`**: Categories and icons for the Technical Arsenal.

### 2. Update Icons
The project uses:
- **Lucide React** for UI icons (arrows, user, etc.).
- **Simple Icons** (via CDN) or **Custom URLs** for brand logos in the Skills section.
    - To add a new skill, simply add its slug (e.g., `python`, `react`) or a direct image URL to `SKILLS_DATA`.

### 3. Visual Theme
The visual theme is controlled via Tailwind config in `index.html`.
- **Accent Color**: Change `colors.accent` (currently Deep Ink Blue `#407BBF`).
- **Background**: Change `colors.background` (currently `#000000`).

## 🎮 Hidden Features

**The Mesh Generator**: 
In the Hero section, there is a hidden interactive element.
- The background is a real-time generated SVG mesh.
- Click the **Sliders Icon** (bottom right of hero) to open the **Dev Controls**.
- You can change the color palette, animation speed, and mesh complexity in real-time.

## 📄 License

This project is open source. Feel free to use it as a template for your own portfolio!
