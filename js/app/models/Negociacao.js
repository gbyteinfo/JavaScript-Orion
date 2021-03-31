//01- COMEÇANDO POR AQUI FAZENDO O 
//LEVANTAMENTO DOS OBJETOS NECESSARIOS
//PARA A APLICAÇÃO, CLIENADO MINHA PRIMEIRA CLASSE DA APP 
class Negociacao {
    constructor(data, quantidade,valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        
        Object.freeze(this);// CONGELANDO MEU METODO DRETAMENTE NA CLASSE
        
    }
    //ENCAPSULAMENTO E METODOS DE LEITURA
    get volume(){
        return this._quantidade * this._valor;
    }
    get data(){
        return this._data;
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
}
