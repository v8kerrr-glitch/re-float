
    document.addEventListener('DOMContentLoaded', function() {
        console.log("💡 스와이퍼 로딩 테스트 시작...");

        try {
            const swiper = new Swiper('.mySwiper', {
                slidesPerView: 'auto', 
                spaceBetween: 20,   
                
                // 🚨 범인일 확률 99% : loop를 일단 끄고 테스트해보세요!
                loop: false,         
                
                navigation: {
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                },
                pagination: {
                    el: '.swiper-pagination-custom',
                    clickable: true,
                },
            });
            console.log("✅ 스와이퍼 세팅 완료! 화면에서 넘겨보세요.");
        } catch(e) {
            console.error("❌ 스와이퍼 에러 발생: ", e);
        }
    });

    // 기존 스와이퍼 코드 아래에 추가하세요
const tabs = document.querySelectorAll('.main6_ul li');
const contents = [
    document.querySelector('.main6_2_1'),
    document.querySelector('.main6_2_2'),
    document.querySelector('.main6_2_3')
];

tabs.forEach((tab, index) => {
    tab.addEventListener('click', function(e) {
        e.preventDefault(); // 페이지 상단으로 튀는 것 방지

        // 1. 모든 탭에서 'on' 클래스 제거 및 모든 콘텐츠 숨기기
        tabs.forEach(t => t.classList.remove('on'));
        contents.forEach(c => c.style.display = 'none');

        // 2. 클릭한 탭에 'on' 클래스 추가 및 해당 콘텐츠 보이기
        this.classList.add('on');
        contents[index].style.display = 'flex'; // flex로 보여주기
    });
});
