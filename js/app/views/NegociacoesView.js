class NegociacoesView{

    constructor(elemento){
        this._elemento = elemento;

    }

    _template(model){

        return `<table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                <!--INCLUINDO JUNÇÃO E PARAMENTROS PARA CHAMADA DO TEMPLATE-->
                ${model.negociacoes.map(n => 

                    `<tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>`
                    
                ).join('')}
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>
                
                ${
                    //EXPREÇÃO PARA RECEBER TOTAL COM PARADIGMA FUNCIONAL
                    //UTILIZANDO ARROW FUNCTION
                    model.negociacoes.reduce((total, n) => total + n.volume, 0.0)


                    /*//EXPREÇAO PARA RECEBER O TOTAL DAS NEGOCIACOES
                    //Immediately Invoked Function Expression
                    //UTILIZANDO IIFE
                    (function(){
                        let total= 0;
                    model.negociacoes.forEach(n => total += n.volume);
                    return total;
                    })()*/
                }
                    
                </td>
            </tfoot>
        </table>`;
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}