# Calculadoda de IMC
![image](https://user-images.githubusercontent.com/99361183/189686366-5a88100c-1514-4baf-a5ad-6a6e61e5159e.png)

## Sobre o Projeto

Este é um projeto de front-end, realizado com o objetivo de criar uma calculadora de Índice de Massa Corporal e fixar os conteúdios estudados:
operadores, funções e lógica de programação.

## Lições Aprendidas

Na fase de testes do projeto, ao atribui o valor zero para a altura e um valor qualquer para o peso e o resultado retornava um NaN (Não é um número) e Infinity.
Para entender esses problemas e resolvê-los, pesquisei no site stackoverflow se já havia uma situação similar a essa. Como não achei, deixei uma pergunta no site da versão para língua portuguesa e inglesa. E para minha surpresa em poucos minutos obtive respostas.
Assim, seguindo a sugestão para a minha pergunta, utilizei o método <code>parseFloat()</code> e <code>isNaN()</code>, para verificar se os valores fornecidos pelo usuário eram números válidos. E crei uma condicional para que se os números não fossem válidos, o botão calcular não fazer nada e aparecer um alert solicitando informações válidas.

## Funcionalidades

- [x] Campos para o usuário preencher o peso e a altura
- [x] Botão para calcular o IMC do usuário
- [x] Alertas caso o usuário não preencha os dados corretos
- [x] Renderização do IMC em valor numérico e o seu significado após o usuário clicar no botão 'calcular'

## Stack Utilizada

+ HTML5
+ CSS3
+ JavaScript

## Como utilizar a calculadora

1) Click no link a seguir para abrir a página web:
https://blackjackgame-app.web.app/
2) No bloco azul, 'Gostaria de saber como está o seu IMC?', insira a sua altura em metros no campo 'Altura', separando o valor com vírgula ou ponto.
3) Insira o seu peso em kg no campo 'Peso'.
4) Click no botão 'Calcular'. 
5) Verifique o resultado e leia a mensagem que interpleta o seu IMC.

## Layout Desktop
![ezgif com-gif-maker](https://user-images.githubusercontent.com/99361183/189690599-72f05fee-5f9e-41d6-870d-b6f8e3b0fe16.gif)

## Feedback

Se você tem algum Feedback, poderá contatar-me pelo linkedin: https://www.linkedin.com/in/rafael-lopes-fullstack-developer/

