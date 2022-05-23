let score = parseInt(prompt("점수를 입력하세요."));
let grade = "";

if(score < 60){
    grade = "F";
}
else if(score < 70){
    grade = "D";
}
else if(score < 80){
    grade = "C";
}
else if(score < 90){
    grade = "B";
}
else{
    grade = "A";
}
document.write("학점은 <span>" + grade + "</span>입니다.")