class NegociacaoController{
    constructor(){
        let $ = document.querySelector.bind(document); 
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        }
        adiciona(event){
            event.preventDefault();        
            //RECEBENDO ANO MES E DIA SEPARADAMENTE
            //SPREAD OPERATOR
            // USO DO ... DIZ QUE O ARRAY PASSADO PRO DATE TEM QUE SER DESMEMBRADO
            // O PRIMEIRO ITEM DO ARRAY É O PRIMEIRO PARAMENTRO DO CONSTRUTOR OU FUNÇÃO
            let data = new Date(...
                this._inputData.value
                .split('-')//SPLIT CRIA O ARRAY DO VALOR DATA, "¹ITEM MES INICIA NO 0
                .map((item, indice) => item - indice % 2)// ARROW FUNCTION OMITO O FUNCTION COM =>
                //MAP VARRE TODO O ARRAY ITEM POR ITEM 
                //"¹DECREMENTO O MES PARA EXECUTAR O CORRETO
            );
            let negociacao = new Negociacao(
                data,
                this._inputQuantidade.value,
                this._inputValor.value
            )
            console.log(data);
            console.log(negociacao);
    }
}