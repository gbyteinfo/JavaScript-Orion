class ListaNegociacoes{
    constructor(){ //indico que ninguem adicona fora da classe
        this._negociacoes = [];
    };

    //adiciono o unico metodo para incluir negociacoes 
    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    };
    get negociacoes(){
        //BLINDANDO O METODO
        return [].concat(this._negociacoes);//CRIA UM NOVO ARRAY CO METODO NEGOCIAÇÃO
    };
}