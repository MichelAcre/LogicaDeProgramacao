/************************************************************************
 *              Lista de exercícios
 ************************************************************************/
/* 
dada a matriz abaixo, faça um programa em Javascript que exiba ao usuário os elementos da sua diagonal principal.

| 3 5 8 |
| 1 9 2 |
| 7 1 4 |
*/
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
for (let i = 0; i < matriz.length; i++) {
  for (let c = 0; c < matriz[0].length; c++) {
    i == c && console.log(`Matriz[${i}][${c}] = ${matriz[i][c]}`);
  }
}
console.log(
  "-------------------------------------------------------------------------------"
);
/*
Dada a matriz abaixo, faça um programa em JavaScript que multiplique seus elementos por um valor x e exiba ao usuário
a matriz antes e após a multiplicação.
| 3 5 8 |
| 1 9 2 |
| 7 1 4 |
*/
var matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];

console.log("A matriz agora tem os elementos:");
console.table(matriz);
var mult = 3;
for (let i = 0; i < matriz.length; i++) {
  for (let c = 0; c < matriz[0].length; c++) {
    matriz[i][c] *= mult;
  }
}
console.log(`Agora ela foi multiplicada por ${mult} e tem:`);
console.table(matriz);
console.log(
    "-------------------------------------------------------------------------------"
  );
// faça um loop FOR onde apresente os números ímpares de 0 a 100;
// não pode ser resolvido por conta ou resto de divisão

for (let i = 1; i <= 100; i += 2) {
  console.log(i);
}
