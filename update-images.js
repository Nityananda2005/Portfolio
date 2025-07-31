// Utility script to update image references
// Run this in browser console to update all image references

function updateImageReferences() {
    // Update hero section image
    const heroImage = document.querySelector('.profile-img');
    if (heroImage) {
        heroImage.src = 'my img2.jpg';
        console.log('✅ Updated hero section image');
    }
    
    // Update about section image
    const aboutImage = document.querySelector('.about-img');
    if (aboutImage) {
        aboutImage.src = 'my img2.jpg';
        console.log('✅ Updated about section image');
    }
    
    // Update testimonial images (optional - you might want different images for different people)
    const testimonialImages = document.querySelectorAll('.author-image');
    testimonialImages.forEach((img, index) => {
        // You can choose to use your image for all testimonials or keep different ones
        // img.src = 'my img2.jpg';
        console.log(`ℹ️ Testimonial ${index + 1} image: ${img.src}`);
    });
    
    console.log('🎉 Image update complete!');
}

// Run the function
updateImageReferences(); 