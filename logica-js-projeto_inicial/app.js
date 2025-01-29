alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = parseInt(Math.random() * 100)+ 1;
// Revela o número secreto
// console.log (numeroSecreto);
let chute;
let tentativa = 1;
// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
console.log('Valor do chute:', chute);

//enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
        console.log('Valor do número secreto:', numeroSecreto);
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativa + tentativa + 1
        tentativa++;
    }
}
// ANTES
// if (tentativa == 1){
//     alert(`Isso aí! Você descobriu o ${numeroSecreto} com ${tentativa} tentativa!`);
// } else {
//     alert(`Isso aí! Você descobriu o ${numeroSecreto} com ${tentativa} tentativas!`);
// }

// AGORA SIMPLIFICADO
let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}!`);