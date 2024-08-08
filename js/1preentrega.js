//Es un calculador de precios de chapas metalicas de 1mt x 1.5mts, en el cual se pueden seleccionar 3 tipos de materiales (Aluminio, Acero al Carbono y Acero Inoxidable)
// y con 5 espesores distintos que son los estandares en pulgadas pasados a milimetros. 

// Para determinar el precio de determinada cantidad de chapas, primero consigo el peso usando el area y la densidad del material, luego lo multiplico por la 
// cantidad y finalmente por el precio por kilo de chapa.


alert("CHAPAS METALICAS SRL")
alert("Calculadora de precio de chapas de metal de 1mt x 1.5mts")

const precioDolar = 1480
const precioKilo = 1800
const densidadAluminio = 2.72
const densidadAceroalCarbono = 7.84
const densidadInoxidable = 8.03
let peso = 0
let material = 0
let espesor = 0
let cantidad = 0
let precioFinal = 0

// funcion que convierte el precio en pesos a dolares.

function precioEnDolar (precioFinal) {
    let dolares = (precioFinal / precioDolar).toFixed(2)
    alert(`El precio en Dolares sera de $${dolares}`)
}

while (material != 4){
    material = prompt('| 1 - Aluminio | 2 - Acero al Carbono | 3 - Acero Inoxidable | 4 - Salir | Seleccione un Material: ');
    if (material == 1){
        espesor = prompt(' Seleccione un espesor (mm): |  1.6  |  2  |  3.2  |  4.7  |  6.35  |');
        cantidad = parseInt(prompt('Ingrese cantidad de chapa a comprar: '));
        switch(espesor){
            case '1.6':
                peso = (1.6 *( 1.5 * 1 ) * densidadAluminio) * cantidad //calculo del peso de las chapas, utilizando el area, el espesor y la densidad.
                precioFinal = (peso * precioKilo).toFixed(2); // calculo del precio, fijado a 2 lugares despues de la coma.
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal);
                break;
            case '2':
                peso = (2 *( 1.5 * 1 ) * densidadAluminio) * cantidad
                precioFinal = (peso * precioKilo).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal);
                break;
            case '3.2':
                peso = (3.2 *( 1.5 * 1 ) * densidadAluminio) * cantidad
                precioFinal = (peso * precioKilo).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal);
                break;
            case '4.7':
                peso = (4.7 *( 1.5 * 1 ) * densidadAluminio) * cantidad
                precioFinal = (peso * precioKilo).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal);
                break;
            case '6.35':
                peso = (6.35 *( 1.5 * 1 ) * densidadAluminio) * cantidad
                precioFinal = (peso * precioKilo).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal);
                break;
            }
    } else if (material == 2) {
        espesor = prompt('| 1.6 | 2 | 3.2 | 4.7 | 6.35 | Seleccione un espesor: ');
        cantidad = parseInt(prompt('Ingrese cantidad de chapa a comprar: '));
        switch(espesor){
            case '1.6':
                peso = (1.6 *( 1.5 * 1 )* densidadAceroalCarbono) * cantidad
                precioFinal = (peso * precioKilo).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal);
                break;
            case '2':
                peso = (2 *( 1.5 * 1 )* densidadAceroalCarbono) * cantidad
                precioFinal = (peso * precioKilo).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal);
                break;
            case '3.2':
                peso = (3.2 *( 1.5 * 1 )* densidadAceroalCarbono) * cantidad
                precioFinal = (peso * precioKilo).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal);
                break;
            case '4.7':
                peso = (4.7 *( 1.5 * 1 )* densidadAceroalCarbono) * cantidad
                precioFinal = (peso * precioKilo).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal);
                break;
            case '6.35':
                peso = (6.35 *( 1.5 * 1 )* densidadAceroalCarbono) * cantidad
                precioFinal = (peso * precioKilo).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal);
                break;
            }
    } else if (material == 3) {
        espesor = prompt('| 1.6 | 2 | 3.2 | 4.7 | 6.35 | Seleccione un espesor: ');
        cantidad = parseInt(prompt('Ingrese cantidad de chapa a comprar: '));
        switch(espesor){
            case '1.6':
                peso = (1.6 *( 1.5 * 1 )* densidadInoxidable) * cantidad
                precioFinal = (peso * precioKilo).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal);
                break;
            case '2':
                peso = (2 *( 1.5 * 1 )* densidadInoxidable) * cantidad
                precioFinal = (peso * precioKilo).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal);
                break;
            case '3.2':
                peso = (3.2 *( 1.5 * 1 )* densidadInoxidable) * cantidad
                precioFinal = (peso * precioKilo).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal);
                break;
            case '4.7':
                peso = (4.7 *( 1.5 * 1 )* densidadInoxidable) * cantidad
                precioFinal = (peso * precioKilo).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal);
                break;
            case '6.35':
                peso = (6.35 *( 1.5 * 1 )* densidadInoxidable) * cantidad
                precioFinal = (peso * precioKilo).toFixed(2);
                alert(`El precio de ${cantidad} chapas de Aluminio sera de $${precioFinal}`);
                precioEnDolar(precioFinal);
                break;
            }
    } 
}