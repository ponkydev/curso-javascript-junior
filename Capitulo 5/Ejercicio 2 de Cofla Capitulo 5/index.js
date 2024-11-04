let tp = "100 minutos de trabajos practicos";
let estudio = "100 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let quehaceres = "30 minutos de quehaceres";
let descanso = "10 minutos de descanso";

console.log("TAREAS");

for (let i = 1; i < 15; i++) {
    if (i == 1) {
        console.group("Semana 1");
    }

    console.groupCollapsed(`Dia ${i}`);

    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(quehaceres);

    console.groupEnd();

    if (i == 7) {
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }

}
