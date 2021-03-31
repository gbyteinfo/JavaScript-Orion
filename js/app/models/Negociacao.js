//01- COMEÇANDO POR AQUI FAZENDO O 
//LEVANTAMENTO DOS OBJETOS NECESSARIOS
//PARA A APLICAÇÃO, CLIENADO MINHA PRIMEIRA CLASSE DA APP 
class Negociacao {
    constructor(data, quantidade,valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    //ENCAPSULAMENTO E METODOS DE LEITURA
    getVolume(){
        return this._quantidade * this._valor;
    }
    getData(){
        return this._data;
    }
    getQuantidade(){
        return this._quantidade;
    }
    getValor(){
        return this._valor;
    }
}
