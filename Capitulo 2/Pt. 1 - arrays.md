# Arrays
Sirve como vairable pero a diferencia de las variables podemos almacenar mas de un dato.

```js
let frutas = ["mango", "pera", "fresa"]; /* (Se separa por comas "," y se cierran entre corchetes "[]") */
```

Para acceder a cada elemento dentro de una array se usan corchetes al final del array con la posicion del elemento dentro del array.  

Los elementos se posicionan desde 0, osea que la primera posicion seria la numero 0 y asi suscesivamente:
```js
let frutas = ["mango", "pera", "fresa"]; /* (Se separa por comas "," y se cierran entre corchetes "[]") */

frutas[0] /* mango */
```


## Arrays asociativos
Objetos con claves de texto para almacenar valores en pares en JavaScript. De esta forma somos mas especificos.

```js
let auto = {
    marca: "Honda",
    modelo: "Civic",
    año: 2019,
    color: "Gris",
    automatico: true
}
```

Para acceder a un valor, lo podemos buscar con el nombre de la clave:

```js
let auto = {
    marca: "Honda",
    modelo: "Civic",
    año: 2019,
    color: "Gris",
    automatico: true
}

auto["marca"]; /* Honda */
```

Tambien podemos asignar este valor a una nueva variable:

```js
let auto = {
    marca: "Honda",
    modelo: "Civic",
    año: 2019,
    color: "Gris",
    automatico: true
}

let colorDeVehiculo = auto["color"];
```