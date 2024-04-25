/* -- Operadores Intermedios

- Operadores de Comparacion: Compara dos expresiones y devuelve un dato booleano (Verdad o Falso)
Igual: == */
let igual = "11" == 11; /* ¿Es 11 igual que 11? (True) (No le importa el tipo de dato)

Diferente: != */
let diferente = 2 != 2; /* ¿Es 2 diferente de 2? (False)

Identico: === */
let identico = "11" === 11; /* ¿Es "11" identico que 11? (False) (Si le importa el tipo de dato)

No Identico !== */
let noIdentico = "true" !== true; /* ¿"true" y true no es identico? (True)

Mayor que: > */
let mayorQue = 10 > 100; /* ¿Es 10 mayor que 100? (False)

Mayor o igual que: >= */
let mayorOIgualQue = 3 >= 3; /* ¿Es 3 mayor o igual que 3? (True)

Menor que: < */
let menorQue = 10 < 15; /* ¿Es 10 menor que 15? (True)

Menor o igual que: <= */
let menorOIgualQue = 70 <= 30; /* ¿Es 70 menor o igual que 30? (False)

- Operadores Logicos: Compara resultados de operadores de comparacion (condiciones) y devuelve un valor booleano.
AND: && (Para que sea verdadero, ambas condiciones deben ser verdaderas) */
let and = true && true; /* (true) */
let and2 = 10 > 2 && "hola" == "adios"; /* (false)

OR: || (Basta con que una condicion sea verdadera) */
let or = true || false; /* (true) */
let or2 = false || false; /* (false)

NOT: ! (Devuelve lo contrario al resultado de la condicion) */
let not = !false; /* (true) */
let not2 = !true; /* (false)

Se peude combinar operadores logicos */
let op = (10 > 10 || 25 > 5) || ("23" === 23 && !(30 == "30")) /* (true) */