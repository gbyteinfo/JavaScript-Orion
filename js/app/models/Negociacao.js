//01- COMEÇANDO POR AQUI FAZENDO O 
//LEVANTAMENTO DOS OBJETOS NECESSARIOS
//PARA A APLICAÇÃO, CLIENADO MINHA PRIMEIRA CLASSE DA APP 
class Negociacao {
    constructor(data, quantidade,valor){
        this._data = new Date(data.getDate());
        this._quantidade = quantidade;
        this._valor = valor;
        
        Object.freeze(this);// dib.free so congela as propriedades do objeto atual
        
    }
    //ENCAPSULAMENTO E METODOS DE LEITURA
    get volume(){
        return this._quantidade * this._valor;
    }
    get data(){
        return new Date(this._data.getTime());// retorno uma nova Date() baseada na data da class Negociação 
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
}
