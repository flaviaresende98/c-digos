const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

if (sexo == "F"){
    if(contribuicao + idade > 84){
        console.log(`${nome} você pode se aposentar!`)
    }
    else {
        console.log(`${nome} você ainda não pode se aposentar!`)
    }
}
else {
    if(contribuicao + idade > 94){
        console.log(`${nome} você pode se aposentar!`)
    }
    else {
        console.log(`${nome} você ainda não pode se aposentar!`)
    }
}