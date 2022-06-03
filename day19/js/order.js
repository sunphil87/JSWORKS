//체크 박스 속성에 이벤트 처리하기
let check = document.querySelector("#shippingInfo");

//체크 박스에 click 이벤트 발생했을 때 함수 호출
check.addEventListener("click", doCheck);

let billingName = document.querySelector("#billingName");
let billingTel = document.querySelector("#billingTel");
let billingAddr = document.querySelector("#billingAddr");

let shippingName = document.querySelector("#shippingName");
let shippingTel = document.querySelector("#shippingTel");
let shippingAddr = document.querySelector("#shippingAddr");

function doCheck(){
    if(check.checked == true){
        shippingName.value = billingName.value;
        shippingTel.value = billingTel.value;
        shippingAddr.value = billingAddr.value;
    }else{
        shippingName.value = "";
        shippingTel.value = "";
        shippingAddr.value = "";
    }
}