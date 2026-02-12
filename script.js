// Simple slide navigation script
document.addEventListener('DOMContentLoaded', function() {
    
    // Select all slides
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlide = 0;

    // Select buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageCounter = document.getElementById('page-counter');

    // Function to show specific slide
    function showSlide(n) {
        // Fix index bounds
        if (n < 0) n = 0;
        if (n >= totalSlides) n = totalSlides - 1;

        currentSlide = n;

        // Loop through all slides and hide them, show only current
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update Counter
        pageCounter.textContent = (currentSlide + 1) + ' / ' + totalSlides;

        // Button States
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
        
        // Visual opacity for disabled state
        prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentSlide === totalSlides - 1 ? '0.5' : '1';
    }

    // Button Click Events
    prevBtn.onclick = function() {
        showSlide(currentSlide - 1);
    };

    nextBtn.onclick = function() {
        showSlide(currentSlide + 1);
    };

    // Keyboard Arrow Keys
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight' || event.key === 'Space') {
            showSlide(currentSlide + 1);
        }
        if (event.key === 'ArrowLeft') {
            showSlide(currentSlide - 1);
        }
    });

    // Initialize first slide
    showSlide(0);
});