
let valor = 12;

if (valor>24){
    console.log("es mayor");

}else if(valor==24){
    console.log("es igual a 24");

}else {
    console.log("es menor")

}


//algo un poco mas complejo

let suma;
let resta;

if (valor === 12){
    suma = valor + 43;
    document.getElementById("sumar").innerHTML= suma;
}else if(valor>23){
    resta = valor-453;
    document.getElementById("restar").innerHTML= resta;
}else{
    document.getElementById("valor").innerHTML= valor;
}





