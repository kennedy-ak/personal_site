  // Main script wrapped in a single DOMContentLoaded event listener
  document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    setupMobileMenu();
    
    // Smooth scrolling for navigation
    setupSmoothScrolling();
    
    // Contact form submission
    setupContactForm();
    
    // Testimonial slider
    setupTestimonialSlider();
    
    // Commercial Projects sliders
    setupProjectSliders();
    
    // Brand slider setup
    setupBrandSlider();
    
    // Add navigation links
    updateNavigation();
});

// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (!mobileMenuBtn || !nav) return;
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        // Toggle between menu and close icons
        const icon = this.querySelector('i');
        if (!icon) return;
        
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.mobile-menu-btn') && 
            !event.target.closest('nav') && 
            nav.classList.contains('active')) {
            nav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    // Close menu when window is resized above mobile breakpoint
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && nav.classList.contains('active')) {
            nav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
}

// Smooth scrolling functionality
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (!targetId) return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking a link
                const nav = document.querySelector('nav');
                const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    // Also update the icon when closing via navigation
                    const icon = mobileMenuBtn?.querySelector('i');
                    if (icon && icon.classList.contains('fa-times')) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });
    });
}

// Contact form handling
function setupContactForm() {
    const contactForm = document.getElementById("contact-form");
    if (!contactForm) return;
    
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const form = e.target;

        const data = {
            name: form.name?.value || '',
            email: form.email?.value || '',
            subject: form.subject?.value || '',
            message: form.message?.value || ''
        };

        try {
            const response = await fetch("https://formspree.io/f/mblgpzzy", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert("Thank you! Your message has been sent.");
                form.reset();
            } else {
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            alert("An error occurred. Please check your connection and try again.");
        }
    });
}

// Testimonial slider functionality
function setupTestimonialSlider() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.testimonial-slider .dot');
    
    if (!testimonialItems.length || !dots.length) return;
    
    let currentSlide = 0;
    let slideInterval;
    
    // Function to show a specific slide
    function showSlide(index) {
        // Make sure index is within bounds
        if (index < 0) {
            index = testimonialItems.length - 1;
        } else if (index >= testimonialItems.length) {
            index = 0;
        }
        
        // Hide all testimonials
        testimonialItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Deactivate all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the selected testimonial and activate its dot
        testimonialItems[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    // Add click event to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoSlide();
        });
    });
    
    // Start auto-rotation
    function startAutoSlide() {
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }
    
    // Reset auto-rotation
    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }
    
    // Initialize first slide and auto-rotation
    showSlide(0);
    startAutoSlide();
    
    // Pause auto-rotation when hovering over testimonials
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        testimonialSlider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        testimonialSlider.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    }
}

// Commercial Projects sliders
function setupProjectSliders() {
    const projectSliders = document.querySelectorAll('.project-slider');
    
    projectSliders.forEach((slider) => {
        // Get elements
        const slides = slider.querySelectorAll('.project-slide');
        const dots = slider.querySelectorAll('.slider-dot');
        const prevBtn = slider.querySelector('.slider-arrow.prev');
        const nextBtn = slider.querySelector('.slider-arrow.next');
        
        if (!slides.length) return;
        
        let currentSlide = 0;
        let slideInterval;
        
        // Function to show a specific slide
        function showSlide(index) {
            // Validate index
            if (index < 0) {
                index = slides.length - 1;
            } else if (index >= slides.length) {
                index = 0;
            }
            
            // Hide all slides and deactivate all dots
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Show the selected slide and activate its dot
            slides[index].classList.add('active');
            if (dots[index]) dots[index].classList.add('active');
            
            // Update current slide index
            currentSlide = index;
        }
        
        // Set up event listeners for controls
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                showSlide(currentSlide - 1);
                resetAutoSlide();
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                showSlide(currentSlide + 1);
                resetAutoSlide();
            });
        }
        
        // Set up event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                resetAutoSlide();
            });
        });
        
        // Start auto-rotation
        function startAutoSlide() {
            slideInterval = setInterval(() => {
                showSlide(currentSlide + 1);
            }, 5000);
        }
        
        // Reset auto-rotation
        function resetAutoSlide() {
            clearInterval(slideInterval);
            startAutoSlide();
        }
        
        // Initialize first slide and auto-rotation
        showSlide(0);
        startAutoSlide();
        
        // Pause auto-rotation when hovering over slider
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        slider.addEventListener('mouseleave', () => {
            startAutoSlide();
        });
    });
}

// Brand slider setup
function setupBrandSlider() {
    const brandTrack = document.querySelector('.brand-track');
    
    if (!brandTrack) return;
    
    // Clone the brand items to create an infinite loop effect
    const brandItems = document.querySelectorAll('.brand-item');
    if (!brandItems.length) return;
    
    brandItems.forEach(item => {
        const clone = item.cloneNode(true);
        brandTrack.appendChild(clone);
    });
}

// Update navigation links
function updateNavigation() {
    // Update main navigation
    const navContainer = document.querySelector('nav ul');
    if (navContainer) {
        // Find the Projects link to insert after it
        const projectsLi = Array.from(navContainer.querySelectorAll('li')).find(
            li => li.querySelector('a[href="#projects"]')
        );
        
        if (projectsLi) {
            // Check if links already exist to prevent duplicates
            const existingCommercial = navContainer.querySelector('a[href="#commercial-projects"]');
            const existingBrands = navContainer.querySelector('a[href="#brands"]');
            
            if (!existingCommercial) {
                // Create new navigation items
                const commercialLi = document.createElement('li');
                commercialLi.innerHTML = '<a href="#commercial-projects">Commercial Projects</a>';
                projectsLi.insertAdjacentElement('afterend', commercialLi);
                
                if (!existingBrands) {
                    const brandsLi = document.createElement('li');
                    brandsLi.innerHTML = '<a href="#brands">Brands</a>';
                    commercialLi.insertAdjacentElement('afterend', brandsLi);
                }
            }
        }
    }
    
    // Update footer quick links
    const footerLinks = document.querySelector('.footer-section ul');
    if (footerLinks) {
        const projectsLi = Array.from(footerLinks.querySelectorAll('li')).find(
            li => li.querySelector('a[href="#projects"]')
        );
        
        if (projectsLi) {
            // Check if links already exist to prevent duplicates
            const existingCommercial = footerLinks.querySelector('a[href="#commercial-projects"]');
            const existingBrands = footerLinks.querySelector('a[href="#brands"]');
            
            if (!existingCommercial) {
                // Create new footer links
                const commercialLi = document.createElement('li');
                commercialLi.innerHTML = '<a href="#commercial-projects">Commercial Projects</a>';
                projectsLi.insertAdjacentElement('afterend', commercialLi);
                
                if (!existingBrands) {
                    const brandsLi = document.createElement('li');
                    brandsLi.innerHTML = '<a href="#brands">Brands</a>';
                    commercialLi.insertAdjacentElement('afterend', brandsLi);
                }
            }
        }
    }
    
    // Re-apply smooth scrolling to all links
    setupSmoothScrolling();
}