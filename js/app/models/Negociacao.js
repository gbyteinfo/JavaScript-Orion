//01- COMEÇANDO POR AQUI FAZENDO O 
//LEVANTAMENTO DOS OBJETOS NECESSARIOS
//PARA A APLICAÇÃO, CLIENADO MINHA PRIMEIRA CLASSE DA APP 
class Negociacao {
    constructor(data, quantidade,valor){
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    obtemVolume(){
        return this.quantidade * this.valor;
    }
}
