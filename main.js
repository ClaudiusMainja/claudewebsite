

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', () => {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
    });

    // Scroll Animation
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeInOnScroll = () => {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                element.classList.add('visible');
            }
        });
    };

    document.addEventListener('DOMContentLoaded', function() {
            // Add page transition class
            document.body.classList.add('page-transition');
            
            // Highlight current page in navigation
            const currentPath = window.location.pathname;
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('active');
                    link.querySelector('span:last-child').classList.add('w-full');
                }
            });
        });

    // Initial check for elements in view
    fadeInOnScroll();

    // Listen for scroll events
    window.addEventListener('scroll', fadeInOnScroll);

    // Header Scroll Effect
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('shadow-lg');
            header.style.transform = 'translateY(0)';
        } else if (currentScroll > lastScroll) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.classList.add('shadow-lg');
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });


    // Active Navigation Link Highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-blue-600');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('text-blue-600');
            }
        });
    });

// Deferred Loading for Performance -->

    // Lazy load images
    document.addEventListener('DOMContentLoaded', () => {
        const images = document.querySelectorAll('img[data-src]');

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    });

      // Custom cursor
      const cursorDot = document.getElementById('cursor-dot');
      const cursorOutline = document.getElementById('cursor-outline');
      
      window.addEventListener('mousemove', (e) => {
          const posX = e.clientX;
          const posY = e.clientY;
          
          cursorDot.style.left = `${posX}px`;
          cursorDot.style.top = `${posY}px`;
          
          // Add some delay to the outline for smooth effect
          setTimeout(() => {
              cursorOutline.style.left = `${posX}px`;
              cursorOutline.style.top = `${posY}px`;
          }, 50);
      });