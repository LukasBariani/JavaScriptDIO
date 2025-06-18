const { gets, print } = require("./funcoes_auxiliares");

maior = 0;
const pego = gets()

for (let i = 0; i < pego; i++) {
  let atual = gets();
  if (atual > maior) {
    maior = atual;
  }
}

/*for(let i = 0; i < numort.length; i++){
    const atual = numort[i]
    if (atual > maior){
        maior = atual
    }
}
*/
print(maior);
