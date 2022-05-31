let total = 45; //로또 1~45
let selec = new Array(6); //추첨 6개

document.write("번호 : ")

//중복 없이 6개 로또 추첨
for(let i = 0; i < selec.length; i++){
    let pickedOne = Math.floor(Math.random() * total) + 1;
    selec[i] = pickedOne;
    for(let j=0; j<i; j++){
        if(selec[j] == selec[i]){
            i--;
            break;
        }
    }
}
for(var i = 0; i < selec.length; i++){    
    document.write(selec[i] + ", ");
}