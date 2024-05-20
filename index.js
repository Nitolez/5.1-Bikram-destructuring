//RESUELVE LOS EJERCICIOS AQUÍ
//1: Extrae Ana completa
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const[luis, ana, andrea] = empleados

console.log(ana)


//2: Extrae el mail de Luis

const {email:emailLuis} = luis
console.log(emailLuis)


//3: Usa destructuración para cambiar los valores de a y b

    /* Inicialmente
    let a = 5;
    let b = 3;
    Al final
    let a = 3;
    let b = 5; */

let a, b;

[a = 5, b = 3] = [3, 5]
console.log(a)
console.log(b)


/*4: Dado el objeto **HIGH_TEMPERATURES**
Cambiar las siguientes líneas para guardar 
mediante destructuración los valores de temperaturas 
en las variables maximaHoy y maximaManana

const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);*/

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };
  
const{today:maximaHoy,tomorrow:maximaManana} = HIGH_TEMPERATURES

console.log(maximaHoy);
console.log(maximaManana)


/*5: Escribe una función llamada **sumEveryOther** 
que pueda recibir cualquier cantidad de números y 
devuelva la suma de todos los demás argumentos.*/

function sumEveryOther(...numero){
    let sumado = 0
    for (let i = 0; i < numero.length; i++){
        sumado += numero[i]
    }
    return sumado
}

console.log(sumEveryOther(6, 8, 2, 3, 1))
console.log(sumEveryOther(11, 3, 12))


/*6: Escribe una función llamada **addOnlyNums** 
que pueda recibir cualquier número de argumentos
(incluyendo números y strings y retorne la suma solo 
de los números).*/

function addOnlyNums(...argumento) {
    let cuenta = 0;
    for (let j = 0; j < argumento.length; j++) {
        if (typeof argumento[j] === "number" && !Number.isNaN(argumento[j])) {
            cuenta += argumento[j];
        }
    }
    return cuenta;
}

console.log(addOnlyNums(1, "perro", 2, 4))

/*7: Escribe una función llamada **countTheArgs** 
que pueda recibir cualquier número de argumentos y 
devuelva un número que indique cuántos argumentos ha recibido.*/

function countTheArgs(...miArray){
    return miArray.length
}

console.log(countTheArgs("gato", "perro"));

/*8: Escribe una función llamada **combineTwoArrays** que 
reciba dos array cómo argumentos y devuelva solo un array 
que combine los dos (usando spread operator).*/

function combineTwoArrays(arr1, arr2){
    arrayCombinados = [...arr1, ...arr2]
    return arrayCombinados
}

console.log(combineTwoArrays([2,3,4],[2,7,8]))

/*9: Escriba una función llamada onlyUniques que acepte 
cualquier número de argumentos y devuelva un array de 
elementos únicos, sin repetidos.*/

function onlyUniques(...numbers){
    const uniques = []
    for(let i = 0; i < numbers.length; i++){
        if(uniques.includes(numbers[i]) === false){
            uniques.push(numbers[i])
        }
    }return uniques
}


console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"))
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8))

/*10: Escriba una función llamada **combineAllArrays** que 
pueda recibir cualquier cantidad de arrays como argumentos 
y los combine todos en un solo array.*/

function combineAllArrays(...allArrays){
    return allArrays.flat()
}

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]))
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]))

/*11: Escriba una función llamada **sumAndSquare** que reciba 
cualquier número de argumentos, los eleve al cuadrado y devuelva 
la suma de todos los valores cuadrados.*/

function sumAndSquare(...numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i] ** 2
    }
    return suma;
}

console.log(sumAndSquare(2,2))