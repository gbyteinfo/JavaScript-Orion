class View{
    constructor(elemento){
        this._elemento = elemento;
    }
     template(model){
         throw new Error(`Método update tem que ser implementado`);
     }

     update(model){
        this._elemento.innerHTML = this.template(model);
    }
}