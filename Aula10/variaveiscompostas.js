// Declara uma variável chamada "num" e a inicializa com um array contendo cinco números.
let num = [5, 8, 2, 9, 3]

// A partir desta linha, o bloco de comentário abaixo mostra exemplos de métodos comuns para arrays.
// num.push(1) -> adiciona o valor 1 ao final do array.
// num.sort() -> organiza os elementos do array em ordem crescente.
// console.log(num) -> exibe o conteúdo do array no console.
// console.log(`O vetor tem ${num.length} posições`) -> mostra a quantidade de itens do array.
// console.log(`O primeiro valor do vetor é ${num[0]}`) -> acessa e mostra o primeiro elemento do array.
// let pos = num.indexOf(8) -> busca a posição do valor 8 dentro do array.
// console.log(`O valor 8 está na posição ${pos}`) -> exibe a posição encontrada.

// O laço for...in percorre os índices do array, ou seja, as posições 0, 1, 2, 3 e 4.
for (let pos in num) {
    // Em cada iteração, "pos" guarda o índice atual, e "num[pos]" pega o valor daquele índice.
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}