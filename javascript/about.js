  // Magnetic effect for elements
  document.querySelectorAll('.magnetic-element').forEach(element => {
    element.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        
        this.style.transform = `translate(${distanceX * 0.1}px, ${distanceY * 0.1}px)`;
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0, 0)';
    });
});

// Reveal animations on scroll
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);

// Trigger on page load
reveal();

// Initialize skill bars
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        
        // Use IntersectionObserver to trigger animation when visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 300);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(bar);
    });
}

initSkillBars();

// Initialize timeline cards
function initTimelineCards() {
    const timelineCards = document.querySelectorAll('.timeline-card');
    
    timelineCards.forEach(card => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        card.style.opacity = 1;
                        card.style.transform = 'translateY(0)';
                    }, 300);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(card);
    });
}

initTimelineCards();

// GSAP Animations
document.addEventListener('DOMContentLoaded', () => {
    // Remove loader
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
    
    // Hero section animation
    gsap.from('.hero-section h1', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2
    });
    
    gsap.from('.hero-section p', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4
    });
    
    gsap.from('.hero-section .hero-image', {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        delay: 0.6
    });
    
    // Scroll animations for sections
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.utils.toArray('section').forEach((section, i) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top 80%',
            onEnter: () => section.classList.add('visible')
        });
    });
});

    // Fade-in animation
    document.addEventListener('DOMContentLoaded', function() {
        const fadeElements = document.querySelectorAll('.fade-in');
        
        // Function to check if an element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
            );
        }
        
        // Function to handle scroll and show elements
        function handleScroll() {
            fadeElements.forEach(element => {
                if (isInViewport(element)) {
                    // Get delay attribute or use 0 as default
                    const delay = element.getAttribute('data-delay') || 0;
                    setTimeout(() => {
                        element.classList.add('appear');
                    }, delay);
                }
            });
        }
        
        // Initial check
        handleScroll();
        
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    });