// ============================================
// REHAN NADAF — NEON CYBERPUNK PORTFOLIO JS
// Interactive · Animated · Immersive
// ============================================

(function() {
  'use strict';

  // ---------- MOBILE MENU TOGGLE ----------
  const menuToggle = document.getElementById('menuToggleNeon');
  const navLinks = document.getElementById('navLinksNeon');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navLinks.classList.toggle('active');
      
      // Animate hamburger icon
      const icon = menuToggle.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bolt');
        icon.classList.add('fa-times');
        icon.style.color = '#ff2d75';
        icon.style.filter = 'drop-shadow(0 0 15px #ff2d75)';
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bolt');
        icon.style.color = '#00f0ff';
        icon.style.filter = 'drop-shadow(0 0 15px #00f0ff)';
      }
    });

    // Close menu when clicking on links
    document.querySelectorAll('.nav-links-neon a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bolt');
        icon.style.color = '#00f0ff';
        icon.style.filter = 'drop-shadow(0 0 15px #00f0ff)';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bolt');
        icon.style.color = '#00f0ff';
        icon.style.filter = 'drop-shadow(0 0 15px #00f0ff)';
      }
    });
  }

  // ---------- SCROLL REVEAL ANIMATION (Intersection Observer) ----------
  const revealSections = document.querySelectorAll('.fade-section-neon, section');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Add stagger effect to cards within sections
        const cards = entry.target.querySelectorAll('.achievement-neon-card, .cert-neon-card, .project-neon-card, .skill-chip');
        cards.forEach((card, index) => {
          card.style.transitionDelay = `${index * 0.08}s`;
        });
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealSections.forEach(section => {
    section.classList.add('fade-section-neon');
    revealObserver.observe(section);
  });

  // Trigger initial check for visible sections on load
  window.addEventListener('load', () => {
    revealSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        section.classList.add('visible');
      }
    });
  });

  // ---------- SMOOTH SCROLL FOR ANCHOR LINKS ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        const offsetTop = targetElement.offsetTop - 80;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---------- ACTIVE NAV LINK HIGHLIGHT ON SCROLL ----------
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavOnScroll() {
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-links-neon a').forEach(link => {
          link.style.color = '#8890c0';
          link.style.textShadow = 'none';
          
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.style.color = '#ffffff';
            link.style.textShadow = '0 0 20px #00f0ff, 0 0 40px #ff2d75';
            link.style.borderBottomColor = '#00f0ff';
          } else {
            link.style.borderBottomColor = 'transparent';
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);

  // ---------- PARALLAX EFFECT ON HERO VISUAL ----------
  const heroVisual = document.querySelector('.neon-shape');
  
  if (heroVisual) {
    window.addEventListener('mousemove', function(e) {
      const { clientX, clientY } = e;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      const moveX = (clientX - windowWidth / 2) * 0.02;
      const moveY = (clientY - windowHeight
