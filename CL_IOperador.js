export default class CL_IOperador{
    leercedula(){
        return prompt("Ingrese la cedula");
    }
    leertipos(){
        return prompt("Ingrese el tipo de operador:  1=supervisor, 2=diseñador, 3=costurera, 4=bordador, 5=empacador");
       
    }
    leerhorastrabajadas(){
        return prompt("Ingrese las horas trabajadas");
    }
    leerhorasbase(){
        return prompt("Ingrese el precio de la hora base");
    }

    reporteOperador(c,he,ph,b,t,to){
        return`
        <br> cedula: ${c}
        <br> tipo de operador: ${to}
        <br> cantidad de horas extras: ${he}
        <br> precio de las horas extras: ${ph}
        <br> bono del operador: ${b}
        <br> total a cobrar: ${t}
        `
       
    }
}