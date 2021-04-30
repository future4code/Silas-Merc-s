/* ----------------**Exercícios de interpretação de código** -------
------------****------------------1
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

RESPOSTA: SOMA A PROGRESSÃO ARITMÉTICA 0,1...4 (de zero a menor q 5)---> 0+1+2+3+4

------------****------------------2
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

A. O que vai ser impresso no console? 

    --- OS NUMEROS DA LISTA MAIORES QUE 18

B. Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` 
é suficiente? Se sim, o que poderia ser usado para fazer isso? 
   
    ---- SIM...SERIA ASSIM -> for (let numero of lista) {
                                console.log(numero)
                              }

-------------****------------------DESAFIO 1 
 Imprimiria 4 linhas de zeros, a primeira teria 1 zero, a segunda 2 zeros
 e, assim, consecutivamente até completar 4 linhas.

-------------------------------------------------------------------------------
---------------------- **Exercícios de escrita de código**---------------

------------****------------------3 */
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];


//ESCREVA UM PROGRAMA QUE:
    //a. Imrima cada um dos valores do array original.

    for(valores of arrayOriginal){
        console.log(valores);
    }

    //b. Imprima cada um dos valores do array original divididos por 10.

    for(valoresPDez of arrayOriginal){
        console.log(valoresPDez,"dividido por 10 =",valoresPDez/10);
    }

    //c. Crie um novo array contendo, somente, os números pares do array original. Imprima!
    let novoArray = [];

    for(valoresNovoArray of arrayOriginal){
        if(valoresNovoArray%2==0){
            novoArray.push(valoresNovoArray);
        }
    }
    console.log("PARES:", novoArray);

    //d. imprima o index e os valores do array da seguinte forma: "O elemento do índex i é: numero"

    for(let i=0; i<arrayOriginal.length; i++){
        console.log("O elemento do índex", i,"é:", arrayOriginal[i]);
    }

    //e. Escreva um programa que imprima no console o maior e o menor números contidos no array original
    let valorMax = 0;
    let valorMin = 100;

    for(maxmin of arrayOriginal){
        if(maxmin > valorMax){
            valorMax = maxmin;
        }else if(maxmin < valorMin){
            valorMin = maxmin;
        }
    }

    console.log("O menor valor no Array é:", valorMin,"e o maior,",valorMax);