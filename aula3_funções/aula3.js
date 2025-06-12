

function calcDesc(valor, pDesc){
    return desc =  (pDesc / 100) * valor
}

function aplicaDesc(valor, desc){
    return total = valor - desc
}


function verificaPag(escolha){
    if(escolha === 1){
        return pDesc = 10
    }else if(escolha === 2){
        return pDesc = 20
    }else if(escolha === 3){
        return pDesc = 30
    }
}

(function (){
    valor = 100
    escolha = 2
    pDesc = verificaPag(escolha)

    const desc = calcDesc(valor, pDesc)
    const total = aplicaDesc(valor, desc)

    console.log(total)
    
})();


