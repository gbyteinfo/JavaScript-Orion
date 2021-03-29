console.log("Trabalhando com Condicionais");
// const salvador = 'Salvador';
// const saoPaulo = 'São Paulo';
// const rioDeJaneiro = 'Rio de Janeiro';

//DECLARANDO ARRAY

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);
const idadeComprador = 15;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\n\n Destinos Possiveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        console.log("DESTINO EXISTE");
        destinoExiste = true;
        break;
    }
    contador +=1;
}
console.log("Destino Existe? " + destinoExiste + " - Contado Posição: " + contador);

if(podeComprar && destinoExiste){
    console.log("TUDO CERTO, BOA VIAGEM");
}else{
    console.log("DESCULPE, VIAJEM NÃO COMPRADA");
};


for( let cont = 0; cont < 3; cont++){
    if(listaDeDestinos[contador] == destino){
        console.log("DESTINO EXISTE: => " + destino);
        destinoExiste = true;
    }
    contador +=1;
}
