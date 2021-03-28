alert("Buscando Hospede... Clique em Ok");
var titulo = document.querySelector(".titulo-barra-superior");// BUSCANDO A TAG ESPECICA PELA CLASSE HTML			
titulo.textContent = "Hotel Orion - Hortolândia";

/**************INICIO EVENTO COM CLICK NO TITULO************************/
titulo.addEventListener("click", function(){alert("Ola, você clicou no titulo!\n " + titulo.textContent)});//MANEIRA MAIS USUAL - FUNÇÃO ANONIMA
titulo.addEventListener("click", function(){alert("Booking de Reservas")});//MANEIRA MAIS USUAL - FUNÇÃO ANONIMA

/*titulo.addEventListener("click", alertMsgNoTitulo);//FUNÇÃO NOMEADA
function alertMsgNoTitulo(){
    alert("Ola, você clicou no titulo! " + titulo.textContent);
    console.log("Ola, você clicou no titulo!\n" + titulo.textContent);
}

titulo.addEventListener("click", alert2MsgNoTitulo);//FUNÇÃO NOMEADA
function alert2MsgNoTitulo(){
    alert("Booking de Reservas");
    console.log("Booking de Reservas\n" + titulo.textContent);
}*/
/**************INICIO EVENTO COM CLICK NO TITULO************************/

