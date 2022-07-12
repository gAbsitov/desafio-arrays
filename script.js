// Uno o varios alumnos ingresan sus notas en el sistema para saber si aprobaron o no.

class Alumno{
    constructor(nombre, apellido, nota1, nota2, nota3, nota4){
        this.nombre = nombre
        this.apellido = apellido
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.promedio = (this.nota1 + this.nota2 + this.nota3) / 3
    }  
    verificarSiAprobo(){
        if (this.promedio >= 6){
            console.log(`${this.nombre} ${this.apellido} - Aprobado con un promedio de ${this.promedio}`)
        } else{
            console.log(`${this.nombre} ${this.apellido} - Desaprobado con un promedio de ${this.promedio}`)
        }
    }
}

function verificarnota(numero){
    do{
        nota = parseFloat(prompt(`Ingrese la nota que obtuvo en la evaluación ${numero}`))
    
    if (isNaN(nota) || (nota >=11) || (nota<=0)){
        alert("Ingrese un número del 1 al 10")
    }
}while ((isNaN(nota)) || (nota >=11) || (nota<=0))

return nota
}

function verificarSiNo(){
do{
    consulta = (prompt("¿Desea verificar la nota de otro alumno? Si | No")).toLowerCase()
    if ((consulta != "si") && (consulta != "no")){
        alert ("Error, intente nuevamente")
    }
} while((consulta != "si") && (consulta != "no"))
return consulta
}

const arrayAlumnos = []
let nota1, nota2, nota3

do{
    nombre = (prompt ("Ingrese nombre del Alumno"))
    apellido = (prompt("Ingrese apellido del Alumno"))
    nota1 = verificarnota(1)
    nota2 = verificarnota(2)
    nota3 = verificarnota(3)
    consulta = verificarSiNo()
    arrayAlumnos.push(new Alumno (nombre, apellido, nota1, nota2, nota3))
} while(consulta == "si")

do{
    consulta = parseFloat(prompt("Si desea ver el promedio de lxs alumnx/s ingrese 1. Los resultados se podran ver en la consola"))
    if (consulta === 1){
        for(Alumno of arrayAlumnos ){
        Alumno.verificarSiAprobo()
        }
    } else{
    alert ('No es como que si tuvieras otra opcion, ingresa 1 te pido por favor')
   }
} while ((consulta !== 1))

