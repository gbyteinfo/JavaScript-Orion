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

            // 1 CRIA NEGOCIÇÃO
            let negociacao = new Negociacao(
                //DATEHELPER SENDO CHAMADA NA CLASSE, METODOS DEFINIDOS COMO STATICOS
                DateHelper.textoParaData(this._inputData.value),//USANDO DIRETAMENTE O RETORNO DATA
                this._inputQuantidade.value,
                this._inputValor.value
            );
                
            //ADICIONA NA LISTA
            this._listaNegociacoes.adiciona(negociacao);
            alert(`
                ADICIONADO: \n
                Data:............... ${DateHelper.dataParaTexto(negociacao.data)}
                Quantidade:.. ${this._inputQuantidade.value}
                Valor:.............. ${this._inputValor.value} 
            `);
            //LIMPA A LISTA

            console.log(this._listaNegociacoes.Negociacoes);
            this._limpaFormulario();
        };

        //metodo so pode ser chamado pela classe
        //METODO SÓ PODE SER CHAMADO PELA CLASSE
        _limpaFormulario(){
            this._inputData.value = '';
            this._inputQuantidade.value = 1;
            this._inputValor.value = 0.0;

            //DEFNINDO O FOCUS (CURSOR DEPOIS DA OPERACAO)
            this._inputData.focus();
            //this._inputQuantidade.focus();
            //this._inputValor.focus();
            
            
        }
}
