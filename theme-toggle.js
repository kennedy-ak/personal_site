// Improved Theme Toggle with Section Visibility Fix
document.addEventListener('DOMContentLoaded', function() {
    // Add theme toggle button to the body
    addThemeToggleButton();
    
    // Add page loader
    addPageLoader();

    // Set up theme functionality
    setupThemeToggle();
    
    // Set up scroll animations
    setupScrollAnimations();
    
    // Add the dark mode fixes CSS
    addDarkModeFixes();
    
    // Additional animations for hover effects
    setupHoverAnimations();
});

// Function to add theme toggle button
function addThemeToggleButton() {
    const button = document.createElement('button');
    button.className = 'theme-toggle';
    button.setAttribute('aria-label', 'Toggle dark/light mode');
    button.innerHTML = '<i class="fas fa-moon"></i>';
    document.body.appendChild(button);
}

// Function to add page loader
function addPageLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(loader);
    
    // Hide loader after page is loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('hidden');
        }, 500);
    });
}

// Add dark mode fixes CSS
function addDarkModeFixes() {
    const style = document.createElement('style');
    style.textContent = `
        /* Dark Mode Fixes for Specific Sections */
        [data-theme="dark"] .projects .section-title {
          color: #03dac6;
        }
        
        [data-theme="dark"] .projects .project-card {
          background-color: #2d2d2d;
          border: 1px solid rgba(3, 218, 198, 0.2);
        }
        
        [data-theme="dark"] .projects .project-content h3 {
          color: #bb86fc;
        }
        
        [data-theme="dark"] .projects .project-content p {
          color: #e0e0e0;
        }
        
        [data-theme="dark"] .projects .project-tag {
          background-color: rgba(187, 134, 252, 0.2);
          color: #bb86fc;
        }
        
        [data-theme="dark"] .projects .project-tag:hover {
          background-color: #bb86fc;
          color: #121212;
        }
        
        /* Fix for Commercial Projects Section */
        [data-theme="dark"] .commercial-projects {
          background-color: #1e1e1e;
        }
        
        [data-theme="dark"] .commercial-projects .section-title {
          color: #03dac6;
        }
        
        [data-theme="dark"] .commercial-projects .section-description {
          color: #b0b0b0;
        }
        
        [data-theme="dark"] .commercial-project-card {
          background-color: #2d2d2d;
        }
        
        [data-theme="dark"] .commercial-project-header h3 {
          color: #bb86fc;
        }
        
        [data-theme="dark"] .company-badge {
          background-color: rgba(0, 119, 204, 0.2);
          color: #03dac6;
        }
        
        [data-theme="dark"] .commercial-project-content p {
          color: #e0e0e0;
        }
        
        [data-theme="dark"] .result-item i {
          color: #03dac6;
        }
        
        [data-theme="dark"] .result-item p {
          color: #e0e0e0;
        }
        
        /* Fix for Skills Section */
        [data-theme="dark"] .skills h3 {
          color: #bb86fc;
        }
        
        [data-theme="dark"] .skill-tag {
          background: linear-gradient(135deg, #bb86fc, #03dac6);
          color: #121212;
          font-weight: 600;
        }
        
        /* General Dark Mode Fixes */
        [data-theme="dark"] .brand-item {
          background-color: #2d2d2d;
        }
        
        [data-theme="dark"] .slider-arrow {
          background-color: rgba(187, 134, 252, 0.3);
          color: #ffffff;
        }
        
        [data-theme="dark"] .slider-arrow:hover {
          background-color: rgba(187, 134, 252, 0.6);
        }
        
        [data-theme="dark"] .slider-dot {
          background-color: rgba(187, 134, 252, 0.3);
        }
        
        [data-theme="dark"] .slider-dot.active {
          background-color: #bb86fc;
        }
        
        /* Improve Text Contrast */
        [data-theme="dark"] .about-text p,
        [data-theme="dark"] .contact-form label,
        [data-theme="dark"] .footer-section p {
          color: #e0e0e0;
        }
        
        /* Fix Form Inputs */
        [data-theme="dark"] .form-control {
          background-color: #333333;
          color: #e0e0e0;
          border-color: rgba(187, 134, 252, 0.2);
        }
        
        [data-theme="dark"] .form-control:focus {
          border-color: #03dac6;
          box-shadow: 0 0 0 3px rgba(3, 218, 198, 0.2);
        }
        
        /* Fix Brand Sliders */
        [data-theme="dark"] .brands {
          background-color: #1e1e1e;
        }
        
        /* Fixed Testimonials */
        [data-theme="dark"] .testimonials {
          background-color: #1e1e1e;
        }
        
        [data-theme="dark"] .testimonial-item {
          background-color: #2d2d2d;
        }
        
        [data-theme="dark"] .testimonial-content p {
          color: #b0b0b0;
        }
        
        [data-theme="dark"] .author-info h4 {
          color: #bb86fc;
        }
        
        [data-theme="dark"] .author-info p {
          color: #b0b0b0;
        }
        
        /* Footer links */
        [data-theme="dark"] .footer-section ul li a {
          color: rgba(255, 255, 255, 0.7);
        }
        
        [data-theme="dark"] .footer-section ul li a:hover {
          color: #03dac6;
        }
        
        /* Project links */
        [data-theme="dark"] .project-links a {
          color: #ff4081;
        }
        
        [data-theme="dark"] .project-links a:hover {
          color: #bb86fc;
        }
        
        /* Fix for any element that might have display issues in dark mode */
        [data-theme="dark"] .project-card,
        [data-theme="dark"] .commercial-project-card,
        [data-theme="dark"] .skill-tag,
        [data-theme="dark"] .brand-item {
          display: flex !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        
        /* Ensure visibility of all sections in dark mode */
        [data-theme="dark"] .projects,
        [data-theme="dark"] .commercial-projects,
        [data-theme="dark"] .skills,
        [data-theme="dark"] .brands,
        [data-theme="dark"] .about-content,
        [data-theme="dark"] .testimonials {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }
        
        /* Ensure all text is visible */
        [data-theme="dark"] .projects *,
        [data-theme="dark"] .commercial-projects *,
        [data-theme="dark"] .skills * {
          color: var(--text-dark);
        }
    `;
    
    document.head.appendChild(style);
}

