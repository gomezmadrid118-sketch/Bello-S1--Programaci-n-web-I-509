/* array = ["santiago", "Maria", "Felipe", "Kevin"]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */

/* let vidas = 3;

while (vidas > 0) {
    console.log(`¡Tienes ${vidas} vidas!`);

    // Simulamos que el jugador pierde una vida
    // ESTA LÍNEA ES CRUCIAL. Modifica la condición.
    vidas--; // Sin esto, sería un bucle infinito.
}

console.log('Game Over'); */


/* const array = ["santiago", "Maria", "Felipe", "Kevin"];
for (const a of array) {
    console.log(`El valor en el arreglo es ${a}`);
}
 */

/* const persona = {
    nombre: 'Ana',
    edad: 30,
    profesion: 'Doctora'
};

console.log(persona["edad"]);
console.log(persona["profesion"]); */


/* // El 'for...in'
for (const clave in persona) {
    // 'clave' toma el NOMBRE de la propiedad en cada vuelta
    console.log(clave); // 'nombre', 'edad', 'profesion'

    // Para ver el valor, debes usar la clave
    console.log(persona[clave]); // 'Ana', 30, 'Doctora'
} */


let numero = parseInt(prompt("Dame el numero del cual quieres la tabla de multiplicar"))

for (let index = 0; index <= 10; index++) {
    console.log(`${numero} * ${index} = ${numero * index}`)
}