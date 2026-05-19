# 🎨 Premium Hero - Customization Cookbook

Quick reference for common customizations.

## 🎯 Change Animation Colors

### Update Name Gradient
Edit `src/components/hero/PremiumNameHero.tsx` around line 140:

**Current:**
```typescript
backgroundImage:
  'linear-gradient(135deg, rgb(148, 163, 255), rgb(168, 85, 247), rgb(236, 72, 153), rgb(251, 146, 60), rgb(59, 130, 246))',
```

**Examples:**

🔴 **Red to Orange (Warm):**
```typescript
'linear-gradient(135deg, rgb(239, 68, 68), rgb(249, 115, 22), rgb(251, 146, 60))'
```

🟢 **Green to Teal (Cool):**
```typescript
'linear-gradient(135deg, rgb(34, 197, 94), rgb(16, 185, 129), rgb(6, 182, 212))'
```

🔵 **Deep Blue:**
```typescript
'linear-gradient(135deg, rgb(30, 58, 138), rgb(59, 130, 246), rgb(14, 165, 233))'
```

### Update Profile Image Ring
Edit `src/components/hero/AnimatedProfileImage.tsx` around line 93:

**Current:**
```typescript
background:
  'conic-gradient(from 0deg, rgb(59, 130, 246), rgb(147, 51, 234), rgb(236, 72, 153), rgb(59, 130, 246))',
```

**Examples:**

🌈 **Rainbow:**
```typescript
'conic-gradient(from 0deg, rgb(239, 68, 68), rgb(251, 146, 60), rgb(34, 197, 94), rgb(59, 130, 246), rgb(147, 51, 234), rgb(239, 68, 68))'
```

💜 **Monochrome Purple:**
```typescript
'conic-gradient(from 0deg, rgb(147, 51, 234), rgb(168, 85, 247), rgb(196, 181, 253), rgb(147, 51, 234))'
```

---

## ⏱️ Adjust Animation Speeds

### Speed Up All Animations (Faster)
In **PremiumNameHero.tsx**:
```typescript
// Line ~79: Shimmer faster
animate={{
  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
}}
transition={{
  duration: 2, // Was 3 - now faster
  repeat: Infinity,
}}

// Line ~157: Faster shimmer overlay
transition={{
  duration: 2, // Was 3
  repeat: Infinity,
}}

// Line ~178: Name entrance faster
transition={{
  duration: 0.5, // Was 0.7
  delay: i * 0.05,
}}
```

In **AnimatedProfileImage.tsx**:
```typescript
// Line ~60: Floating faster
transition={{
  duration: 3, // Was 5
  repeat: Infinity,
}}

// Line ~143: Ring rotation faster
gsap.to(ringRef.current, {
  rotation: 360,
  duration: 6, // Was 8
  repeat: -1,
})
```

### Slow Down All Animations (Slower)
Increase all `duration` values by 1-2 seconds.

---

## 🎪 Adjust Animation Intensity

### Increase Character Lift Height (More Dramatic)
In **PremiumNameHero.tsx** line ~104:

**Current:**
```typescript
gsap.to(char, {
  y: -15, // Goes up 15px
  duration: 0.3,
})
```

**More Dramatic:**
```typescript
gsap.to(char, {
  y: -25, // Now goes up 25px
  duration: 0.3,
})
```

### Increase Floating Motion Range (More Noticeable)
In **AnimatedProfileImage.tsx** line ~60:

**Current:**
```typescript
animate={{
  y: [0, -20, 0], // Moves ±20px
}}
```

**More Motion:**
```typescript
animate={{
  y: [0, -35, 0], // Now ±35px
}}
```

### Increase 3D Tilt Angle (More Dramatic)
In **AnimatedProfileImage.tsx** lines ~38-39:

**Current:**
```typescript
const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), ...)
const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), ...)
```

**More Tilt:**
```typescript
const rotateX = useSpring(useTransform(mouseY, [-300, 300], [20, -20]), ...)
const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-20, 20]), ...)
```

---

## ✨ Customize Glows

### Make Glow Brighter
In **PremiumNameHero.tsx** lines ~85-89:

**Current:**
```typescript
filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.8))',
```

**Brighter:**
```typescript
filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 1))', // More intense
```

### Change Glow Color
Replace the color values:
- `rgba(168, 85, 247, 0.8)` → Purple glow (default)
- `rgba(59, 130, 246, 0.8)` → Blue glow
- `rgba(236, 72, 153, 0.8)` → Pink glow
- `rgba(251, 146, 60, 0.8)` → Orange glow

---

## 🎯 Add More Particles

In **AnimatedProfileImage.tsx** line ~134:

**Current:**
```typescript
{[0, 1, 2, 3, 4, 5].map((i) => (
  <ParticleOrb key={i} delay={i} />
))}
```

