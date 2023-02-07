alert ("Coderhourse 2022 - Entrega 1 - Alan Drozd");
alert ("Para visualizar este sitio por favor ingresa: \nUsuario:coder \nClave:house");

let usuario = prompt("Ingrese Usuario: ");
    while (usuario != "coder"){
    alert("Ingresaste el usuario: " + usuario + ", ese usuario es incorrecto." + "\nPor favor intenta nuevamente!");
    usuario= prompt("Para avanzar ingresa el siguiente usuario:coder");
};

let password = prompt("Ingrese clave: ");
    while (password != "house"){
    alert("Ingresaste la clave: " + password + ", esa clave es incorrecta." + "\nPor favor intenta nuevamente!");
    password= prompt("Para avanzar ingresa la siguiente clave:house");
};

alert ("Por ultimo quisieramos saber tu edad.");
    let edad =prompt("Por favor ingresa tu edad:");
    if (edad >17) {
    alert("Ingresaste: " + edad + " años. Bienvenido!");
    }else {
    alert("Ingresaste: " + edad + " años. Antes de avanzar consultalo con un adulto")
}; 

alert ("Vamos a hacer un calculo simple de una inversion.")
let importe;
do {
    importe = parseInt(prompt("Ingrese el importe que quiere invertir:"));
} while (isNaN(importe));

let interes;
do {
    interes = prompt("Ingrese el interes anual a calcular:");
} while (isNaN(interes));

let plazo;
do {
    plazo = prompt("Ingrese el plazo en meses:");
} while (isNaN(plazo));

let resultado = alert ("Si invirtieras $" + importe + ".- por un plazo de " + plazo + " meses, tendrias $" + interesDirecto(importe, interes, plazo) + ".- . A una tasa del " + interes + "% anual.")

function interesDirecto (imp, int, pla) {
    let res = imp * ((int/100/12) * pla);
    return imp+res
}
 