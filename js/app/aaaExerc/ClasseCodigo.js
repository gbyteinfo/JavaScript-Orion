//by jorge mira @hst
//EXERCICIO CRIANDO UM METODO ORIENTADO OBJETO
//PARA O RECEBIMENTO DE UM CODIGO

//1 - CRIA A CLASSE, ESTANCIANDO O COSTRUCTOR
class ClassCodigo{
    
    //2 - CHAMANDO O OBJETO E PASSANDO DE FORMA SEGURA this._    
    constructor(codigo, codigo2){
        //5 - VERIFICO SE O CODIGO ESTA COM NUMEROS E FORMATO CORRETO
        if(!this._validaCodigoNumeros(codigo)){
            throw new Error(`\nCÓDIGO ${codigo} EM FORMATO INVÁLIDO.\nOBRIGATÓRIO FORMATO: 9999-88-77`)
        }else{
            this._codigo = codigo;//ATRIBUO O OBJETO RECEBIDO AO OBJETO DA CLASSE
        }

        //5 - VERIFICA SE O CODIGO ESTA COM LETRAS E FORMATO CORRETO
        if(!this._validaCodigoLetras(codigo2)){
            throw new Error(`\nCÓDIGO ${codigo2} EM FORMATO INVÁLIDO.\nOBRIGATÓRIO FORMATO: AAAA-BB-CC`)
        }else{
            this._codigo2 = codigo2;//ATRIBUO O OBJETO RECEBIDO AO OBJETO DA CLASSE
        }
    }

    //4 - METODO PARA VALIDAR CODIGO EM NUMEROS E QUANTIDADE DE LENGTH
    _validaCodigoNumeros(codigo){
        return /\d{4}-\d{2}-\d{2}/.test(codigo);//UTILIZANDO EXPRESSÃO REGULAR
    }

    //4 - METODO PARA VALIDAR CODIGO EM LETRAS E QUANTIDADE DE LENGTH
    _validaCodigoLetras(codigo2){
        return /\D{4}-\D{2}-\D{2}/.test(codigo2);//UTILIZANDO EXPRESSÃO REGULAR
    }

    //3 - INCLUSÃO GETTER PARA PASSAR O VALOR E NAO SER 
    //ALTERADO FORA DA CLASSE
    get codigo(){
        return this._codigo; 
    }
    get codigo2(){
        return this._codigo2;
    }    
}
//let novoCodigo =  new ClassCodigo("3898-89-88", "QOEE-WW-CS");
let novoCodigo =  new ClassCodigo("8398-89-88", "QOEE-WW-ee");//CHAMANDO O ERRO
//console.log(novoCodigo._codigo);
console.log(novoCodigo._codigo)
console.log(novoCodigo._codigo2)
