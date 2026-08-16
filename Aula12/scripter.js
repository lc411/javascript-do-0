// Obtém o elemento de entrada de número (input com id='txtn')
let num = document.querySelector('input#txtn')
// Obtém o elemento select que vai exibir a lista de números (id='analis')
let lista = document.querySelector('select#analis')
// Obtém o elemento div de resultado (id='res')
let res = document.querySelector('div#res')
// Array vazio que vai armazenar os números adicionados pelo usuário
let valores = []

// Função que verifica se o número digitado está entre 1 e 100
function isNumero(n) {
    // Converte n para número e verifica se está no intervalo [1, 100]
    if(Number(n) >=1 && Number(n) <= 100) {
        // Retorna true se o número é válido
        return true
    } else {
        // Retorna false se o número é inválido
        return false
    }
}

// Função que verifica se um número já existe na lista
function inLista(n, l) {
    // indexOf retorna a posição do elemento ou -1 se não encontrar
    // Verifica se o número n (convertido para Number) está no array l
    if (l.indexOf(Number(n)) != -1) {
        // Retorna true se o número já existe na lista
        return true
    } else {
        // Retorna false se o número não existe na lista
        return false
    }
}

// Função principal que adiciona um número à lista
function adicionar() {
    // Verifica se o número é válido E se não está já na lista
    // O ! antes de inLista inverte o resultado (nega)
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        // Se passar nas duas verificações, exibe alerta de sucesso
        window.alert('Tudo ok')
    } else {
        // Se falhar em alguma verificação, exibe mensagem de erro
        window.alert('Valor inválido ou ja encontrado na lista')
    }
}