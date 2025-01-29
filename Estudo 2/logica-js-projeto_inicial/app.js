// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
// Inicializa o contador em 1
let contador = 1;
// Enquanto o contador for menor ou igual a 10, o loop continua
while (contador <= 10) {
  console.log(contador); // Exibe o número atual
  contador++; // Incrementa o contador
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
// Inicializa o contador em 10
let contador2 = 10;
// Enquanto o contador for maior ou igual a 0, o loop continua
while (contador2 >= 0) {
  console.log(contador2); // Exibe o número atual
  contador2--; // Reduz o contador
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
// Pede um número ao usuário
let numero = prompt("Digite um número para a contagem regressiva!");
// Enquanto o número for maior que 0
while (numero >= 0) {
  console.log(numero); // Exibe o número escolhido
  numero--; // Decrementa a contagem
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
// Pede um número ao usuário
let numero2 = prompt("Digite um número para a contagem progressiva!");
let contador3 = 0; // Começa do zero
while (contador3 <= numero2) {
  console.log(contador3); // Exibe o número atual
  contador3++; // Incrementa a contagem
}