console.log(
  "---------------------------1NUMERICAS-------------------------------"
);
var x = 5;
var y = 8;
var z = 7;
console.log(`x = ${x}, y = ${y}, z = ${z}`);
console.log(`soma entre todos:${x + y + z}`);
console.log(`subtração de todos:${x - y - z}`);
console.log(`multiplicação de todos:${x * y * z}`);
console.log(`divisão de todos:${(x / y / z).toFixed(2)}`);
console.log("---------------------------2NOTAS-------------------------------");
var mat = 9;
var lp = 7;
var his = 5;
var media = (his + lp + mat) / 3;
if (media >= 7) {
  console.log(`A média do aluno é: ${media}!`);
  console.log("O aluno foi aprovado!");
} else {
  console.log(`A média do aluno é: ${media}!`);
  console.log("O aluno foi reprovado!");
}
console.log(
  "---------------------------3SALÁRIO-------------------------------"
);
var sal = 3000;
console.log(`Salário bruto: ${sal}`);
console.log(`Salário líquido: ${sal - sal * 0.13}`);
console.log(
  "---------------------------4CÍRCULO-------------------------------"
);
var raio = 7;
console.log(`O raio do círculo é de: ${raio}`);
console.log(`A área do círculo é de: ${(Math.PI * raio ** 2).toFixed(2)}`);
console.log(
  `A circunferência do círculo é de: ${(2 * Math.PI * raio).toFixed(2)}`
);
console.log(
  "---------------------------5ELETRONICOS-------------------------------"
);
var cel = 1500;
console.log(`O preço do celular é de: R$ ${cel}`);
console.log(`Com nosso desconto, 2 unidades saem R$ ${
  cel - cel * 0.05
}, 3 unidades saem R$ ${cel - cel * 0.1} e 4 ou mais 
unidades saem ${cel - cel * 0.15}!`);
console.log(
  "---------------------------6MULTIPLOS-------------------------------"
);
var NUM = 15;
if (NUM % 3 == 0 && NUM % 5 == 0) {
  console.log(`O número é multiplo de ambos 3 e 5!`);
} else if (NUM % 5 == 0) {
  console.log(`O número  é multiplo de 5!`);
} else if (NUM % 3 == 0) {
  console.log("O número é multiplo de 3!");
}
console.log(
  "---------------------------7bissexto-------------------------------"
);
var ano = 2024;

console.log(`ano: ${ano}`);
ano % 4 == 0 && ano % 100 > 0
  ? console.log("É um ano bissexto!")
  : console.log("Não é um ano bissexto!");
console.log("---------------------------8dias-------------------------------");
var semana = 1;
switch (semana) {
  case 0:
    console.log("O dia é domingo!");
    break;
  case 1:
    console.log("O dia é segunda!");
    break;
  case 2:
    console.log("O dia é terça!");
    break;
  case 3:
    console.log("O dia é quarta!");
    break;
  case 4:
    console.log("O dia é quinta!");
    break;
  case 5:
    console.log("O dia é sexta!");
    break;
  case 6:
    console.log("O dia é sábado!");
    break;
}
console.log(
  "---------------------------9motorista-------------------------------"
);
var limite = 80;
var motorista = 95;
if (motorista > limite) {
  console.log(
    `O motorista está acima do limite, e então recebeu uma multa de ${
      (motorista - limite) * 5
    }`
  );
} else {
  console.log("O motorista está no limite.");
}
console.log(
  "---------------------------10descontoproduto-------------------------------"
);
var valor = 150;
if (valor < 50) {
  console.log(`A sua compra de R$ ${valor} não recebeu descontos!`);
} else if (valor >= 50 && valor <= 100) {
  console.log(
    `A sua compra de R$ ${valor} recebeu descontos e agora vale ${
      valor - valor * 0.05
    }!`
  );
} else {
  console.log(
    `A sua compra de R$ ${valor} recebeu descontos e agora vale ${
      valor - valor * 0.1
    }!`
  );
}

console.log(
  "---------------------------11pares1-50-------------------------------"
);
var par = 0;
while (par <= 50) {
  if (par % 2 == 0) {
    console.log(par);
  }
  par++;
}
console.log(
  "---------------------------12tabuada-------------------------------"
);
var nein = 1;
while (nein <= 10) {
  console.log(`9 x ${nein} = ${nein * 9}`);
  nein++;
}
console.log("---------------------------13soma-------------------------------");
var somaz = 0;

