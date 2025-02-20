// crie um vetor que recebera dados de um usuario
var dados = [];
console.log("fpor favor informar seu nome:");
dados.push("gustavo");

console.table(dados);

console.log("informe seu cpf:");
dados.push("123.456.789.09");

console.table(dados);

// mostre ao usuario os dados e de um bom dia!
console.log("Bom dia", dados[0], "seu cpf é:", dados[1]);
