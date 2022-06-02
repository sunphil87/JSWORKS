// 큰 사진 선택
let bigPic = document.querySelector("#cup");

let smallPic = document.querySelector(".small");
for(let i = 0; i<smallPic.length; i++){
    smallPic[i].onclick = showBig;
}
function showBig(){
    let newPic = this.src;
    bigPic.setAttribute("src", newPic);
}