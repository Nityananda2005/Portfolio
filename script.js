// DOM Elements - will be initialized after DOM loads
let navToggle, navMenu, themeToggle, typingText, skillProgressBars;

// Typing Animation
const roles = [
    'Full Stack Developer',
    'Creative Coder',
    'Problem Solver',
    'Tech Enthusiast'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before next word
    }
    
    setTimeout(typeWriter, typingSpeed);
}

// Theme Toggle
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update theme toggle icon
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Initialize DOM elements
        navToggle = document.getElementById('nav-toggle');
        navMenu = document.getElementById('nav-menu');
        themeToggle = document.getElementById('theme-toggle');
        typingText = document.getElementById('typing-text');
        skillProgressBars = document.querySelectorAll('.skill-progress');
        
        // Initialize theme
        loadTheme();
        
        // Initialize mobile navigation
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
            
            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });
        }
        
        // Initialize theme toggle
        if (themeToggle) {
            themeToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleTheme();
            });
        }
        
        // Start typing animation
        if (typingText) {
            setTimeout(typeWriter, 1000);
        }
        
        // Initialize other features
        addAnimationClasses();
        initProjectCards();
        init3DPhotoEffects();
        initServicesAnimations();
        initCertificationBook();
        
        // Initial scroll animations
        setTimeout(() => {
            animateOnScroll();
            animateSkillBars();
        }, 100);
        
        // Prevent theme toggle when interacting with form inputs
        const formInputs = document.querySelectorAll('input, textarea, select');
        formInputs.forEach(input => {
            input.addEventListener('focus', function(e) {
                e.stopPropagation();
            });
            input.addEventListener('blur', function(e) {
                e.stopPropagation();
            });
            input.addEventListener('keydown', function(e) {
                e.stopPropagation();
            });
        });
        
        console.log('✅ Portfolio initialized successfully!');
    } catch (error) {
        console.error('❌ Error initializing portfolio:', error);
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Animate skill progress bars
function animateSkillBars() {
    skillProgressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const elementTop = bar.getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < window.innerHeight - elementVisible) {
            setTimeout(() => {
                bar.style.width = progress + '%';
            }, 200);
        }
    });
}



// Contact Form Handling - Removed to let formsubmit.co handle naturally
// The form will submit directly to formsubmit.co without JavaScript interference

// Show message function - removed since form submits directly to formsubmit.co

// Project card hover effects
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}





// Add animation classes to elements
function addAnimationClasses() {
    // Add fade-in to sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Add slide-in-left to about image
    document.querySelector('.about-image').classList.add('slide-in-left');
    
    // Add slide-in-right to about text
    document.querySelector('.about-text').classList.add('slide-in-right');
    
    // Add scale-in to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('scale-in');
    });
    
    // Add fade-in to skill items
    document.querySelectorAll('.skill-item').forEach(item => {
        item.classList.add('fade-in');
    });
    
    // Add fade-in to testimonial cards
    document.querySelectorAll('.testimonial-card').forEach(card => {
        card.classList.add('fade-in');
    });
}



// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color) !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Add scroll event listeners for animations
window.addEventListener('scroll', () => {
    animateOnScroll();
    animateSkillBars();
});







// 3D Photo Effects
function init3DPhotoEffects() {
    const photoCards = document.querySelectorAll('.photo-3d-card');
    
    photoCards.forEach(card => {
        const inner = card.querySelector('.photo-3d-inner');
        
        // Mouse move effect for 3D tilt
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        });
        
        // Reset on mouse leave
        card.addEventListener('mouseleave', () => {
            inner.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(20px)';
        });
        
        // Click effect
        card.addEventListener('click', () => {
            inner.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(30px) scale(1.05)';
            setTimeout(() => {
                inner.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(20px) scale(1)';
            }, 200);
        });
    });
}



// Services Section Animations
function initServicesAnimations() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Add staggered animation to service cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Add hover effects for service icons
    serviceCards.forEach(card => {
        const icon = card.querySelector('.service-icon');
        if (icon) {
            card.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            });
            
            card.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        }
    });

    // Add click animation for service cards
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
} 

// Certification Book Functionality
function initCertificationBook() {
    const book = document.querySelector('#cert-book');
    const bookCover = document.querySelector('.book-cover');
    
    if (bookCover) {
        bookCover.addEventListener('click', () => {
            if (book.classList.contains('opened')) {
                // If book is open, close it
                book.classList.remove('opened');
                // Add closing animation
                book.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    book.style.transform = 'scale(1)';
                }, 300);
            } else {
                // If book is closed, open it
                book.classList.add('opened');
                // Add opening animation
                book.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    book.style.transform = 'scale(1)';
                }, 300);
            }
        });
    }
    
        // Close book when clicking outside
    document.addEventListener('click', (e) => {
        if (book && !book.contains(e.target) && book.classList.contains('opened')) {
            book.classList.remove('opened');
            book.style.transform = 'scale(0.95)';
            setTimeout(() => {
                book.style.transform = 'scale(1)';
            }, 300);
        }
    });
    
    // Cover image carousel functionality
    initCoverImageCarousel();
}

// Cover image carousel
function initCoverImageCarousel() {
    const imagesContainer = document.querySelector('.cover-images-container');
    const images = document.querySelectorAll('.cover-image');
    let currentIndex = 0;
    
    if (!imagesContainer || images.length === 0) return;
    
    // Function to show image
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        
        currentIndex = index;
    }
    
    // Touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    imagesContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    imagesContainer.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = startX - endX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentIndex < images.length - 1) {
                // Swipe left - next image
                showImage(currentIndex + 1);
            } else if (diff < 0 && currentIndex > 0) {
                // Swipe right - previous image
                showImage(currentIndex - 1);
            }
        }
    }
    
    // Initialize first image
    showImage(0);
} 