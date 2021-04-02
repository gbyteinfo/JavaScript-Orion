//CLASSE AJUDANTE SERA RESPONSAVEL ISOLADO EM LIDAR COM A DATA
class DateHelper{
    constructor(){
        throw new Error('Essa classe não pode ser Instanciado..!')// x=new DateHelper()
    }//DEFININDO UM NOVO ERRO COM O CONSTRUTOR
    static dataParaTexto(data){

        //USANDO TEMPLATE STRING PARA FAZER INTERPOLACAO COM A STRING
        //PODENDO TAMBEM SEPARAR POR LINHAS
        return `Adicionado com Template String: Data=> ${data.getDate()} | Mês=> ${data.getMonth() + 1} | Ano=> ${data.getFullYear()}`;

        //return data.getDate() + '/' + 
        //        (data.getMonth() + 1) + '/' + 
        //         data.getFullYear();
    }


    static textoParaData(texto){
        
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

        
    }
    
}