// Theme functionality
function setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;
    
    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    
    // Apply saved theme or detect system preference
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateThemeIcon('dark');
    }
    
    // Handle toggle click
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Apply new theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        updateThemeIcon(newTheme);
        
        // Ensure all sections are visible after theme change
        fixSectionVisibility();
    });
    
    // Listen for system preference changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            fixSectionVisibility();
        });
    }
    
    // Call once to ensure all sections are visible on initial load
    fixSectionVisibility();
}

// Update theme toggle icon
function updateThemeIcon(theme) {
    const themeToggle = document.querySelector('.theme-toggle i');
    if (!themeToggle) return;
    
    if (theme === 'dark') {
        themeToggle.className = 'fas fa-sun';
    } else {
        themeToggle.className = 'fas fa-moon';
    }
}

// Fix visibility issues in sections
function fixSectionVisibility() {
    // Make sure all section elements are visible
    const sections = [
        '.projects', 
        '.commercial-projects', 
        '.skills',
        '.brands',
        '.project-card',
        '.commercial-project-card',
        '.skill-tag',
        '.brand-item'
    ];
    
    sections.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.style.display = '';
            el.style.visibility = 'visible';
            el.style.opacity = '1';
        });
    });
    
    // Fix specific text elements that might have contrast issues
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.querySelectorAll('.projects .section-title').forEach(el => {
            el.style.color = '#03dac6';
        });
        
        document.querySelectorAll('.commercial-projects .section-title').forEach(el => {
            el.style.color = '#03dac6';
        });
        
        document.querySelectorAll('.skills h3').forEach(el => {
            el.style.color = '#bb86fc';
        });
        
        // Fix About Me section layout
        const aboutContent = document.querySelector('.about-content');
        if (aboutContent) {
            aboutContent.style.display = 'flex';
            aboutContent.style.flexDirection = 'row';
            
            const aboutImg = aboutContent.querySelector('.about-img');
            if (aboutImg) {
                aboutImg.style.flex = '1';
                aboutImg.style.marginBottom = '0';
            }
            
            const aboutText = aboutContent.querySelector('.about-text');
            if (aboutText) {
                aboutText.style.flex = '1';
                aboutText.style.paddingLeft = '50px';
            }
            
            // Responsive adjustment
            if (window.innerWidth <= 992) {
                aboutContent.style.flexDirection = 'column';
                if (aboutImg) aboutImg.style.marginBottom = '30px';
                if (aboutText) aboutText.style.paddingLeft = '0';
            }
        }
        
        // Fix Project Grid layout
        const projectGrid = document.querySelector('.project-grid');
        if (projectGrid) {
            projectGrid.style.display = 'grid';
            projectGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(350px, 1fr))';
            projectGrid.style.gap = '30px';
            
            // Responsive adjustment
            if (window.innerWidth <= 768) {
                projectGrid.style.gridTemplateColumns = '1fr';
            }
        }
        
        // Ensure project card images are displayed properly
        document.querySelectorAll('.project-img').forEach(img => {
            img.style.height = '200px';
        });
    }
}

