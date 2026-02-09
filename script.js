// Navigation toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.tech-card, .feature, .stat');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
});

// Dynamic molecular animation based on scroll
let lastScrollY = window.scrollY;
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
    
    const molecules = [
        { element: document.querySelector('.protein-1'), baseDuration: 3 },
        { element: document.querySelector('.protein-2'), baseDuration: 3, delay: 1.5 }
    ];
    
    molecules.forEach(molecule => {
        if (molecule.element) {
            const speedModifier = 1 + (scrollY / 1000);
            const duration = molecule.baseDuration / speedModifier;
            molecule.element.style.animationDuration = `${duration}s`;
        }
    });
    
    lastScrollY = scrollY;
});

// Enhanced hover effects for tech cards
document.querySelectorAll('.tech-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// CTA button pulse effect
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    setInterval(() => {
        ctaButton.style.transform = 'scale(1.05)';
        setTimeout(() => {
            ctaButton.style.transform = 'scale(1)';
        }, 200);
    }, 3000);
}

// Navbar background opacity on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav-container');
    const scrolled = window.pageYOffset;
    
    if (navbar) {
        if (scrolled > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.7)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    }
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.querySelector('.title-line');
    if (titleElement) {
        // Uncomment below for typing effect on title
        // typeWriter(titleElement, 'Isomera', 150);
    }
});

// Video loading optimization - loop first 2 seconds
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video-background video');
    if (video) {
        video.addEventListener('loadedmetadata', function() {
            // Set video to loop only the first 2 seconds
            video.currentTime = 0;
            video.playbackRate = 0.8; // Slow down for better visual effect
            
            // Create a seamless loop of the first 2 seconds
            video.addEventListener('timeupdate', function() {
                if (video.currentTime >= 2) {
                    video.currentTime = 0;
                }
            });
        });
        
        // Ensure video plays
        video.play().catch(function(error) {
            console.log('Video autoplay failed:', error);
        });
    }
});

// Add glow effect to stats on hover
document.querySelectorAll('.stat').forEach(stat => {
    stat.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 30px rgba(0, 204, 255, 0.5)';
        this.style.transform = 'translateY(-5px)';
    });
    
    stat.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
        this.style.transform = 'translateY(0)';
    });
});

// Enhanced molecular glue interaction
document.addEventListener('DOMContentLoaded', function() {
    const molecularGlue = document.querySelector('.molecular-glue');
    const protein1 = document.querySelector('.protein-1');
    const protein2 = document.querySelector('.protein-2');
    
    if (molecularGlue && protein1 && protein2) {
        // Create binding animation on hover
        molecularGlue.addEventListener('mouseenter', function() {
            protein1.style.transform = 'translateX(10px) scale(1.2)';
            protein2.style.transform = 'translateX(-10px) scale(1.2)';
            molecularGlue.style.width = '80px';
        });
        
        molecularGlue.addEventListener('mouseleave', function() {
            protein1.style.transform = 'translateX(0) scale(1)';
            protein2.style.transform = 'translateX(0) scale(1)';
            molecularGlue.style.width = '60px';
        });
    }
});