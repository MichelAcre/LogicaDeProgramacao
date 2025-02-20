//condicional simples com IF
var anonascimento = 2003;
if (anonascimento > 2003) {
  console.log("A pessoa nasceu depois de 2003");
}

if (anonascimento < 2003) {
  console.log("A pessoa nasceu antes de 2003");
}

if (anonascimento == 2003) {
  console.log("A pessoa nasceu em 2003");
}

// condições simples com if-else
var anonascimento = 2005;
if (anonascimento > 2000) {
  console.log("A pessoa nasceu depois de 2000");
} else {
  console.log("A pessoa nasceu em 2000 ou antes");
}

//condições compostas como if
const login = "admin";
const senha = "12345";

var loginuser = "admin";
var senhauser = "12345";

if (loginuser == login && senhauser == senha) {
  console.log("Acesso permitido!");
} else {
  console.log("Acesso Negado!");
}

// desvio condicional aninhado - IF-ELSE-IF-ELSE
var semaforo = "vermelho";

if (semaforo == "verde") {
  console.log("Siga");
} else if (semaforo == "amarelo") {
  console.log("Atenção");
} else {
  console.log("Pare!");
}

//desvio condicional IF com bloco de comando
var idade = 18;

if (idade <= 18) {
  console.log("Entrei no if...");
  idade++;
  console.log("incrementei a idade...");
  console.log("a nove idade é", idade);
  console.log("agora estou saindo do bloco if");
}
console.log("terminei");

//criando variaveis locais com "let" (só existe dentro do bloco onde foram criadas)
var mes = "agosto";
var dia = 15;

if (dia == 15 && mes == "agosto") {
  let mensagem = "Hoje é dia 15 de agosto";
  console.log(mensagem);
}
console.log("Tentando acessar a variavel local fora do bloco, vai dar erro!");
// console.log(mensagem)

//criando uma função com desvio condicional IF
const desconto = (valorcompra) => {
  let desconto = 0;
  if (valorcompra >= 1000) {
    desconto = (valorcompra * 12) / 100;
  }
  return desconto;
};

var totalcompra = 950;
console.log(
  "valor total da compra: R$",
  totalcompra,
  "::: desconto: R$",
  desconto(totalcompra)
);
totalcompra = 1800;
console.log(
  "valor total da compra: R$",
  totalcompra,
  "::: desconto R$",
  desconto(totalcompra)
);

//desvio condicional if inline (ternário)
var preco = 500;
var resultado = preco <= 100 ? "ta barato!" : "vish, ta muito caro";
//o operador acima é o mesmo que escrever:
// if (preco <=100) {
//   resultado = "tá barato"
// }else{
//   resultado = "vish, ta muito caro"
// }
console.log("Preço: R$", preco, "-", resultado);

//if ternario com apenas uma expressão
//condição && expressão
var logado = true;
logado && console.log("Usuário está logado!");