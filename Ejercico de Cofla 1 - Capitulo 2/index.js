let gratis = false;

const permisosDeFiesta = (edad, hora) => {
    if (edad >= 18) {
        if (hora >= 2 && hora < 7 && gratis == false) {
            alert("Puedes pasar y tienes todo gratis.");
            gratis = true;
        } else {
            alert(`Son las ${hora}, puedes pasar pero tienes que pagar la entrada.`);
        }
    } else {
        alert("No puedes pasar, eres menor.");
    }
}

let edadDePersona = parseInt(prompt("¿Cual es tu edad?"));
let tiempoDeLlegada = parseInt(prompt("¿Que hora es?"));

permisosDeFiesta(edadDePersona, tiempoDeLlegada);

edadDePersona = parseInt(prompt("¿Cual es tu edad?"));
tiempoDeLlegada = parseInt(prompt("¿Que hora es?"));

permisosDeFiesta(edadDePersona, tiempoDeLlegada);

edadDePersona = parseInt(prompt("¿Cual es tu edad?"));
tiempoDeLlegada = parseInt(prompt("¿Que hora es?"));

permisosDeFiesta(edadDePersona, tiempoDeLlegada);