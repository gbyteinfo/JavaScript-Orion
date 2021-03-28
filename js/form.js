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
    var valorDiariaTd = document.createElement("td");
    var valorTotalTd = document.createElement("td");
    //***FIM CRIAR ELELMENTOS TD E TR HTML DO TABLE***//

    //***INICIO POPULAR NOVOS ELEMENTOS TD COM DADOS DO FORM E CLASSES***//
    nomeTd.textContent = formNome; //POPULANDO TD COM DADOS CAPTURADOS DO FORM
    nomeTd.className = ("info-nome"); //DECLARANDO CLASS NA TAG TD PARA ESTILO

    tipoPagamentoTd.textContent = tipoPagamento;//POPULANDO TD COM DADOS CAPTURADOS DO FORM
    tipoPagamentoTd.className = ("info-destaque");//DECLARANDO CLASS NA TAG TD PARA ESTILO
    
    qtdPessoasTd.textContent = qtdPessoas;//POPULANDO TD COM DADOS CAPTURADOS DO FORM
    qtdPessoasTd.className = ("info-destaque");//DECLARANDO CLASS NA TAG TD PARA ESTILO

    qtdQuartosTd.textContent = qtdQuartos;//POPULANDO TD COM DADOS CAPTURADOS DO FORM
    qtdQuartosTd.className = ("info-destaque");//DECLARANDO CLASS NA TAG TD PARA ESTILO

    qtdNoitesTd.textContent = qtdNoites;//POPULANDO TD COM DADOS CAPTURADOS DO FORM
    qtdNoitesTd.className = ("info-destaque");//DECLARANDO CLASS NA TAG TD PARA ESTILO

    valorDiariaTd.textContent = contaBookingParcial;//POPULANDO TD COM DADOS CAPTURADOS DO FORM
    valorDiariaTd.className = ("info-destaque");//DECLARANDO CLASS NA TAG TD PARA ESTILO
    
    valorTotalTd.textContent = contaBooking;//POPULANDO TD COM DADOS CAPTURADOS DO FORM
    valorTotalTd.className = ("info-destaque");//DECLARANDO CLASS NA TAG TD PARA ESTILO
    //***FIM POPULAR NOVOS ELEMENTOS TD COM DADOS DO FORM***//

    //****INICIO ADICIONANDO ELEMENTOS TD COMO FILHAS DA TR****//
    reservaTr.appendChild(nomeTd);
    reservaTr.appendChild(tipoPagamentoTd);
    reservaTr.appendChild(qtdPessoasTd);
    reservaTr.appendChild(qtdQuartosTd);
    reservaTr.appendChild(qtdNoitesTd);
    reservaTr.appendChild(valorDiariaTd);
    reservaTr.appendChild(valorTotalTd);
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