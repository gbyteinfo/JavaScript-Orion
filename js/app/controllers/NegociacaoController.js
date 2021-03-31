class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document); 
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        }
        
        adiciona(event){
            event.preventDefault();        
            
            console.log(typeof(this._inputData.value));//VERIFICANDO QUE TIPO ESTOU RECEBENDO
            console.log(this._inputData.value);//VERIFICANDO O VALOR EXATO DA STRING
            
            //RETORNANDO ERRO NA RECUPERAÇÃO DA DATA
            let negociacao = new Negociacao(
                this._inputData.value, 
                this._inputQuantidade.value,
                this._inputValor.value
            );
                console.log(negociacao);
            //adicionando a negociacao em uma lista

            //console.log(this._inputData.value);
            //console.log(this._inputQuantidade.value);
            //console.log(this._inputValor.value);
    }
}