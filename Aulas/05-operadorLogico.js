// operadores lógicos
var soupobre = true;
console.log("-----------------------------------------------------");
console.log("sou pobre?", soupobre);
console.log("Negação de soupobre:", !soupobre);

var manha = true;
var sono = true;
console.log("-----------------------------------------------------");
console.log("Manhã?", manha, "| estou com sono?", sono);

// CONDICIONAL SIMPLES
console.log("Operador AND (E)",manha && sono);
console.log("Operador OR (OU):", manha || sono);

manha = false;
console.log("-----------------------------------------------------");
console.log("Manhã?", manha, "| estou com sono?", sono);

console.log("Operador AND (E)",manha && sono);
console.log("Operador OR (OU):", manha || sono);
