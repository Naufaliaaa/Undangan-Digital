document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open-btn');
    const coverSection = document.getElementById('cover');
    const mainContent = document.getElementById('main-content');
    const audio = document.getElementById('wedding-music');
    const musicControl = document.getElementById('music-control');
    const toggleMusicBtn = document.getElementById('toggle-music');
    const icon = toggleMusicBtn.querySelector('i');

    let isPlaying = false;

    // Open Invitation Event
    openBtn.addEventListener('click', function() {
        // 1. Play Music
        playMusic();

        // 2. Hide Cover / Show Main Content
        coverSection.classList.add('open');
        mainContent.classList.remove('hidden');
        
        // 3. Show Music Control
        musicControl.classList.add('visible');

        // Allow Scrolling Again
        document.body.style.overflow = 'auto';
    });

    // Toggle Music
    toggleMusicBtn.addEventListener('click', function() {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });

    function playMusic() {
        audio.play().then(() => {
            isPlaying = true;
            icon.classList.remove('fa-play');
            icon.classList.add('fa-compact-disc', 'fa-spin');
        }).catch(error => {
            console.log("Audio play failed:", error);
        });
    }

    function pauseMusic() {
        audio.pause();
        isPlaying = false;
        icon.classList.remove('fa-compact-disc', 'fa-spin');
        icon.classList.add('fa-pause'); // Or some other static icon
    }

    // Scroll Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Form Submission (Prevent Default)
    document.getElementById('wish-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Terima kasih atas ucapan dan doa Anda!');
        this.reset();
    });
});
