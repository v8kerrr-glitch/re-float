function changeContent(type) {
    const imgElement = document.getElementById('main-img');
    const buttons = document.querySelectorAll('.tab-btn');
    
    // 버튼 활성화 클래스 조절
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // 이미지 변경 로직
    const images = {
        'campaign': '../img/campain1.png',
        'carbon': '../img/campain2.png',
        'marine': '../img/campain3.png'
    };
    
    imgElement.src = images[type];
}