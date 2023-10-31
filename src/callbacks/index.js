/* Callbacks */

// Reto sumar dos numeros 

function div(n1, n2) {
    return n1 / n2
}

function mult(n1, n2) {
    return n1 * n2
}

function rest(n1, n2) {
    return n1 - n2
}

function sum(num1, num2) {
    return num1 + num2;
};

function calc(num1, num2, callback) {
    return callback(num1, num2)
};

console.log(calc(2, 2, sum));
console.log(calc(2, 2, rest));
console.log(calc(2, 2, mult));
console.log(calc(2, 2, div));


// setTimeout

setTimeout(function() {
    console.log('Hello javaScript')
}, 2000)

function gretting(name) {
    console.log(`Hello my friend ${name}`)
}

setTimeout(gretting, 2000, 'Rodrigo');
// setTimeout(funcion que queremos llamar, tiempo, argumentos de la funcion);