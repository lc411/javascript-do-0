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
            // Adiciona o número convertido ao array de valores.
        valores.push(Number(num.value))
            // Cria uma nova opção para mostrar o valor no select.
        let item = document.createElement('option')
            // Define o texto exibido na opção criada.
        item.text = `Valor ${num.value} adicionado.`
            // Insere a opção na lista de números da página.
        lista.appendChild(item)
    } else {
        // Se falhar em alguma verificação, exibe mensagem de erro
        window.alert('Valor inválido ou ja encontrado na lista')
    }
    // Limpa o campo de entrada depois da tentativa de cadastro.
    num.value = ""
    // Devolve o foco ao campo para permitir uma nova digitação.
    num.focus()
}
    // Analisa os valores cadastrados e exibe o resumo final.
    function finalizar() {
            // Impede a finalização quando nenhum valor foi informado.
            if (valores.length == 0) {
                window.alert('Adicione valores antes de finalizar!')
            } else {
                // Guarda a quantidade total de valores cadastrados.
                let tot = valores.length
                // Inicializa o maior valor com o primeiro item da lista.
                let maior = valores[0]
                // Inicializa o menor valor com o primeiro item da lista.
                let menor = valores[0]
                // Inicializa o acumulador da soma dos valores.
                let soma = 0
                // Declara a variável que receberá a média dos valores.
                let media = 0
                // Percorre todos os valores cadastrados.
                for(let pos in valores){
                    // Soma o valor atual ao total acumulado.
                    soma += valores[pos]
                    // Atualiza o maior valor quando encontra um número maior.
                    if (valores[pos] > maior)
                        maior = valores[pos]
                    // Atualiza o menor valor quando encontra um número menor.
                    if (valores[pos] < menor)
                        menor = valores[pos]
                }
                // Calcula a média dividindo a soma pela quantidade de valores.
                media = soma / tot
                // Limpa o resultado anterior antes de mostrar o novo resumo.
                res.innerHTML = ''
                // Exibe a quantidade de números cadastrados.
                res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
                // Exibe o maior valor informado.
                res.innerHTML += `<P>O maior valor informado foi ${maior}.`
                // Exibe o menor valor informado.
                res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
                // Exibe a soma de todos os valores informados.
                res.innerHTML +=`<p>Somando todos os valores, temos ${soma}.`
                // Exibe a média dos valores informados.
                res.innerHTML += `<p>A média dos valores digitados é ${media}`
            }
}