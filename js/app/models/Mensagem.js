class Mensagem{
    constructor(texto=''){//DEFININDO PADRAO PARA O TEXTO
        this._texto = texto;
    }    

    get texto(){
        return this._texto;
    }

    set texto(texto){
        this._texto = texto;
    }
}
//let mensagem =new Mensagem("Ola, Voce tem uma mensagem");
//let mensagem =new Mesagem();
//console.log(mensagem.texto)