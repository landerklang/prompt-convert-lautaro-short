
//declaracion de los datos principales"
let conversio=1300;
let arg;
let USD;
let historia;
let Cosa=0;
let fecha = new Date().toLocaleString()
while(Cosa<1){
let operacion = parseInt(prompt("eliga la operacion a realizar\n1) Divasa       (ARS -> USD)\n2) Salir"));
switch(operacion) {
    case 1:
        arg = parseFloat(prompt("ingrese la cantidad"))
        USD=(arg/conversio).toFixed(2);
        let array = {
    tipo:'divisa',
    entrada: arg+"ARS",
    salida: USD+"USD",
    fecha
}
console.log(array);
        break;
    case 2:
        alert("gracias por utilizarme")
        console.log(Cosa)
        Cosa++;
        break;
    default:
        alert("operacion no valida")
        break;
    }
}
//final de la repeticion
