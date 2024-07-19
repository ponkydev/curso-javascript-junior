# Concatenacion
Unir Strings (Cadenas de textos). Se puede hacer agregando signo de suma entre las strings.

```js
let text1 = "Hola,";
let text2 = " Como estas?"
let concatenacion = text1 + text2;
```

## Como concatenar numeros. (Existen dos maneras)

### Encerrando los numeros entre comillas:
```js
let concatnum = "5" + "10"; /* "510" 
```

### Forzando un string:
```js
let concatnum2 = "" + 20 + 10; /* "2010"
```

## Concatenando strings usando el metodo concat()
```js
let concat3 = text1.concat(text2); /* Hola, Como estas?
```

## Concatenando con el metodo backstick y llaves (`${}`)
```js
let backstick = `${concatenacion} 
Alfredo.`; /* Hola, Como estas? Alfredo. (Se puede separar entre lineas, es bueno para escribir codigo HTML)
```

## Escape de comillas dobles y simples: 
Para poder utilizar comillas dentro de una string debo utilizar las contrarias a esta para cerrarla.
```js
let comillasDobles = 'Puedo utilizar "comillas dobles" en este texto';
let comillasSimples = "Puedo utilizar 'comillas simples' en este texto";
```
Funciona igual para los backstick.