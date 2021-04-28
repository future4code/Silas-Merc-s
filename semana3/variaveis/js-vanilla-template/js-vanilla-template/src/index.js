/* --------- 1
a = 10
b = 10

console.log(b)

b = 5
console.log(a, b)

IMPRIME  10 e, depois, 10 e b (com o novo valor, 5).

*/

/* --------- 2

a = 10
b = 20
c = a
b = c
a = b

console.log(a, b, c)

IMPRIME 10 (valor de a), 10 (valor de b) e 10 de novo.

*/

// -------------- **Exercícios de escrita de código**--------------------------------
//----------------1

let nome;
let idade;
console.log(typeof(nome), typeof(idade));
//Ambos não têm valores definidos, portanto têm como tipo undefined;
/*
nome = prompt('Qual seu nome?');
idade = prompt('Qual sua idade?');*/


console.log(typeof(nome), typeof(idade));
// o primeiro é uma string, pois trata-se de um arquivo de texto.
// O segundo, de número, porém por estar "englobado" na função 'prompt' é definido 
// como string.


console.log("olá, "+nome+", você tem "+idade+" anos");

//----------------2
/*
let endereco = prompt('Qual seu endereço?');
console.log("Resposta:",endereco);

let cor = prompt('Qual a sua cor favorita?');
console.log("Resposta:",cor);

let perfume = prompt('Qual o seu perfume favorito?');
console.log("Resposta:",perfume);

let nome2 = prompt('Como é seu apelido?');
console.log("Resposta:",nome2);

let corCasa = prompt('Qual a cor da sua casa?');
console.log("Resposta:",corCasa);*/

//----------------3
//----A
let comidas = ["macarronada", "lasanha", "strogonoff", "pizza", "cuscuz"];
console.log(comidas);
//----B
console.log("Essas são as minhas comidas preferidas: ");
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);
//----C
let novaComida = prompt("Qual sua comida preferida?");
comidas.splice(1,1,novaComida);
console.log(comidas);

//------------------------4

let pergunta1 = "Você se considera bonito?";
let pergunta2 = "Você se considera inteligente?";
let pergunta3 = "Você canta bem?";
let perguntas = [pergunta1, pergunta2, pergunta3];
let respostas = [true, true, false];

console.log(perguntas[0], respostas[0], perguntas[1], respostas[1], perguntas[2], respostas[2]);
