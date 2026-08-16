function carregar(){
var mensagem = window.document.getElementById('mensagem')
var imagem = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
mensagem.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    imagem.src = 'luffy.png'
    document.body.style.background = 'red'
} else if (hora >= 12 && hora < 18){
    imagem.src = 'robin.png'
    document.body.style.background = 'purple'
} else{
    imagem.src = 'sanji.png'
    document.body.style.background = 'blue'
}
}
