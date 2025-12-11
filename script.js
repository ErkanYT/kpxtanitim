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

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Smooth scroll function for navigation
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.3)';
            header.style.backdropFilter = 'blur(35px) saturate(220%)';
            header.classList.add('scrolled');
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.1)';
            header.style.backdropFilter = 'blur(30px) saturate(200%)';
            header.classList.remove('scrolled');
        }
    }
});

// Fade in animation on scroll
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

// Add fade-in class to elements
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.feature-card, .testimonial-card');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Button click animations and interactions
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Add click effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // Handle specific button actions
        if (this.textContent.includes('İndir') || this.textContent.includes('APK')) {
            showNotification('İndirme yakında başlayacak!', 'success');
        } else if (this.textContent.includes('Demo')) {
            showNotification('Demo videosu yakında!', 'info');
        } else if (this.textContent.includes('Play Store')) {
            showNotification('Play Store\'a yönlendiriliyorsunuz!', 'info');
        }
    });
});

// Stats animation
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats');
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach((stat, index) => {
                    const finalValue = stat.textContent;
                    const isPercentage = finalValue.includes('%');
                    const isNumber = finalValue.includes('K') || finalValue.includes('+');
                    
                    if (isPercentage) {
                        animateNumber(stat, 0, 85, 2000);
                    } else if (finalValue.includes('10K+')) {
                        animateNumber(stat, 0, 10, 2000, 'K+');
                    } else if (finalValue.includes('500+')) {
                        animateNumber(stat, 0, 500, 2000, '+');
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

function animateNumber(element, start, end, duration, suffix = '') {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        
        if (suffix === '%') {
            element.textContent = current + '%';
        } else if (suffix === 'K+') {
            element.textContent = current + 'K+';
        } else if (suffix === '+') {
            element.textContent = current + '+';
        } else if (element.textContent.includes('24/7')) {
            element.textContent = '24/7';
        } else {
            element.textContent = current + suffix;
        }
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
    `;
    
    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    animateStats();
    
    // Add mobile menu styles
    const mobileMenuStyle = document.createElement('style');
    mobileMenuStyle.textContent = `
        @media (max-width: 768px) {
            .nav-menu {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.98);
                flex-direction: column;
                padding: 20px;
                transform: translateY(-10px);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .nav-menu.active {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            .nav-menu a {
                padding: 10px 0;
                border-bottom: 1px solid #333;
            }
            
            .nav-menu a:last-child {
                border-bottom: none;
            }
        }
    `;
    document.head.appendChild(mobileMenuStyle);
});

// Particle effect for hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: #10b981;
            border-radius: 50%;
            pointer-events: none;
            opacity: ${Math.random() * 0.5 + 0.2};
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s linear infinite;
        `;
        hero.appendChild(particle);
    }
    
    // Add float animation
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0px) rotate(0deg);
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(particleStyle);
}

// Initialize particles
setTimeout(createParticles, 1000);