const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth;

slider.style.width = slideWidth * slides.length + 'px';

slider.addEventListener('scroll', function() {
    const scrollPosition = slider.scrollLeft;
    const activeSlideIndex = Math.round(scrollPosition / slideWidth);
    slides.forEach(function(slide, index) {
        slide.classList.remove('active');
        if (index === activeSlideIndex) {
            slide.classList.add('active');
        }
    });
});