class NegociacaoController{
    constructor(){
        let $ = document.querySelector.bind(document); 
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        };
        adiciona(event){
            event.preventDefault();

            let negociacao = new Negociacao(
                //DATEHELPER SENDO CHAMADA NA CLASSE, METODOS DEFINIDOS COMO STATICOS
                DateHelper.textoParaData(this._inputData.value),//USANDO DIRETAMENTE O RETORNO DATA
                this._inputQuantidade.value,
                this._inputValor.value
            );

            this._listaNegociacoes.adiciona(negociacao);
            console.log(this._listaNegociacoes.Negociacoes);
        };
}
