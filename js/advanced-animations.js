// Advanced animations using GSAP
document.addEventListener('DOMContentLoaded', function() {
    // Load GSAP from CDN
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js', function() {
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js', function() {
            initGSAPAnimations();
        });
    });
});

// Helper function to load scripts dynamically
function loadScript(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

// Initialize GSAP animations
function initGSAPAnimations() {
    if (typeof gsap === 'undefined') {
        console.error('GSAP not loaded');
        return;
    }
    
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animation
    animateHero();
    
    // About section animation
    animateAbout();
    
    // Projects animation
    animateProjects();
    
    // Testimonials animation
    animateTestimonials();
    
    // Skills animation
    animateSkills();
    
    // Contact section animation
    animateContact();
    
    // Floating elements
    createFloatingElements();
}

// Hero section animations
function animateHero() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    const heroContent = heroSection.querySelector('.container');
    const heroElements = heroContent.children;
    
    gsap.fromTo(
        heroElements, 
        { y: 50, opacity: 0 },
        { 
            y: 0, 
            opacity: 1, 
            stagger: 0.2, 
            duration: 1, 
            ease: "power3.out",
            onComplete: function() {
                // Add a subtle floating animation to the CTA button
                const ctaButton = heroSection.querySelector('.btn');
                if (ctaButton) {
                    gsap.to(ctaButton, {
                        y: "-8px",
                        duration: 1.5,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    });
                }
            }
        }
    );
}

// About section animations
function animateAbout() {
    const aboutSection = document.querySelector('.about');
    if (!aboutSection) return;
    
    // Animate about image
    gsap.from('.about-img img', {
        scrollTrigger: {
            trigger: '.about-img',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
    
    // Animate about text paragraphs
    gsap.from('.about-text p', {
        scrollTrigger: {
            trigger: '.about-text',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
    });
    
    // Animate skill tags with a staggered entrance
    gsap.from('.skill-tags .skill-tag', {
        scrollTrigger: {
            trigger: '.skills',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.5,
        ease: "back.out(1.7)"
    });
}

// Projects animation
function animateProjects() {
    // Project section title
    gsap.from('.projects .section-title', {
        scrollTrigger: {
            trigger: '.projects',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power2.out"
    });
    
    // Project cards with staggered animation
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.project-grid',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out"
    });
    
    // Commercial project cards
    gsap.from('.commercial-project-card', {
        scrollTrigger: {
            trigger: '.commercial-projects',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        scale: 0.9,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.4)"
    });
}

// Testimonials animation
function animateTestimonials() {
    gsap.from('.testimonial-item.active', {
        scrollTrigger: {
            trigger: '.testimonials',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.out"
    });
}

// Skills animation
function animateSkills() {
    // Create a timeline for the skills animation
    const skillsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.skills',
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
    
    // Animate the skills title first
    skillsTimeline.from('.skills h3', {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out"
    });
    
    // Then animate each skill tag with a staggered effect
    skillsTimeline.from('.skill-tag', {
        opacity: 0,
        y: 15,
        stagger: 0.05,
        duration: 0.4,
        ease: "back.out(1.7)"
    }, "-=0.2");
}

// Contact section animation
function animateContact() {
    // Contact section title
    gsap.from('.contact .section-title', {
        scrollTrigger: {
            trigger: '.contact',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: "power2.out"
    });
    
    // Contact info
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact-container',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power2.out"
    });
    
    // Contact form
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-container',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: "power2.out"
    });
    
    // Form elements
    gsap.from('.form-group', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out"
    });
}

// Create floating decorative elements
function createFloatingElements() {
    // Only create floating elements on larger screens
    if (window.innerWidth < 768) return;
    
    // Create container for floating elements
    const floatingContainer = document.createElement('div');
    floatingContainer.className = 'floating-elements';
    floatingContainer.style.position = 'absolute';
    floatingContainer.style.top = '0';
    floatingContainer.style.left = '0';
    floatingContainer.style.width = '100%';
    floatingContainer.style.height = '100%';
    floatingContainer.style.overflow = 'hidden';
    floatingContainer.style.pointerEvents = 'none';
    floatingContainer.style.zIndex = '1';
    
    // Add floating container to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.position = 'relative';
        heroSection.appendChild(floatingContainer);
        
        // Create floating elements
        for (let i = 0; i < 10; i++) {
            createFloatingElement(floatingContainer);
        }
    }
}

// Helper function to create a single floating element
function createFloatingElement(container) {
    const element = document.createElement('div');
    
    // Random properties
    const size = 10 + Math.random() * 20;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const opacity = 0.1 + Math.random() * 0.3;
    
    // Styles
    element.style.position = 'absolute';
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.left = `${posX}%`;
    element.style.top = `${posY}%`;
    element.style.background = 'var(--accent-color)';
    element.style.opacity = opacity.toString();
    element.style.borderRadius = '50%';
    element.style.pointerEvents = 'none';
    
    container.appendChild(element);
    
    // Animate with GSAP
    gsap.to(element, {
        y: -100 - Math.random() * 100,
        x: 50 - Math.random() * 100,
        opacity: 0,
        duration: 5 + Math.random() * 10,
        ease: "power1.inOut",
        onComplete: function() {
            container.removeChild(element);
            createFloatingElement(container);
        }
    });
}