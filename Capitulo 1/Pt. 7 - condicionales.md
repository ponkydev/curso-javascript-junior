# Condiacionales
Nos permite validar una porcion de codigo y hacer una accion dependiendo su resultado.

## if
Se utiliza para la primera validacion.
```js
if (true && false) {
    /* Si el resultado es true, realiza un accion, sino, pasa a la siguiente condicion*/
} /* Los bloques de codigo van dentro de llaves {}.
```

## else if
Se utiliza si la condicion anterior fue falsa.
```js
else if (false) {
    /* Si el resultado es true, realiza un accion, sino, pasa a la siguiente condicion*/
}
```
Se pueden utilizar tantos else if como condiciones existan.

## else
Se utiliza para finalizar si ninguna de las condiciones se cumplio.
```js
else {
    /* Realiza una accion */
}
```