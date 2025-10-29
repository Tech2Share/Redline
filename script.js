// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.scroll-animate');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in'); // Add fade-in animation when the element enters the viewport
                    observer.unobserve(entry.target); // Stop observing after animation is triggered
                }
            });
        }, {
            threshold: 0.1 // Trigger animation when 10% of the element is visible
        });

        elements.forEach(element => {
            observer.observe(element); // Observe each element that needs to be animated
        });
    };

    // Initialize animations
    animateOnScroll();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Scroll to the start of the element
                });
            }
        });
    });
});
