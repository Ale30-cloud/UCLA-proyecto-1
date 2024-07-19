import CL_IOperador from "./CL_IOperador.js";
import CL_Operador from "./CL_Operador.js";

let iope= new CL_IOperador(),

c= iope.leercedula(),
t= iope.leertipos(),
ht= iope.leerhorastrabajadas(),
hb= iope.leerhorasbase(),


ope= new CL_Operador(c,t,ht,hb),
salida = document.getElementById ("salida");
 salida.innerHTML= iope.reporteOperador(ope.cedula,ope.tipos,ope.horastrabajadas,ope.horasbase,ope.precio(),ope.calcularhoras(),ope.bono(),ope.cobrar())