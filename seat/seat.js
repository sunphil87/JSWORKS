//자리 배치도
let customNum = parseInt(prompt("입장객은 몇 명인가요?")); //고객 수
let colNum = parseInt(prompt("한 줄에 몇명 앉을 수 있나요?"));  //열 수
let rowNum = 0;  //행 수

//입장객 수에 따른 행과 열 계산


if(customNum % colNum == 0){
    rowNum = customNum / colNum;
}else{
    rowNum = parseInt(customNum / colNum) + 1;
}
document.write("<table>")
for(let i = 0; i < rowNum; i++){
    document.write("<tr>")
    for(let j = 1; j <= colNum; j++){
        let seatNum = i * colNum + j;
        if(seatNum > customNum){
            break;
        }
        document.write("<td>좌석" + seatNum + " </td>");
        }
        document.write('</tr>');
    }
    document.write("</table>")