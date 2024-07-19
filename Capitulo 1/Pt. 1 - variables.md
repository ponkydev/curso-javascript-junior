# Variables
Guarda un espacio en memoria para un valor cambiante.

### ¿Que es declarar, inicializar y modificar una variable?

* Declarar: Crear una variable y especificar su nombre y opcionalmente su tipo de dato.

* Inicializar: Asignar un valor inicial a una variable.

* Modificar: Cambiar el valor de una variable existente durante la ejecución del programa.

### Scope
Alcance que se le permite a una variable. El scope se debe de colocar antes de crear la variable

* Var: Se establece en todo el codigo.

* Let: Se establece en un bloque de codigo en especifico, fuera del bloque no funciona.

* Const: Todo lo contrario a una variable, su valor no puede cambiar, se debe inicilalizar cuando se declara.

### Tipos de Datos
```js
let string = "texto"; /* Cadenas de texto alfanumerica */
let number = 100; /* Numeros */
let booleano = true; /* Verdadero o Falso */
```

### Crear multiples variables en una linea de codigo (Se dividen por comas)
```js
let num1 = 1, num2 = 2, num3 = 3;
```

#### Nota = Siempre se debe de agreagar punto y coma ";" al final de cada linea de codigo, con algunas excepciones.

### Casos Especiales de Datos

* Undefined: No se ha inicializado la variable.

* Null: Se utiliza para indicar que la variable esta vacia, a diferencia de Undefinied, esta si esta definida.

* NaN(Not A Number): Cuando hacemos operaciones y el resutaldo es NaN, nos indica que uno de los elementos no es un numero. */