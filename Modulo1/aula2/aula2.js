const precoGasolina = 5.79
const precoEtanopl = 6.0

const consumo = 10
let distancia = 100

const isEtanol = true
const isGasolina = false

if (isEtanol == true){
    precoCombustivel = precoEtanopl
}else if (isGasolina == true){
    precoCombustivel = precoGasolina 
}

let litrosCons = (distancia / consumo)  
total = litrosCons * precoCombustivel

console.log(total.toFixed(2));