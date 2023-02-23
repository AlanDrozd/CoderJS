// alert ("Coderhourse 2022 - Entrega 1 - Alan Drozd");
// alert ("Para visualizar este sitio por favor ingresa: \nUsuario:coder \nClave:house");

// let usuario = prompt("Ingrese Usuario: ");
//     while (usuario != "coder"){
//     alert("Ingresaste el usuario: " + usuario + ", ese usuario es incorrecto." + "\nPor favor intenta nuevamente!");
//     usuario= prompt("Para avanzar ingresa el siguiente usuario:coder");
// };

// let password = prompt("Ingrese clave: ");
//     while (password != "house"){
//     alert("Ingresaste la clave: " + password + ", esa clave es incorrecta." + "\nPor favor intenta nuevamente!");
//     password= prompt("Para avanzar ingresa la siguiente clave:house");
// };

// alert ("Por ultimo quisieramos saber tu edad.");
//     let edad =prompt("Por favor ingresa tu edad:");
//     if (edad >17) {
//     alert("Ingresaste: " + edad + " años. Bienvenido!");
//     }else {
//     alert("Ingresaste: " + edad + " años. Antes de avanzar consultalo con un adulto")
// }; 

// alert ("Vamos a hacer un calculo simple de una inversion.")
// let importe;
// do {
//     importe = parseInt(prompt("Ingrese el importe que quiere invertir:"));
// } while (isNaN(importe));

// let interes;
// do {
//     interes = prompt("Ingrese el interes anual a calcular:");
// } while (isNaN(interes));

// let plazo;
// do {
//     plazo = prompt("Ingrese el plazo en meses:");
// } while (isNaN(plazo));

// let resultado = alert ("Si invirtieras $" + importe + ".- por un plazo de " + plazo + " meses, tendrias $" + interesDirecto(importe, interes, plazo) + ".- . A una tasa del " + interes + "% anual.")

// function interesDirecto (imp, int, pla) {
//     let res = imp * ((int/100/12) * pla);
//     return imp+res
// }
 
const stock = []

class Producto {
    constructor (id, name, price, category, categoryId){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.categoryId = categoryId;    
    }
}

stock.push (new Producto(1, 'Poleron Negro', 3790, 'Ropa', 1));
stock.push (new Producto(2, 'Poleron Crudo', 8990, 'Ropa', 1));
stock.push (new Producto(3, 'Jean Jacob', 5490, 'Ropa', 1));
stock.push (new Producto(4, 'Poleron Azul', 6990, 'Ropa', 1));
stock.push (new Producto(5, 'Kit Grooming', 5890, 'MakeUp', 2))
stock.push (new Producto(6, 'Mascara en gel', 1520, 'MakeUp', 2))
stock.push (new Producto(7, 'Primer Filler', 1290, 'MakeUp', 2))
stock.push (new Producto(8, 'Corrector Liquido', 1290, 'MakeUp', 2))

// menu inicial

function menu() {
    alert("Bienvenido a nuestra tienda")
    let nombre = prompt("Antes de continuar, podrias decirnos tu nombre?");
    let opcion = parseInt(prompt ("Hola " + nombre + ", por favor selecciona una opcion: \n 1- Ver productos.\n 2- Elegir por categoria.\n 3- Elegir productos. \n 4- Salir" ));
    return opcion
}

// listar productos por consola

function mostrarProductos() {stock.forEach(producto => console.log(producto.id + "- " + producto.name + " $" + producto.price + ".-"))}

// filtrar productos por categoria por consola
function filtroCategoria() {
    let sector = parseInt(prompt("Por favor, selecciona una categoria:" + "\n" + "1- " + stock[0].category + "\n" + "2- " + stock[4].category) )
    const eleccion = stock.filter(eleccion => eleccion.categoryId === sector)
    console.log(eleccion.forEach(producto => console.log(producto.id + "- " + producto.name + " $" + producto.price + ".-")));
}

// simular una compra simple de un producto

function compraSimple(){
    let eleccion = parseInt(prompt("Por favor, selecciona una categoria:" + "\n" + "1- " + stock[0].category + "\n" + "2- " + stock[4].category))
    if (eleccion == 1){
        ropa = parseInt(prompt("Cual de nuestros productos te interesa?" + "\n" + "1- " + stock[0].name + " $" + stock[0].price + "\n" + "2- " + stock[1].name + " $" + stock[1].price + "\n" + "3- " + stock[2].name + " $" + stock[2].price + "\n" + "4- " + stock[3].name + " $" + stock[3].price + "\n"))+1
    }   else if (eleccion == 2){
        ropa = parseInt(prompt("Cual de nuestros productos te interesa?" + "\n" + "1- " + stock[4].name + " $" + stock[4].price + "\n" + "2- " + stock[5].name + " $" + stock[5].price + "\n" + "3- " + stock[6].name + " $" + stock[6].price + "\n" + "4- " + stock[7].name + " $" + stock[7].price + "\n"))+3
    }   else {
        alert("Por favor elegi una opcion correcta")
        compraSimple();
    }

    let cantidad = Number(prompt("Elegiste " + stock[ropa].name + ". Cuantos queres comprar?"));

    alert("Seleccionaste " + cantidad +" unidades del producto: " + stock[ropa].name + " por un total de: $" +(cantidad * stock[ropa].price ))
}

// salir

function salir () {
    alert("Gracias por visitarnos.")
}

// switch menu incial

let opcion = menu ()

switch(opcion) {
    case 1:
        mostrarProductos();
        break;
    case 2:
        filtroCategoria();
        break;
    case 3:
        compraSimple();
        break;
    case 4:
        salir();
        break;
    default:
        while (opcion != 1 || 2 || 3 || 4){
            alert("Por favor elegi una opcion correcta")
            opcion = menu ()
        }
}

