# Metodos de Arrays

## pop()
Elimina el ultimo elemento del array y lo devuelve (no al array sino como return).

```js
let array = ["Jose", "Maria", "Pedro"];

let pop = array.pop(); // Pedro

console.log(array) // ["Jose", ""Maria"];
```

## shift()
Elimina el primer elemento del array y lo devuelve (no al array sino como return).

```js
let array = ["Jose", "Maria", "Pedro"];

let shift = array.shift(); // Jose

console.log(array) // ["Maria", "Pedro"];
```

## push()
Agrega uno o mas elemento al final del array y devuelve la nueva cantidad de elementos del array.

```js
let array = ["Jose", "Maria", "Pedro"];

let push = array.push("David"); // 4

console.log(array) // ["Jose", "Maria", "Pedro", "David"];
```

## unshift()
Agrega uno o mas elemento al principio del array y devuelve la nueva cantidad de elementos del array.

```js
let array = ["Jose", "Maria", "Pedro"];

let unshift = array.unshift("David"); // 4

console.log(array) // ["David", "Jose", "Maria", "Pedro"];
```

## reverse()
Invierte el orden de los elementos dentro de un array.

```js
let array = [1, 2, 3, 4, 5];

let reverse = array.reverse(); // [5, 4, 3, 2, 1];
```

## sort()
Ordena los elementos de un array. Los numeros de menor a mayor y los strings en orden alfabetico.

```js
let array = [3,6,5,1,9,7,8,2,4];

let sort = array.sort(); // [1,2,3,4,5,6,7,8,9];

let array2 = ["Eduardo", "Benito", "Angel", "Coral"];

let sort2 = array2.sort(); // ["Angel", "Benito", "Coral", "Eduardo"];
```

## splice()
Elimina y agrega elementos dependiendo de tres valores como parametros, el primero le indica la posicion donde empezara, el segundo la cantidad de elementos que eliminara y del tercero en adelante los elementos que agregara.

```js
let array = [1, 2, 3, 4, 5];

let splice = array.splice(2, 2, "Arroz", "Avena"); // [1, 2, "Arroz", "Avena", 5];
```

## join()
Une un array y lo convierte a string, obitiene un valor que se pone en medio de cada elemento del antiguo array.


```js
let array = ["Eduardo", "Benito", "Angel", "Coral"];

let join = array.join(" - "); // "Eduardo - Benito - Angel - Coral";
```

## slice()
Crea un nuevo array a partir de un otro array con los elementos que le indiquemos. Primer valor: donde empieza, segunda valor: donde termina (No selecciona el ultimo valor).

```js
let array = ["Eduardo", "Benito", "Angel", "Coral"];

let slice = array.slice(1, 3); // ["Benito", "Angel"];
```

## forEach()
Itera un array y hace lo que de digamos con cada elementos segun la funcion que creemos. Recibe una funcion como parametro.

```js
let array = ["Eduardo", "Benito", "Angel", "Coral"];

array.forEach(elemento => console.log(elemento)); // ["Eduardo"]; ["Benito"]; ["Angel"]; ["Coral"];
```

## filter()
Itera un array y filtra los elementos dependiendo la condicion que le pasemos para crear un nuevo array con estos elementos.

```js
let array = ["Eduardo", "Benito", "Angel", "Coral"];

let filter = array.filter(elemento => elemento.length > 5);

console.log(filter); // ["Eduardo", "Benito"];
```