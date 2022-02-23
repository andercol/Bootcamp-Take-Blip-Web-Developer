
/*
var jogador1 = 0;
var jogador2 = 0;
var placar;

// If ternário

jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos !") : console.log("Jogadores inválidos! ")

// usando if
if (jogador1 > 0 && jogador2 == 0) {
    console.log("Jogador 1 marcou ponto!");
    placar = jogador1 > jogador2;
}

// usando else if
else if (jogador2 > 0 && jogador1 == 0) {
    console.log("Jogador 2 marcou ponto!");
    placar = jogador2 > jogador1;
}

// usando else
else {
    console.log("Ninguem marcou ponto!")
};


switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("Jogador 1 ganhou!");
        break
    case placar = jogador2 > jogador1:
        console.log("Jogador 2 ganhou!");
        break
    default:
        console.log("Ninguém ganhou! ")
}*/

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

// for - executa instrução até que elea seja falsa
/* for( let indice = 0; indice < array.length; indice++){
    console.log(indice);
} */

// for/in - executa repetição a partir de uma propriedade
/* for(let i in array){
    console.log(i);
}

// for/in - com object
for(i in object){
    console.log(i);
}

// for/of - executa repetição imprime o valor e não o indice
// for/of - não funciona com object pois as propriedades variam, no array são os indices são sempre números
for(i of array){
    console.log(i);
}

//com object
for(i of object.propriedade1){
    console.log(i);
} */

//while - executa enquanto a condição for verdadeira. verifica a condição antes
var a = 0;
/* while(a < 10){
    a++;
    console.log(a);
} */

// Do/ while - executa enquanto a condição for verdadeira. verifica a condição depois
do{
    a++;
    console.log(a);
}while(a < 10);