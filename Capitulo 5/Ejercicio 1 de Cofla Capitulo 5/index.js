let materias = {
    fisica: [90, 7, 4, "fisica"],
    mate: [90, 8, 3, "matematica"],
    quimica: [85, 6, 3, "quimica"],
    programacion: [90, 7, 4, "programacion"],
    bbdd: [80, 7, 2, "base de datos"],
    calculo: [90, 6, 4, "calculo"],
    algebra: [90, 8, 3, "algebra"]
}

const aprobado = ()=> {

    for (materia in materias) {

        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

        if (asistencias >= 90) {
            console.log("%cAsistencias en orden", "color:green;");
        } else {
            console.log("%cFalta de Asistencias", "color:red;");
        }

        if (promedio >= 7) {
            console.log("%cPromedio en orden", "color:green;")
        } else {
            console.log("%cPromedio desaprobado", "color:red;");
        }

        if (trabajos >= 3) {
            console.log("%cTrabajos en orden", "color:green;")
        } else {
            console.log("%cFaltan trabajos", "color:red;");
        }
    }
}

aprobado();