let pregunta = prompt ("¿Te animas a responder algunas preguntas sobre Dragon ball Z?").toLowerCase()
    if(pregunta == "si"){
        alert ("Bien ahiiii.")
    }else{
        alert ("Bueno, las vas a responder igual")
    }

let repetir = true;

while (repetir){

    let pregunta1 = prompt("En la saga de Cell ¿quien se convierte en Super saiyan 2?").toLowerCase()
    let pregunta2 = prompt("En la saga de Bu ¿Goku se convierte en Super Saiyan 3?").toLowerCase()
    let pregunta3 = prompt("¿Como se llama el hermano de Goku?").toLowerCase()

    if (pregunta1 === "gohan" ){
        repetir = false 
    }else{
        repetir = true
    }


    if (pregunta2 === "si"){
        repetir = false
    }else {
        repetir = true
    }


    if (pregunta3 === "raditz"){
        repetir = false
    }else{
        repetir = true
       
    }


    if( repetir == false){
    alert ("¡Felicidades! sigues recordando una de las mejores epocas de la infancia.")
    }else{
        repetir == true
        alert ("Me parece que no recuerdas del todo, vamos de nuevo.")
    }
}
