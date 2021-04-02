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
            let helper = new DateHelper(); //ACICIONANDO MINHA CLASSE NA VARIAVEL
            let data = helper.textoParaData(this._inputData.value);
            
            let negociacao = new Negociacao(
                data,
                this._inputQuantidade.value,
                this._inputValor.value
            );

            console.log(negociacao)
            console.log(diaMesAno)
        };
}
