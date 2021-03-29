console.log("Trabalhando com atribuição de variaveis");

const primeiroNome = "Jorge";
const sobrenome = "Mira";
const idade = 35;

console.log("Nome: " + primeiroNome + " - Sobrenome: " + sobrenome + " - Idade: " + idade); //ATRIBUINDO AS VARIAVEIS
console.log(primeiroNome, sobrenome);
console.log('Meu nome é: ${primeiroNome + sobrenome}');

let contador = 0;
contador = contador +1;

//nome = nome + sobrenome;//VARIAVEL NOME É CONST NAO MUDA, PARA MUDAR TEM QUE SER LET
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade2; //DECLARANDO VARIAVEL SEM ATRIBUIÇÃO
idade2 = 35;//ATRIBUINDO VALOR A VARIAVEL
idade2 = idade2 + 1;

console.log(idade2);