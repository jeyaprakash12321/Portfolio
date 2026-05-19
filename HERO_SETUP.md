# Premium Hero Section - Setup Guide

## ✨ What's New

Your hero section has been enhanced with world-class premium animations featuring:

### 🎭 Name Animation (PremiumNameHero)
- **Letter-by-letter animation** with staggered sequencing
- **Smooth fade + upward motion** with rotation on entrance
- **Animated gradient text** flowing through colors (blue → purple → pink → orange)
- **Glowing neon effect** with pulsing glow
- **Shimmer overlay** that flows across the text
- **Floating motion** after reveal (gentle up/down bobbing)
- **Hover interaction** - each character elevates on hover with elastic bounce-back
- **Mouse-follow tilt** - subtle 3D rotation based on mouse position
- **Cinematic timing** optimized for premium feel

### 🖼️ Profile Image Section (AnimatedProfileImage)
- **Floating animation** - gentle up/down motion
- **Rotating gradient ring** - conic gradient that rotates 360°
- **Glow pulse effect** - breathing neon glow
- **Glassmorphism styling** - frosted glass effect with blur
- **Holographic shimmer** - moving light effects
- **3D tilt interaction** - rotates based on mouse position
- **Floating particles** - 6 animated particles orbiting the image
- **Soft shadow overlay** - elegant depth
- **Parallax motion** - subtle internal movement on hover

## 📁 File Structure

```
src/components/
├── hero/
│   ├── PremiumNameHero.tsx       # Animated name component
│   ├── AnimatedProfileImage.tsx   # Animated profile image
│   └── index.ts                  # Exports
└── sections/
    └── HeroSection.tsx           # Updated main hero section
```

## 🖼️ Setting Up Your Profile Image

### Step 1: Add Your Profile Image
1. **Place your image** in `/public/` folder
2. **Name it** `profile.jpg` (or update the path in `src/data/portfolio.ts`)
3. **Image specifications:**
   - Square format (recommended: 1:1 aspect ratio)
   - Resolution: 500x500px minimum, 1000x1000px recommended
   - Format: JPG, PNG, or WebP
   - File size: < 500KB

### Step 2: Update the Image Path (if needed)
Edit `src/data/portfolio.ts`:
```typescript
export const portfolioData = {
  name: 'Jeyaprakash Murugesan',
  profileImage: '/profile.jpg', // ← Update this path if different
  // ... rest of config
};
```

### Step 3: Placeholder Usage
Currently, the profile image is set to `/profile.jpg`. If this file doesn't exist, you'll see a broken image placeholder. Replace it with your actual profile image.

## 🎨 Customization

### Change Colors
Edit the gradient colors in:
- **PremiumNameHero.tsx** (lines with `from-blue-500`, `via-purple-500`, etc.)
- **AnimatedProfileImage.tsx** (same color definitions)

Example:
```typescript
backgroundImage: 'linear-gradient(135deg, rgb(255, 0, 0), rgb(0, 255, 0), ...)'
```

### Adjust Animation Speed
```typescript
// In PremiumNameHero.tsx
animate={{
  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
}}
transition={{
  duration: 4, // ← Change this (in seconds)
  repeat: Infinity,
  ease: 'linear',
}}
```

### Modify Floating Motion
```typescript
// In AnimatedProfileImage.tsx
animate={{
  y: [0, -20, 0], // ← Adjust height (px)
}}
transition={{
  duration: 5, // ← Adjust speed (seconds)
  repeat: Infinity,
  ease: 'easeInOut',
}}
```

### Particle Count
Edit `AnimatedProfileImage.tsx`:
```typescript
{[0, 1, 2, 3, 4, 5].map((i) => ( // ← Add/remove numbers
  <ParticleOrb key={i} delay={i} />
))}
```

## 🎬 Animation Performance

### GPU Optimization
All animations use:
- ✅ Transform and opacity (GPU accelerated)
- ✅ GSAP for complex interactions
- ✅ Framer Motion for entrance animations
- ❌ Avoid layout shifts (paint-free)

### Browser Support
- ✅ Chrome/Edge (full support)
- ✅ Firefox (full support)
- ✅ Safari (full support with -webkit prefixes)
- ✅ Mobile browsers (optimized)

## 📱 Responsive Design

### Desktop Layout
- Name on left (70% width)
- Profile image on right (30% width)
- Full animations enabled

### Mobile Layout
- Name centered on top
- Profile image below (full width, centered)
- Touch-optimized interactions
- Animations scaled down for performance

## 🔧 Configuration

### Hero Component Props
**PremiumNameHero:**
```typescript
<PremiumNameHero name="Jeyaprakash Murugesan" />
```

**AnimatedProfileImage:**
```typescript
<AnimatedProfileImage
  imageUrl="/profile.jpg"
  alt="Jeyaprakash Murugesan"
/>
```

## 🚀 Performance Tips

1. **Image Optimization**: Ensure profile image is compressed
2. **Lazy Loading**: Image uses `priority` for above-fold content
3. **Motion Reduction**: Respects `prefers-reduced-motion` (add if needed)
4. **GPU Acceleration**: All animations use transform/opacity

## 🎯 Next Steps

1. ✅ Replace `/profile.jpg` with your actual image
2. ✅ Test on desktop and mobile
3. ✅ Adjust colors/timing to match your brand
4. ✅ Customize the animations to your preference
5. ✅ Deploy and celebrate! 🎉

## 📝 Component Props Reference

### HeroSection
No props required - uses `portfolioData` from `src/data/portfolio.ts`

### PremiumNameHero
| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | The name to display with letter animations |

### AnimatedProfileImage
| Prop | Type | Description |
|------|------|-------------|
| `imageUrl` | `string` | Path to the profile image |
| `alt` | `string` | Alt text for accessibility |

## 🐛 Troubleshooting

**Issue**: Image not showing
- **Solution**: Check that `/public/profile.jpg` exists and path is correct in `portfolio.ts`

**Issue**: Animations laggy on mobile
- **Solution**: Reduce particle count or animation complexity for smaller screens

**Issue**: Name text looks blurry
- **Solution**: Ensure font-smoothing is applied (already included in globals.css)

**Issue**: Colors not showing in gradient
- **Solution**: Check that `profileImage` has proper Image component sizing

## 🎓 Animation Libraries Used

- **Framer Motion**: Entrance animations and staggered sequences
- **GSAP**: Advanced mouse interactions and smooth tweens
- **CSS Keyframes**: Continuous looping effects
- **Tailwind CSS**: Responsive classes and styling

---

Enjoy your premium hero section! 🚀✨
