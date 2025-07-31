// Image Cache Utility for Portfolio
class ImageCache {
    constructor() {
        this.cache = new Map();
        this.failedImages = new Set();
    }

    // Preload important images
    preloadImages() {
        const importantImages = [
            'my img2.jpg', // Profile images
            'project1.png', // Project 1
            'project02.png', // Project 2
            'project3.png', // Project 3
            'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop' // 4th project image
        ];

        importantImages.forEach(src => {
            this.loadImage(src);
        });
    }

    // Load image into cache
    loadImage(src) {
        if (this.cache.has(src) || this.failedImages.has(src)) {
            return;
        }

        const img = new Image();
        img.onload = () => {
            this.cache.set(src, img);
            console.log(`✅ Image cached: ${src}`);
        };
        img.onerror = () => {
            this.failedImages.add(src);
            console.log(`❌ Image failed to load: ${src}`);
        };
        img.src = src;
    }

    // Get cached image
    getImage(src) {
        return this.cache.get(src);
    }

    // Check if image is cached
    isCached(src) {
        return this.cache.has(src);
    }

    // Force reload image
    forceReload(src) {
        this.cache.delete(src);
        this.failedImages.delete(src);
        this.loadImage(src);
    }
}

// Initialize image cache
const imageCache = new ImageCache();

// Auto-preload images when page loads
document.addEventListener('DOMContentLoaded', () => {
    imageCache.preloadImages();
});

// Export for use in other scripts
window.imageCache = imageCache; 