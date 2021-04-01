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
            // O PRIMEIRO ITEM DO ARRAY É O PRIMEIRO PARAMENTRO DO CONSTRUTO DO DATE(nesse exemplo)
            
            let data = new Date(...
                this._inputData.value
                .split('-')//SPLIT CRIA O ARRAY DO VALOR DATA, "¹ITEM MES INICIA NO 0
                .map(function(item, indice) {//VARRE TODO O ARRAY
                    if(indice == 1){
                        return item - 1; //"¹DECREMENTO O MES PARA EXECUTAR O CORRETO
                    }else {
                        return item;
                    }
                })
            );//tratando o recebimento data

            console.log(data);//bjeto data configurado para ser tratado          
    }
}