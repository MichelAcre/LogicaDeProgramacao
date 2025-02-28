//                                              OBJETOS EM JAVASCRIPT
//definindo uma classe em javascript (pessoa)
//1-Classe (O molde dos objetos)

// class pessoa{ // Criamos uma classe chamada pessoa (o molde)
//     constructor(pnome, pidade){ // o construtor é como um formulário
//             this.nome = pnome;
//             this.idade = pidade
//     }
// }
// Objeto: Criando um personagem/aluno
// var aluno1 = new pessoa("Lucas", 22) //criamos o aluno lucas com 22 anos
// aluno1 é um objeto baseado no molde pessoa

// ações que um objeto pode fazer
class pessoa {
  // Criamos uma classe chamada pessoa (o molde)
  constructor(pnome, pidade) {
    // o construtor é como um formulário
    this.nome = pnome;
    this.idade = pidade;
  }

  apresentarse() {
    console.log(`Oi, meu nome é ${this.nome}, e eu tenho ${this.idade} anos.`);
  }

  envelhecer() {
    this.idade++;
  }
}

var aluno1 = new pessoa("Lucas", 22);
aluno1.apresentarse(); // meu nome é Lucas, e eu tenho 22 anos.
aluno1.envelhecer();
aluno1.apresentarse(); // meu nome é Lucas, e eu tenho 23 anos.

// Classe: molde para criar objetos, como uma ficha de aluno ou um modelo de jogador de futebol

// Objeto: instância real do modelo, como Lucas ou Neymar

// Atributo: Característica do objeto, como nome e idade

// Métodos: Ações que o objeto pode fazer, como falar a idade do envelhecer.

//------------------------------------------------------------------------------------------------//
// Cria uma classe para jogador de futebol onde tenha nome, idade e posição
// O objeto criado com base no jogador de futebol podera apresentar-se de seguinte forma:  Olá, meu nome é "Neymar", tenho "33"
//anos e jogo na posição "atacante"
//Crie 3 objetos e faça com que eles se apresentem
console.log(
  "--------------------------------------------------------------------"
);
class jogador {
  constructor(name, age, posi) {
    this.nome = name;
    this.idade = age;
    this.posi = posi;
  }

  greet() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e jogo na posição ${this.posi}.`
    );
  }
}
var jogador1 = new jogador("Neymar", 33, "Atacante");
var jogador2 = new jogador("Pelé", 86, "Atacante");
var jogador3 = new jogador("Elder", 934, "Zagueiro");

jogador1.greet();
jogador2.greet();
jogador3.greet();

//------------------------------------------------------------------------------------------------//
//Criando classe retangulo
console.log(
  "--------------------------------------------------------------------"
);
class retangulo {
  constructor(comp, larg) {
    this.comp = comp;
    this.larg = larg;
  }

  obtercomp(comp) {
    this.comp = comp;
  }
  obterlarg(larg) {
    this.larg = larg;
  }
  obterarea() {
    return this.comp * this.larg;
  }
}

var ret = new retangulo(10, 15);
console.table(ret);
//  Apresentando valores (atribuidos) do objeto instanciado
console.log(`Comprimento: ${ret.comp}`);
console.log(`Largura: ${ret.larg}`);
// apresentando a área
console.log(`Área: ${ret.obterarea()}`);

// alterando o comprimento do retângulo
ret.obtercomp(20);
console.table(ret);

// Alterando a largura do retângulo
ret.obterlarg(30);
console.table(ret);

/**********************************************************
                        Lista de Exercícios
 *********************************************************/
/*
Crie e utiliza uma classe "sorvete" contendo as propriedades: sabor, preço e tamanho (P/M/G)
*/
//crie um sorvete de chocolate pequeno
//crie um sorvete de morango grande
//crie um sorvete de pistachio medio
//altere o preço do sorvete de morango grande para R$ 10,51.
//altere o tamanho do pistachio de médio para grande
console.log(
  "--------------------------------------------------------------------"
);
class sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.tamanho = tamanho;
    this.preco = preco;
  }
}

var choco = new sorvete("Chocolate", 6.0, "P");
var morang = new sorvete("Morango", 9.0, "G");
var pista = new sorvete("Pistachio", 7.5, "M");

console.log(
  `Você selecionou o sabor ${choco.sabor} e o tamanho ${choco.tamanho}, isso te custará R$ ${choco.preco}!`
);
console.log(
  `Você selecionou o sabor ${morang.sabor} e o tamanho ${morang.tamanho}, isso te custará R$ ${morang.preco}!`
);
console.log(
  `Você selecionou o sabor ${pista.sabor} e o tamanho ${pista.tamanho}, isso te custará R$ ${pista.preco}!`
);
morang.preco = 10.51;
pista.tamanho = "G";
