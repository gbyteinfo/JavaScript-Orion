class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");

    this._listaNegociacoes = ProxyFactory.create(
        new ListaNegociacoes(),
        ['adiciona', 'esvazia'], model => //MODEL NAO PRECISA DE () POIS SÓ PASSA UM PARAMETRO
            this._negociacoesView.update(model));

    this._negociacoesView = new NegociacoesView($("#negociacoesView"));
    this._negociacoesView.update(this._listaNegociacoes);

    this._mensagem = ProxyFactory.create( 
        new Mensagem(), ['texto'], model => //MODEL NAO PRECISA DE () POIS SÓ PASSA UM PARAMETRO
        this._mensagemView.update(model));

    this._mensagemView = new MensagemView($("#mensagemView"));
    this._mensagemView.update(this._mensagem);
  }
  adiciona(event) {
    event.preventDefault(); //PARO O O ENVIO DO FORM PELO METODO DO HTML
    this._listaNegociacoes.adiciona(this._criaNegociacao()); //ADICIONA NA LISTA
    //Atualizando a tabela na pagina
    this._mensagem.texto = `Negociação Adicionada com sucesso`; //SETANDO MENSAGEM PADRAO PASSANDO PELA CLASSE MENSAGEM
    this._limpaFormulario(); //LIMPA A LISTA
  }

  esvaziaMetodo() {
    this._listaNegociacoes.esvazia();
    this._mensagem.texto = `Lista de negociações apagas com sucesso`;
  }

  //METODO PARA CRIAR NEGOCIACAO
  //METODO SÓ PODE SER CHAMADO PELA CLASSE
  _criaNegociacao() {
    return new Negociacao(
      //DATEHELPER SENDO CHAMADA NA CLASSE, METODOS DEFINIDOS COMO STATICOS
      DateHelper.textoParaData(this._inputData.value), //USANDO DIRETAMENTE O RETORNO DATA
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  //METODO PARA LIMPAR O FORMULARIO
  //METODO SÓ PODE SER CHAMADO PELA CLASSE
  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    //DEFNINDO O FOCUS (CURSOR DEPOIS DA OPERACAO)
    //this._inputData.focus();
    this._inputQuantidade.focus();
    //this._inputValor.focus();
  }
}
