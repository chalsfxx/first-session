// EJERCICIO - 001
// Dado un array, devuelve el tipo de dato que hay en cada una de sus posiciones.

// EJERCICIO - 002
// Creamos un array de strings con nombres de personajes famosos. Lo vamos a recorrer todo e imprimiremos la misma frase para cada uno (algo como "X is so famous, I love them.").

const arrayEx = [1, "GuttenTag", true, 20];

let arrayExer = arrayEx.length;
let count = 0;
while (arrayExer--) {
  console.log(typeof (arrayEx[count]));
  count++;
}

const mates = ["Dmitri", "Clara", "Alex", "Krystel"];
let matesU = mates.length;
let countt = 0;
while (matesU--) {
  console.log(`Hello my fellow mate ${mates [count]}`)
  countt++;
}


// //Crea una función que añada el primer elemento al principio de un array y el segundo elemento al final del mismo array.
// ya estos metodosNativo de Array existen :)

const matess = ["Dmitri", "Clara", "Alex", "Krystel"]

let first = "Carlos";
let last = "Diego";

function array() {
  matess.push("Carlos");

}
console.log(matess);