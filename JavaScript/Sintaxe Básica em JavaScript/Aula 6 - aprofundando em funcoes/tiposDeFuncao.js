
//Tipos de função

// declarativas

function funcao(){
    console.log("Sou a mensagem de uma funçao declarativa")
};

funcao();

//Expressoes de funções - nomeação não é obrigatória

var funcao1 = function  funcao1(){
    console.log("Sou a mensagem de uma Expressão de funçao nomeada")
}

funcao1()

var funcao2 = function(){
    console.log("Sou a mensagem de uma Expressão de funçao não - nomeada")
}

funcao2()

// Arrow function

var funcao3= ()=>{
    console.log("Sou a mensagem de uma Arrow Function")
}

funcao3()