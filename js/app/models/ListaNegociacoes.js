class ListaNegociacoes{
    constructor(){ //indico que ninguem adicona fora da classe
        this._negociacoes = [];

    };


    adiciona(negociacao){
        this._negociacoes.push(negociacao);

    };
    get negociacoes(){
       
        return [].concat(this._negociacoes);
        
    };
    esvazia(){
        this._negociacoes = [];

        
    }
}