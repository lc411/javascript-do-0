// Declara uma função chamada 'fatorial' que calcula o fatorial de forma RECURSIVA
// Uma função recursiva é uma função que chama a si mesma
// Recebe um parâmetro 'n' (o número para calcular o fatorial)
function fatorial(n) {
    // Caso base: quando n é 1, retorna 1 (ponto de parada da recursão)
    // Sem este caso, a recursão seria infinita
    if (n ==1) {
        return 1
    } else {
        // Caso recursivo: multiplica n pelo fatorial de (n-1)
        // Exemplo: fatorial(5) = 5 * fatorial(4)
        //          fatorial(4) = 4 * fatorial(3)
        //          fatorial(3) = 3 * fatorial(2)
        //          fatorial(2) = 2 * fatorial(1)
        //          fatorial(1) = 1 (caso base, para!)
        // Resultado: 5 * 4 * 3 * 2 * 1 = 120
        return n*fatorial(n-1)
    }
}

// Chama a função fatorial passando 5 como argumento
// fatorial(5) calcula: 5 * 4 * 3 * 2 * 1 = 120
// console.log() exibe o resultado (120) no console
console.log(fatorial(5))