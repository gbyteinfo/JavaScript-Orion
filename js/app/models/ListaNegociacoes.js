class ListaNegociacoes{
    constructor(){ //indico que ninguem adicona fora da classe
        this._negociacoes = [];
    };

    //adiciono o unico metodo para incluir negociacoes 
    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    };
    get negociacoes(){
        //BLINDANDO O METODO CRIANDO UM ARRAY VAZIO ANTES DE CRIAR APENAS 1 CORRETO(COMO ZERARO ARRAY ANTERIOR)
        return [].concat(this._negociacoes);//CRIA UM NOVO ARRAY CO METODO NEGOCIAÇÃO
        
    };
}