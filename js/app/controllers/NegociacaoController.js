class NegociacaoController{
    constructor(){
        let $ = document.querySelector.bind(document); 
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        console.log("Data dentro do Constructor: " + this._inputData.value);
        };
        adiciona(event){
            event.preventDefault();

            console.log("Data no Metodo Adiciona: " + this._inputData.value);
            let data = new Date(
                ...this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2)
            );
            console.log("Data no Metodo Adiciona depois: " + this._inputData.value);
            
            let negociacao = new Negociacao(
                data,
                this._inputQuantidade.value,
                this._inputValor.value
            );

            console.log("Data depois da classe negociacao: " + negociacao.data);

        };
}
