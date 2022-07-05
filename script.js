// Mi idea fue hacer un simulador de prestamos, o al menos eso intente!

alert ("Se ha concedido su pedido de prestamo con exito y tendrá un porcentaje de interes del 15%, a continuacion ingrese los siguientes datos:")


let capital = parseFloat(prompt("Ingrese la cantidad que se le proporcionará:"))
let cuotas = parseFloat(prompt("Ingrese el numero de cuotas:"))


function prestamo(capital, cuotas) {

    let operacion = capital  * 0.15 + capital

    let operacion2 = operacion / cuotas

    return operacion2


}    if(isNaN(capital) || isNaN(cuotas)){
    alert ("No está ingresando un valor correcto, intente nuevamente")
}else{
    alert (`El monto que usted necesita pagar por cada cuota es de ${prestamo(capital, cuotas)} pesos.`)

}










