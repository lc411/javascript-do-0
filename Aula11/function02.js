// Declara uma função chamada 'soma' com dois parâmetros opcionais
// n1 e n2 recebem valor padrão de 0 se não forem passados
function soma (n1=0, n2=0) {
    // Retorna a soma dos dois números (n1 + n2)
    // O 'return' envia o resultado de volta para quem chamou a função
    return n1 + n2
}

// Chama a função soma() passando 7 como n1 e 8 como n2
// O resultado (15) é enviado para console.log()
// console.log() exibe o valor no console do navegador/terminal
console.log(soma(7, 8))