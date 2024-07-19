# Bucles e Iteraciones
Permiten la repetición eficiente de un bloque de código. Facilitan la ejecución de tareas repetitivas y el procesamiento de datos en programas.

## while
Se repetira hasta que la condicion deje de cumplirse
```js
let numParaWhile = 0;

while (numParaWhile < 5) {
    numParaWhile++;
}   /* Se repetira hasta que numParaWhile valga 5 */
```

## do while
Se diferencia del while ya que este primero realiza la accion y luego pregunta la condicion.

```js
do {
    numParaWhile++;
}

while (numParaWhile > 5) /* Siempre se ejecutara la primera vez sin importar si la condicion es falsa. */
```

## break
Hace que el bucle termine sin importar si la condicion sigue siendo verdadera.

```js
while (numParaWhile < 1000) {
    numParaWhile++;
    if (numParaWhile == 10) {
        break; /* Si el if es verdadero se ejecuta el break */
    }
} /* Se repetira hasta que la numParaWhile valga 10
```

## for
Se diferencia del while ya que es determinado, le podemos asignar cuantas veces se repetira, el while se ejecuta mientras la condicion se cumpla.

### for se compone de tres partes:
1. Declaracion e inicializacion de variable: Creamos una variable, la declaramos e inicializamos dentro del for.

2. Condicion: Le damos una condicion para indicar cuantas veces se repetira.

3. Sumamos o restamos: Sumamos o restamos un valor numerico a la variable.

```js
for ( /* 1 */ let i = 0; /* 2 */ i < 6; /* 3 */ i++) {
    /* Accion */
}
```


## continue
Sirve para saltarnos una accion en el bucle.

```js
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    }
} /* Se saltara el 5
```

## for in
Nos devuelve la posicion de un valor dentro de un array.

```js
let animales = ["perro", "gato", "largarto"];

for (let animal in animales) {
    return animal;
} /* Nos retornara "0,1,2"
```

## for of
Nos devuelve los valores dentro de un array.

```js
for (let animal of animales) {
    return animal;
} /* Nos retornara ("perro", "gato", "largarto"), ya iterado, osea fuera del array.
```

## label
Sirve para nombrar bucles, esto nos sirve para poder saltarnos bucles completos o romper el flujo con un break.

```js
let comidas = ["Pollo", "Arroz", "Habichuela", "Ensalada"];

forComidaBucle: /* <-- Asi se nombran los bucles con un label */
for (let comida in comidas) {
    if (comida == 2) {
        for (let comida of comidas) {
            break forComidaBucle; /* Esto detendra el flujo del bucle pricipal */
        }
    }
}
```