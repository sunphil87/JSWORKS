//시험 성적 관리
//5명의 국어, 수학 성적
let score = [
            [50, 60],
            [70, 90],
            [80, 60],
            [70, 90],
            [60, 80]
            ];

let korSum = 0;
let mathSum = 0;

//과목별 점수 합계
for(let i = 0; i < score.length; i++){
    korSum += score[i][0];
    mathSum += score[i][1];
}

document.write("국어 점수 합계 : " + korSum + "점<br>");
document.write("수학 점수 합계 : " + mathSum + "점<br>");

let korAvg = korSum / score.length;
let mathAvg = mathSum / score.length;

document.write("국어 평균 : " + korAvg + "점<br>");
document.write("수학 평균 : " + mathAvg + "점<br>");

