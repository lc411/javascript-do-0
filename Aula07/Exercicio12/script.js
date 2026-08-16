// Função que carrega a imagem e a cor de fundo baseado na hora atual
function carregar(){
// Obtém o elemento HTML com ID 'mensagem' para exibir a hora
var mensagem = window.document.getElementById('mensagem')
// Obtém o elemento HTML com ID 'imagem' para exibir uma imagem
var imagem = window.document.getElementById('imagem')
// Cria um objeto Date para obter a data e hora atual
var data = new Date()
// Extrai a hora atual (valor de 0 a 23)
var hora = data.getHours()
// Exibe a hora atual no elemento 'mensagem'
mensagem.innerHTML = `Agora são ${hora} horas.`
// Verifica se é de manhã (0 a 11)
if (hora >= 0 && hora < 12){
    // Define a imagem como 'luffy.png'
    imagem.src = 'luffy.png'
    // Define o fundo da página como vermelho
    document.body.style.background = 'red'
} else if (hora >= 12 && hora < 18){
    // Se é de tarde (12 a 17), define a imagem como 'robin.png'
    imagem.src = 'robin.png'
    // Define o fundo da página como roxo
    document.body.style.background = 'purple'
} else{
    // Se é de noite (18 a 23), define a imagem como 'sanji.png'
    imagem.src = 'sanji.png'
    // Define o fundo da página como azul
    document.body.style.background = 'blue'
}
}
