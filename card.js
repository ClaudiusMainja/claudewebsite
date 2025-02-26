  // Initialize GSAP
  gsap.registerPlugin(ScrollTrigger);

  // Hero section animations
  gsap.to(".hero-text", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5
  });

  gsap.to(".hero-image", {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.8
  });

  // Experience section animations
  gsap.to(".section-title", {
      scrollTrigger: {
          trigger: ".section-title",
          start: "top 80%",
      },
      opacity: 1,
      y: 0,
      duration: 1
  });

  // Experience cards staggered animation
  gsap.to(".experience-card", {
      scrollTrigger: {
          trigger: ".experience-grid",
          start: "top 80%",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2
  });

  // CTA section animation
  gsap.to(".cta-content", {
      scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%",
      },
      opacity: 1,
      y: 0,
      duration: 1
  });

  // Parallax effect for hero image
  gsap.to(".hero-image", {
      scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true
      },
      y: 100
  });

  //Cards code 
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll reveal animation to experience cards
    const cards = document.querySelectorAll('.experience-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});