// o que são vetores e arrays

// como declarar um array

/* let array = ['string', 1, 'true'];
console.log(array); */

// pode receber varios tipos de dados
let array = ['string', 1, 'true', ['array'], ['array2'], ['array3'], ['array4']];
//console.log(array);
//console.log(array[0]);

/*
• forEach() – itera um array;
• push() – add item no final do array;
• pop() – remove item no final do array;
• shift() – remove item no início do array;
• unshift() – add item no início do array;
• indexOf() – retorna o índice de um valor;
• splice() – remove ou substitui um item pelo índice;
• slice() – retorna uma parte de um array existente;
*/

//forEach
/* 
array.forEach(function(item, index){console.log(item, index)}); */

/* array.push('novo item',[]);
console.log(array); */
/* 
array.pop(); // remove item no final do array
console.log(array); */
/* 
array.shift(); //remove item no início do array
console.log(array); */

/* array.unshift('novo item no inicio'); //add item no início do array
console.log(array); */
/* 
console.log(array.indexOf('true')); //retorna o índice de um valor */

/* array.splice(0,3);
console.log(array); */
/* 
let novoArray = array.slice(0,3);
console.log(novoArray); */

let object = {String: 'string', Number: 1, Boolean: true, array:['array', 'texto1', 'texto2'], objectInterno:{objectInterno: 'objetoInterno'}};
/*
console.log(object.objectInterno);
 
var string = object.String;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno); */

var {String, Boolean, objectInterno} = object;
console.log(String, Boolean, objectInterno);