//******INICIO SELEÇÃO DE VALORES COM QUERYSELECTOR*************/
var contHospedeTabela = document.querySelectorAll(".reservas");
//console.log(contHospedeTabela);
for(var i = 0; i < contHospedeTabela.length; i++){//VALOR DE I CONTADO X VEZES O LENGTH DE CONSTHOSPEDETABELA
    var hospedeTabela = contHospedeTabela[i];//COLOCO MEU CONTADOR DEM UMA VARIAVEL DENTRO DA ARRAY
    
    var hospedeNome = hospedeTabela.querySelector(".info-nome");
    var nomeHospede = hospedeNome.textContent;
    //console.log(nomeHospede);
    //console.log(hospedeNome);

    var hospedeQPessoas = hospedeTabela.querySelector(".info-qtd-pessoas");
    var qpessoasHospede = hospedeQPessoas.textContent;
    //console.log(qpessoasHospede);
    //console.log(hospedeQPessoas);

    var hospedeQQuartos = hospedeTabela.querySelector(".info-qtd-quartos");
    var qquartosHospede = hospedeQQuartos.textContent;
    //console.log(qquartosHospede);
    //console.log(hospedeQQuartos);

    var hospedeQNoites = hospedeTabela.querySelector(".info-qtd-noites");
    var qnoitesHospede = hospedeQNoites.textContent;
    //console.log(qnoitesHospede);
    //console.log(hospedeQNoites);

    var hospedeFPagamento = hospedeTabela.querySelector(".info-pagamento");
    var pagamentoHospede = hospedeFPagamento.textContent;
    //console.log(pagamentoHospede);
    //console.log(hospedeFPagamento);

    var hospedeVDiaria = hospedeTabela.querySelector(".info-valor-diaria");
    var vdiariaHospede = hospedeVDiaria.textContent;
    //console.log(vdiariaHospede);
    //console.log(hospedeVDiaria);

    var hospedeVTotal = hospedeTabela.querySelector(".info-valor-total");
    var vtotalHospede = hospedeVTotal.textContent;
    //console.log(vtotalHospede);
    //console.log(hospedeVTotal);

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
    //console.log("PGSelecionado " + pgSelecionado + " - Tipo: " + descricaoTipoPG);
    //console.log("\n\n TIPO DE PAGAMENTO ===> " + recuperadoTipoPG + "\n\n");
    
    var contaBooking = (qpessoasHospede * 100) * qquartosHospede * qnoitesHospede + pgSelecionado;
    var contaBookingParcial = (qpessoasHospede * 100) * qquartosHospede;
    //console.log("Valor da Reserva Total => " + contaBooking + "\n");
    //console.log("Valor da Diaria => " + contaBookingParcial + "\n");
    //*****FINAL CALCULO VALOR DIARIA / VALOR TOTAL ***********/

    //*****INICIO ALTERANDO VALOR DENTRO DA TAG HTML ***********/
    var hospedeVTotal = hospedeTabela.querySelector(".info-valor-total");// BUSCANDO A TAG ESPECICA PELA CLASSE HTML
    var resultadoVTotal = hospedeVTotal.textContent;// SELECIONANDO A TAG RECUPERADA PELA CLASSE HTML E SELECIONANDO VALOR COM textContent
    var tipoPagTotal = true;

    var hospedeVDiaria = hospedeTabela.querySelector(".info-valor-diaria");
    var resultadoVdiaria = hospedeVDiaria.textContent;
    var tipoPagDiaria = true;

    if(pagamentoHospede == 1){
        hospedeVTotal.textContent = ("R$ " + contaBooking + ",00");
        hospedeVDiaria.textContent = ("RS " + contaBookingParcial + ",00");  
        //console.log("Taxa para opçao: " + pagamentoHospede + " => +2%");

    }else if(pagamentoHospede == 2) {
        hospedeVTotal.textContent = ("R$ " + contaBooking + ",00");
        hospedeVDiaria.textContent = ("RS " + contaBookingParcial + ",00");
        //console.log("Taxa para opçao: " + pagamentoHospede + " => +5.5%");
    
    } else if(pagamentoHospede == 3){
        hospedeVTotal.textContent = ("R$ " + contaBooking + ",00");
        hospedeVDiaria.textContent = ("RS " + contaBookingParcial + ",00");
        //console.log("Taxa para opçao: " + pagamentoHospede + " => -5%");
    
    }else{
        pagamentoValido = false;
        hospedeVTotal.textContent = ("Error Tipo Pag.");
        hospedeVDiaria.textContent = ("Error Tipo Pag.");
        hospedeVDiaria.classList.add("backJSclas");//ADD. CLASSE E SETA OS PARAMETROS EM UM UNICO LUGAR
        hospedeVTotal.classList.add("backJSclas");//ADD. CLASSE E SETA OS PARAMETROS EM UM UNICO LUGAR
        //hospedeVTotal.style.backgroundColor = "red"//FAÇO ALTERAÇÃO CHAMANDO A FUNÇAO STYLE.COLOR 
        //hospedeVTotal.style.color = "#ffffff"; //FAÇO ALTERAÇÃO CHAMANDO A FUNÇAO STYLE.COLOR
    }

    /**************INICIO AÇÃO DA BOTÃO ************************************/
    var botaoAdicionar = document.querySelector("#adicionar-reserva");
    console.log(botaoAdicionar)
    
    botaoAdicionar.addEventListener("click", function(event){
        event.preventDefault(); //RETIRO EVENTO PADRAO DE ATT A PG

        var form = document.querySelector("#form-adiciona");//SELECIONO MEU FORM PELO ID
        //***INICIO RECUPERO OS DADOS DO FORM***//
        var formNome = form.formNome.value;
        var tipoPagamento = form.tipoPagamento.value;
        var qtdPessoas = form.qtdPessoas.value;
        var qtdQuartos = form.qtdQuartos.value;
        var qtdNoites = form.qtdNoites.value;
        //***FIM RECUPERO OS DADOS DO FORM***//
        
        //***INICIO CRIAR ELELMENTOS TD E TR HTML DO TABLE***//
        var reservaTr = document.createElement("tr");
        var nomeTd = document.createElement("td");
        var tipoPagamentoTd = document.createElement("td");
        var qtdPessoasTd = document.createElement("td");
        var qtdQuartosTd = document.createElement("td");
        var qtdNoitesTd = document.createElement("td");
        //***FIM CRIAR ELELMENTOS TD E TR HTML DO TABLE***//

        //***INICIO POPULAR NOVOS ELEMENTOS TD COM DADOS DO FORM***//
        nomeTd.textContent = formNome;
        tipoPagamentoTd.textContent = tipoPagamento;
        qtdPessoasTd.textContent = qtdPessoas;
        qtdQuartosTd.textContent = qtdQuartos;
        qtdNoitesTd.textContent = qtdNoites;
        //***FIM POPULAR NOVOS ELEMENTOS TD COM DADOS DO FORM***//

        //****INICIO ADICIONANDO ELEMENTOS TD COMO FILHAS DA TR****//
        reservaTr.appendChild(nomeTd);
        reservaTr.appendChild(tipoPagamentoTd);
        reservaTr.appendChild(qtdPessoasTd);
        reservaTr.appendChild(qtdQuartosTd);
        reservaTr.appendChild(qtdNoitesTd);
        //****FIM ADICIONANDO ELEMENTOS TD COMO FILHAS DA TR****//

        //****INICIO ADICIONANDO NOVO ELEMENTO TR COMO FILHA DO TABLE****//
        var popularTabelaReservas = document.querySelector("#tabela-reservas");
        popularTabelaReservas.appendChild(reservaTr);
        //****FIM ADICIONANDO NOVO ELEMENTO TR COMO FILHA DO TABLE****//


        /****************DEBUG PARA TESTE***************** *
        //alert("Cliquei no Botão")
        alert("Nome:.............. " + formNome + 
            "\nTipo Pagamento: " + tipoPagamento +  
            "\nQtd. Pessoas: " + qtdPessoas + 
            "\nQtd. Quartos: " + qtdQuartos + 
            "\nQtd. Noites: " + qtdNoites);
        console.log("Clique no Botao ");        
        console.log(formNome);
        console.log(tipoPagamento);
        console.log(qtdPessoas);
        console.log(qtdQuartos);
        console.log(qtdNoites);
        */

    });
    /**************INICIO AÇÃO DA BOTÃO ***********************************/

    //*****FINAL ALTERANDO VALOR DENTRO DA TAG HTML ***********/
    alert("HOTEL ORION\n\nHospede......... "
        + nomeHospede + "\nDiaria ................. R$ " 
        + contaBookingParcial + ",00 \nTotal Reserva ...R$ " 
        + contaBooking + ",00 \n" 
        + descricaoTipoPG);
}


//*********************************** MOSTRANDO VALORES *******************************************/
//console.log("TOTAL HTML R$ " + resultadoVTotal);
//console.log("TOTAL CODE R$ " + contaBooking + ",00");
//console.log("DIARIA HTML R$ " + resultadoVdiaria);
//console.log("DIARIA CODE R$ " + contaBookingParcial + ",00");




