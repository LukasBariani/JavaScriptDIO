const numeros = [5,3,4,1,6,20]
let i = 0 

function gets(){
    let valor = numeros[i]
    i++
    return valor 
}

function print(texto){
    console.log(texto)
    
}

module.exports = {gets, print}