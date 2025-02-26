document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for card animations
    const cards = document.querySelectorAll('.experience-card');
    const timelineBar = document.querySelector('.timeline-progress-bar');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('visible');
                
                // Update timeline progress based on visible cards
                updateTimelineProgress();
                
                // Add subtle pulse animation to the year badge
                const yearBadge = entry.target.querySelector('.card-year span');
                yearBadge.style.animation = 'pulseGlow 2s infinite';
                
                // Add subtle pulse animation to company logo
                const logo = entry.target.querySelector('.company-logo');
                logo.style.animation = 'pulseGlow 2s 0.5s infinite';
            }
        });
    }, observerOptions);
    
    function updateTimelineProgress() {
        // Count how many cards are visible
        const totalCards = cards.length;
        const visibleCards = document.querySelectorAll('.experience-card.visible').length;
        
        // Update the timeline progress
        const progressPercentage = (visibleCards / totalCards) * 100;
        timelineBar.style.height = `${progressPercentage}%`;
    }
    
    // Observe each card
    cards.forEach((card, index) => {
        // Set initial state
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        
        // Set transition delay based on card index
        card.style.transitionDelay = `${0.2 * index}s`;
        
        // Start observing
        observer.observe(card);
    });
    
    // Hover effects for card elements
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add a subtle background effect
            card.querySelector('.card-content').style.background = 'linear-gradient(to right, #ffffff, #f8f9fa)';
            
            // Scale up the achievements slightly
            card.querySelectorAll('.achievements li').forEach(item => {
                item.style.transform = 'translateX(5px)';
            });
        });
        
        card.addEventListener('mouseleave', function() {
            // Remove the subtle background effect
            card.querySelector('.card-content').style.background = '';
            
            // Scale down the achievements
            card.querySelectorAll('.achievements li').forEach(item => {
                item.style.transform = 'translateX(0)';
            });
        });
    });
    
    // Add mouse parallax effect to the section background
    const section = document.querySelector('.experience-section');
    section.addEventListener('mousemove', function(e) {
        const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
        const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
        
        section.style.backgroundPosition = `${moveX}px ${moveY}px`;
    });
    
    // Add animated skill tags on hover
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });
    });
});