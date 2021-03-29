console.log("Trabalhando com Listas");
// const salvador = 'Salvador';
// const saoPaulo = 'São Paulo';
// const rioDeJaneiro = 'Rio de Janeiro';

//DECLARANDO ARRAY

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba'
);
listaDeDestinos.push('Hortolândia');//ADICIONA UM ITEM A LISTA
console.log("Destinos Possiveis");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(2,2);//SPLICE = (POSIÇÃO,QUANTIDADE)
console.log(listaDeDestinos);//MOSTRANDO LISTA COMPLETA
console.log(listaDeDestinos[1],listaDeDestinos[2]);//MOSTRANDO NA POSIÇÃO 0 DO ARRAY