
const obtenerInformacion = (materia) => {
    const materias = {
        fisica: ["Perez", "Eduardo", "Benito", "Angel", "Coral", "David", "Carlos"],
        programacion: ["Rodriguez", "Eduardo", "Angel", "Coral", "Carlos"],
        calculo: ["Hernandez", "Eduardo", "Benito", "Angel", "David", "Carlos"],
        quimica: ["Martinez", "Eduardo", "Benito", "Coral", "David", "Carlos"]
    }
    
    if (materias[materia] !== undefined){
        return [materias[materia], materia, materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia) => {

    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de ${informacion[1]}: <b style= "color: blue">${profesor}</b><br>
            Los alumnos son: <b>${alumnos.join(" - ")}</b><br><br>
            `);
    }

}

const cantidadDeClases = (alumno) => {

    let informacion = obtenerInformacion();
    let cantidadTotal = 0;
    let clasesPresentes = [];

    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }

    return `El alumno <b>${alumno}</b> estan en <b style="color: green"> ${cantidadTotal}</b> clases<br>
    Esta cursando las clases de: <b style="color: green;"> ${clasesPresentes}.</b><br><br>
    `;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("calculo");
mostrarInformacion("quimica");

document.write(cantidadDeClases("Angel"));
document.write(cantidadDeClases("Eduardo"));
document.write(cantidadDeClases("Benito"));
document.write(cantidadDeClases("Coral"));
document.write(cantidadDeClases("David"));
document.write(cantidadDeClases("Carlos"));