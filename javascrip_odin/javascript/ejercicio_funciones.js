// forma incorrecta de crear una funcion con variable dentro "localVar"
//function miFuncion() {
   // let localVar = "Soy local";
//}

//miFuncion();
//console.log(localVar);// esto debe estar dentro de la funcion para que logre imprimir


//-------------------------------------------------------------------------------

//al colocar una funcion con retun, recuerda que devuelve un valor que se puede
//poner dentro de otra variable.
function add7(){
    let va1=24;
    let va2= va1 + 7;
    return  va2; 
}

document.getElementById("addd7").innerHTML= add7();//por este medio pido que 
//imprima la funcion dentro del documento pero de igual manera 
//puedo hacer que lo imprima en consola
console.log(add7());
//tambien aplicandolo en otra variable
let dfg= add7();
console.log(dfg);




function multi(nun1, nun2){
    return nun1*nun2;
}

document.getElementById("multy").innerHTML=multi(34, 56);

console.log(multi(24,32));



function mayus(){
    let mas= "hola mundo";// tenemos la cadena que necesitamos
    //necesitamos que solo la primera letre sea mayuscula
    //y para seleccionarla usaremos los corchetes [] y esta sera 0 por ser la 
    //primera letra con toUpperCase() y con un + hacemos lo mismo pero 
    //esta vez usando el slice()para seleccionar de inicio a fin lo que ira en minuscula
    //recuerda en los parametros de slice(0, 5) hay limite pero si solo
    //esta el primer parametro lo que le sigue es hasta el final...
    let resul= mas[0].toUpperCase()+mas.slice(1).toLowerCase();
    document.getElementById("may").innerHTML=resul;
}

mayus();


function last(nu1, nu2){
    let cadena="en esta cadena solo seleccionara la leetra que yo le pida en el parametro.";

    let cad= cadena.slice(nu1, nu2);
    document.getElementById("lastt").innerHTML=cad;

}


last(-2,-1);





