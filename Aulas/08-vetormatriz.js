// criando variaveis do tipo array (vetor)
var numeros = [1, 2, 3, 4, 5];
console.log(numeros); // imprimindo os dados do array
console.table(numeros); //imprimindo os dados em forma de tabela
console.log(numeros[1]); //imprimindo o item de indice 1
console.log("O vetor tem:", numeros.length, "elementos."); //mostra a quantidade de vetores

var dinos = [
  "tiranossauro rex",
  "estegossauro",
  "anquilossauro",
  "titanossauro",
];
console.log(dinos);
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos.");

// adicionando elementos a um vetor existente
dinos.push("Brontossauro");
console.table(dinos);
console.log("O vetor dinos tem:", dinos.length, "elementos.");

dinos.unshift("triceratops");
console.table(dinos);
console.log("o vetor dinos tem:", dinos.length, "elementos.");

// obtendo um elemento com base em seu indice (posição)
console.log("1ª posicão", dinos[0]);
console.log("3ª posicão", dinos[2]);
console.log("20ª posicão", dinos[19]); // quando não temos o item, apresenta um erro (undefined)

// alterando elementos com base no seu indice (posição)
dinos[3] = "velociraptor";
console.table(dinos);

//removendo elementos do vetor
var dinos = [
  "triceratops",
  "tiranossauro rex",
  "estegossauro",
  "anquilossauro",
  "brontossauro",
];
dinos.pop(); //remove o ultimo elemento do array (vetor)
console.table(dinos);

dinos.shift(); //remove o primeiro elemento do array (vetor)
console.table(dinos);

dinos.splice(1, 1); //remove o elemento de indice 1 (a partir da posição 1 exclui um elemento)
console.table(dinos);

// procurando o indice (posição) de elementos
var dinos = [
  "triceratops",
  "tiranossauro rex",
  "estegossauro",
  "anquilossauro",
  "brontossauro",
  "ictiossauro",
  "pterodactilo",
  "espinossauro",
];

console.table(dinos);
var elementoProcurado = "pterodactilo";
var posicao = dinos.indexOf("pterodactilo"); //mostra o índice do elemento
console.log(elementoProcurado, "está no índice:", posicao);

elementoProcurado = "estegossauro";
posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "está no índice:", posicao);

elementoProcurado = "castellossauro";
posicao = dinos.indexOf(elementoProcurado);
console.log(elementoProcurado, "esta no índice:", posicao);
console.log(
  "IndexOf = -1 significa que o elemento não foi encontrado no vetor!"
);

//excluindo um elemento com base no seu nome
var elementoexcluir = "pterodactilo";
var posicao = dinos.indexOf(elementoexcluir);
dinos.splice(posicao, 1);
console.table(dinos);

// criando uma cópia de um array
var copia = dinos.slice();
console.log("copiando vetor");
console.table(copia);

// criando um array numerico
var numeros = [4, 3, 1, 9, 7, 2];
console.table(numeros);

// imprimindo os elementos das posições impares
console.log(numeros[1]);
console.log(numeros[3]);
console.log(numeros[5]);

//verificando se o array contém um item
console.log("contém 9:", numeros.includes(9));
var contem0 = numeros.includes(0);
console.log("contém 0:", contem0);

// ordenando os elementos do vetor
numeros.sort();
console.table(numeros);

//invertendo a ordem ou posição dos itens
numeros.reverse();
console.table(numeros);

//alterando o valor de um elemento com base em sua posição
numeros[2] = 5;
console.table(numeros);

numeros[0] += 3;
console.table(numeros);
numeros[5] = numeros[0] + numeros[1];
console.table(numeros);

// criando arrays híbridos
var hibrido = [10, "pafuncio", 3.45, "zuleika", 7];
console.table(hibrido);

hibrido[1] = 9;
console.table(hibrido);

hibrido[0] = "tiburcio";
console.table(hibrido);

// criando uma matriz
var matriz = [
  [9, 0, 1],
  [7, 1, 2],
  [1, 3, 9],
];
console.table(matriz);

//obtendo elemento com base em seus indices
console.log("Matriz[1, 2] =", matriz[1][2]);
console.log("Matriz[2, 0] =", matriz[2][0]);

//alterando os valores de elementos com base em seus indices
matriz[1][2] = 20;
matriz[2][0] = 30;
console.table(matriz);
