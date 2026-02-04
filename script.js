// Enhanced JavaScript for Isomera website

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Apply fade-in animation to elements
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.capability-card, .tech-feature, .hero-text');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Hide loader
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.classList.add('hidden');
        }
    }, 1500);

    // Create floating particles
    createParticles();
});

// Create molecular particles
function createParticles() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.fontSize = Math.random() * 10 + 10 + 'px';
        particle.innerHTML = ['⚛', '🧬', '🔬', '⚗️'][Math.floor(Math.random() * 4)];
        hero.appendChild(particle);
    }
}

// Enhanced molecular interactions
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Subtle parallax effect on molecules
    const moleculeViz = document.querySelector('.molecular-viz');
    if (moleculeViz) {
        const rect = moleculeViz.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const angleX = (mouseY - centerY) * 0.01;
        const angleY = (mouseX - centerX) * 0.01;
        
        moleculeViz.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    }
});

// Smooth reveal animations
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Interactive molecule click handler
document.getElementById('moleculeCanvas')?.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '10px';
    ripple.style.height = '10px';
    ripple.style.background = 'rgba(0, 168, 232, 0.5)';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'ripple 1s ease-out';
    
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 1000);
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Enhanced form interactions
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Dynamic year in footer
document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    const footerElements = document.querySelectorAll('footer p');
    footerElements.forEach(el => {
        if (el.textContent.includes('2024')) {
            el.textContent = el.textContent.replace('2024', year);
        }
    });
});