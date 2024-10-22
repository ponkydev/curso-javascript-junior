# Programacion Orientada a Objetos
La programacion orientada a objetos (POO) es un paradigma (El concepto de paradigma es utilizado comúnmente como sinónimo de “ejemplo” o para hacer referencia a algo que se toma como “modelo".). Esto quiere decir que es una manera de programar distinta a la tradicional, esta vez creando moldes para poder crear objetos con un mismo contexto pero con distintas propiedades y caracteristicas (Color, altura, velocidad, peso, etc.).

## ¿Que es un objeto en programacion?
Un objeto es algo que tiene características y puede hacer cosas. Por ejemplo, si piensas en un auto, sus características serían el color y la marca, y puede hacer cosas como acelerar o frenar. Los objetos ayudan a organizar el código de una manera que se asemeja a cómo vemos el mundo real, permitiendo que diferentes partes del programa interactúen entre sí.

## Clase
Es una plantilla para crear objetos, le asignamos que atributos y metodos queremos que tengan estos objetos.

## Atributos
Son las cualidades que tienen los objetos (color, peso, edad, etc).

## Metodos
Son las acciones que puede realizar nuestro objeto (Correr, comer, encender, etc).

## Constructor
Es una funcion obligatoria que deben llevar las clases, es quien crea las propiedades de los objetos.

## Instanciacion
La instanciación es el proceso de crear un objeto a partir de una clase. Cuando instancias una clase, estás creando una versión específica de esa clase con sus propios valores para las propiedades definidas en la clase.

```js
class animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Hola! Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`
    }
}

// class es la palabra reservada para crear una clase
// constructor es la palabra reservada para crear un constructor
// this apunta hacia el objeto, es la propiedad del objeto
// Lo que esta a la derecha del igual es el valor que le asignaremos nosotros al objeto a traves del constructor

```

## ¿Como instanciar una clase?

```js
const perro = new animal("perro", 4, "marron");

// new indica que vamos a instanciar una clase.
```

## ¿Como acceder a un valor de un objeto?
Para acceder a un valor lo hacemos con un punto despues de la propiedad.

```js
let colorPerro = perro.color;
```

## Creando diferentes objetos de la misma clase

```js
const gato = new animal("gato", 2, "blanco");
const caballo = new animal("caballo", 6, "marron");
```

## Creando metodos para las clases

```js
class personas {
    constructor = (nombre, edad, pais) {
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
        this.saludo = `Hola! Mi nombre es ${nombre}, tengo ${edad} años de edad y soy de ${pais}.`
    }

    saludar() {
        document.write(this.saludo)
    }

    // Los metodos no se pueden crear como funciones tipo flecha.
}

// Los metodos se crean fuera del constructor.

const pedro = new persona("Pedro", 34, "Venezuela");

// Para realizar el metodo utilizamos un punto igual que para obtener el valor de una propiedad.

pedro.saludar()
```