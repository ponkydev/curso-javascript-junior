# Metodos de Cadenas

## concat()
Junta dos o mas cadenas y la retorna.

```js
let cadena1 = "Me gusta";

let cadena2 = " el chocolate.";

let resultado = cadena1.concat(cadena2); // Me gusta el chocolate.
```

## startsWith()
Devuelve un valor booleano (true o false) dependiendo si una cadena comienza o no con el valor que pongamos como parametros del metodo.

```js
let cadena1 = "Me gusta";

let cadena2 = "M";

let resultado = cadena1.startsWith(cadena2); // true
let resultado2 = cadena1.startsWith("cadena2"); // false
```

## endsWith()
Devuelve un valor booleano (true o false) dependiendo si una cadena termina o no con el valor que pongamos como parametros del metodo.

```js
let cadena1 = "Me gusta";

let resultado = cadena1.endsWith(" gusta"); // true
let resultado2 = cadena1.endsWith("pepe"); // false
```

## includes()
Devuelve un valor booleano (true o false) dependiendo de si una cadena esta o no dentro de otra cadena con el valor que pongamos como parametros del metodo.

```js
let cadena1 = "Quiero ir a la playa.";

let cadena2 = "playa";

let resultado = cadena1.includes(cadena2); // true
let resultado2 = cadena2.includes("rio"); // false
```

## indexOf()
Verifica si existe una cadena dada dentro de otra cadena y nos devuelve la posicion de donde empieza, si no existe, nos devuelve -1.

```js
let cadena1 = "playa";

let resultado = cadena1.indexOf("ya"); // 3
let resultado2 = cadena1.indexOf("o"); // -1
```

## lastIndexOf()
Verifica si existe una cadena dada dentro de otra cadena y nos devuelve la posicion de donde empieza la ultima cadena encontrada que coincida con la cadena dada, si no existe, nos devuelve -1.

```js
let cadena1 = "playa playa playa";

let resultado = cadena1.lastIndexOf("playa"); // 12
let resultado2 = cadena1.lastIndexOf("o"); // -1
```

## padStart()
Rellena una cadena con otra cadena dada tantas veces se le indique. Pone la cadena al principio.

```js
let cadena1 = "bc";
let cadena2 = "3456";

let resultado = cadena1.padStart(5, "a"); // aaabc
let resultado2 = cadena2.padStart(6, "12"); // 123456
```

## padEnd()
Rellena una cadena con otra cadena dada tantas veces se le indique. Pone la cadena al final.

```js
let cadena1 = "bc";
let cadena2 = "3456";

let resultado = cadena1.padEnd(5, "a"); // bcaaa
let resultado2 = cadena2.padEnd(6, "12"); // 345612
```

## repeat()
Repite una cadena tantas veces se le indique.

```js
let cadena1 = " abc";

let resultado = cadena1.repeat(3); // abc abc abc
```

## split()
Separa una cadena por un caracter especifico o cadena y guarda el resultado en un array.

```js
let cadena1 = "perro.gato.conejo.pollo";

let resultado = cadena1.split("."); // ["perro", "gato", "conejo", "pollo"];
```

## substring()
Recorta una cadena entre las posiciones dadas.

```js
let cadena1 = "abcdefg";

let resultado = cadena1.substring(1,4); // bcd
```

## toLowerCase()
Convierte las letras de una cadena a minusculas.

```js
let cadena1 = "Hola Pedro!";

let resultado = cadena1.toLowerCase(); // hola pedro!
```

## toUpperCase()
Convierte las letras de una cadena a mayusculas.

```js
let cadena1 = "Hola Pedro!";

let resultado = cadena1.toUpperCase(); // HOLA PEDRO!
```

## toString()
Convierte caracteres a cadena, ya sean numero, valores booleanos, arrays, etc.

```js
let cadena1 = 123;

let resultado = cadena1.toString(); // "123"
```

## trim()
Elimina los espacios de una cadena.

```js
let cadena1 = "Tengo hambre";

let resultado = cadena1.trim(); // Tengohambre
```

## trimStart()
Elimina los espacios del comienzo.

## trimEnd()
Elimina los espacios del final.