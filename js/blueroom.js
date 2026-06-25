document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('sliderWrapper');
    const images = document.querySelectorAll('.slider-wrapper img');
    const dotsContainer = document.getElementById('dotsContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    // 1. 점 생성
    images.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => updateSlide(i));
        dotsContainer.appendChild(dot);
    });

    // 2. 슬라이드 기능
    function updateSlide(index) {
        currentIndex = index;
        wrapper.style.transform = `translateX(-${currentIndex * 560}px)`;
        
        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < images.length - 1) updateSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) updateSlide(currentIndex - 1);
    });
});