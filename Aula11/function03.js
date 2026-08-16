// Declara uma variável 'v' que armazena uma função anônima (função sem nome)
// A função recebe um parâmetro 'x'
// Esta é uma forma alternativa de criar funções em JavaScript (function expression)
let v = function(x) {
    // Retorna o valor de 'x' multiplicado por 2
    // O 'return' envia o resultado de volta para quem chamou a função
    return x*2
}

// Chama a função armazenada em 'v' passando 5 como argumento
// v(5) calcula: 5 * 2 = 10
// console.log() exibe o resultado (10) no console
console.log(v(5))