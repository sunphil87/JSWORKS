// 마우스로 선택한 사진
let bigPic = document.querySelector("#cup");

let smallPic = document.querySelector(".small");
for(let i = 0; i < smallPic.length; i++){
    // smallPic[i].onclick = showBig;
    smallPic[i].addEventListener("click", showBig);
}
function showBig(){
    let newPic = this.src;
    bigPic.setAttribute("src", newPic);
}

//상세 설명 보기/닫기

let isOpen = false
let view = document.querySelector("#view");

//이벤트 처리
view.addEventListener("click", function(){
    if(isOpen == false){
        detail.style.display = "block";
        view.innerHTML = "상세 설명 닫기";
        isOpen = true;
    }else{
        detail.style.display = "none";
        view.innerHTML = "상세 설명 보기";
        isOpen = false;
    }
})