// criando uma função que soma dois valores e retorna o resultado
function somar2Mais2() {
  return 2 + 2;
}
console.log(somar2Mais2());

//criando uma função que soma dois valores e retorna o resultado
function somar(val1, val2) {
  return val1 + val2;
}
console.log("5 + 3 =", somar(5, 3));
console.log("12 + 8 =", somar(12, 8));
console.log("6,5 + 2,12 =", somar(6.5, 2.12));

var v1 = 9;
var v2 = 6;
console.log("v1 + v2 =", somar(v1, v2));

//criando uma função que escreve bom dia
function bomdia(nome) {
  console.log("Bom Dia, ", nome, "!");
}

bomdia("Gustavo");

//criando uma função que calcula e retorna o desconto em uma venda
function desconto(valor) {
  return valor * 0.05;
}
// console.log("O desconto do produto no valor de 100 R$ é R$", desconto(100));
var totalPedido = 300;
var totalDesconto = desconto(totalPedido);
var valorFinal = totalPedido - totalDesconto;

console.log("-----------------------------------------------------------");
console.log("Total do pedido: R$", totalPedido);
console.log("Total dos descontos: R$", totalDesconto);
console.log("Valor liquido: R$", valorFinal);
console.log("-----------------------------------------------------------");

//cirando uma função que apresenta pessoas com arrow function
const apresentapessoas = (nomepessoa, idade, cidade) => {
    // apresento a vocês: "Nome_pessoa", que tem "xx" anos e mora em "Cidade"
console.log("apresento a vocês: ",nomepessoa,", que tem ",idade," anos e mora em ",cidade)
}
apresentapessoas("zuleika", 19, "brotas");
apresentapessoas("pafuncio", 21, "jau");
apresentapessoas("epaminondas", 16, "barra bonita");

