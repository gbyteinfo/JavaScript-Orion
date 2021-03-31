class NegociacaoController{

    adiciona(event){
        event.preventDefault();


        let $ = document.querySelector.bind(document);//ASSOCIAÇÃO COM O $ AO QUERY COM O IND MATEM O DOCUMENT
        
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');
        
        console.log(data.value);
        console.log(quantidade.value);
        console.log(valor.value);
    }
}