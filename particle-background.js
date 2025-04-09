// Particle Background Animation
document.addEventListener('DOMContentLoaded', function() {
    // Create particle canvas for hero section
    createParticleBackground();
});

function createParticleBackground() {
    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    
    // Add canvas to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        // Ensure hero has position relative
        heroSection.style.position = 'relative';
        // Place the content above the canvas
        const heroContent = heroSection.querySelector('.container');
        if (heroContent) {
            heroContent.style.position = 'relative';
            heroContent.style.zIndex = '2';
        }
        // Insert canvas before the content
        heroSection.insertBefore(canvas, heroSection.firstChild);
        
        // Initialize particles
        initParticles();
    }
}

function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    
    // Listen for resize events
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Particle properties
    const particleCount = 100;
    const particles = [];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1,
            color: getRandomColor(),
            speedX: Math.random() * 0.5 - 0.25,
            speedY: Math.random() * 0.5 - 0.25,
            opacity: Math.random() * 0.5 + 0.3
        });
    }
    
    // Generate random colors based on theme
    function getRandomColor() {
        const theme = document.documentElement.getAttribute('data-theme');
        let colors;
        
        if (theme === 'dark') {
            colors = ['#bb86fc', '#03dac6', '#ff4081', '#ffffff'];
        } else {
            colors = ['#6200ea', '#03dac6', '#ff4081', '#00c853'];
        }
        
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Update particles
    function updateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw particles
        particles.forEach(particle => {
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.globalAlpha = particle.opacity;
            ctx.fill();
            
            // Move particle
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > canvas.width) {
                particle.speedX *= -1;
            }
            
            if (particle.y < 0 || particle.y > canvas.height) {
                particle.speedY *= -1;
            }
        });
        
        // Draw connections
        drawConnections();
        
        // Request next frame
        requestAnimationFrame(updateParticles);
    }
    
    // Draw connections between nearby particles
    function drawConnections() {
        const maxDistance = 150;
        
        particles.forEach((p1, i) => {
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                
                // Calculate distance
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // Draw line if close enough
                if (distance < maxDistance) {
                    // Opacity based on distance
                    const opacity = 1 - (distance / maxDistance);
                    
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = p1.color;
                    ctx.globalAlpha = opacity * 0.2;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        });
    }
    
    // Start animation
    updateParticles();
    
    // Update particle colors when theme changes
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            particles.forEach(particle => {
                particle.color = getRandomColor();
            });
        });
    }
}