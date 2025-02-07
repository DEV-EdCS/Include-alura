// 1. Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo(){
  console.log('Olá, Mundo!');
}

olaMundo();

// 2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirOlaNome(nome) {
   console.log(`Olá, ${nome}!`);
}

exibirOlaNome('Edlan');

// 3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobrarNumero(numero) {
   console.log (numero * 2);
}

dobrarNumero(3);
dobrarNumero(6);

// let resultadoDobro = dobrarNumero(7);
// console.log(resultadoDobro);


// 4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function tirarMedia(num1, num2, num3) {
   return (num1 + num2 + num3) / 3;
}

let media = tirarMedia(7.5, 8.8, 9.2);
console.log(media);

// 5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function verificarMaiorNumero(numA,numB) {
   return numA > numB ? numA : numB; // Operador condicional (ternário). Se condicao for verdadeira, o operador terá o valor de numA. Caso contrário, terá o valor de numB.
}

let maiorNumero = verificarMaiorNumero(14, 10);
console.log(maiorNumero);

// 6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicarNumero(valor) {
   return valor * valor;
}

let resultadoMuliticacao = multiplicarNumero(7);
console.log(resultadoMuliticacao);