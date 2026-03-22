/**
 * SpinCycle Rentals | Vanilla JS
 * Handles UI interactions, smooth scrolling, and scroll animations
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Navigation Toggle ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // --- 2. Sticky Navbar Effect ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 3. Scroll Reveal Animations (Intersection Observer) ---
    // Targets elements with animation classes to trigger them when they enter the viewport
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger CSS transition
                entry.target.classList.add('visible');
                // Unobserve once animated to prevent repeating
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .slide-right, .slide-left');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // --- 4. Simple Form/Apply button stub ---
    // In a real app, this would open a modal or navigate to Stripe
    const applyButtons = document.querySelectorAll('a[href="#apply"], .apply-box button');
    
    applyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(btn.tagName === 'BUTTON') {
                e.preventDefault();
                alert('In production, this would open the Stripe payment flow or the intake form!');
            }
        });
    });
});
    // --- 5. FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        if (questionBtn) {
            questionBtn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other items first
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                // Toggle clicked item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

