// Pergunta ao usuário o dia da semana
let diaDaSemana = prompt("Qual é o dia da semana?");
// Verifica se é sábado ou domingo
if (diaDaSemana === "sábado" || diaDaSemana === "sabado" || diaDaSemana === "domingo") {
  alert("Bom fim de semana!");
} else {
  alert("Boa semana!");
}

// Pergunta um número ao usuário
let numeroDigitado = prompt("Digite um número positivo ou negativo!")
// Verifica se é par ou impar
if (numeroDigitado > 0) {
    alert("O número digitado é positivo!");
  } else {
    alert("O número digitado é negativo!");
  }

  // Pergunta um número ao usuário
  let pontuacaoJogo = prompt("Acerte a pontuação do jogo!");
  //Verifica se é maior que 100
  if (pontuacaoJogo >= 100){
    alert ("Parabéns, você venceu!");
  } else {
    alert("Tente novamente para ganhar.");
  }

  // Define o saldo da conta
let saldo = 1250.75;
// Cria a mensagem usando uma template string
let mensagem = (`Seu saldo atual é R$ ${saldo}.`);
// Exibe a mensagem
alert(mensagem);

// Pergunte o nome do usuario
let nomeUsuario = prompt("Digite seu nome!");
alert(`Bem vindo ${nomeUsuario}!`);