**More Particles:**
```typescript
{[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
  <ParticleOrb key={i} delay={i} />
))}
```

---

## 📱 Mobile-Specific Customization

### Disable 3D Tilt on Mobile
In **AnimatedProfileImage.tsx** line ~70:

```typescript
const handleMouseMove = (e: MouseEvent) => {
  if (!containerRef.current) return;

  // Add this check
  const isMobile = window.innerWidth < 768;
  if (isMobile) return; // Skip tilt on mobile

  // ... rest of code
};
```

### Reduce Particle Count on Mobile
In **AnimatedProfileImage.tsx** line ~134:

```typescript
const particleCount = window.innerWidth < 768 ? 3 : 6;
{[...Array(particleCount)].map((_, i) => (
  <ParticleOrb key={i} delay={i} />
))}
```

---

## 🎬 Preset Animation Styles

### "Minimal" (Subtle)
```typescript
// Use smaller values
y: -8 (instead of -15)
duration: 1.5 (instead of 0.7)
opacity changes: [0.3, 0.6] (subtle pulse)
particle count: 3 (instead of 6)
```

### "Cinematic" (Current - Recommended)
```typescript
// Balanced, premium feel
y: -15
duration: 0.7
Full particle effects
All animations enabled
```

### "Explosive" (Maximum)
```typescript
// High intensity
y: -25
duration: 0.4
rotate: -20 (instead of -10)
particle count: 8-12
All glows intensified
```

---

## 🌍 Preset Brand Colors

### Apple-Style (Gray + Accent)
```typescript
Gradient: gray-500 → slate-400 → blue-400
Ring: blue-400 → gray-300
Glow: blue-400
```

### Stripe-Style (Dark + Blue)
```typescript
Gradient: blue-600 → indigo-600 → purple-600
Ring: indigo-600 → blue-500
Glow: indigo-500
```

### Figma-Style (Purple + Pink)
```typescript
Gradient: purple-500 → pink-500 → red-500
Ring: purple-600 → pink-600
Glow: pink-500
```

### Dark Matter (Deep Dark + Cyan)
```typescript
Gradient: cyan-400 → blue-600 → slate-800
Ring: cyan-400 → blue-500
Glow: cyan-300
```

---

## 🔧 Advanced: GSAP Easing

Replace `ease: 'power2.out'` with:

```typescript
// Smooth easing
ease: 'power2.out'        // Default smooth exit
ease: 'power3.inOut'      // Slower, more elegant
ease: 'back.out'          // Bouncy (good for hover)
ease: 'elastic.out(1, 0.5)' // Spring effect

// No easing
ease: 'none'              // Linear

// Complex easing
ease: 'rough({clamp:false})'
ease: 'sine.inOut'
ease: 'quart.inOut'
```

---

## 📊 CSS Keyframe Timing

### Adjust Shimmer Speed
In `src/app/components.css` around line 74:

```css
@keyframes shimmerFlow {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

/* Then use with custom duration */
animation: shimmerFlow 2s ease-in-out infinite; /* Faster */
animation: shimmerFlow 5s ease-in-out infinite; /* Slower */
```

---

## 🎓 Common Customization Patterns

### Example 1: Warm Color Scheme
```typescript
// PremiumNameHero.tsx - Name colors
backgroundImage: 'linear-gradient(135deg, rgb(251, 146, 60), rgb(249, 115, 22), rgb(239, 68, 68))'

// AnimatedProfileImage.tsx - Ring colors
background: 'conic-gradient(from 0deg, rgb(251, 146, 60), rgb(249, 115, 22), rgb(239, 68, 68), rgb(251, 146, 60))'

// Glow color - both components
rgba(251, 146, 60, 0.8) // Orange glow
```

### Example 2: Fast & Snappy
```typescript
// All durations reduced by 30%
duration: 0.5 (was 0.7)
duration: 1.5 (was 2.1)
duration: 2 (was 3)

// Faster character stagger
delay: i * 0.03 (was 0.05)
```

### Example 3: Elegant & Slow
```typescript
// All durations increased by 50%
duration: 1.0 (was 0.7)
duration: 3.5 (was 2.3)
duration: 4.5 (was 3)

// Slower character stagger
delay: i * 0.08 (was 0.05)
```

---

## 🧪 Testing Changes

After making changes:

1. **Dev Mode**: `npm run dev` and view at `http://localhost:3000`
2. **Hot Reload**: Changes auto-update (except CSS sometimes needs refresh)
3. **Build**: `npm run build` to verify no errors
4. **Mobile**: Use DevTools device emulation or physical device

---

**Need more help?** Check:
- `IMPLEMENTATION_SUMMARY.md` - Technical details
- `HERO_SETUP.md` - Setup and troubleshooting
- Component files for inline comments

Happy customizing! 🎨✨
