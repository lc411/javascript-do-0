// Declara uma função chamada 'fatorial' que calcula o fatorial de um número
// Recebe um parâmetro 'n' (o número para calcular o fatorial)
function fatorial(n) {
    // Inicializa a variável 'fat' com 1 (ela vai armazenar o resultado)
    let fat = 1
    // Loop que começa em 'n' e vai até 2, decrementando a cada iteração (c--)
    for(let c = n; c> 1; c--){
        // Multiplica 'fat' pelo valor atual de 'c'
        // Exemplo: fatorial(5) = 5 * 4 * 3 * 2 * 1 = 120
        fat *= c
    }
    // Retorna o resultado do fatorial
    return fat
}

// Chama a função fatorial passando 5 como argumento
// fatorial(5) calcula: 5 * 4 * 3 * 2 * 1 = 120
// console.log() exibe o resultado (120) no console
console.log(fatorial(5))