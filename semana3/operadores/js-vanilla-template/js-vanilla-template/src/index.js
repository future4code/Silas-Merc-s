
/*-------------- ***Exercícios de interpretação de código** --------

---------------------------1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)

console.log("e. ", typeof resultado)

RESPOSTAS:
a)  false
b)  false
c)  true
e)  boolean
---------------------------2

let array
console.log('a. ', array)

array = null
console.log('b. ', array)

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor)

RESPOSTAS:
a.  undefined (indefinido)
b.  null (nulo)
c.  11 tamanho do Array
d.  3
e.  [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] (Troca o segundo termo por 19 e exibe array)
f.  9

*/
//**Exercícios de escrita de código**

//--------------1
let idadeUser = prompt("Qual a sua idade?");
let idadeAmigo = prompt("Qual a idade do seu melhor amigo(ª)?");
parseInt(idadeUser);
parseInt(idadeAmigo);
let verifica = idadeUser>idadeAmigo;
let diferenca = idadeUser-idadeAmigo;

console.log("Sua idade é maior que a do seu amigo: ",verifica);
console.log("Diferença entre sua idade e a do seu amigo:",diferenca);


//--------------2
let numero = prompt("Insira um número par");
parseInt(numero);
console.log(numero%2);

//O resto é sempre zero, pois o número é par.
//Se o número for ímpar, o resto será 1


//---------------3
let listaDeTarefas = [];
let tarefa1 = prompt("Digite uma das tarefa do dia ");
listaDeTarefas.push(tarefa1); 

let tarefa2 = prompt("Digite outra tarefa do dia ");
listaDeTarefas.push(tarefa2); 

let tarefa3 = prompt("Digite mais uma tarefa do dia ");
listaDeTarefas.push(tarefa3); 

console.log(listaDeTarefas);

let done = prompt("Digite o índice da tarefa já realizada: ");
parseInt(done);
listaDeTarefas.splice(done, 1);
console.log(listaDeTarefas);


//---------------4
let nome = prompt("Digite seu nome: ");
let email = prompt("Digite seu email: ");
console.log("O e-mail, "+email+", foi cadastrado com sucesso. Seja bem-vinda(o), "+nome+"!");


