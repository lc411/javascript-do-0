function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
     } else {
           // Obtém todos os elementos radio button com o nome 'radsex' (sexo)
           var fsex = document.getElementsByName('radsex')
           // Calcula a idade subtraindo o ano de nascimento do ano atual
           var idade = ano - Number(fano.value)
           // Variável para armazenar o gênero selecionado
           var genero = ''
           // Cria um novo elemento 'img' (imagem)
           var img = document.createElement('img')
           // Define o ID da imagem como 'foto'
           img.setAttribute('id', 'foto')
           // Verifica se o primeiro radio button está selecionado (sexo masculino)
           if (fsex[0].checked){
                // Define gênero como 'homem'
                // Define gênero como 'homem'
                genero = 'homem'
                // Verifica a idade e seleciona a imagem apropriada
                if (idade >= 0 && idade < 10) {
                 // Se idade é de 0 a 9 (criança)
                 img.setAttribute('src', 'LUFFY BEBE.png')
                } else if (idade < 21) {
                 // Se idade é de 10 a 20 (jovem)
                 img.setAttribute('src', 'monkey CRIANÇA.png')
                } else if (idade < 50) {
                 // Se idade é de 21 a 49 (adulto)
                 img.setAttribute('src', 'LUFFY ADULTO.png')
                } else {
                 // Se idade é 50 ou mais (idoso)
                 img.setAttribute('src', 'Luffy IDOSO.png')
             }
           } else if (fsex[1].checked){
                // Se o segundo radio button está selecionado (sexo feminino)
                // Se o segundo radio button está selecionado (sexo feminino)
                genero = 'mulher'
                // Verifica a idade e seleciona a imagem apropriada
                if (idade >= 0 && idade < 10) {
                // Se idade é de 0 a 9 (criança)
                 img.setAttribute('src', 'ROBIN BEBE.png')
                } else if (idade < 21) {
                // Se idade é de 10 a 20 (jovem)
                 img.setAttribute('src', 'Robin CRIANÇA.png')
                } else if (idade < 50) {
                // Se idade é de 21 a 49 (adulto)
                 img.setAttribute('src', 'ROBIN ADULTA.png')
                } else {
                // Se idade é 50 ou mais (idoso)
                 img.setAttribute('src', 'ROBIN IDOSA.png')}
           }
           // Define o alinhamento do texto como centralizado
           res.style.textAlign = 'center'
           // Exibe a mensagem com o gênero e idade detectados
           res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
           // Adiciona a imagem ao elemento res
           res.appendChild(img)
        }
    }
