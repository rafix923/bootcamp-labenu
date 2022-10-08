const heightInput = document.querySelector(".height-input");
const weightInput = document.querySelector(".weight-input");
const calculateButton = document.querySelector(".calculate");
const result = document.querySelector(".result");
const statement = document.querySelector(".statement");
let height, weight, BMI;

calculateButton.addEventListener("click", () => {
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight / (height ** 2);
    result.innerText = BMI;


    if (BMI < 18.5) {
        statement.innerText = "Você está abaixo do peso ideal. Consulte um médico para fechar um melhor diagnóstico.";
    }
    else if ((BMI > 18.5) && (BMI < 24.9)) {
        statement.innerText = "Seu IMC está dentro da normalidade.";
    } else if ((BMI > 25) && (BMI < 29.9)) {
        statement.innerText = "Você está com sobrepeso. Consulte um médico para fechar um melhor diagnóstico.";
    } else if ((BMI > 30) && (BMI < 40)) {
        statement.innerText = "Você está com obesidade. Consulte um médico para fechar um melhor diagnóstico.";
    } else {
        statement.innerText = "Você está com obesidade grave. Consulte um médico para fechar um melhor diagnóstico.";
    }
});



