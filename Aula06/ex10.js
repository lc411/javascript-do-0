// Cria um objeto Date para obter a data e hora atual do sistema
var agora = new Date()
// Extrai a hora do objeto Date (valor de 0 a 23)
var hora = agora.getHours()
// Exibe a hora atual no console
console.log(`Agora são ${hora} horas.`)
// Verifica a hora e exibe uma saudação apropriada
if (hora < 12){
    // Se hora é menor que 12 (manhã), exibe "Bom dia"
    console.log("Bom dia")
}else if (hora < 18){
    // Se hora é menor que 18 (tarde), exibe "Boa tarde"
    console.log("Boa tarde")
}else{
    // Se hora é 18 ou mais (noite), exibe "Boa noite"
    console.log("Boa noite.")
}