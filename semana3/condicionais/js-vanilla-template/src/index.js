/*------------- **Exercícios de interpretação de código**
--------------1

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
RESPOSTA: O code verifica se o resto da divisão do número, passado pelo user,
    é zero, ou seja, verifica se o número passado pelo user é par. Caso seja, 
    exibe a msg "Passou no teste", caso não seja, "Não passou no teste".

--------------2
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

RESPOSTA:
a. Para que serve o código acima? --- Serve para armazenar, na variável "preço",
                                    o respectivo preço da fruta passada no 
                                    parâmetro "fruta" pelo user.

b. Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
            --- O preço da fruta maçã é R$ 2.25

c. Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
    ---O preço da fruta  Pêra  é  R$  5


--------------3
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

RESPOSTA:

a. O que a primeira linha está fazendo? --- SOLICITANDO UM NÚMERO E O TRANSFORMANDO DE STRING P/ NUMBER

b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
                                        --- CASO 10: "ESSE NÚMERO PASSOU NO TESTE"
                                                      
                                           --- CASO -10: ERRO, POIS A VARIÁVEL MENSAGEM NÃO
                                                         ESTARIA DEFINIDA.

c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
     Caso o número passado atender a condição "numero>0", a variável "mensagem" será criada,
     porém haverá um erro ao tentar exibir no console, pois o tipo de declaração "let" permite
     que a variável esteja visível (acessível) apenas no seu escopo de bloco do qual a função
     console.log() está fora no exemplo a cima.

     Caso não atenda a condição, a variável nem será criada (definida).

*/
// --------------   ** Exercícios de escrita de código ** ------------------

//-------------4
let idade = Number(prompt("Digite a sua idade."));

if(idade > 18) {
    console.log("Você pode dirigir");
}else{
    console.log("Você não pode dirigir");
}

//-------------5

let turno = prompt("Em qual turno você estuda? \"M\" para Matutino, \"V\" para vespertino, \"N\" para Noturno");

if(turno==="M"){
    console.log("Bom dia!");
}else if(turno==="V"){
    console.log("Boa tarde!");
}else{
    console.log("Boa Noite!");
}

//-------------6

let turnoSwitch = prompt("2.. Em qual turno você estuda? \"M\" para Matutino, \"V\" para vespertino, \"N\" para Noturno");
let msg;

switch(turnoSwitch){
    case "M":
        msg = "Bom dia!"
        break;

    case "V":
        msg = "Boa tarde!"
        break;

    case "N":
        msg = "Boa Noite!"
        break;

    default:
        msg = "DIGITE AS LETRAS MAIÚSCULAS!"
        break;
}
console.log(msg);

//------------- 7

let generoFilme = prompt("Qual o gênero do filme que você vai assistir?");
let precoFilme = Number(prompt("Qual o valor do ingresso do filme que você vai assistir?"));

if(generoFilme === "fantasia" && precoFilme < 15){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}
