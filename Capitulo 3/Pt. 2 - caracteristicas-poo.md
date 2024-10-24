# Caracteristicas de POO

## Abstraccion
La abstracción en la programación orientada a objetos (POO) es el principio que permite simplificar y representar la complejidad de un sistema al enfocarse en los aspectos esenciales de un objeto, ignorando los detalles innecesarios.

## Modularidad
La modularidad es un principio de diseño en la programación que consiste en dividir un sistema en componentes más pequeños y manejables, llamados módulos. Cada módulo tiene una función específica y puede ser desarrollado, probado y mantenido de manera independiente.

## Encapsulamiento
El encapsulamiento es un principio de la programación orientada a objetos que consiste en ocultar los detalles internos de un objeto y exponer solo lo necesario a través de una interfaz pública.

## Polimorfismo
El polimorfismo es un principio de la programación orientada a objetos que permite que diferentes clases puedan ser tratadas como instancias de una clase común a través de una interfaz común. En otras palabras, permite que una misma operación o método se aplique a objetos de diferentes tipos.

## Herencia
La herencia es un principio de la programación orientada a objetos que permite que una clase (denominada clase derivada o subclase) herede propiedades y comportamientos (atributos y métodos) de otra clase (denominada clase base o superclase). Esto facilita la reutilización del código y la creación de jerarquías de clases.

Su palabra reservada es: extends.

## Metodos Estaticos
Los métodos estáticos son funciones definidas en una clase que se pueden invocar sin necesidad de crear una instancia de esa clase. Se utilizan principalmente para realizar operaciones que no requieren acceso a los atributos de instancia de la clase.

Su palabra reservada es: static.

## Metodos getters y setters
Los métodos getters y setters son funciones que se utilizan para acceder y modificar los atributos de una clase en programación orientada a objetos. Ayudan a mantener el principio de encapsulamiento, permitiendo controlar cómo se accede y se modifica la información de los objetos.

Sus palabras reservadas son: set para setters y get para getters.

## Ejemplo usando todos estos conceptos:

```js
// Clase base (superclase) que representa una figura
class Figura {
    constructor(color) {
        this.color = color; // Atributo de instancia
    }

    // Método estático para crear una figura genérica
    static crearFigura(color) {
        return new Figura(color);
    }

    // Método de abstracción para calcular el área (debe ser sobrescrito)
    calcularArea() {
        throw new Error("Método 'calcularArea()' debe ser implementado.");
    }

    // Método getter para el color
    get getColor() {
        return this.color;
    }

    // Método setter para el color
    set setColor(nuevoColor) {
        this.color = nuevoColor;
    }
}

// Clase derivada (subclase) que representa un cuadrado
class Cuadrado extends Figura {
    constructor(color, lado) {
        super(color); // Llama al constructor de la clase base
        this.lado = lado; // Atributo específico de Cuadrado
    }

    // Sobrescribe el método calcularArea
    calcularArea() {
        return this.lado * this.lado;
    }
}

// Clase derivada (subclase) que representa un círculo
class Circulo extends Figura {
    constructor(color, radio) {
        super(color); // Llama al constructor de la clase base
        this.radio = radio; // Atributo específico de Circulo
    }

    // Sobrescribe el método calcularArea
    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }
}

// Uso de las clases
const cuadrado = new Cuadrado("rojo", 5);
console.log(`Color del cuadrado: ${cuadrado.getColor}`);
console.log(`Área del cuadrado: ${cuadrado.calcularArea()}`);

const circulo = new Circulo("azul", 3);
console.log(`Color del círculo: ${circulo.getColor}`);
console.log(`Área del círculo: ${circulo.calcularArea()}`);

// Cambiar el color usando el setter
cuadrado.setColor = "verde";
console.log(`Nuevo color del cuadrado: ${cuadrado.getColor}`);

// Crear una figura genérica usando el método estático
const figuraGenerica = Figura.crearFigura("gris");
console.log(`Color de la figura genérica: ${figuraGenerica.getColor}`);
```