/*
criar uma função que receba o nome e a idade de uma pessoa e retorne uma mensagem informando se ela pode votar no Brasil.

Regras para votação no Brasil:
Menores de 16 anos: Não podem votar.
Entre 16 e 17 anos ou acima de 70 anos: o voto é facultativo.
entre 18 e 70 anos: o voto é obrigatório.
*/
function dados(idade) {
  if (idade < 16) {
    return "não pode votar";
  } else if (idade >= 18 && idade <= 70) {
    return "o voto é obrigatório";
  } else {
    return "o voto é facultativo";
  }
}
var nome = [
  "Michel",
  "Wenzu",
  "Elder",
  "Theo",
  "Carlos Eduardo Penedo da Silva",
];
console.log("Olá", nome[0], ", você tem 16 anos e", dados(16));
console.log("Olá", nome[1], ", você tem 34 anos e", dados(34));
console.log("Olá", nome[2], ", você tem 93 anos e", dados(93));
console.log("Olá", nome[3], ", você tem 8 anos e", dados(8));
console.log("Olá", nome[4], ", você tem 17 anos e", dados(17));
