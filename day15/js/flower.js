function showText(){
    //텍스트는 보이기
    let text = document.getElementById('detail').style.display = "block";

    //보기 버튼 보이기
    let button = document.getElementById('show');
    button.style.display = "none";

}

function hideText(){
    let text = document.getElementById('detail');
    text.style.display = "none";

    let button = document.getElementById('show');
    button.style.display = "block";
}