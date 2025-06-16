class pessoa {
    nome
    peso
    altura
    constructor(nome, peso, altura){ 
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
    }

    imc(peso,altura) {
        peso = this.peso
        altura = this.altura

        let imc = (peso/ (altura*altura))
        console.log(`meu nome é ${this.nome} e meu imc: ${imc}`)
    }
}


const lukas = new pessoa('lukas', 70,1.75 );
lukas.imc();



function compPessoa(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velha que ${p2.nome}`)
    }else if(p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velha que ${p1.nome}`)
    }else{
        console.log('Idade igual')
    }
}

class Carro {
    cor
    montadora
    kmPorLitro

    calcularComb(precoComb,km) {
        return (km / this.kmPorLitro) * precoComb
    }

    constructor(cor, montadora, kmPorLitro ){
        this.cor = cor
        this.montadora = montadora
        this.kmPorLitro = kmPorLitro

    }
}

const uno = new Carro('azul', 'fiat', 10)
console.log(uno.calcularComb(5, 10));