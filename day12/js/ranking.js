        // 순위에 따른 메달 정하기
        let ranking = Number(prompt("순위를 입력해주세요", "1~99"));

        switch(ranking){
            case 1:
                document.write("금메달<br>");
                break;
            case 2:
                document.write("은메달<br>");
                break;
            case 3:
                document.write("동메달<br>");
                break;
            default:
                document.write("노메달<br>");
                break;
        }