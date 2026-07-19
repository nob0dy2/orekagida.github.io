// Hamburger Menü
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Sayfa İçi Kaydırma
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({ 
                top: targetElement.offsetTop - 80, 
                behavior: "smooth" 
            });
        }
    });
});

// -------------------------------------
// DİNAMİK CAROUSEL (SLIDER) 
// -------------------------------------
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

function initSlider() {
    if (slides.length > 0) {
        slideInterval = setInterval(nextSlide, 3000); 
    }
}

function updateSlider(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider(currentSlide);
}

// Noktalara tıklama olayı
dots.forEach(dot => {
    dot.addEventListener('click', function() {
        clearInterval(slideInterval);
        const slideIndex = parseInt(this.getAttribute('data-slide'));
        currentSlide = slideIndex;
        updateSlider(currentSlide);
        slideInterval = setInterval(nextSlide, 3000);
    });
});

// Başlat
initSlider();