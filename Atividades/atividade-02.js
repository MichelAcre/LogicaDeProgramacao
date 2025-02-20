var nome = "elder";
var nascimento = 1945;
console.log("nome da pessoa:", nome, "| ano de nascimento:", nascimento);
var idade = 2025 - nascimento;
console.log(nome, "tem", idade, "anos");
console.log("-----------------------------------------------------");
console.log(
  "Se um retângulo possui comprimento=12cm e largura=6cm, qual a sua área?"
);
var comprimento = 12;
var largura = 6;
console.log("A = 12 * 6");
console.log("A =", comprimento * largura);
console.log("E se adicionarmos uma dimensão altura=5cm, qual seria o volume?");
var altura = 5;
console.log("V = 12 * 6 * 5");
console.log("V =", comprimento * largura * altura);
console.log("-----------------------------------------------------");
console.log("Se temos uma equação 2x² + 3x -1, qual seria o valor de delta?");
console.log("a = 2 | b = 3 | c = -1");
var a = 2;
var b = 3;
var c = -1;
console.log("delta = b² - 4 * a * c");
console.log("delta =", b**2 - 4 * a * c);
console.log("-----------------------------------------------------");
console.log(
  "Um cliente fez um compra no valor de R$ 450,00 e obteve 3% de desconto. Qual o valor do desconto e o valor final da compra?"
);
var compra = 450;
var desconto = 3;
console.log("desconto = 450 * 3 / 100");
console.log("desconto =", (compra * desconto) / 100);
console.log("valor final = 450 - desconto");
console.log("valor final =", compra - 13.5);
console.log("-----------------------------------------------------");
console.log(
  "Um carro viaja por três horas e meia a uma velocidade média de 95 Km/h. Calcule a distância percorrida, sabendo que Vmedia = S/T "
);
var vel = 95;
var time = 3.5;
console.log("Calculo da distância:", vel, "= S /", time);
console.log("primeiro, isolamos a incógnita, então fica 95 * 3.5 = S");
console.log("Distância percorrida =", vel * time, "km");
