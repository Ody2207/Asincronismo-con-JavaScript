// Una promesa tiene 3 estados pendiente, complido, rechazado 

const promise = new Promise(function (resolve, reject) {
    resolve('Hey!');
});

const cows = 15;

const countCows = new Promise(function(resolve, reject) {
    if(cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject(`There is no cows on the farm`);
    };
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
}).finally(() => console.log('Finaly'));

// Reto 

/*
El reto consiste en tener una funcion delay donde se pasaran dos parametros tiempo y un mensaje 
la promesa te tiene que retornar como resolve el mensaje y con un setTimeout tiene que tardar 
el tiempo que pida la prueva
*/

function delay(time, message) {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => resolve(message), time);
        window.setTimeout(() => reject('Error'), time);
    })
}