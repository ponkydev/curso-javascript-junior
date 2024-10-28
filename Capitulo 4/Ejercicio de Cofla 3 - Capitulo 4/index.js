
let materias = {
    fisica: ["Perez", "Eduardo", "Benito", "Angel", "Coral", "David", "Carlos"],
    programacion: ["Rodriguez", "Eduardo", "Angel", "Coral", "Carlos"],
    calculo: ["Hernandez", "Eduardo", "Benito", "Angel", "David", "Carlos"],
    quimica: ["Martinez", "Eduardo", "Benito", "Coral", "David", "Carlos"]
}

const inscribir = (alumno, materia) => {

    let personas = materias[materia];

    if (personas.length >= 21) {
        return document.write(`Lo siento <b>${alumno}</b>, ya no hay espacio para mas alumnos en la materia de <b style="color: green">${materia}</b>.`);
    } 
    else if (personas.includes(alumno)) {
        return document.write(`El alumno <b>${alumno}</b> ya esta inscrito en <b style="color:green">${materia}</b>.<br>`)
    } else {
        personas.push(alumno);
        
        return document.write(`El alumno <b>${alumno}</b> se ha inscrito en la materia de <b style="color: green">${materia}</b>.<br><br>`);
    }
     
}

inscribir("Eduardo", "fisica");
