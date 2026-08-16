// Declara uma variável 'idade' e atribui o valor 16
var idade = 16
// Exibe a idade usando template string
console.log(`Você tem ${idade} anos.`)
// Estrutura de decisão if-else if-else que verifica a idade
if (idade < 16){
    // Se menor que 16, não pode votar
    console.log("Não vota")
    } else if (idade < 18 || idade > 65){
        // Se entre 16 e 18 OU maior que 65, voto é opcional
        console.log("Voto opcional.")
    } else {
        // Se entre 18 e 65, voto é obrigatório
        console.log("Voto obrigatorio")
    }