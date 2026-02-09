# 🎊 Wedding Invitation Website

A beautiful, elegant, and responsive wedding invitation website built with HTML, CSS, and JavaScript. This project features smooth animations, a gallery section, event details, RSVP form, and background music player.

![Wedding Invitation Preview](https://via.placeholder.com/1200x600/D4AF37/ffffff?text=Romeo+%26+Juliet+Wedding+Invitation)

---

## ✨ Features

- **🎨 Elegant Design** - Luxurious gold, dusty pink, and sage green color palette
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **🎬 Smooth Animations** - Fade-in animations and transition effects
- **💌 Cover Section** - Personalized guest name with "Buka Undangan" button
- **📷 Gallery Section** - Photo gallery showcasing memorable moments
- **📅 Event Details** - Complete wedding schedule (Akad Nikah & Resepsi)
- **🗺️ Google Maps Integration** - Embedded location map
- **💬 RSVP & Wishes** - Form to receive guest wishes and blessings
- **🎵 Background Music** - Floating music player control
- **🌐 Multi-language Ready** - Structure supports easy localization

---

## 📁 Project Structure

```
Undangan/
├── index.html          # Main HTML structure
├── style.css           # Complete styling with CSS variables
├── script.js           # JavaScript functionality
├── images/
│   ├── background_lux.png    # Luxury background image
│   ├── background.png         # Secondary background
│   ├── couple1.png           # Gallery photo 1
│   ├── couple2.png           # Gallery photo 2
│   ├── couple3.png           # Gallery photo 3
│   ├── couple4.png           # Gallery photo 4
│   └── README.md             # This file
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- Optional: Local web server (Live Server extension for VS Code)

### Installation

1. **Clone or download the project**
   ```bash
   git clone https://github.com/yourusername/wedding-invitation.git
   cd wedding-invitation
   ```

2. **Customize the content**

   Open `index.html` and update:
   ```html
   <!-- Couple Names -->
   <h1 class="animate-up">Your Names Here</h1>
   
   <!-- Event Details -->
   <h3>Akad Nikah</h3>
   <p><i class="far fa-clock"></i> Your Time</p>
   <p><i class="fas fa-map-marker-alt"></i> Your Venue</p>
   
   <!-- Guest Name (Dynamic) -->
   <div class="guest-name">Tamu Spesial</div>
   ```

3. **Replace images** in the `images/` folder:
   - `background_lux.png` - Main background
   - `background.png` - Secondary background
   - `couple1.png` through `couple4.png` - Gallery photos

4. **Customize the music**
   ```html
   <audio id="wedding-music">
     <source src="your-music-file.mp3" type="audio/mpeg">
   </audio>
   ```

5. **Update Google Maps location**
   ```html
   <iframe src="https://www.google.com/maps/embed?pb=..."></iframe>
   ```

### Running Locally

**Option 1: Using VS Code Live Server**
1. Open the project in VS Code
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

**Option 2: Using Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open `http://localhost:8000` in your browser.

---

## 🎨 Customization Guide

### Colors

Edit CSS variables in `style.css`:

```css
:root {
    --primary-color: #D4AF37;      /* Gold */
    --secondary-color: #E8C1C6;    /* Dusty Pink */
    --accent-color: #8F9779;       /* Sage Green */
    --text-color: #4A4A4A;         /* Text Color */
    --bg-color: #FAFAFA;           /* Background */
}
```

### Fonts

The project uses Google Fonts:
- **Great Vibes** - Elegant script for headings
- **Playfair Display** - Classic serif for subtitles
- **Work Sans** - Clean sans-serif for body text

To change fonts, update the Google Fonts link and CSS variables.

### Animations

Animation speeds can be adjusted in `style.css`:

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

---

## 📱 Responsive Design

The website is optimized for:

| Device | Breakpoint | Features |
|--------|------------|----------|
| Mobile | ≤ 480px | Optimized text sizes, stacked layout |
| Tablet | ≤ 768px | Adjusted grid and padding |
| Desktop | > 768px | Full layout with spacing |

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox, Grid, and Animations
- **JavaScript (ES6+)** - Interactive functionality
- **Google Fonts** - Typography
- **Font Awesome** - Icons
- **Google Maps** - Location embedding

---

## 📄 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 60+ | ✅ Full Support |
| Firefox | 55+ | ✅ Full Support |
| Safari | 11+ | ✅ Full Support |
| Edge | 79+ | ✅ Full Support |
| Opera | 47+ | ✅ Full Support |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Antigravity** - *Development Team*

- GitHub: [@antigravity](https://github.com/antigravity)
- Email: contact@antigravity.dev

---

## 🙏 Acknowledgments

- [Google Fonts](https://fonts.google.com/) for beautiful typography
- [Font Awesome](https://fontawesome.com/) for icons
- [Unsplash](https://unsplash.com/) for placeholder images
- All guests who will attend this beautiful celebration

---

## 📞 Contact

For questions or customizations, please reach out:

- **Email**: hello@antigravity.dev
- **Website**: https://antigravity.dev

---

## 🎉 Happy Wedding!

*Wishing Romeo & Juliet a lifetime of love, happiness, and prosperity!*

```
Made with ❤️ by Antigravity
```

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/antigravity/wedding-invitation?style=social)
![GitHub forks](https://img.shields.io/github/forks/antigravity/wedding-invitation?style=social)
![GitHub issues](https://img.shields.io/github/issues/antigravity/wedding-invitation)
![GitHub license](https://img.shields.io/github/license/antigravity/wedding-invitation)

