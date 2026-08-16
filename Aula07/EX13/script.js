function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
     } else {
           var fsex = document.getElementsByName('radsex')
           var idade = ano - Number(fano.value)
           var genero = ''
           var img = document.createElement('img')
           img.setAttribute('id', 'foto')
           if (fsex[0].checked){
                genero = 'homem'
                if (idade >= 0 && idade < 10) {
                 //criança
                 img.setAttribute('src', 'LUFFY BEBE.png')
                } else if (idade < 21) {
                 // jovem
                 img.setAttribute('src', 'monkey CRIANÇA.png')
                } else if (idade < 50) {
                 // adulto
                 img.setAttribute('src', 'LUFFY ADULTO.png')
                } else {
                 // idoso
                 img.setAttribute('src', 'Luffy IDOSO.png')
             }
           } else if (fsex[1].checked){
                genero = 'mulher'
                if (idade >= 0 && idade < 10) {
                //criança
                 img.setAttribute('src', 'ROBIN BEBE.png')
                } else if (idade < 21) {
                // jovem
                 img.setAttribute('src', 'Robin CRIANÇA.png')
                } else if (idade < 50) {
                // adulto
                 img.setAttribute('src', 'ROBIN ADULTA.png')
                } else {
                // idoso
                 img.setAttribute('src', 'ROBIN IDOSA.png')}
           }
           res.style.textAlign = 'center'
           res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
           res.appendChild(img)
        }
    }
