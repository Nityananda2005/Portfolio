// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const typingText = document.getElementById('typing-text');
const contactForm = document.getElementById('contact-form');
const skillProgressBars = document.querySelectorAll('.skill-progress');

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

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Mobile Navigation Toggle
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

themeToggle.addEventListener('click', toggleTheme);

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to dark theme
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const icon = themeToggle.querySelector('i');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

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

// Navbar background on scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            navbar.style.background = 'rgba(17, 24, 39, 0.98)';
        }
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            navbar.style.background = 'rgba(17, 24, 39, 0.95)';
        }
    }
}

// Active navigation link highlighting
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Contact Form Handling
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    // Show loading state
    submitButton.innerHTML = '<span class="loading"></span> Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Show success message
        showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 2000);
}

// Show message function
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Insert before the form
    contactForm.parentNode.insertBefore(messageDiv, contactForm);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

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

// Parallax effect for hero section
function handleParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-shapes .shape');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        // Start animation when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Initialize tooltips for skill icons
function initTooltips() {
    const skillIcons = document.querySelectorAll('.skill-icon');
    
    skillIcons.forEach(icon => {
        const skillName = icon.parentElement.querySelector('.skill-name').textContent;
        
        icon.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = skillName;
            tooltip.style.cssText = `
                position: absolute;
                background: var(--text-primary);
                color: var(--bg-primary);
                padding: 0.5rem;
                border-radius: 4px;
                font-size: 0.8rem;
                white-space: nowrap;
                z-index: 1000;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 10);
            
            this.tooltip = tooltip;
        });
        
        icon.addEventListener('mouseleave', function() {
            if (this.tooltip) {
                this.tooltip.remove();
                this.tooltip = null;
            }
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

// Event Listeners
window.addEventListener('scroll', () => {
    animateOnScroll();
    animateSkillBars();
    handleNavbarScroll();
    highlightActiveNavLink();
    handleParallax();
});

window.addEventListener('resize', () => {
    // Handle any resize-specific logic
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    addAnimationClasses();
    initProjectCards();
    animateCounters();
    initTooltips();
    
    // Add event listener for contact form
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Initial scroll animations
    setTimeout(() => {
        animateOnScroll();
        animateSkillBars();
    }, 100);
});

// Add active class to nav links on scroll
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color) !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
    
    .tooltip {
        position: absolute;
        background: var(--text-primary);
        color: var(--bg-primary);
        padding: 0.5rem;
        border-radius: 4px;
        font-size: 0.8rem;
        white-space: nowrap;
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    handleParallax();
}, 16)); // ~60fps

// Add loading animation for images
function handleImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Handle successful load
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // Handle error with fallback
        img.addEventListener('error', function() {
            console.log('Image failed to load:', this.src);
            this.classList.add('error-fallback');
        });
    });
}

// Preload your images
function preloadImages() {
    const imagesToPreload = [
        'my img2.jpg',
        'project1.png',
        'project02.png',
        'project3.png'
    ];
    
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = function() {
            console.log(`✅ Image preloaded: ${src}`);
            // Force update all matching images
            document.querySelectorAll(`img[src*="${src}"]`).forEach(img => {
                img.classList.add('loaded');
            });
        };
        img.onerror = function() {
            console.log(`❌ Image failed to preload: ${src}`);
        };
    });
}

// Initialize image loading
document.addEventListener('DOMContentLoaded', () => {
    handleImageLoading();
    preloadImages();
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
    
    // T key to toggle theme
    if (e.key === 't' || e.key === 'T') {
        toggleTheme();
    }
});

// Add focus management for accessibility
document.querySelectorAll('.nav-link, .btn, .social-link').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--primary-color)';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// Add smooth reveal animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionObserver.observe(section);
});

// 3D Model Functionality
let scene, camera, renderer, controls, model;
let isWireframe = false;

function init3DModel() {
    const container = document.getElementById('model-viewer');
    if (!container) return;

    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--bg-tertiary').trim());

    // Create camera
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Add controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = true;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x00e6e6, 1, 100);
    pointLight.position.set(-10, 10, -10);
    scene.add(pointLight);

    // Create a default geometric model (cube)
    createDefaultModel();

    // Start animation loop
    animate();

    // Hide loading spinner
    const loadingElement = container.querySelector('.model-loading');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }

    // Handle window resize
    window.addEventListener('resize', onWindowResize);
}

function createDefaultModel() {
    // Remove existing model
    if (model) {
        scene.remove(model);
    }

    // Create a group for the model
    model = new THREE.Group();

    // Create a cube as default model
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({ 
        color: 0x00e6e6,
        transparent: true,
        opacity: 0.8
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.receiveShadow = true;
    model.add(cube);

    // Add wireframe
    const wireframeGeometry = new THREE.BoxGeometry(2.01, 2.01, 2.01);
    const wireframeMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x00ffff,
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    model.add(wireframe);

    // Add some decorative elements
    const sphereGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0x00ffff });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(1.5, 1.5, 0);
    sphere.castShadow = true;
    model.add(sphere);

    scene.add(model);
}

function animate() {
    requestAnimationFrame(animate);

    // Rotate the model slowly
    if (model) {
        model.rotation.y += 0.005;
    }

    controls.update();
    renderer.render(scene, camera);
}

function onWindowResize() {
    const container = document.getElementById('model-viewer');
    if (!container) return;

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

function toggleWireframe() {
    isWireframe = !isWireframe;
    if (model) {
        model.children.forEach(child => {
            if (child.material) {
                child.material.wireframe = isWireframe;
            }
        });
    }
}

function rotateModel(direction) {
    if (model) {
        const rotationSpeed = 0.1;
        if (direction === 'left') {
            model.rotation.y += rotationSpeed;
        } else if (direction === 'right') {
            model.rotation.y -= rotationSpeed;
        }
    }
}

function resetView() {
    if (controls) {
        controls.reset();
    }
    if (model) {
        model.rotation.set(0, 0, 0);
    }
}

// Initialize 3D model when the section is visible
function init3DModelWhenVisible() {
    const modelSection = document.getElementById('3d-model');
    if (!modelSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !scene) {
                init3DModel();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(modelSection);
}

// Add event listeners for 3D model controls
function init3DModelControls() {
    const rotateLeftBtn = document.getElementById('rotate-left');
    const rotateRightBtn = document.getElementById('rotate-right');
    const resetViewBtn = document.getElementById('reset-view');
    const wireframeToggleBtn = document.getElementById('wireframe-toggle');

    if (rotateLeftBtn) {
        rotateLeftBtn.addEventListener('click', () => rotateModel('left'));
    }
    if (rotateRightBtn) {
        rotateRightBtn.addEventListener('click', () => rotateModel('right'));
    }
    if (resetViewBtn) {
        resetViewBtn.addEventListener('click', resetView);
    }
    if (wireframeToggleBtn) {
        wireframeToggleBtn.addEventListener('click', toggleWireframe);
    }
}

// Initialize 3D model functionality
document.addEventListener('DOMContentLoaded', () => {
    init3DModelWhenVisible();
    init3DModelControls();
    initServicesAnimations();
    init3DPhotoEffects();
    initCertificationBook();

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