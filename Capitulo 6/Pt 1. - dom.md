# Document Object Model (DOM)
Es una representación estructurada del contenido de una página web, como si fuera un árbol, donde cada elemento HTML es un "nodo" que JavaScript puede manipular. Esto permite que se cambie el contenido, la estructura o el estilo de la página de forma dinámica, dándole interactividad.

## Nodo
Los nodos son los elementos y atributos html, ya sea un parafo, un div, un h1, hasta incluso el mismo body.

## Tipos de nodo

* Document: Es la raiz de donde derivan el resto de nodos.
* Element: Nodos definidos por html.
* Text: El texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text.
* Attribute: Es la informacion que tiene un atributo dentro de nodo tipo element.
* Comentarios y otros: Los comentarios en el codigo html tambien generan nodos, al igual que otras etiquetas como doctype.

## Metodos de seleccion de elementos

Sintaxis: document.metodo();

* getElementById(): Selecciona un elemento por ID.
* getElementsByTagName(): Selecciona los elementos con el nombre de la etiqueta y nos devuelve una coleccion.
* querySelector(): Selecciona el primer elemento que coincida con el grupo especificado de selectores (Clase, tag name, atrribute, etc).
* querySelectorAll(): Selecciona todos los elementos que coincidan con el grupo especificado de selectores. Nos devuelve un NodeList el cual es un objeto que es basicamente una lista de nodos.

Los elementos seleccionados se deben almacenar en una variable.

## Metodos para definir, obtener y eliminar los valores de los atributos

Sintaxis: document.metodo();

* setAttribute(): Agrega o cambia el valor de un atributo. primer parametro es el atributo y el segundo parametro es el nuevo valor.
* getAttribute(): Devuelve el valor de un atributo. Solo neceista un parametro que sera el atributo.
* removeAttribute(): Elimina un atributo.

## Atributos globales
Son atributos que comparten todos los elementos html en el body.

* contentEditable: Permite o no que el contenido de un elemento se pueda editar, con true o false.
* dir: Indica la direccion del texto. Desde izquierda a derecha con (ltr) y de derecha a izquierda con (rtl).
* hidden: Saca un elemento del viewport.
* tabindex: Indica el orden en que se tabularan una coleccion de elementos.
* title: Indica el titulo del elemento. Cuando se hace hover sobre el elemento se puede ver el titulo.


## Atributos de inputs

* className: Nos devuelve el nombre de la clase que tiene el input.
* value: Nos devuelve el valor del input.
* type: nos devuelve el tipo del input.
* accept: Indica al usuario el formato de archivo que puede subir a un input de tipo file.
* form: Funciona para asociar un input a un form al cual no pertenece.
* minLength: la cantidad minima de caracteres que debe tener un input.
* placeholder: Deja un ejemplo dentro del input de lo que se debe colocar.
* required: Obliga al usuario a completar un input en un form.

## Atributo style
Nos permite modificar el css del elemento.

Sintaxis: elemento.style.propiedad = "valor";

Ejemplo:
```js
div.style.border = "1px solid #000";
```

Cuando una propiedad contiene dos palabras se escribe en camelCase en JavaScript:
* css: background-color;
* JavaScript: backgroundColor;

## Atributo Class, classList y metodos de clases
El atributo classList se utiliza para acceder a los valores del atributo class de un elemento. Se pueden modificar, agregar o eliminar.

Sintaxis: element.classList.metodo();

* add(): Se utiliza para agregar una nueva clase al elemento.
* remove(): Elimina una clase del elemento.
* item(): Devuelve la clase del indice especificado.
* contains(): Verifica si el elemento tiene la clase indicada y devuelve un valor booleano.
* toggle(): Alterna entre agregar una clase o eliminarla dependiendo si el elemento la tiene o no.
* replace(): Reemplaza una clase por otra.

## Obtencion y Modificacion de elementos

* textContent: Devuelve el texto contenido en un nodo sin importar el css.
* innerText: Nos devuelve el texto visible de un nodo element teniendo en cuenta los estilos css.
* innerHTML: Nos devuelve el codigo HTML dentro de un elemento.
* outerHTML: Nos devuelve el codigo de todo el elemento HTML.

## Creacion de elementos
Los valores de los parametros de los metodos deben ir en mayuscula.

sintaxis: document.metodo("DIV");

* createElement(): Crea un elemento en el DOM.
* createTextNode(): Crea un nodo text.
* createDocumentFragment(): Crea un fragmento de codigo dentro de un bucle en el que en cada iteracion agrega una porcion de codigo al fragmento. Esto se hace de esta manera para evitar el uso excesivo de recursos ya que por cada modificacion al DOM este elimina todos los nodos y los crea denuevo con la nueva modificacion.

## Obtencion y modificacion de childs (Hijos)
Estas propiedades y metodos se aplican a los padres pero afectan a los hijos.

* appendChild(): Agrega un elemento hijo al padre.
* firstChild: Devuelve el primer nodo dentro de un elemento padre.
* lastChild: Devuelve el ultimo nodo dentro de un elemento padre.
* firstElementChild: Devuelve el primer elemento hijo.
* lastElementChild: Devuelve el ultimo elemento hijo.
* childNodes: Nos devuelve todos los nodos hijos dentro de un NodeList.
* children: Nos devuelve todos los elementos hijo en una coleccion HTML.

## Metodos de childs
Estas propiedades y metodos se aplican a los padres pero afectan a los hijos.

* replaceChild(): Toma un elemento dentro de un elemento padre y lo reemplaza por otro. El primer parametro es el elemento nuevo y el segundo el elemento antiguo.
* removeChild(): Elimina un elemento child.
* hasChildNodes(): Verifica si el elemento tiene nodos como hijos.

## Propiedades de parents (Padres)
Se aplican a los hijos para afectar al padre.

* parentElement: Nos devuelve el elemento padre de un elemento.
* parentNode: Nos devuelve el nodo padre de un elemento.

## Propiedades siblings (Hermanos)
Los siblings son elementos que comparten un mismo padre.

* nextSibling: Devuelve el siguiente nodo hermano.
* previousSibling: Devuelve el nodo hermano anterior.
* nextElementSibling: Devuelve el siguiente elemento hermano.
* previousElementSibling: Devuelve el elemento hermano anterior.

## Extras
* closest(): Nos devuelve el ancestro mas cercano al elemento con la clase que le pasemos como parametro.

Sintaxis: elemento.closest("selector");

Ejemplo:
```html
<body class="elemento1">
    <main class="elemento2">
      <p class="elemento3"></p>
      <div class="elemento4"></div>
    </main>

    <script>
        const div = document.querySelector(".elemento4");

        console.log(div.closest(".elemento1")); // Imprimira: <body class="elemento1"></body> y todo lo que contiene dentro.
    </script>
</body>
```