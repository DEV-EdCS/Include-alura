let titulo = document.querySelector('h1'); // Recolhe e seleciona a tag h1 do html
titulo.innerHTML = 'Jogo do número secreto'; // Insere no h1 selecionado a frase

let paragrafo = document.querySelector('p'); // Recolhe e seleciona a tag p do html
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; // Insere no p selecionado a frase

function verificarChute() { // Cria a função para o botão
    console.log('O botão foi clicado!') // Exibe no console quantas vezes o botão foi clicado
  }