for (let i = 1; i <= 100; i++) {
  somaz += i;
}
console.log(somaz);
console.log(
  "---------------------------14array-------------------------------"
);
var sarrey = [3, 5, 7, 9, 11];
console.log(`array: ${sarrey}`);
var soma = 0;
for (let i = 0; i < sarrey.length; i++) {
  soma += sarrey[i];
}
console.log(`a soma dos números do array é de ${soma}`);
console.log(
  "---------------------------15DoDezAoZero-------------------------------"
);
for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log(
  "---------------------------16ArrayDaSemana-------------------------------"
);
var semanas = [
  "domingo",
  "segunda",
  "terça",
  "quarta",
  "quinta",
  "sexta",
  "sábado",
];
console.log(semanas[3]);
console.log(
  "---------------------------17Frutas-------------------------------"
);
var frutas = ["morango", "laranja", "maçã", "limão", "banana"];
frutas.splice(2, 1);
console.log(frutas);
console.log(
  "---------------------------18MaiorQueDez-------------------------------"
);
var elder = [20, 12, 4, 6, 39, 2, 1];
for (let i = 0; i < elder.length; i++) {
  elder[i] > 10
    ? console.log(`${elder[i]} é um número do array maior que 10.`)
    : console.log("");
}
console.log(
  "---------------------------19TransformeAString-------------------------------"
);
var string = "JavaScript é incrível!";
console.log(string.toUpperCase());
console.log(
  "---------------------------20ExibaQuantasPalavras-------------------------------"
);
var sibidi = "A vida é bela e cheia de desafios"; // faz dps
var tamanho = sibidi.length
var palavra = 1
for(let i = 0; i < tamanho; i++) {
  if (sibidi[i] == " ") {
    palavra++
  }
}
console.log(`a frase tem ${palavra} palavras`)
console.log(
  "---------------------------21DADO UM VETOR AAAAAAAAAHHHH-------------------------------"
);
var aah = [12, 45, 67, 87, 23];
console.log(`o vetor tem os números ${aah}`);
var nummer = aah.sort();
var mbn = aah.length - 1;
console.log(`o maior número do vetor é ${nummer[mbn]}`);

console.log(
  "---------------------------22InvertaAString-------------------------------"
);
var nao = "desenvolvimento";
var tamanho = nao.length; // quantidade de letras da palavra
var palavraInvertida = "";

for (let i = tamanho - 1; i >= 0; i--) {
  // (tamanho -1)  letras, porem o indice vai de  até 14 (15 -1 )
  palavraInvertida += nao[i]; // Coloca letra a letra na nova variavel, começando da ultima
  //console.log(nao[i]);
}
console.log(palavraInvertida);

console.log(
  "---------------------------23QuantasLetrasA-------------------------------"
);
var apalav = "Aprender JavAScript é maravilhoso!";
var tamanho = apalav.length; // tamanho da frase
var contaA = 0;
// let apalavArray = apalav.split(""); // Converter string para array

for (let i = 0; i < tamanho; i++) {
  if (apalav[i] == "a" || apalav[i] == "A") {
    contaA++;
    // apalavArray[i] = "*";
  }
}
console.log(`Temos ${contaA} letras A`);
// apalavArray = apalavArray.join("");
// console.log(apalavArray);
//console.log(apalav.search("a"));

console.log(
  "---------------------------24SubstituaAsVogais-------------------------------"
);
var vogais = "Desenvolvimento Web";
var vogaisz = vogais.split("");
var tamanho = vogais.length;
for (let i = 0; i < tamanho; i++) {
  if (vogais[i] == "a" || vogais[i] == "e" || vogais[i] == "i" || vogais[i] == "o" || vogais[i] == "u") {
    vogaisz[i] = "*";
  }
}
vogaiz = vogaisz.join("");
console.log(vogaiz);

console.log(
  "---------------------------25MédiaDoArray-------------------------------"
);
var media = [10, 6, 4, 9, 8];
var soma = 0;
for (let i = 0; i < media.length; i++) {
  soma += media[i];
}
console.log(`a média dos números (${media}) é ${soma / media.length}.`);
