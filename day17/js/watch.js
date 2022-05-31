// setInterval(watch, 1000);
// function watch(){
//     const date = new Date();
//     let now = date.toLocaleTimeString();
//     document.getElementById("display").innerHTML = now;


    //실행함수

setInterval(function(){
    const date = new Date();
    let now = date.toLocaleTimeString();
    document.getElementById("display").innerHTML = now;
    }, 1000);