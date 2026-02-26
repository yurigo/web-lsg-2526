console.log("Hello world")
console.log("Hello world")
console.log("Hello world")
console.log("Hello world")
console.log("Hello world")
console.log("Hello world")
console.log("Hello world")
console.log("Hello world")
console.log("Hello world")
console.log("Hello world")
console.log("Hello world")
console.log("Hello world")
console.log("Hello world")
console.log("Hello world")
console.log("Hello world")

const xxx = document.getElementById("hola");
console.log(xxx);

// declaración de variables:

var a = 42;
a = "ahora eres un string";

// var queda terminantemente prohibido!
// a partir de hoy se usan:

let b = 42;
b = "ahora eres un string";

const c = 42;
// c = "ahora eres un string";
// ❌ esto da error

// tipos
// Number
let n1 = 100;
let n2 = 4.6;


// String
let s1 = "Hago un string";
let s2 = 'Tambien hago un string';
let s3 = `Otra forma de hacer un string`;

// Boolean
let b1 = true;
let b2 = false;

// Array
const arr1 = [];
const arr2 = [1,2,3,4,5,6,7];
const arr3 = [1,2,"hola", true];

// Object
const obj1 = {
    nombre: "Yuri",
    apellido: "Gonzalez",
    pokemon: "Psyduck",
    edad: 9000,
    hobbies: ["A", "B", "C"],
}

console.log(arr2[4]);

// obj1 es const
// nombre no.
obj1.nombre = "otronombre"

console.log(obj1.apeyido) // undefined
console.log(obj1.apellido)
console.log(obj1["apellido"])
console.log(obj1.hobbies[0])


// null
console.log(null);

// undefined
let itbe;
console.log(itbe);


function test(){
    const obj1 = {nombre: "Lorem"}
    console.log(obj1.apellido);
    console.log(c);
}


test();

if (c == 42){
    console.log("c es 42")
}
else if (c == 43){
    console.log("c es 43")
}
else{
    console.log("c es otro numero");
    
}

// const c = 42;

switch(c){
    case 41:
        console.log("c es 41");
        break;
    case 42:
        console.log("c es 42");
        break;
    default:
        console.log("c es otro numero");        
        break;
}

// while(true){
//     console.log("hola!!");
// }

do {
    console.log("hola!")
} while(false)

for(let i = 0; i < obj1.hobbies.length; i++){
    console.log("mis hobby es:", obj1.hobbies[i])
}

for(let hobby of obj1.hobbies){
    console.log("mis hobby es:", hobby)
}

console.log(Math.floor(Math.PI))
console.log(Math.ceil(Math.PI))
console.log(Math.round(Math.PI))
console.log(Math.E)
console.log(Math.round(Math.E))


console.log(new Date().getDay());

const name = prompt("Cómo te llamas?");
console.log(name);


alert("Te llamas " + name);







