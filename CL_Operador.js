export default class CL_Operador{
    constructor(cedula,tipos,horastrabajadas,horasbase){

        this.cedula= cedula;
        this.tipos= tipos;
        this.horastrabajadas= horastrabajadas;
        this.horasbase= horasbase;
    }

    set cedula(c){this._cedula= +c;}
    get cedula(){return this._cedula;}
    set tipos(t){this._tipos= +t;}
    get tipos(){return this._tipos;}
    set horastrabajadas(ht){this._horastrabajadas= +ht;}
    get horastrabajadas(){return this._horastrabajadas;}
    set horasbase(hb){this._horasbase= +hb;}
    get horasbase(){return this._horasbase;}

    precio(){
        let tipo= this._tipos;
        let horasb= this._horasbase
        switch(tipo){
            case 1:
                return horasb * (32/100)
                break;
            case 2:
                return horasb * (23/100)    
                break;
            case 3:
                return horasb * (17/100)   
                break;
            case 4:
                return horasb * (7/100)    
                break;
            case 5:
                return horasb * (5/100)    
                break;
                default:
                return "operador no valido";
        } 
    }
    calcularhoras(){
        let horastrabajadas= this._horastrabajadas;

        if(horastrabajadas>40){
            return horastrabajadas - 40;
        } else{return 0;}
    }
    bono(){
       
        return this.calcularhoras() * this.precio();
     }   
    cobrar(){
        let horasb= this._horasbase;

        return this.bono() + horasb;
    }

    }
