// Cria um objeto com os dados e o comportamento de um amigo.
let amigo = {nome: 'jose',
    // Armazena o sexo do amigo.
    sexo: 'm',
    // Armazena o peso inicial do amigo em quilogramas.
    peso: 85.4,
    // Define um método para aumentar o peso do amigo.
    engordar(p=0){
        // Informa no console que o peso aumentou.
        console.log('engordou')
        // Soma o peso informado ao peso atual do objeto.
        this.peso += p
    }
}

// Executa o método para adicionar dois quilogramas ao peso.
amigo.engordar(2)
// Exibe no console o nome e o peso atualizado do amigo.
console.log(`${amigo.nome} pesa ${amigo.peso}KG`)