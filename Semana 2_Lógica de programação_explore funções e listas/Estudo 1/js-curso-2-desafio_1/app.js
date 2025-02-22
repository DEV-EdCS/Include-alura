let titulo = document.querySelector('h1'); // atribuo à variável titulo a seleção da tag "h1" no documento HTML
titulo.innerHTML = 'Hora do Desafio'; // Utilizando a variável titulo, inclui-se com o innerHTML o texto "Hora do Desafio" no HMTL

function verificarClick() { // Utiliza a função criada no HTML para verificar se o botão foi clicado
    console.log('O botão foi clicado');
}

function exibirAlert() { // Ao clicar em Alert exibe a mensagem "Eu amo JS"
    alert('Eu amo JS');
}


function cidadeBrasil() {// Ao clicar em Prompt exibe o prompt perguntando
    let cidade = prompt('Diga o nome de uma cidade do Brasil') ; // Atribui a variável cidade à resposta do usuário
    if (cidade) { // Utiliza um if para verificar o que o usuário escreveu e exibir em um alert a mensagem
        alert (`Estive em ${cidade} e lembrei de você`);
    }
}

function soma() { // A função usa prompt() para solicitar dois números ao usuário
    // parseInt() para garantir que os valores sejam convertidos para números inteiros
    let num1 = parseInt(prompt("Digite o primeiro número inteiro:")); 
    let num2 = parseInt(prompt("Digite o segundo número inteiro:"));

    let soma = num1 + num2;
    alert(`A soma de ${num1} + ${num2} é ${soma}.`);
}
