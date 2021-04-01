// ContadorController.js
class ContadorController {

    constructor() {
        this._contador = 0;
        alert(this._contador);
    
    }

    get contador() {
        return this._contador;
    }

    incrementa() {
        this._contador++;
        document.querySelector('#p1').textContent = this._contador;
    }
}