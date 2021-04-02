class ListaNegociacoes{
    constructor(){ //indico que ninguem adicona fora da classe
        this._negociacoes = [];
    };

    //adiciono o unico metodo para incluir negociacoes 
    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    };
    get negociacoes(){
        return this._negociacoes;
    };
}