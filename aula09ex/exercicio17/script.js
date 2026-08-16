// Função que realiza uma contagem de um número inicial até um final com um passo
function contar() {
    // Obtém o elemento de entrada com ID 'txti' (número inicial)
    var ini = document.getElementById('txti')
    // Obtém o elemento de entrada com ID 'txtf' (número final)
    var fim = document.getElementById('txtf')
    // Obtém o elemento de entrada com ID 'txtp' (passo de incremento)
    var passo = document.getElementById('txtp')
    // Obtém o elemento com ID 'res' para exibir o resultado
    var res = document.getElementById('res')

    // Verifica se algum dos campos está vazio
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        // Se algum campo está vazio, exibe mensagem de erro
        res.innerHTML = 'Impossivel contar!'
    } else {
        // Inicia o resultado com a mensagem 'Contando: '
        res.innerHTML = 'Contando: '
        // Converte o valor inicial para número
        var i = Number(ini.value)
        // Converte o valor final para número
        var f = Number(fim.value)
        // Converte o passo para número
        var p = Number(passo.value)
        // Verifica se o passo é inválido (menor ou igual a zero)
        if (p <= 0) {
            // Exibe um alerta informando que o passo é inválido
            window.alert('Passo invalido! Considerando PASSO 1')
            // Define o passo como 1
            P = 1
    }
        // Verifica se o número inicial é menor que o número final
        if (i < f ) {
            // Loop crescente: de i até f, incrementando de p em p
            for(var c = i; c <= f; c += p) {
                // Adiciona cada número seguido de uma seta ao resultado
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Loop decrescente: de i até f, decrementando de p em p
            for(var c = i; c>= f; c -= p) {
                // Adiciona cada número seguido de uma seta ao resultado
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
         // Adiciona uma bandeira (emoji) ao final da contagem
         res.innerHTML += `\u{1F3c1}`
    }
}