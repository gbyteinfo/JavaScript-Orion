class NegociacaoController{

    adiciona(event){
        event.preventDefault();

        //VARIAAVEL $ RECEBE O QUERY SELECTOR DO DOCUMENT
        //COM O .BIND EU INCLUO NOVAMENTE O QUERY SELECTOR
        //PARA O CONTEXTO DO DOCUMENT NOVAMENTE, AGORA REPRESENTADO 
        //PELO $ 
        let $ = document.querySelector.bind(document);

        //ASSIM O QUERY SELECTOR ESTA SENDO EXECUTADO 
        //FORA DO CONTEXTO DOCUMENT, A QUAL A FUNÇÃO 
        //PERTENCE E TEM CHAMADA PARA O THIS 
        //let $ = document.querySelector; 
        
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');
        
        console.log(data.value);
        console.log(quantidade.value);
        console.log(valor.value);
    }
}