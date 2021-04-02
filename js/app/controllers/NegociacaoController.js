class NegociacaoController{
    constructor(){
        let $ = document.querySelector.bind(document); 
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        };
        adiciona(event){
            event.preventDefault();//PARO O O ENVIO DO FORM PELO METODO DO HTML
            this._listaNegociacoes.adiciona(this._criaNegociacao());//ADICIONA NA LISTA
            this._limpaFormulario();//LIMPA A LISTA  
        };

        //METODO PARA CRIAR NEGOCIACAO
        //METODO SÓ PODE SER CHAMADO PELA CLASSE
        _criaNegociacao(){
            return new Negociacao(
                //DATEHELPER SENDO CHAMADA NA CLASSE, METODOS DEFINIDOS COMO STATICOS
                DateHelper.textoParaData(this._inputData.value),//USANDO DIRETAMENTE O RETORNO DATA
                this._inputQuantidade.value,
                this._inputValor.value);
                
        };

        //METODO PARA LIMPAR O FORMULARIO
        //METODO SÓ PODE SER CHAMADO PELA CLASSE
        _limpaFormulario(){
            this._inputData.value = '';
            this._inputQuantidade.value = 1;
            this._inputValor.value = 0.0;

            //DEFNINDO O FOCUS (CURSOR DEPOIS DA OPERACAO)
            //this._inputData.focus();
            this._inputQuantidade.focus();
            //this._inputValor.focus();    
        };
}
