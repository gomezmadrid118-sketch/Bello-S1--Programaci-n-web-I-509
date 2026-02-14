let edad = parseInt(prompt("¿Cuál es tu edad?"));

if (edad > 0 && edad < 12) {
    console.log("Valor de la boleta será $5");
} else if (edad <= 17) {
    console.log("Valor de la boleta será $8");
} else if (edad <= 64 ) {
    console.log("Valor de la boleta será $12");
} else if (edad >= 65 && edad < 120) {
    console.log("Valor de la boleta será $6");
} else {
    console.log("Debes ingresar una edad correcta o positiva");
} 