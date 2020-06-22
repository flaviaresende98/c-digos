const usuarios = [
    {
        nome: "Carlos",
        tecnologias: ["HTML", " CSS"]
    },
    {
        nome: "Jasmine",
        tecnologias: ["JavaScript", " CSS"]
    },
    {
        nome: "Tuane",
        tecnologias: ["HTML", " Node.js"]
    },
]

for ( let i = 0; i < usuarios.length; i++){
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias} `)
}

function checkCss(usuarios){
    for(let tecnologias of usuarios.tecnologias){
        if(tecnologias == " CSS") return true
    }

    return false

}


for(let i = 0 ; i < usuarios.length ; i++){
    const usuarioCSS = checkCss(usuarios[i]);

    if (usuarioCSS){
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}
