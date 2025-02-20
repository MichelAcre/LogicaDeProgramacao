// Criando variáveis com "var" (var nome_variavel = <valor>;)
var nome = "Tibúrcio";
console.log("Meu nome é", nome);
var idade = 23;
console.log("Meu nome é", nome, ", e eu tenho ", idade, "anos");
idade = idade + 1;
console.log("Meu nome é", nome, ", e agora eu tenho ", idade, "anos");
console.log("-----------------------------------------------");

//JavaScript trabalha com sistema case sensitive (maiusculo são diferente de minusculas)
console.log("criando uma variavel Teste e tentando acessar como testE");
let Teste = "variável teste!";
// console.log(testE);
console.log(Teste);

//REGRAS PARA NOMEAR IDENTIFICADORES(VARIAVEIS)
//Podem iniciar com "A"-"Z", "a"-"z", "_" ou "$"
let Minhavariavel = 10;
let outravariavel = 2.65;
const minhaconstante = "uma constante qualquer";
var $minhavariavel = 5;

//variaveis lógicas (boolean)
var nome = "michel";
var rico = false;
var ealuno = true;
console.log("nome:", nome, "| é aluno?", ealuno, "|é rico?", rico);
