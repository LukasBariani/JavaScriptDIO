const { gets, print } = require("./funcoes_auxiliares");
 
let sal = 2000
let beneficio = 250
let percent = 0

function calcSal(sal, beneficio){
    if(sal > 0 && sal <= 1100 ){
        percent = 5/100
    }else if(sal <= 2500){
        percent = 10/100
    }else if(sal > 2500){
        percent = 15/100
    }

    return salTot =  sal - (sal * percent) + beneficio
}


print(calcSal(sal,beneficio))