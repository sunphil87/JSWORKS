// 인사말 바꾸기 - 3초에 간격으로 설정
let message = ["안녕하세요", "하이", "싸와디캅"];

let msgIdx = 0;

myGreeting();

function myGreeting(){
    let greeting = document.getElementById("demo");
    greeting.innerHTML = message[msgIdx];
    msgIdx++;
    if(msgIdx == message.length)
        msgIdx = 0

    setTimeout(myGreeting, 2000);  //콜백함수
}