// ======================================================
// GSAP & ScrollTrigger Setup - DOODLE CHARMS
// ======================================================

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
// ======================================================
// BRAND STORY SECTION — WHERE IT ALL BEGAN
// ======================================================

// Animate story heading - fade in + slide up
gsap.to('.story-header-brand h2', {
  scrollTrigger: {
    trigger: '#brand-story',
    start: 'top 80%',
    toggleActions: 'play none none none'
  },
  duration: 1,
  opacity: 1,
  y: 0,
  ease: 'power2.out',
  clearProps: 'transform'
});

// Set initial state for story heading
gsap.set('.story-header-brand h2', {
  opacity: 0,
  y: 30
});

// Staggered fade-in and slide-up for story cards
gsap.utils.toArray('.story-card').forEach((card, index) => {
  gsap.fromTo(card,
    {
      opacity: 0,
      y: 40,
      scale: 0.95
    },
    {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      delay: index * 0.15,
      ease: 'cubic-bezier(0.23, 1, 0.320, 1)'
    }
  );
});

// Parallax float effect for story cards on scroll
gsap.utils.toArray('.story-card').forEach((card) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false
    },
    y: -15,
    ease: 'power1.inOut'
  });
});

// ======================================================
// WHY DOODLE CHARMS SECTION — PREMIUM UPGRADE
// ======================================================

// Animate why section heading
gsap.set('.why h2', {
  opacity: 0,
  y: 30
});

gsap.to('.why h2', {
  scrollTrigger: {
    trigger: '.why',
    start: 'top 80%',
    toggleActions: 'play none none none'
  },
  duration: 1,
  opacity: 1,
  y: 0,
  ease: 'power2.out',
  clearProps: 'transform'
});

// Set initial state for why items
gsap.utils.toArray('.why-item').forEach((item) => {
  gsap.set(item, {
    opacity: 1,
    y: 0,
    scale: 1
  });

  // Hide text elements initially
  const h3 = item.querySelector('h3');
  const p = item.querySelector('p');
  const icon = item.querySelector('.why-icon');

  gsap.set([h3, p, icon], {
    opacity: 0,
    y: 20
  });
});

// Staggered scroll-based text fade in for why items - left to right
gsap.utils.toArray('.why-item').forEach((item, index) => {
  const h3 = item.querySelector('h3');
  const p = item.querySelector('p');
  const icon = item.querySelector('.why-icon');

  // Timeline for each card's content
  let cardTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.why',
      start: 'top 60%',
      toggleActions: 'play none none none'
    }
  });

  // Add animations to timeline with proper stagger and pause
  // Pause between each card: 0.6s (index * 0.8) creates the delay
  const cardDelay = index * 0.8;

  // Icon fade + scale
  cardTimeline.to(
    icon,
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: 'back.out(1.4)'
    },
    cardDelay
  );

  // Title fade + slide
  cardTimeline.to(
    h3,
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out'
    },
    cardDelay + 0.1
  );

  // Description text fade + subtle slide
  cardTimeline.to(
    p,
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power1.out'
    },
    cardDelay + 0.2
  );
});

// Subtle parallax float for why items
gsap.utils.toArray('.why-item').forEach((item) => {
  gsap.to(item, {
    scrollTrigger: {
      trigger: item,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false
    },
    y: -12,
    ease: 'power1.inOut'
  });
});

// ======================================================
// STATS STRIP SECTION — RISE ANIMATION
// ======================================================

// Set initial state for stats
gsap.utils.toArray('.stat').forEach((stat) => {
  gsap.set(stat, {
    opacity: 1,
    y: 0,
    scale: 1
  });

  // Hide text elements initially
  const h3 = stat.querySelector('h3');
  const p = stat.querySelector('p');

  gsap.set([h3, p], {
    opacity: 0,
    y: 30
  });
});

// Staggered scroll-based text fade in with rise for stats - left to right
gsap.utils.toArray('.stat').forEach((stat, index) => {
  const h3 = stat.querySelector('h3');
  const p = stat.querySelector('p');

  // Timeline for each stat's content
  let statTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.stats-strip',
      start: 'top 65%',
      toggleActions: 'play none none none'
    }
  });

  // Add animations to timeline with proper stagger and pause
  const statDelay = index * 0.8;

  // Number fade in + rise
  statTimeline.to(
    h3,
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out'
    },
    statDelay
  );

  // Description text fade in + rise
  statTimeline.to(
    p,
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power1.out'
    },
    statDelay + 0.15
  );
});

// ======================================================
// OUR STORY SECTION — ASCEND ANIMATION
// ======================================================

