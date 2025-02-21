//laço de repetição - FOR

// o professor te colocou de castigo e te pediu para você escrever mil vezes a frase "Eu vou prestar atenção às aulas."

for (let i = 0; i < 1000; i++) {
  console.log("Eu vou prestar atenção às aulas.");
}

//escreva todos os números de 1 a 20 com loop for
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//mostre no console do sistema os  números pares entre 1 e 20
for (let i = 1; i <= 20; i++) {
  i % 2 == 0 && console.log(i);
}
console.log(
  "------------------------------------------------------------------"
);
// Dado um vetor, calcule e exiba o somatório de seus elementos
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.log(numeros.length);
var soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("A soma dos elementos:", soma);

// dado um vetor, calcule e exiba a quantidade de pares e impares
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var par = 0;
var impar = 0;
for (let i = 0; i < numeros.length; i++) {
  numeros[i] % 2 == 0 ? par++ : impar++;
}
console.log("o array tem", par, "numeros pares");
console.log("o array tem", impar, "numeros impares");

//dado um vetor, multiplique seus elementos por 3 com o laço FOR
var numeros = [5, 6, 8, 14, 0, 9, 7, 2];
console.log("o array tem:", numeros);
for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 3;
}
console.log("agora ele tem", numeros);
console.log(
  "------------------------------------------------------------------"
);
// dada uma matriz 2x3, mostre ao usuário todos os seus elementos com as respectivas posições
var matriz = [
  [8, 4, 1],
  [3, 7, 8],
];
for (let i = 0; i < matriz.length; i++) {
  for (let c = 0; c < matriz[0].length; c++) {
    // console.log("Matriz[" + i + "]" + "[" + c + "] =", matriz[i][c])
    console.log(`Matriz[${i}][${c}] = ${matriz[i][c]}`);
  }
}
console.log(
  `o usuário mandou a palavra ${variavel1}, e logo após a palavra ${variavel2}`
);
