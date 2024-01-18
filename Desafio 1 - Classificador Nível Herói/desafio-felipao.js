let prompt = require('prompt-sync')();

//Entrada de dados
console.log("Insira o nome do herói: ")
let nomeHeroi = prompt()
console.log("Insira a quantidade de XP: ")
let xp = parseInt(prompt())

//Processamento e saída de dados
 if(xp <= 1000){
  console.log("O herói de nome " + nomeHeroi + " está no nível: Ferro")
 }else if(xp >=1001 && xp <= 2000){
  console.log("O herói de nome " + nomeHeroi + " está no nível: Bronze")
 }else if(xp >=2001 && xp <=5000){
  console.log("O herói de nome " + nomeHeroi + " está no nível: Prata")
 }else if(xp >=5001 && xp <=7000){
  console.log("O herói de nome " + nomeHeroi + " está no nível: Ouro")
 }else if(xp >=7001 && xp <=8000){
  console.log("O herói de nome " + nomeHeroi + " está no nível: Platina")
 }else if(xp >=8001 && xp <=9000){
  console.log("O herói de nome " + nomeHeroi + " está no nível: Ascendente")
 }else if(xp >=9001 && xp <=10000){
  console.log("O herói de nome " + nomeHeroi + " está no nível: Imortal")
 }else if (xp >=10001){
  console.log("O herói de nome " + nomeHeroi + " está no nível: Radiante")
 }
  