alert("Buscando Hospede... Clique em Ok");
var titulo = document.querySelector(".titulo-barra-superior");// BUSCANDO A TAG ESPECICA PELA CLASSE HTML			
titulo.textContent = "Hotel Orion - Hortolândia"

//******INICIO SELEÇÃO DE VALORES COM QUERYSELECTOR*************/
//************************************************************** */
//************************************************************** */
var hospedeTabela = document.querySelector("#id-reservas")// BUSCANDO A TAG ESPECIFICA A PARTIR DO ID HTML DESCRITO
console.log(hospedeTabela);

var hospedeNome = hospedeTabela.querySelector(".info-nome");
var nomeHospede = hospedeNome.textContent;
console.log(nomeHospede);
console.log(hospedeNome);

var hospedeQPessoas = hospedeTabela.querySelector(".info-qtd-pessoas");
var qpessoasHospede = hospedeQPessoas.textContent;
console.log(qpessoasHospede);
console.log(hospedeQPessoas);

var hospedeQQuartos = hospedeTabela.querySelector(".info-qtd-quartos");
var qquartosHospede = hospedeQQuartos.textContent;
console.log(qquartosHospede);
console.log(hospedeQQuartos);

var hospedeQNoites = hospedeTabela.querySelector(".info-qtd-noites");
var qnoitesHospede = hospedeQNoites.textContent;
console.log(qnoitesHospede);
console.log(hospedeQNoites);

var hospedeFPagamento = hospedeTabela.querySelector(".info-pagamento");
var pagamentoHospede = hospedeFPagamento.textContent;
console.log(pagamentoHospede);
console.log(hospedeFPagamento);

var hospedeVDiaria = hospedeTabela.querySelector(".info-valor-diaria");
var vdiariaHospede = hospedeVDiaria.textContent;
console.log(vdiariaHospede);
console.log(hospedeVDiaria);

var hospedeVTotal = hospedeTabela.querySelector(".info-valor-total");
var vtotalHospede = hospedeVTotal.textContent;
console.log(vtotalHospede);
console.log(hospedeVTotal);
//******FINAL SELEÇÃO DE VALORES COM QUERYSELECTOR*************/


//*****INICIO CALCULO VALOR DIARIA / VALOR TOTAL ***********/
var tipoPG = hospedeTabela.querySelector(".info-pagamento");
var recuperadoTipoPG = tipoPG.textContent;
if(recuperadoTipoPG == 1 || recuperadoTipoPG == 2 || recuperadoTipoPG == 3 ){
    if(recuperadoTipoPG == 1){
        var pgSelecionado = 10.00;
        var descricaoTipoPG = "Pagamento Dédito";
    }else if(recuperadoTipoPG == 2){
        var pgSelecionado = 15.00;
        var descricaoTipoPG = "Pagamento Crédito";
    }else{
        var pgSelecionado = 20.00;
        var descricaoTipoPG = "Pagamento Dinheiro";
    }
}else{
    var pgSelecionado = 0;
}
console.log("pgSelecionado " + pgSelecionado + " - Tipo: " + descricaoTipoPG);
console.log("\n\n TIPO DE PAGAMENTO ===> " + recuperadoTipoPG + "\n\n");
var contaBooking = (qpessoasHospede * 100) * qquartosHospede * qnoitesHospede + pgSelecionado;
console.log("Valor da Reserva Total => " + contaBooking + "\n");
var contaBookingParcial = (qpessoasHospede * 100) * qquartosHospede;
console.log("Valor da Diaria => " + contaBookingParcial + "\n");
//*****FINAL CALCULO VALOR DIARIA / VALOR TOTAL ***********/

//*****INICIO ALTERANDO VALOR DENTRO DA TAG HTML ***********/


var hospedeVTotal = hospedeTabela.querySelector(".info-valor-total");// BUSCANDO A TAG ESPECICA PELA CLASSE HTML
var resultadoVTotal = hospedeVTotal.textContent;// SELECIONANDO A TAG RECUPERADA PELA CLASSE HTML E SELECIONANDO VALOR COM textContent
var tipoPagTotal = true;

var hospedeVDiaria = hospedeTabela.querySelector(".info-valor-diaria");
var resultadoVdiaria = hospedeVDiaria.textContent;
var tipoPagDiaria = true;

if(pagamentoHospede == 1){
    console.log("Taxa para opçao: " + pagamentoHospede + " => +2%");  
    hospedeVTotal.textContent = ("R$ " + contaBooking + ",00");
    hospedeVDiaria.textContent = ("RS " + contaBookingParcial + ",00");  
}else if(pagamentoHospede == 2) {
    console.log("Taxa para opçao: " + pagamentoHospede + " => +5.5%");
    hospedeVTotal.textContent = ("R$ " + contaBooking + ",00");
    hospedeVDiaria.textContent = ("RS " + contaBookingParcial + ",00");
} else if(pagamentoHospede == 3){
    console.log("Taxa para opçao: " + pagamentoHospede + " => -5%");
    hospedeVTotal.textContent = ("R$ " + contaBooking + ",00");
    hospedeVDiaria.textContent = ("RS " + contaBookingParcial + ",00");
}else{
    pagamentoValido = false;
    hospedeVTotal.textContent = ("Error Tipo Pag.");
    hospedeVDiaria.textContent = ("Error Tipo Pag.");
}

//*****FINAL ALTERANDO VALOR DENTRO DA TAG HTML ***********/

//***** MOSTRANDO VALORES ***********/
console.log("TOTAL HTML R$ " + resultadoVTotal);
console.log("TOTAL CODE R$ " + contaBooking + ",00");
console.log("DIARIA HTML R$ " + resultadoVdiaria);
console.log("DIARIA CODE R$ " + contaBookingParcial + ",00");
alert("HOTEL ORION\n\nDiaria ................. R$ " + contaBookingParcial + ",00 \nTotal Reserva ...R$ " + contaBooking + ",00 \n" + descricaoTipoPG);


