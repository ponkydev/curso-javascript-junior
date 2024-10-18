let cantidadAlumnos = prompt("¿Cuantos alumnos hay?");
let totalAlumnos = [];

for (i = 0; i < cantidadAlumnos; i++) {
    totalAlumnos[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

const tomarAsistencia = (nombre,p) => { // La p con la que llamamos la variables es una abreviacion de posicion.
    let presencia = prompt(nombre);

    if (presencia == "p" || presencia == "P") {
        totalAlumnos[p][1]++;
    }
}

for (i = 0; i < 30; i++) {
    for (alumno in totalAlumnos) {
        tomarAsistencia(totalAlumnos[alumno][0], alumno);
    }
}

for (alumno in totalAlumnos) {
    let resultado = `${totalAlumnos[alumno][0]}:<br>
    _________Presencias: <b>${totalAlumnos[alumno][1]}</b>
    _________Ausencias: <b>${30 - totalAlumnos[alumno][1]}</b>`;

    if (30 - totalAlumnos[alumno][1] > 18) {
        resultado += "<b style='color:red'>Reprobado Por Inasistencia</b><br><br>";
    } else {
        resultado += "<br><br>";
    }

    document.write(resultado);
}