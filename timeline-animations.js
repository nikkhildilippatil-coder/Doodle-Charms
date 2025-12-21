// ======================================================
// CINEMATIC TIMELINE - GSAP + ScrollTrigger + AOS
// Premium Smooth Animations
// ======================================================

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out-cubic',
  once: false,
  mirror: true
});

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ======================================================
// TIMELINE LINE FILL ANIMATION
// ======================================================

gsap.to('.timeline-line-fill', {
  scrollTrigger: {
    trigger: '.cinematic-timeline',
    start: 'top 50%',
    end: 'bottom 50%',
    scrub: 1.2,
    markers: false
  },
  height: '100%',
  ease: 'power1.inOut'
});

// ======================================================
// TIMELINE DOTS - SUBTLE GLOW ON ENTER VIEWPORT
// ======================================================

gsap.utils.toArray('.timeline-dot').forEach((dot, index) => {
  const dotInner = dot.querySelector('.dot-inner');

  gsap.from(dot, {
    scrollTrigger: {
      trigger: dot,
      start: 'center 80%',
      toggleActions: 'play none none none'
    },
    duration: 0.6,
    scale: 0,
    opacity: 0,
    ease: 'back.out'
  });

  // Subtle glow pulse when in viewport
  gsap.to(dotInner, {
    scrollTrigger: {
      trigger: dot,
      start: 'center 60%',
      end: 'center 40%',
      toggleActions: 'play none none none'
    },
    boxShadow: [
      'none',
      `0 0 30px rgba(212, 165, 212, 0.6)`,
      'none'
    ],
    duration: 1.5,
    repeat: -1,
    ease: 'sine.inOut'
  });
});

// ======================================================
// TIMELINE CARDS - PARALLAX EFFECT
// ======================================================

gsap.utils.toArray('.timeline-card').forEach((card) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top center',
      end: 'bottom center',
      scrub: 0.5
    },
    y: -30,
    opacity: 0.95,
    ease: 'none'
  });
});

// ======================================================
// CARD ACCENT LINE ANIMATION
// ======================================================

gsap.utils.toArray('.card-accent').forEach((accent) => {
  gsap.from(accent, {
    scrollTrigger: {
      trigger: accent,
      start: 'center 75%',
      toggleActions: 'play none none none'
    },
    duration: 0.8,
    width: '0px',
    opacity: 0,
    ease: 'power2.out'
  });
});

// ======================================================
// SMOOTH SCROLL REFRESH
// ======================================================

ScrollTrigger.addEventListener('refresh', () => {
  // Refresh all animations when layout changes
});

window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});

// Refresh on resize with debounce
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);
});

// ======================================================
// MOUSE INTERACTION - DOT HOVER EFFECT
// ======================================================

gsap.utils.toArray('.timeline-dot').forEach((dot) => {
  dot.addEventListener('mouseenter', () => {
    gsap.to(dot, {
      duration: 0.3,
      scale: 1.3,
      ease: 'power2.out'
    });
  });

  dot.addEventListener('mouseleave', () => {
    gsap.to(dot, {
      duration: 0.3,
      scale: 1,
      ease: 'power2.out'
    });
  });
});

// ======================================================
// CARD HOVER - LIFT & GLOW EFFECT
// ======================================================

gsap.utils.toArray('.timeline-card').forEach((card) => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      duration: 0.4,
      y: -12,
      boxShadow: '0 30px 60px rgba(212, 165, 212, 0.15)',
      ease: 'power2.out'
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      duration: 0.4,
      y: 0,
      boxShadow: '0 10px 40px rgba(31, 31, 31, 0.08)',
      ease: 'power2.out'
    });
  });
});

// ======================================================
// PERFORMANCE OPTIMIZATION
// ======================================================

// Reduce animation detail on lower-end devices
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  gsap.globalTimeline.timeScale(0.5);
  document.documentElement.style.setProperty('--animation-duration', '0.5s');
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});
