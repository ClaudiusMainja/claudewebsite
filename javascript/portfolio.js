// Reveal animations
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    
    reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Custom cursor
const cursor = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
});

// GSAP animations
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined') {
        // Hero section grid items
        gsap.to('#grid-item-1', {
            x: 20, 
            y: 20,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
        
        gsap.to('#grid-item-2', {
            x: -20, 
            y: -20,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
        
        // Marquee animation
        gsap.to('.marquee', {
            x: '-50%',
            ease: 'none',
            duration: 20,
            repeat: -1
        });
        
        // Filter buttons hover effect
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                if (!btn.classList.contains('bg-orange-500')) {
                    gsap.to(btn, {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        duration: 0.3
                    });
                }
            });
            
            btn.addEventListener('mouseleave', () => {
                if (!btn.classList.contains('bg-orange-500')) {
                    gsap.to(btn, {
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        duration: 0.3
                    });
                }
            });
        });
    }
});