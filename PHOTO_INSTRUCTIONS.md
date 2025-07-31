# अपनी Photo Add करने के लिए Instructions

## 📸 Photo Add करने के Steps:

### 1. Photo तैयार करें:
- अपनी एक professional photo लें
- Photo का size: 400x400 pixels या उससे बड़ा
- Format: JPG, PNG, या WebP
- Photo को portfolio folder में save करें

### 2. Photo को Website में Add करें:

#### Hero Section में Photo:
`index.html` file में line 89 पर जाएं और:
```html
<img src="your-photo.jpg" alt="Dipu" class="profile-img">
```
`your-photo.jpg` को अपनी photo के filename से replace करें।

#### About Section में Photo:
`index.html` file में line 156 पर जाएं और:
```html
<img src="your-photo.jpg" alt="Dipu" class="about-img">
```
`your-photo.jpg` को अपनी photo के filename से replace करें।

### 3. Photo के लिए Recommended Settings:
- **Hero Section**: 150x150 pixels (circular)
- **About Section**: 300x300 pixels (circular)
- **Quality**: High quality, professional looking
- **Background**: Clean background या professional setting

### 4. Example:
अगर आपकी photo का नाम `dipu-profile.jpg` है, तो:
```html
<img src="dipu-profile.jpg" alt="Dipu" class="profile-img">
<img src="dipu-profile.jpg" alt="Dipu" class="about-img">
```

### 5. Photo के लिए Styling:
- Photo automatically circular हो जाएगी
- Cyan border और glow effect add हो जाएगा
- Hover पर photo थोड़ी बड़ी हो जाएगी
- Futuristic dark theme के साथ match करेगी

### 6. Troubleshooting:
- अगर photo नहीं दिख रही है, तो filename check करें
- Photo का path सही होना चाहिए
- Photo file portfolio folder में होनी चाहिए

### 7. Optional: Placeholder Image
अगर आप अभी photo नहीं add करना चाहते, तो placeholder image use कर सकते हैं:
```html
<!-- Placeholder image के लिए comment हटा दें -->
<img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="Dipu" class="about-img">
```

## 🎨 Photo Styling Features:
- ✅ Circular shape
- ✅ Cyan border with glow effect
- ✅ Hover animations
- ✅ Responsive design
- ✅ Professional appearance
- ✅ Dark theme compatible

अब आप अपनी photo add कर सकते हैं! 🚀 