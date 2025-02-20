var nome = "Elder";
var banco = "nubank";
var agencia = 41;
var nconta = 6544;
var sconta = 0.1;
console.log(
  "nome:",
  nome,
  "\nbanco:",
  banco,
  "\nagência:",
  agencia,
  "\nnúmero da conta:",
  nconta,
  "\nsaldo da conta:",
  sconta
);
console.log(
  nome,
  "apostou 100 reais no casino, novo saldo é:",
  (sconta = sconta - 100)
);
console.log(
  nome,
  "trabalhou como professor na escala 7x0 por um ano, novo saldo é:",
  (sconta = sconta + 2000)
);
console.log(
  nome,
  "gastou 1400 em produtos de beleza, novo saldo é:",
  (sconta = sconta - 1400)
);
console.log(
  nome,
  "roubou um banco e conseguiu 1000000 de Reais, novo saldo é:",
  (sconta = sconta + 1000000)
);
console.log(
  nome,
  "apostou o dobro do saldo no trigrinho e perdeu, novo saldo é:",
  (sconta = sconta - 2000000)
);
console.log(
  "nome:",
  nome,
  "\nbanco:",
  banco,
  "\nagência:",
  agencia,
  "\nnúmero da conta:",
  nconta,
  "\nsaldo da conta:",
  sconta
);
