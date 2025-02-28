/*********************************************************************** 
    Lista de Exercícios – Lógica de Programação em JavaScript (Console)
 ***********************************************************************


1. Par ou Ímpar?
Escreva um programa que peça um número ao usuário e exiba no console se ele é par ou ímpar.


📌 Dica: Use o operador % para verificar o resto da divisão.
------------------------------------------------------------------------


2. Tabuada
Peça ao usuário um número e exiba no console a tabuada desse número de 1 a 10.


📌 Exemplo (se o número for 3):
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
------------------------------------------------------------------------


3. Fatorial de um Número
Solicite um número ao usuário e exiba no console o seu fatorial.


📌 Fatorial de 5: 5! = 5 × 4 × 3 × 2 × 1 = 120
------------------------------------------------------------------------


4. Soma dos Números de um Array
Crie um programa que tenha um array com números aleatórios e exiba no console a soma total desses números.


📌 Exemplo:
let numeros = [10, 20, 30, 40];  
// Saída: Soma = 100
------------------------------------------------------------------------


5. Ordenação de Números
Peça ao usuário para inserir vários números separados por vírgula. Depois, exiba os números ordenados de forma crescente no console.


📌 Exemplo:
Entrada: 8, 3, 5, 1, 9  
Saída: 1, 3, 5, 8, 9 
------------------------------------------------------------------------


*/

// 1. ímpar ou par
function parouimpar(num) {
  if (num % 2 == 0) {
    return console.log(num, "é par");
  } else {
    return console.log(num, "é ímpar");
  }
}
parouimpar(578);
parouimpar(33);
parouimpar(125);
parouimpar(89);

//2. Tabuada
console.log(
  "-----------------------------------------------------------------"
);
var tabuada = 9;
console.log(tabuada, "x 1 =", tabuada * 1);
console.log(tabuada, "x 2 =", tabuada * 2);
console.log(tabuada, "x 3 =", tabuada * 3);
console.log(tabuada, "x 4 =", tabuada * 4);
console.log(tabuada, "x 5 =", tabuada * 5);
console.log(tabuada, "x 6 =", tabuada * 6);
console.log(tabuada, "x 7 =", tabuada * 7);
console.log(tabuada, "x 8 =", tabuada * 8);
console.log(tabuada, "x 9 =", tabuada * 9);
console.log(tabuada, "x 10 =", tabuada * 10);

// factorial de um numero
console.log(
  "-----------------------------------------------------------------"
);
console.log("o resultado de 5! (cinco fatorado) é igual a:", 5 * 4 * 3 * 2 * 1);

// soma de números de um array
console.log(
  "-----------------------------------------------------------------"
);
let nisaurus = [12, 34, 56, 78, 90];
console.table(nisaurus);
console.log(
  "a soma de todos os números da tabela é:",
  nisaurus[0] + nisaurus[1] + nisaurus[2] + nisaurus[3] + nisaurus[4]
);
console.log(
  "-----------------------------------------------------------------"
);
//ordenação de números
let numeros = [4, 2, 9, 1, 5];
console.log("numeros fornecidos pelo usuário:", numeros);
console.log("numeros em ordem:", numeros.sort());

/* Estourando o cartão - versão While
1. Crie uma variável e atribua o nome de uma pessoa;
2. Crie uma variavel e atribua o nome de um banco;
3. Cria uma variavel e atribua o número da agência;
4. Crie uma variável e atribua o número da conta;
5. Crie uma variável e atribua o saldo da conta;
6. Exiba ao usuário os dados e o saldo da conta;
7.Efetue e exiba ao usuário 5 movimentações na conta utilizando o laço while com valores aleatórios;
8.Exiba ao usuário novamente os dados e o saldo da conta;
*/
// var nome = prompt("informe seu nome!");
// var banco = prompt("informe seu banco!");
// var agencia = prompt("informe o número da sua agência!");
// var conta = prompt("informe o número da sua conta!");
// var saldo = prompt("informe o saldo de sua conta!");
// console.log(
//   `Nome: ${nome}, Banco: ${banco}, Nº da agência: ${agencia}, Nº da conta ${conta}, Saldo: ${saldo}R$`
// );
// var contador = 1;
// while (contador <= 5) {
//   let gasto = Math.random() * 100;
//   saldo -= gasto.toFixed(2);
//   contador++;
// }
// console.log(
//   `Nome: ${nome}, Banco: ${banco}, Nº da agência: ${agencia}, Nº da conta ${conta}, Saldo: ${saldo.toFixed(
//     2
//   )}R$`
// );

// while (saldo > 0) {
//   let escolher = prompt("escolha se quer retirar ou depositar?")
//   if (escolher = "retirar") {
//    let retirada = prompt("Quanto você quer retirar?")
//    saldo -= retirada
//    console.log(`Seu novo saldo é: ${saldo}`)
//   } else if (escolher = "depositar") {
//     let depositada = prompt("Quanto você quer depositar?")
//     saldo += depositada
//    console.log(`Seu novo saldo é: ${saldo}`)
//   }
// }

//Jogo de cara e coroa - melhor de três rodadas - aleatório - DO WHILE
console.log(
  "----------------------------------Cara ou Coroa------------------------------------------"
);
var contador = 1;
var vitoria = 0;
var derrota = 0;
do {
  let moeda = Math.random() * 2;
  if (moeda > 1) {
    console.log("É cara!");
    vitoria++;
  } else {
    console.log("É coroa!");
    derrota++;
  }
  contador++;
} while (contador <= 3);

console.log("------------------------------------");
console.log("             PLACAR                 ");
console.log("------------------------------------");
console.log(`Nº de vitórias: ${vitoria}`);
console.log(`Nº de derrotas: ${derrota}`);
console.log("------------------------------------");

/*******************************************************************
                      Lista de exercícios MASTER 
 *******************************************************************
 Supondo que a população de um país A seja de a habitantes com uma taxa anual de crescimento de 3% e que a população de um país B seja
 de b habitantes, com uma taxa anual de crescimento de 1,5%, fazer um algoritmo que calcule e escreva o número de anos necessarios para
 que a população do país A ultrapasse ou iguale a população do país B, mantidas essas taxas de crescimento
 */
var a = 800000;
var b = 950000;
var anos = 0;

do {
  a += (a * 0.03)
  b += (b * 0.015)
  anos++
  console.log(`Passaram-se ${anos} anos!, a população do país A é ${a.toFixed(0)}, e a população do país B é ${b.toFixed(0)}!`)
} while (a < b)
console.log(`São necessários ${anos} anos para que os dois países obtenham uma população maior ou igual!`)