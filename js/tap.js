function openTab(evt, tabName) {
    // 모든 콘텐츠 숨기기
    let contents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    // 모든 버튼 active 클래스 제거
    let buttons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "");
    }

    // 선택한 탭 보여주기
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}