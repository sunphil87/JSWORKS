window.onload = function(){
    let picture = ["./img/coffee-blue.jpg", "./img/coffee-pink.jpg"];
    let picIdx = 0;
    
    showSlide();
    function showSlide(){
        let img = document.getElementById("pic")
        img.src = picture[picIdx];
        picIdx++;
        if(picIdx == picture.length)
            picIdx = 0;
        setTimeout(showSlide, 2000); //콜백 함수
    }
}

