// Declara uma função chamada "parimpar" que recebe um parâmetro "n".
function parimpar(n) {
    // Verifica se o valor recebido é divisível por 2.
    if (n % 2 == 0) {
        // Se for divisível por 2, retorna a string "Par!".
        return 'Par!'
    } else {
        // Se não for divisível por 2, retorna a string "Ímpar!".
        return 'Ímpar!'
    }
}

// Chama a função "parimpar" com o valor 1 e guarda o resultado na variável "res".
let res = parimpar(1)

// Exibe o resultado no console.
console.log(res)