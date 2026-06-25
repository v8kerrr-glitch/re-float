
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto', 
    spaceBetween: 20,   
    loop: true,         
    navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
    },
    pagination: {
        el: '.swiper-pagination-custom',
        clickable: true,
    },
});