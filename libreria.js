/* Ejercicio 1: Digite el importe de una compra, en caso de que el importe sea mayor igual de 800 y menor 1000,
se le descontará el 2%,si es mayor igual a 1500 y menor igual 3500 se le descontara 3% si es mayor a 3500
descuento de 4%. Mostrar el descuento otorgado y el importe de compra final. */



let importe=parseFloat(prompt("Ingrese el monto"));
let total;
let descuento;

if(importe>=800 && importe<1000){
    descuento=importe*0.02;
  total=importe-descuento;
  document.write("Tiene 2% de descuento que equivale a: "+descuento+" soles"+"<br>");
  document.write('Total a pagar S/. '+total);
}

else if(importe>1500 && importe<=3500){
    descuento=importe*0.03;
  total=importe-descuento;
  document.write("Tiene 3% de descuento que equivale a: "+descuento+" soles"+"<br>");
  document.write('Total a pagar S/. '+total);
}

else if(importe>3500 ){
    descuento=importe*0.04;
  total=importe-descuento;
  document.write("Tiene 4% de descuento que equivale a: "+descuento+" soles"+"<br>");
  document.write('Total a pagar S/. '+total);
}

else{

    document.write("¡No tiene descuentos!!  "+"<br>");
    document.write("Total a pagar:  S/."+importe);
}  
 



/* Ingrese el nombre de un alumno y las notas de su examen parcial, examen final y 
el promedio de prácticas; muestre el nombre del alumno y su promedio final solo
 si el alumno está aprobado. Tenga en cuenta que para el cálculo del promedio 
 la nota del examen final tiene peso doble. */




let Nombre=String(prompt("Ingrese nombre del alumno: "));
let exaParcial=parseInt(prompt("Ingrese la nota del examen parcial: "));
let exaFinal=parseInt(prompt("Ingrese la nota del examen final: "));
let proPracticas=parseInt(prompt("Ingrese el promedio de las practicas: "));

let proFinal=(exaParcial*0.25)+(proPracticas*0.25)+(exaFinal*0.5);

document.write(Nombre+'<br>')

if(proFinal>=13 && proFinal<=20){
    
  document.write('Alumno aprobado y tiene la nota de '+ proFinal);
}

else if(proFinal>=0 && proFinal<=12){
    
    document.write("Alumno desaprobado y tiene la nota de "+proFinal);

  }
 
 


 