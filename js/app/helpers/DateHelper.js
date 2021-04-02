//CLASSE AJUDANTE SERA RESPONSAVEL ISOLADO EM LIDAR COM A DATA
class DateHelper{

    //METODO PARA RECER UMA DATA E CONVERTER EM TEXTO
    dataPataTexto(data){

        return data.getData() + '/' + 
                (data.getMouth() + 1) + '/' + 
                 data.getFullYear();
    }

    //MÉTODO PARA RECEBER UM TEXTO E CONVERTER EM DATA
    textoParaData(texto){
        
        return Date(...this.texto.split('-').map((item, indice) => item - indice % 2));

        
    }
    
}