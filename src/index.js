let nicknameHero = "Mulher Maravilha";
let XPhero = 7.001;

console.log("Olá, " + nicknameHero);
console.log("Lutas contra BOSS disponíveis a partir do nível OURO.");
console.log("O seu nível é compatível?");

if (XPhero <= 1.000) {
    console.log("Seu rank é FERRO.");
} else if (XPhero <= 2.000) {
    console.log("Seu rank é BRONZE.");
} else if (XPhero <= 5.000) {
    console.log("Seu rank é PRATA.");
} else if (XPhero <= 7.000) {
    console.log("Seu rank é OURO.");
} else if (XPhero <= 8.000) {
    console.log("Seu rank é PLATINA.");
} else if (XPhero <= 9.000) {
    console.log("Seu rank é ASCENDENTE.");
} else if (XPhero <= 10.000) {
    console.log("Seu rank é IMORTAL.");
} else if (XPhero >= 10.001) {
    console.log("Seu rank é RADIANTE.");
} else {
    console.log("XP baixo demais para ter um rank.");
}
let required = (XPhero >= 6.001);
console.log(required);
if (required) {
    console.log("Nível compatível com o necessário.");
    console.log("Escolha o equipamento para matar o BOSS:");
    console.log("feitiço - arma - espada");
    let luta = "espada";
    console.log("O equipamento escolhido foi: " + luta);
    
    switch (luta) {
        case "feitiço":
            console.log("Você não teve mana suficiente e foi morto pelo BOSS.");
            break;
        case "espada": 
            console.log("Você conseguiu dar diversos ataques críticos e o derrotou.");
            break;
        case "arma":
            console.log("Você foi recarregar sua arma e ele te esmagou.");
            break;
        default:
            console.log("Escolha um equipamento listado para derrotar o boss.");
    }
    console.log("Fim.");
} else {
    console.log("Nível abaixo do necessário, continue upando.");
}




 
 


