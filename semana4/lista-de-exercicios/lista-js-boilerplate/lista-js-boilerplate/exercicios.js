//Exercício 1

function inverteArray(array) {
  // implemente sua lógica aqui
}

//Exercício 2 -- FEITO

function retornaNumerosParesElevadosADois (array) {
   let arrayExerc = [1, 2, 3, 4, 5, 6];
   let arrayResult = [];
   for(num of arrayExerc){
      if(num%2===0){
         arrayResult.push(num**2);
      }
   }
   return arrayResult;
}
//console.log(retornaNumerosParesElevadosADois());  //--- ignore!

//Exercício 3 -- FEITO

function retornaNumerosPares (array) {
   let arrayExerc = [1, 2, 3, 4, 5, 6];
   let arrayResult = [];
   for(num of arrayExerc){
      if(num%2===0){
         arrayResult.push(num);
      }
   }
   return arrayResult;
}
//console.log(retornaNumerosParesElevadosADois());  //--- ignore!

//Exercício 4 -- FEITO

function retornaMaiorNumero (array) {
   let result = 0;
   for(num of array){
      if(num > result){
         result = num;
      }
   }
   return result;
}

//Exercício 5 -- FEITO

function retornaQuantidadeElementos (array) {
   return array.length;
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const booleano1 = true;
   const booleano2 = false;
   const booleano3 = !booleano2; 
   const booleano4 = !booleano3;

   let a = booleano1 && booleano2 && !booleano4;
   let b = booleano1 && booleano2 && !booleano4;
   let c = (booleano2 || booleano3) && (booleano4 || booleano1);
   let d = !(booleano2 && booleano3) || !(booleano1 && booleano3);
   let e = !(booleano2 && booleano3) || !(booleano1 && booleano3);

   let arrayExerc = [a, b, c, d, e];

   return arrayExerc;
}

//Exercício 7

function retornaNNumerosPares(n) {
   // implemente sua lógica aqui
}

// Exercício 8

function checaTriangulo(a, b, c) {
  // implemente sua lógica aqui
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   // implemente sua lógica aqui
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   // implemente sua lógica aqui
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultasNome = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 //Exercício 19, letra A
 
 function ordenaPorNome() {
  
 }
 
 // Exercício 19, letra B
 
 const consultasData = [
   { nome: "João", dataDaConsulta: "01/10/2021" },
   { nome: "Pedro", dataDaConsulta: "02/07/2021" },
   { nome: "Paula", dataDaConsulta: "03/11/2021" },
   { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
 ]
 
 function ordenaPorData() {
 
 }

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}