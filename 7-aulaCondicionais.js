console.log("Trabalhando com Condicionais");
// const salvador = 'Salvador';
// const saoPaulo = 'São Paulo';
// const rioDeJaneiro = 'Rio de Janeiro';

//DECLARANDO ARRAY

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
);
const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("\n\n Destinos Possiveis: \n");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);//SPLICE = (POSIÇÃO,QUANTIDADE)
// } else if (estaAcompanhada) {
//     console.log("Comprador esta acompanhado");
//     listaDeDestinos.splice(1, 1);//SPLICE = (POSIÇÃO,QUANTIDADE)
// } else {
//     console.log("Comprador menor de idade, compra proibida");
// }

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Boa Viagem!");
    listaDeDestinos.splice(1, 1);//SPLICE = (POSIÇÃO,QUANTIDADE)
}else {
    console.log("Menor de Idade. Venda Proibida");
}
console.log("\n\n Embarque: \n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("BOM EMBARQUE!");
}else{
    console.log("EMBARQUE PROIBIDO")
}

console.log(listaDeDestinos);

// console.log(idadeComprador < 18);
// console.log(idadeComprador > 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);


