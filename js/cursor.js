const cursor = document.querySelector('.cursor');

// 마우스 움직임 추적
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 버튼이나 링크 호버 효과
const links = document.querySelectorAll('button, a');
links.forEach(link => {
    link.addEventListener('mouseover', () => cursor.classList.add('hover'));
    link.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});