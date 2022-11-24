// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    //var suma = 0;
    //for(var i=0; i<11; i++ ){
//suma = suma + 1;
//}
//return suma
///////////////////////////////////
/*var suma=0;
var i=1;
while( i < 11 ) {
suma = suma + i;
i ++
}
return 
}*/
//tercera forma
var numeros =[1 ,2, 3, 4, 5, 6, 7, 8, 9, 10];
var suma = 0 ;
for(var element of numeros){
suma = element + suma;

}
return  suma;

//cuarta forma
/*var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var suma =0;
numeros.forEach()*/
}
function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  return array.filter((element)=>element % 2 === 0)
  
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  return array.map((elemento) => elemento ** 2);
}

function sumaArray(arreglo){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  return arreglo.reduce((anterior,siguiente)=> siguiente + anterior);
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
return num.tostring().length;

}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
