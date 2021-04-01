class ContadorController {

    constructor() {
        this._contador = 0;
        this._elemento = document.querySelector('#p1'); // busca uma única vez
        alert(this._contador);
    }

    get contador() {
        return this._contador;
    }

    incrementa() {
        this._contador++;
        this._elemento.textContent = this._contador; // não precisa buscar o elemento, já temos uma referência para ele
    }
}

