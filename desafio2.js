const usuario = {
    nome: "Diego",
    empresa: {
        nome: "Rocketseat",
        cor: "Roxo",
        foco: "Programação",
        endereço: {
            rua: "Rua Guilherme Gembala",
            numero: 260
        }

    }
};

console.log(`A empresa do ${usuario.nome} de nome ${usuario.empresa.nome} de cor ${usuario.empresa.cor} com foco em ${usuario.empresa.foco}
localizada em ${usuario.empresa.endereço.rua}, ${usuario.empresa.endereço.numero} `);