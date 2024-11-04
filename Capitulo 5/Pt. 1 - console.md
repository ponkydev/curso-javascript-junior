# Consola
La consola en el navegador es una herramienta de desarrollo que permite ejecutar y ver mensajes de JavaScript, depurar errores y probar código en tiempo real.

## Metodos de registro en consola

Sintaxis: console.metodo()

* assert(): Funciona como un condicional para la consola, si la declaracion es verdadera no hara nada, si es falsa lanzara un aviso.

* clear(): Limpia la consola.

* error(): Lanza un error definido por nosotros.

* info(): Lanza un mensaje informativo.

* log(): Lanza un mensaje general.

* table(): Nos coloca los elementos de un array dentro de una tabla, segun su indice.

* warn(): Lanza una advertencia.

* dir(): Despliega una lista de los elementos de un array.


## Metodos de conteo en la consola

* count(): Cuenta cuantas veces se ejecuto ese metodo.

* countReset(): resetea el conteo.

## Metodos de agrupacion en la consola

* group(): Crea un grupo dentro de la consola donde todo lo que ejecutemos despues de haber creado el grupo ira dentro de ese grupo, podemos crear grupos dentro de un grupo. Recibe como parametro el nombre del grupo.

* groupEnd(): Termina el grupo en el que esta.

* groupCollapsed(): Crea un grupo no desplegado.

## Metodos de temporizacion

* time(): Inicia un temporizador en consola.

* timeLog(): Nos dice cuanto tiempo tiene el temporizador desde que se inicio.

* timeEnd(): Detiene el temporizador.

## Estilando un log en consola
Se pueden agregar estilos css a un log con el signo de porcentaje y la letra c antes del contenido y otro parametro con todos los estilos. (No permite medidas)

```js
    console.log("%cHola Mundo", "color: red; bacground-color: blue; padding: 20px;");
```