let alphabet = new Array(26);
let ch = 'A';
ch = ch.charCodeAt(0);

// console.log(ch);
// console.log(ch.charCodeAt(0));

//저장
for(var i = 0; i < alphabet.length; i++){
    alphabet[i] = ch;
    ch++;
}
//65,66,67...90

//출력
for(var i = 0; i < alphabet.length; i++){
    console.log(alphabet[i] + ", " + String.fromCharCode(alphabet[i]));
}