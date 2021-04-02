//CLASSE AJUDANTE SERA RESPONSAVEL ISOLADO EM LIDAR COM A DATA
class DateHelper{
    //constructor(){}por padrao é criado esse constructor e executado
    //METODO PARA RECER UMA DATA E CONVERTER EM TEXTO
    static dataParaTexto(data){

        return data.getDate() + '/' + 
                (data.getMonth() + 1) + '/' + 
                 data.getFullYear();
    }

    //MÉTODO PARA RECEBER UM TEXTO E CONVERTER EM DATA
    static textoParaData(texto){
        
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

        
    }
    
}//DEFININDO METODOS STATICO EM HELPER