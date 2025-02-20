// operadores de incremento e decremento / pré e pós incremento
var idade = 16;
console.log(idade);

idade++; // idade = idade + 1
console.log(idade);

idade--; // idade = idade - 1
console.log(idade);
console.log("----------------------------------------------------------");

var novaidade = idade++;
console.log("idade:", idade, "| nova idade:", novaidade);

novaidade = ++idade;
console.log("idade:", idade, "| nova idade:", novaidade);

// operadores de atribuição aritmética
console.log("----------------------------------------------------------");
var x = 10;
var y = 5;
console.log("x =", x, "|y = ", y);

x += y;
console.log("x =", x, "|y = ", y);

x -= y;
console.log("x =", x, "|y = ", y);

x *= y;
console.log("x =", x, "|y = ", y);

x /= y;
console.log("x =", x, "|y = ", y);

x **= y;
console.log("x =", x, "|y = ", y);

x %= y;
console.log("x =", x, "|y = ", y);

x = 13;
x %= y;
console.log("x =", x, "|y = ", y);
