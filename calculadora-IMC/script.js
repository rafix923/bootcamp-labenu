const heightInput = document.querySelector(".height-input");
const weightInput = document.querySelector(".weight-input");
const result = document.querySelector(".result");
const statement = document.querySelector(".statement");

document.querySelector(".calculate").addEventListener("click", calculateButton);


function calculateButton() {

    let height = parseFloat(heightInput.value);
    let weight = parseFloat(weightInput.value);

    // Para verificar se os números são válidos. Se não forem, fazer nada
    if (isNaN(height) || isNaN(weight)) {
        return window.alert("Por favor, preencha as informações abaixo");
    }

    let BMI = weight / (height ** 2);
    result.innerText = BMI.toFixed(1);

    if (BMI < 18.5) {
        statement.innerText = "Você está abaixo do peso ideal. Consulte um médico para fechar um melhor diagnóstico.";
    }
    else if ((BMI > 18.5) && (BMI < 24.9)) {
        statement.innerText = "Seu IMC está dentro da normalidade.";
    } else if ((BMI > 25) && (BMI < 29.9)) {
        statement.innerText = "Você está com sobrepeso. Consulte um médico para fechar um melhor diagnóstico.";
    } else if ((BMI > 30) && (BMI < 34.9)) {
        statement.innerText = "Você está com obesidade grau I. Consulte um médico para fechar um melhor diagnóstico.";
    } else if ((BMI > 35) && (BMI < 39.9)) {
        statement.innerText = "Você está com obesidade grau II. Consulte um médico para fechar um melhor diagnóstico.";
    } else if (BMI > 40) {
        statement.innerText = "Você está com obesidade grau III. Consulte um médico para fechar um melhor diagnóstico.";
    } else {
        return window.alert("Por favor, preencha as informações abaixo");
    }
};



