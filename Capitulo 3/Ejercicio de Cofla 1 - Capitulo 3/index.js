class Celular {
    constructor(color, peso, rdp, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }

    botonEncendido() {
        if (this.encendido == false) {
            alert("Prendiendo...");
            this.encendido = true;
        } else {
            alert("Apagando...")
            this.encendido = false;
        }
    }

    reiniciar() {
        if (this.encendido == true) {
            alert("Reiniciando...");
        } else {
            alert("Celular apagado.")
        }
    }

    tomarFoto() {
        alert(`Foto tomada. Resolucion de foto: ${this.rdc}.`)
    }

    grabar() {
        alert(`Grabando en una resolucion de ${this.rdc}.`)
    }

    celularInfo() {
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Resolucion de Pantalla: <b>${this.rdp}</b><br>
        Resolucion de camara: <b>${this.rdc}</b><br>
        Memoria Ram: <b>${this.ram}</b><br>
        `
    }
}

const celular1 = new Celular("blanco", "150g", "5.5'", "Full HD", "4GB");
const celular2 = new Celular("negro", "160g", "6'", "Full HD", "6GB");
const celular3 = new Celular("azul", "140g", "5'", "HD", "4GB");

class CelularesAltaGama extends Celular {
    constructor(color, peso, rdp, rdc, ram, camaraExtra) {
        super(color, peso, rdp, rdc, ram);
        this.camaraExtra = camaraExtra;
    }

    camaraLenta() {
        alert("Grabando en camara lenta.")
    }

    reconocimientoFacial() {
        alert("Iniciando reconocimiento facial.")
    }

    infoAltaGama() {
        return this.celularInfo() + `Resolucion Camara Extra: <b>${this.camaraExtra}</b><br>`;
    }
}

const celularAG1 = new CelularesAltaGama("rojo", "153g", "6.5'", "4K", "8GB", "Full HD");
const celularAG2 = new CelularesAltaGama("negro", "150g", "6'", "4K", "6GB", "HD");

class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }

    abrir() {
        if (this.iniciada == false && this.instalada == true) {
            alert("Abriendo app");
            this.iniciada = true;
        } else {
            alert("Debes instalar la app.")
        }
    }

    cerrar() {
        if (this.iniciada == true) {
            alert("Cerrando app");
            this.iniciada = false;
        }
    }

    instalar() {
        if (this.instalada == false) {
            this.instalada = true;
            alert("App instalada correctamente.");
        }
    }

    desinstalar() {
        if (this.instalada == true) {
            this.instalada = false;
            alert("App desinstalada correctamente.");
        }
    }

    appInfo() {
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `
    }
}

const app = new App("3 mil", "4.5", "384MB");

// app.instalar();
// app.abrir();
// app.cerrar();
// app.desinstalar();

document.write(`
    ${celularAG1.infoAltaGama()}<br>
    ${celularAG2.infoAltaGama()}<br>
    ${celular3.celularInfo()}<br>
    ${app.appInfo()}
    `)