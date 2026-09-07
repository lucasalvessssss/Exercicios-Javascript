const nomeCompleto = "Luiz Otávio Miranda";
const idade = 30;
const peso = 84;
const altura = 1.8;
let imc = peso / (altura * altura);
let anoNascimento = 2026 - idade
console.log(`${nomeCompleto} tem ${idade} anos, pesa ${peso} kg \n
tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}.
${nomeCompleto} nasceu em ${anoNascimento}.`);