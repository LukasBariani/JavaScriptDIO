let num = 5;

let lista = [];
for (let i = 0; i <= 10; i++) {
  let sla = num * i;
  lista.push(sla);
  console.log(`${num} x ${i} = ${sla}`);
}

for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}