// Set initial state for timeline cards
gsap.utils.toArray('.timeline-card').forEach((card) => {
  gsap.set(card, {
    opacity: 1,
    y: 0
  });

  // Hide text elements initially
  const badge = card.querySelector('.year-badge');
  const title = card.querySelector('.timeline-title');
  const description = card.querySelector('.timeline-description');

  gsap.set([badge, title, description], {
    opacity: 0,
    y: 40
  });
});

// Staggered scroll-based ascend animation for timeline cards
gsap.utils.toArray('.timeline-card').forEach((card, index) => {
  const badge = card.querySelector('.year-badge');
  const title = card.querySelector('.timeline-title');
  const description = card.querySelector('.timeline-description');

  // Timeline for each card's content
  let cardTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.story-section',
      start: 'top 60%',
      toggleActions: 'play none none none'
    }
  });

  // Add animations to timeline with proper stagger and pause
  const cardDelay = index * 0.8;

  // Year badge ascend
  cardTimeline.to(
    badge,
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    },
    cardDelay
  );

  // Title ascend
  cardTimeline.to(
    title,
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out'
    },
    cardDelay + 0.1
  );

  // Description ascend
  cardTimeline.to(
    description,
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power1.out'
    },
    cardDelay + 0.2
  );
});

// ======================================================
// BREATHING HOVER EFFECT
// ======================================================

// Breathing hover effect enhancement
gsap.utils.toArray('.story-card, .why-item').forEach((element) => {
  element.addEventListener('mouseenter', function() {
    gsap.to(this, {
      duration: 0.4,
      boxShadow: '0 20px 50px rgba(255, 107, 157, 0.3)',
      ease: 'power2.out'
    });
  });

  element.addEventListener('mouseleave', function() {
    gsap.to(this, {
      duration: 0.4,
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
      ease: 'power2.out'
    });
  });
});

// ======================================================
// TESTIMONIALS SECTION — TYPEWRITER TEXT ANIMATION
// ======================================================

// Typewriter effect for testimonial quotes
gsap.utils.toArray('.testimonial-text').forEach((textElement, index) => {
  const originalText = textElement.textContent;
  const textLength = originalText.length;

  // Set initial state - empty text
  gsap.set(textElement, {
    opacity: 0
  });

  // Create typewriter animation timeline
  let typewriterTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.testimonials',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  });

  // Stagger each testimonial card with delay
  const cardDelay = index * 0.8;

  // First fade in the card elements (name, studio)
  const cardElement = textElement.closest('.testimonial-card');
  const nameElement = cardElement.querySelector('h4');
  const studioElement = cardElement.querySelector('.testimonial-studio');

  typewriterTimeline.to(
    nameElement,
    {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    },
    cardDelay
  );

  typewriterTimeline.to(
    studioElement,
    {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    },
    cardDelay + 0.1
  );

  // Typewriter effect for testimonial text
  let displayedText = '';
  typewriterTimeline.to(
    {},
    {
      duration: textLength * 0.05, // Speed of typewriter (0.05s per character)
      ease: 'none',
      onUpdate: function() {
        const progress = this.progress();
        const charsToShow = Math.floor(textLength * progress);
        displayedText = originalText.substring(0, charsToShow);
        textElement.textContent = displayedText;
      },
      onComplete: function() {
        textElement.textContent = originalText; // Ensure full text is shown
      }
    },
    cardDelay + 0.3
  );

  // Fade in the testimonial text while typing
  typewriterTimeline.to(
    textElement,
    {
      opacity: 1,
      duration: 0.3,
      ease: 'power1.out'
    },
    cardDelay + 0.2
  );
});

// ======================================================
// CINEMATIC SCROLL STORYTELLING
// ======================================================
// GLOBAL PARALLAX EFFECT — ENTIRE PAGE
// ======================================================

// Parallax effect for stats cards
gsap.utils.toArray('.stat').forEach((stat) => {
  gsap.to(stat, {
    scrollTrigger: {
      trigger: stat,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false
    },
    y: -12,
    ease: 'power1.inOut'
  });
});

// Parallax effect for timeline cards
gsap.utils.toArray('.timeline-card').forEach((card) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false
    },
    y: -12,
    ease: 'power1.inOut'
  });
});

// Parallax effect for collection cards
gsap.utils.toArray('.card').forEach((card) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false
    },
    y: -12,
    ease: 'power1.inOut'
  });
});

// Parallax effect for testimonial cards
gsap.utils.toArray('.testimonial-card').forEach((card) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false
    },
    y: -12,
    ease: 'power1.inOut'
  });
});

// ======================================================
// CINEMATIC SCROLL STORYTELLING
// ======================================================

// Reduce motion for users who prefer reduced animations
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  gsap.globalTimeline.timeScale(0.5);
}