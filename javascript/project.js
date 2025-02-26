document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Add preview mode class
    document.querySelectorAll('.project-img-container').forEach(container => {
      container.classList.add('preview-mode');
    });
    
    // Animate the section title
    gsap.to('.section-title', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
    
    // Animate category sections
    gsap.to('.category-section', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.portfolio-section',
        start: 'top 60%',
      }
    });
    
    // Animate project cards
    document.querySelectorAll('.projects-grid').forEach((grid, index) => {
      const cards = grid.querySelectorAll('.project-card');
      
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 80%',
        }
      });
    });
    
    // Add hover effect to project cards
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        gsap.to(this.querySelector('.project-overlay'), {
          opacity: 1,
          duration: 0.3
        });
      });
      
      card.addEventListener('mouseleave', function() {
        gsap.to(this.querySelector('.project-overlay'), {
          opacity: 0,
          duration: 0.3
        });
      });
    });
    
    // Add scroll-based parallax effect to images
    gsap.utils.toArray('.project-img-container').forEach(container => {
      const img = container.querySelector('.project-img');
      
      gsap.to(img, {
        y: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
      
      // Add image preview functionality
      container.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        const imgAlt = this.querySelector('img').alt;
        document.getElementById('previewImage').src = imgSrc;
        document.getElementById('previewImage').alt = imgAlt;
        document.getElementById('fullscreenPreview').classList.add('active');
      });
    });
    
    // Close preview on click
    document.getElementById('closePreview').addEventListener('click', function() {
      document.getElementById('fullscreenPreview').classList.remove('active');
    });
    
    // Close preview on Escape key press
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        document.getElementById('fullscreenPreview').classList.remove('active');
      }
    });
  });