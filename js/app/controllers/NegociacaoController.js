class NegociacaoController{
    constructor(){
        let $ = document.querySelector.bind(document); 
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        //console.log("Data dentro do Constructor: " + this._inputData.value);
        };
        adiciona(event){
            event.preventDefault();

            //let helper = new DateHelper(); //ACICIONANDO MINHA CLASSE NA VARIAVEL
            //let data = helper.textoParaData(this._inputData.value);
            
            let negociacao = new Negociacao(
                //DATEHELPER SENDO CHAMADA NA CLASSE, METODOS DEFINIDOS COMO STATICOS
                DateHelper.textoParaData(this._inputData.value),//USANDO DIRETAMENTE O RETORNO DATA
                this._inputQuantidade.value,
                this._inputValor.value
            );

            //console.log(negociacao);

            console.log(DateHelper.dataParaTexto(negociacao.data));
        };
}
