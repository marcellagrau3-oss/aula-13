let largura // entrada - input
let comprimento // entrada - input
let perímetroTotal // saída - output

largura = prompt("Informe a largura do terreno retangular");
comprimento = prompt("Informe o comprimento do terreno retangular");

largura = parseFloat(largura);
comprimento = parseFloat(comprimento);
perímetroTotal = 2 * (parseFloat(largura) + parseFloat(comprimento));
alert("O perímetro total do terreno retangular é de " + perímetroTotal + " metros.");