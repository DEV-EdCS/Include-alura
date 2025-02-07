// ANTES
/* let titulo = document.querySelector('h1'); // Recolhe e seleciona a tag h1 do html
titulo.innerHTML = 'Jogo do número secreto'; // Insere no h1 selecionado a frase */

// ANTES
/* let paragrafo = document.querySelector('p'); // Recolhe e seleciona a tag p do html
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; // Insere no p selecionado a frase */

// TODAS APRESENTAM O SEGUINTE PADRÃO
/* let campo = document.querySelector(tag)
campo.innerHTML = texto */

// DEPOIS

let numeroSecreto = gerarNumeroAleatorio(); // Variável para guardar o valor da função "gerarNumeroAleatorio"

let tentativas = 1;

// Função para executar o padrão de tag do HTML e exibir o texto 
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}


exibirTextoNaTela('h1', 'Jogo do número secreto'); // Substitui a tag da função pelo h1 do HTML
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); // Substitui a tag da função pelo h1 do HTML

function verificarChute() { // Cria a função para o botão
    let chute = document.querySelector('input').value; // Atribui o valor do input à variável "chute"
    // console.log(chute == numeroSecreto); // Compara o valor do chute com o numero secreto aleatorio, e devolve verdadeiro ou falso
    //Código omitido

    // Condição para auxiliar a dewscobrir o numero secreto
  if (chute == numeroSecreto) {
      exibirTextoNaTela('h1', 'Acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
      exibirTextoNaTela('p', mensagemTentativas);

      } else {
              if (chute > numeroSecreto) {
                      exibirTextoNaTela('p', 'O número secreto é menor');
              } else {
                      exibirTextoNaTela('p', 'O número secreto é maior');
              }
              tentativas++;
      }
}

//Código omitido

// Função para criar um número aleatório
function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1); // utiliza o Math.randon para criar o número aleatorio e o parseInt para transformar ele em inteiro. Depois acrescenta o retun para ele guardar esse número e devolver quando chamar a função "gerarNumeroAleatorio"
}