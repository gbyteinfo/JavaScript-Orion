class ListaNegociacoes{
    constructor(contexto, armadilha){ //indico que ninguem adicona fora da classe
        this._negociacoes = [];
        this._armadilha = armadilha;
        this._contexto = contexto;
    };

    //adiciono o unico metodo para incluir negociacoes 
    adiciona(negociacao){
        this._negociacoes.push(negociacao);
        //this._armadilha(this);
        Reflect.apply(this._armadilha,this._contexto, [this])//é uma classe que chama o metodo statico dessa classe
        //Reflect .aply recebe como parametro afução que qeuro executar
        //o contexto que quero executar
        // e os parametros que serao passado para a funcao no caso em array
    };
    get negociacoes(){
        //BLINDANDO O METODO CRIANDO UM ARRAY VAZIO ANTES DE CRIAR APENAS 1 CORRETO(COMO ZERARO ARRAY ANTERIOR)
        return [].concat(this._negociacoes);//CRIA UM NOVO ARRAY CO METODO NEGOCIAÇÃO
        
    };
    esvazia(){
        this._negociacoes = [];
        //this._armadilha(this);
        Reflect.apply(this._armadilha,this._contexto, [this])
    }
}