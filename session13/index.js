let hola = "hola";
test();
hola = 10;
test();

// function declaration
function test(){
    console.log("hola: " + hola);
}

// function expression
const test2 = function(){
    console.log("esta es la funcion test 2" + hola);
}


test2();


// function expression -> arrow function

const test3 = () => {
    console.log("esta es la funcion test 3");
}

test3();


// function suma(a,b){
//     return a + b;
// }

const suma = (a,b) => {
    return a + b
}

const resta = (a,b) => a - b 
const multiplicacion = (a,b) => a * b 
const division = (a,b) => a / b 
const alCuadrado = a => a * a   // esto sigue siendo valido sin los () cuando es solo un parametro.

const resultado = suma(1,3);

console.log(resultado);



function mostrarPorPantalla(texto){
    console.log("***" + texto + "***");
}

function alertaPorPantalla(texto){
    alert(texto);
}

function sumaDosValoresYEjecutaElCallback(a, b, callback){
    const result = a + b;
    callback(result);
}


sumaDosValoresYEjecutaElCallback(2,5,mostrarPorPantalla);

// sumaDosValoresYEjecutaElCallback(6,7,alertaPorPantalla);

sumaDosValoresYEjecutaElCallback(1,1, (r) => console.log("🦄" + r + "🦄"));


console.log("-------- arrays ----------")

const arr = [1,2,3,4,5,6];


console.log(arr);

console.log("--------classic for----------")

for (let i = 0; i < arr.length ; i++){
    console.log("el elemento en " + i + " es " + arr[i]);
}

console.log("--------for of----------")

let index = 0
for (e of arr){
    console.log("el elemento en " + index + " es " + e);
    index++;
}

console.log("--------forEach----------")

arr.forEach( (element, i, arr) => {
    // console.log(element + 1);
    console.log("el elemento en " + i + " es " + element);
} );

console.log(arr)


console.log("-------- find ----------")

const found = arr.find( () => true );
console.log(found)

const found2 = arr.find( () => false );
console.log(found2)

const found3 = arr.find( (element) => element === 3 );
console.log(found3)

const personas = [
    {
        id: 1,
        nombre: "Alice",
        age: 18
    }
    ,
    {
        id: 2,
        nombre: "Bob",
        age: 33
    }
    ,
    {
        id: 3,
        nombre: "Charlie",
        age: 3
    }
    ,
    {
        id: 4,
        nombre: "Dave",
        age: 99
    }
];

const foundPerson = personas.find(
    (element) => element.nombre === "Charlie"
)

console.log("Persona encontrada: ");
console.log(foundPerson);

// const nombre = prompt("Quien estas buscando?");

// const foundPerson2 = personas.find(
//     (element) => element.nombre === nombre
// )

// console.log("Tiene " + foundPerson2.age + " años");

console.log("-------- filter -----------");

const result = arr.filter( (elem) => elem % 2 === 0 );
console.log(result);



arr.push(7)
arr.push(8)
arr.push(9)
arr.push(10)

console.log(arr)


arr.pop()
arr.pop()
arr.pop()

console.log(arr)

arr.shift()
arr.shift()

console.log(arr)

arr.unshift(1000)

console.log(arr)

console.log(arr.toReversed())

console.log(arr)


console.log(arr.join("lalala"))

console.log(arr)

const a = "hola";

console.log(a.split("o"))
