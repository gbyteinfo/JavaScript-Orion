
console.log("TESTANDO DATAS\n\n\n\n");

//1 - Data instanciada sem parametros
let primeiraData = new Date();
console.log("1 - Primeira Data: " + primeiraData);
console.log("  Com Métodos Especificos =>  Dia: " 
                + primeiraData.getDate() + " | Mês: " 
                + primeiraData.getMonth() + " | Ano: " 
                + primeiraData.getFullYear() + "\n\n"
);

//2 - Data instanciada com paramentros  
let segundaData = new Date('2021/04/01');
console.log("2 - Segunda Data: " + segundaData);
console.log("  Com Métodos Especificos =>  Dia: " 
                + segundaData.getDate() + " | Mês: " 
                + segundaData.getMonth() + " | Ano: " 
                + segundaData.getFullYear() + "\n\n"
            );

//3 - Data instanciada com parametros diferentes
let terceiraData = new Date(2021, 04, 01);
console.log("3 - Terceira Data: " + terceiraData);
console.log("  Com Métodos Especificos =>  Dia: " 
                + terceiraData.getDate() + " | *Mês: " // INDICE NAO INICIA DO 0
                + terceiraData.getMonth() + " | Ano: " 
                + terceiraData.getFullYear() + "\n\n"
            );

//4 - Data instanciada com parametros diferentes
let quartaData = '01-04-2021';
quartaData = quartaData.split('-').reverse().join('/');
let data4QD = new Date(quartaData);
console.log("4 - Quarta Data: " + data4QD);
console.log("  Com Métodos Especificos =>  Dia: " 
                + data4QD.getDate() + " | Mês: " 
                + data4QD.getMonth() + " | Ano: " 
                + data4QD.getFullYear() + "\n\n"
);
//5 - Data instanciada com parametros resumida e FINAL
let quintaData = '01-04-2021';
let data5QD = new Date(quintaData.split('-').reverse().join('/'));
console.log("3 - Terceira Data: " + data5QD);
console.log("  Com Métodos Especificos =>  Dia: " 
                + data5QD.getDate() + " | Mês: " 
                + data5QD.getMonth() + " | Ano: " 
                + data5QD.getFullYear() + "\n\n"
            );



console.log("\n\n\n\n");