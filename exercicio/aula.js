const { gets, print } = require("./funcoes_auxiliares");

totNotas = gets()

total = 0 
for(let i = 0; i < totNotas; i++){
    total += gets()
}

media = total/totNotas
if(media < 5){
    print('Reprovado')
}else if(media >= 5 && media < 7  ){
    print('Recuperacao')
}else{
    print('Aprovado')
}
print(media)