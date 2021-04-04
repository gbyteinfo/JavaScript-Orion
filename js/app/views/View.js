class View{
    constructor(elemento){
        this._elemento = elemento;
    }
     _template(model){}

     update(model){
        this._elemento.innerHTML = this._template(model);
    }
}