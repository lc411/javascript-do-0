// Cria um objeto Date para obter a data e hora atual
var agora = new Date
// Extrai o dia da semana (0 = domingo, 6 = sábado)
var diaSem = agora.getDay()
// Extrai o dia do mês (1 a 31)
var diaMes = agora.getDate()
// Comentário explicando o mapeamento dos dias da semana (0-6)
/*
    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
*/

// Estrutura switch-case que verifica qual é o dia da semana
switch(diaSem){
case 0:
        // Se diaSem é 0, é domingo
        console.log('Hoje é Domingo')
    break
case 1:
    // Se diaSem é 1, é segunda-feira
    console.log('Hoje é Segunda-Feira')
    break
case 2:
    // Se diaSem é 2, é terça-feira
    console.log('Hoje é Terça-Feira')
    break
case 3:
    // Se diaSem é 3, é quarta-feira
    console.log('Hoje é Quarta-Feira')
    break
case 4:
    // Se diaSem é 4, é quinta-feira
    console.log('Hoje é Quinta-Feira')
    break
case 5:
    // Se diaSem é 5, é sexta-feira
    console.log('Hoje é Sexta-Feira')
case 6:
    // Se diaSem é 6, é sábado
    console.log('Hoje é Sábado')
}
// Exibe o dia do mês no console
console.log(`Hoje é dia ${diaMes}`)
