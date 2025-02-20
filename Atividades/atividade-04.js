var vetor = [1, 2, 3, 4, 5];
console.log(vetor[2]);
var copia = vetor.slice();
console.table(vetor);
console.table(copia);
copia[0] = vetor[0] * 2;
copia[1] = vetor[1] * 2;
copia[2] = vetor[2] * 2;
copia[3] = vetor[3] * 2;
copia[4] = vetor[4] * 2;

console.table(copia);
var matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.table(matriz);
console.log(matriz[0][0], "|", matriz[1][1], "|", matriz[2][2]);
