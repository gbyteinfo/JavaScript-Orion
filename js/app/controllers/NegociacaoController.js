class NegociacaoController{

    constructor(){

        let $ = document.querySelector.bind(document); 
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        }
        
        adiciona(event){
            event.preventDefault();        
            
            //2021-03-21    
            let data = new Date(this._inputData.value.replace(/-/g, ','));//tratando o recebimento data

            console.log(data);//bjeto data configurado para ser tratado          
    }
}