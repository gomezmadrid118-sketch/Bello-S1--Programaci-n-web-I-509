
/* let nombre = "maria";
let edad = 23;
let edad2 = `23`;
let esEstudiante = true;
let stringnombre;
let i = 1;

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

console.log("El nombre es: ", nombre);
console.log("la edad es: "+ edad);
console.log(`La edad es: ${edad2} y el nombre es ${nombre}`);

const cordenadas = []

let condition = false

if (!condition) {
    console.log("Se va a ejecutar");
} else {
    
} */


/* 
let a = 5;
let b = 5;

// Post-incremento: usa el valor (5) y LUEGO lo incrementa (a=6)
console.log(a--); // Muestra: 5 

// Pre-incremento: incrementa el valor (b=6) y LUEGO lo usa
console.log(--b); // Muestra: 6

const minimo = 0.3;
let nota1 = 0.2;
let nota2 = 0.1; 

if ((nota1+nota2)===minimo) {
    console.log("Iguales");
} else {
    console.log("Diferentes");
} */

let chocolate = 500;
let huevo = 2000;
let arroz = 700;
let leche = 3400;
let impuesto = 0.19;
let totalAhoraSi = 0;
let total = chocolate + (chocolate * impuesto)
console.log(`El valor del producto es: ${chocolate}, se le aplica un impuesto de: ${impuesto}, para un total a pagar de ${total}`);
totalAhoraSi = totalAhoraSi + total;

total = huevo + (huevo * impuesto)
console.log(`El valor del producto es: ${huevo}, se le aplica un impuesto de: ${impuesto}, para un total a pagar de ${total}`);
totalAhoraSi = totalAhoraSi + total;

total = leche + (leche * impuesto)
console.log(`El valor del producto es: ${leche}, se le aplica un impuesto de: ${impuesto}, para un total a pagar de ${total}`);
totalAhoraSi = totalAhoraSi + total;

total = arroz + (arroz * impuesto)
console.log(`El valor del producto es: ${arroz}, se le aplica un impuesto de: ${impuesto}, para un total a pagar de ${total}`);
totalAhoraSi = totalAhoraSi + total;

console.log(`El super valor total a pagar es ${totalAhoraSi}`);

