//console.log("Hello World - Console")
//alert("Ola, Bem Vindo(a) ao Hotel Orion")
//console.log(document);

var titulo = document.querySelector(".titulo-barra-superior");			
titulo.textContent = "Hotel Orion - Hortolândia"

var hospedeTabela = document.querySelector("#id-reservas")
var hospedeNome = hospedeTabela.querySelector(".info-nome");
var hospedeQPessoas = hospedeTabela.querySelector(".info-qtd-pessoas");
var hospedeQQuartos = hospedeTabela.querySelector(".info-qtd-quartos");
var hospedeQNoites = hospedeTabela.querySelector(".info-qtd-noites");
var hospedeFPagamento = hospedeTabela.querySelector(".info-pagamento");
var hospedeVDiaria = hospedeTabela.querySelector(".info-valor-diaria");
var hospedeVTotal = hospedeTabela.querySelector(".info-valor-total");





var vtotalHospede = hospedeVTotal.textContent;
console.log(vtotalHospede);

var vdiariaHospede = hospedeVDiaria.textContent;
console.log(vdiariaHospede);

var pagamentoHospede = hospedeFPagamento.textContent;
console.log(pagamentoHospede);

var qnoitesHospede = hospedeQNoites.textContent;
console.log(qnoitesHospede);

var qquartosHospede = hospedeQQuartos.textContent;
console.log(qquartosHospede);

var qpessoasHospede = hospedeQPessoas.textContent;
console.log(qpessoasHospede);

var nomeHospede = hospedeNome.textContent;
console.log(nomeHospede);

console.log(hospedeVTotal);
console.log(hospedeVDiaria);
console.log(hospedeFPagamento);
console.log(hospedeQNoites);
console.log(hospedeQQuartos);
console.log(hospedeQPessoas);
console.log(hospedeNome);
console.log(hospedeTabela);
