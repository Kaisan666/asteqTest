// document.addEventListener('DOMContentLoaded', function() {
//     const slider = document.querySelector('.slider');
//     const slides = Array.from(document.querySelectorAll('.slider-slide'));
//     const prevBtn = document.querySelector('.news-slider-prev');
//     const nextBtn = document.querySelector('.news-slider-next');
    
//     let currentIndex = 0;
//     const visibleSlides = 3;
//     const totalSlides = slides.length;

//     function updateSlider() {
//         // Скрываем все слайды
//         slides.forEach(slide => slide.classList.remove('visible-slide'));
        
//         // Показываем текущие 3 слайда
//         for(let i = currentIndex; i < currentIndex + visibleSlides; i++) {
//             if(slides[i]) slides[i].classList.add('visible-slide');
//         }

//         // Блокируем кнопки при достижении границ
//         prevBtn.style.opacity = currentIndex === 0 ? 0.5 : 1;
//         nextBtn.style.opacity = currentIndex >= totalSlides - visibleSlides ? 0.5 : 1;
//     }

//     nextBtn.addEventListener('click', () => {
//         if(currentIndex < totalSlides - visibleSlides) {
//             currentIndex++;
//             slider.scrollLeft += slides[0].offsetWidth + 30;
//             updateSlider();
//         }
//     });

//     prevBtn.addEventListener('click', () => {
//         if(currentIndex > 0) {
//             currentIndex--;
//             slider.scrollLeft -= slides[0].offsetWidth + 30;
//             updateSlider();
//         }
//     });

//     // Инициализация
//     updateSlider();
// }); 