// Scroll animations
function setupScrollAnimations() {
    // Add animation classes to elements
    addAnimationClasses();
    
    // Initial check for visible elements
    checkVisibleElements();
    
    // Listen for scroll events
    window.addEventListener('scroll', checkVisibleElements);
    
    // Trigger animations for elements in view on page load
    setTimeout(checkVisibleElements, 100);
}

// Add animation classes to elements
function addAnimationClasses() {
    // Section titles
    document.querySelectorAll('.section-title').forEach(title => {
        title.classList.add('fade-in');
    });
    
    // About section elements
    const aboutContent = document.querySelector('.about-content');
    if (aboutContent) {
        const aboutImg = aboutContent.querySelector('.about-img');
        const aboutText = aboutContent.querySelector('.about-text');
        
        if (aboutImg) aboutImg.classList.add('slide-in-left');
        if (aboutText) aboutText.classList.add('slide-in-right');
    }
    
    // Projects
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Commercial projects
    document.querySelectorAll('.commercial-project-card').forEach(card => {
        card.classList.add('scale-in');
    });
    
    // Testimonials
    document.querySelectorAll('.testimonial-item').forEach(item => {
        item.classList.add('fade-in');
    });
    
    // Contact section
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    
    if (contactInfo) contactInfo.classList.add('slide-in-left');
    if (contactForm) contactForm.classList.add('slide-in-right');
    
    // Skill tags with staggered animation
    document.querySelectorAll('.skill-tag').forEach((tag, index) => {
        tag.classList.add('fade-in');
        tag.style.transitionDelay = `${index * 0.05}s`;
    });
    
    // Brand logos
    document.querySelectorAll('.brand-item').forEach((item, index) => {
        item.classList.add('scale-in');
        item.style.transitionDelay = `${index * 0.1}s`;
    });
}

// Check which elements are visible in the viewport
function checkVisibleElements() {
    const animatedElements = document.querySelectorAll('.fade-in, .scale-in, .slide-in-left, .slide-in-right, .project-card');
    
    animatedElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('show');
        }
    });
}

// Helper function to check if element is in viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
        rect.bottom >= 0
    );
}

// Hover animations for various elements
function setupHoverAnimations() {
    // Project cards
    document.querySelectorAll('.project-card, .commercial-project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Navigation links with highlight effect
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = 'var(--accent-color)';
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '';
            this.style.transform = '';
        });
    });
    
    // Button hover effects
    document.querySelectorAll('.btn, .submit-btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            this.style.transition = 'all 0.3s ease';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}