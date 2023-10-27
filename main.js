// const nome = "José";
// const sobrenome = "Daniel";
// const idade = 24;

const pessoa1 = {
    nome: "José",
    sobrenome: "Daniel",
    idade: 24,
}

const pessoa2 = {
    nome: "Marvin",
    sobrenome: "Daniel",
    idade: 24,
}


const resultadoDoMeuBancoDados = [pessoa1, pessoa2]

const resultado = resultadoDoMeuBancoDados.map(function (cadaItem) {
    return `${cadaItem.nome} ${cadaItem.sobrenome}`
})

console.info(resultado)
