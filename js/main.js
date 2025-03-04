/*
Escribe un programa que muestre la sumatoria de todos los números entre el 0 y el 100.
*/
function Sumatoria(){
    let suma = 0;
    for (let vuelta = 0; vuelta<=100; vuelta++){
        suma = suma + vuelta;
    };
    console.log(`La suma de los primeros 100 números naturales es : ${suma}`);
};
Sumatoria();