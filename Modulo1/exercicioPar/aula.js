const { gets, print } = require("./funcoes_auxiliares");

tot = gets()

let maiorPar = 0 
let menorImpar = 0
for(let i = 0; i < tot; i++){
    total = gets()
    if(total % 2 == 0 ){
        maiorPar = total
        if(total > maiorPar){
            maiorPar = total
        }
    }else{
        if (menorImpar == 0 ){
            menorImpar = total
        }else{
            if(total < menorImpar){
                menorImpar = total
            }
        }
    }
}

print(`Menor impar: ${menorImpar}     Maior Par:${maiorPar}`)