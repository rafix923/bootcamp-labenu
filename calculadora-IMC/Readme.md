# Calculadoda de IMC

![resized-image-Promo](https://user-images.githubusercontent.com/99361183/195163732-fd05fb69-03df-4446-b246-500b2401979f.jpeg)

## Sobre o Projeto

Este é um projeto de front-end que faz parte dos exercícios de fixação de JavaScript, realizado com o objetivo de criar uma calculadora de Índice de Massa Corporal e fixar os conteúdios estudados: operadores, funções e lógica de programação.

## Lições Aprendidas

Na fase de testes do projeto, ao atribuir o valor zero para a altura e um valor qualquer para o peso, o resultado retornava um NaN (Não é um número) e um Infinity.
Para entender esses problemas e resolvê-los, pesquisei no site stackoverflow se havia uma situação similar a esta. Como não achei, deixei uma pergunta no site da versão para língua portuguesa e inglesa. E para minha surpresa em poucos minutos obtive respostas.
Assim, seguindo a sugestão para resolver o meu problema, utilizei o método <code>parseFloat()</code> e <code>isNaN()</code>, para verificar se os valores fornecidos eram números válidos. E crei uma condicional para que se os números não fossem válidos, o botão calcular fazer nada e aparecer um alert solicitando informações válidas.

## Funcionalidades

- [x] Campos para o usuário preencher o peso e a altura
- [x] Botão para calcular o IMC do usuário
- [x] Alertas caso o usuário não preencha os dados corretos
- [x] Renderização do IMC em valor numérico e o seu significado após o usuário clicar no botão 'calcular'

## Stack Utilizada

+ HTML5
+ CSS3
+ JavaScript

## Como rodar o projeto

1) Click no link a seguir para abrir a página web:
https://calculadora-de-imc-app.web.app/
2) No bloco azul, 'Gostaria de saber como está o seu IMC?', insira a sua altura em metros no campo 'Altura', separando o valor com vírgula ou ponto.
3) Insira o seu peso em kg no campo 'Peso'.
4) Click no botão 'Calcular'. 
5) Verifique o resultado e leia a mensagem que interpleta o seu IMC.

## Layout Desktop

![ezgif com-gif-maker](https://user-images.githubusercontent.com/99361183/195159966-9388ff63-d07f-44c5-98b4-b8c737997cf5.gif)

## Feedback

Se você tem algum Feedback, poderá contatar-me pelo linkedin: https://www.linkedin.com/in/rafael-lopes-fullstack-developer/

##  🔠Conteúdos
<!--ts-->
   * [Sobre o Projeto](#sobre-o-projeto)
   * [Lições Aprendidas](#lições-aprendidas)
   * [Funcionalidades](#funcionalidades)
   * [Stack Utilizada](#stack-utilizada)
   * [Como rodar o projeto](#como-rodar-o-projeto)
   * [Layout Desktop](#layout-desktop)
   * [Feedback](#feedback)
<!--te-->
