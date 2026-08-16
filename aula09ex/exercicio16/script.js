// Função que gera uma tabuada de multiplicação
function tabuada() {
    // Obtém o elemento de entrada com ID 'txtn' (onde o usuário digita o número)
    let num = document.getElementById('txtn')
    // Obtém o elemento 'select' com ID 'seltab' para exibir a tabuada
    let tab = document.getElementById('seltab')
    // Verifica se o campo de entrada está vazio
    if (num.value.length == 0) {
        // Se vazio, exibe um alerta pedindo para digitar um número
        window.alert('Por favor, digite um número!')
    } else {
        // Converte o valor do campo para número
        let n = Number(num.value)
        // Inicializa o contador em 1
        let c = 1
        // Limpa o conteúdo anterior do select
        tab.innerHTML = ' '
        // Loop que executa 10 vezes (c vai de 1 a 10)
        while (c <= 10) {
            // Cria um novo elemento 'option' (opção)
            let item = document.createElement('option')
            // Define o texto da opção com a multiplicação
            item.text = `${n} x ${c} = ${n*c}`
            // Adiciona a opção ao select
            tab.appendChild(item)
            // Incrementa o contador
            c++
        }
    }
}