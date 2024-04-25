/* -- Funciones: Bloques de código reutilizable con nombre y pueden aceptar parámetros, opcionalmente devuelven un valor.
Sirven para no repetir grandes cantidades de codigo.

Se puede crear una funcion con la palabra "function" y luego el nombre que le daremos a la funcion y parentesis para los parametros. */
function saludarUsuario() {
    usuario = prompt("¿Cual es tu nombre?");
    saludo = "Hola " + usuairo + "!";
}

/*
Para que se ejecuten debemos llamarlas utilizando su nombre. */
saludarUsuario();

/* 
Tambien se puede asignar a una variable.
var saludarUsuario = function() {
    *Accion*
}

- Return (Para que la funcion nos devuelva un valor. Una vez se ejecuta el Return finaliza la funcion, como el break). */
function sumaDeDosNumeros() {
    let a = 2;
    let b = 3;
    let resutaldo = a + b;

    return resutaldo;
}

/* Esta funcion valdra el resultado de la suma.

- Parametros (Se utlizan para que la funcion sea dinamica y variable con los datos que introduzcamos, se ponen dentro de los parentesis) */
function restaDeDosNumeros(a,b) { /* Las variables como parametros se declaran automaticamente, no es necesario poner let,
Solo seran validas dentro de la funcion. */
    let resultado = a - b;

    return resultado;
}

restaDeDosNumeros(4,2); /* Esto devolvera el resultado de la resta entre dos numeros (a, b) */
restaDeDosNumeros(10,4); /* Se reutiliza

- Funciones flecha (Sirve para crear funciones super basicas y ahorrarnos codigo y recursos).
Se crean con estos signos =>. */
const despedidaUsuario = nombre => "Adios" + nombre;

/*
1 - Si solo tiene un parametro, se escribe sin parentesis, si no tiene parametros no se utilizan parentesis.
2 - Si es solo una linea de codigo, se puede escribir justo al lado y no utiliza llaves

Ejemplo de una mas compleja. */

const vehiculo = (marca, color) => {
    let marcaDeVehiculo = "La marca del vehiculo es " + marca;
    let colorDeVehiculo = "El color del vehiculo es " + color;

    return {marca: marcaDeVehiculo, color: colorDeVehiculo};
}