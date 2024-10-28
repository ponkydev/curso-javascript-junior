
class Calculadora {
    constructor(){}
    static sumar(num1, num2){
        return parseInt(num1) + parseInt(num2);
    }
    
    static restar(num1, num2){
        return parseInt(num1) - parseInt(num2);
    }
    
    static dividir(num1, num2){
        return parseInt(num1) / parseInt(num2);
    }
    
    static multiplicar(num1, num2){
        return parseInt(num1) * parseInt(num2);
    }

    static potenciar(num, exp){
        return num**exp;
    }

    static raizCuadrada(num){
        return Math.sqrt(num);
    }

    static raizCubica(num){
        return Math.cbrt(num);
    }
}

alert("Que operacion deseas realizar?");
let operacion = prompt("1: Suma, 2: Resta, 3: Division, 4: Multiplicacion, 5: Potenciacion, 6: Raiz Cuadrada, 7: Raiz Cubica");

if (operacion == 1) {
    let numero1 = prompt("Ingrese el primer numero:");
    let numero2 = prompt("Ingrese el segundo numero:");

    let resultado = Calculadora.sumar(numero1, numero2);

    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 2) {
    let numero1 = prompt("Ingrese el primer numero:");
    let numero2 = prompt("Ingrese el segundo numero:");

    let resultado = Calculadora.restar(numero1, numero2);

    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 3) {
    let numero1 = prompt("Ingrese el primer numero:");
    let numero2 = prompt("Ingrese el segundo numero:");

    let resultado = Calculadora.dividir(numero1, numero2);

    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 4) {
    let numero1 = prompt("Ingrese el primer numero:");
    let numero2 = prompt("Ingrese el segundo numero:");

    let resultado = Calculadora.multiplicar(numero1, numero2);

    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 5) {
    let numero = prompt("Ingrese la base:");
    let exponente = prompt("Ingrese el exponente:");

    let resultado = Calculadora.potenciar(numero, exponente);

    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 6) {
    let numero = prompt("Ingrese el numero:");

    let resultado = Calculadora.raizCuadrada(numero);

    alert(`Tu resultado es ${resultado}`);
}

else if (operacion == 7) {
    let numero = prompt("Ingrese el numero:");

    let resultado = Calculadora.raizCubica(numero);

    alert(`Tu resultado es ${resultado}`);
}

else {
    alert("Operacion invalida");
}