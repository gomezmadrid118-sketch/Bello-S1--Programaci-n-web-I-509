

let nombre = prompt("Ingresa tu nombre");
let edad = parseInt(prompt("¿Cuál es tu fecha de nacimiento?"));
edad = 2026 - edad
console.log(typeof (edad));
console.log(`El nombre de la persona es ${nombre} y tiene una edad de ${edad}`);



console.log(respuesta);
/* if (edad >= 18) {
    console.log("El ingreso es permitido");
} else if (edad >= 17 && edad < 18) {
    console.log("No puedes entrar, pero te ves mayorsito, hay 50 maneras de arreglar");
    let opcion = parseInt(prompt(" Ingresa el numero de acuerdo a la opción de preferencia: \n 1. Para arreglar 2. Para insultar 3. Para irse para la casa 4.Ponerse a peliar 5. Cambiarse la ropa y volver a intentar"))
    switch (opcion) {
        case 1:
            console.log("Le suelta un billete de 50");
            break;
        case 2:
            console.log("Cual home/%/&%(&(/");
            break;
        case 3:
            console.log("Procede a irse... chao");
            break;
        case 4:
            console.log("Le suelta un gancho derecho");
            break;
        case 5:
            console.log("Se pone un saco y una gorra");
            break;
        default:
            console.log("Se desmayo");
            break;
    }
} else {
    console.log("Eres menor de edad deberias irte para la casa");
}
 */


/* if (edad >= 18) {
    mensaje = "Es mayor de edad";
} else {
    mensaje = "Es menor de edad";
} */
const respuesta = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad"
