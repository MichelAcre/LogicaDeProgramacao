/************************************************************************
 *              Lista de exercícios
 ************************************************************************/
/* 
dada a matriz abaixo, faça um programa em Javascript que exiba ao usuário os elementos da sua diagonal principal.

| 3 5 8 |
| 1 9 2 |
| 7 1 4 |
*/
let matriz = [
  [3, 5, 8],
  [1, 9, 2],
  [7, 1, 4],
];
for (let i = 0; i < matriz.length; i++) {
  for (let c = 0; c < matriz[0].length; c++) {
    i == c && console.log(`Matriz[${i}][${c}] = ${matriz[i][c]}`);
  }
}
