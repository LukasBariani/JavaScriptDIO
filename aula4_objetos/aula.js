const gus = {
    name: 'Gustavo',
    apelido: 'Gus',
    age: 67,
    sex: 'M',

    mostrar: function(){
        return console.log(`hellow, my name is ${this.name} but you can call me ${this.apelido}`)
    }
}

/*gus.mostrar = function(){
    console.log(`hellow, my name is ${this.name} but you can call me Trafica`)
}*/

const atributo = 'sex'
console.log(gus[atributo])
gus['sex'] = 'gay'
console.log(gus.sex)


gus.mostrar();

