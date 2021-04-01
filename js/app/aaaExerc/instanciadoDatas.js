
console.log("TESTANDO DATAS\n\n\n\n");

//1 - Data instanciada sem parametros
let primeiraData = new Date();
console.log("1-Primeira Data: " + primeiraData + "\n");

//2 - Data instanciada com paramentros  
let segundaData = new Date('2016/01/17');
console.log("2-Segunda Data: " + segundaData + "\n");
console.log("  Com Métodos Especificos =>  Dia: " 
                + segundaData.getDate() + " | Mês: " 
                + segundaData.getMonth() + " | Ano: " 
                + segundaData.getFullYear()
            );

//3 - 

console.log("\n\n\n\n");