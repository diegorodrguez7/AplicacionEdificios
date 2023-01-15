//TODO: CLASE EDIFICIO.
function Edificio(calle, numero, cp, plantas, numplantas, numpuertas) {

    //! Constructor de la clase edificio.
    this.mensaje = mensajeCreacion(calle, numero, cp, numplantas, numpuertas);
    this.calle = calle;
    this.numero = numero;
    this.cp = cp;
    this.plantas = plantas;
    this.addPlantasPuertas = addPlantasPuertas;
    this.addPropietario = addPropietario;
    this.imprimePlantas = imprimePlantas;
    this.imprimirInfo = imprimirInfo;
    this.numeroedificos = numeroEdificio();
}

//! Insertar plantas y puertas.
function addPlantasPuertas(nPuertas) {
    for (let i = 0; i < this.plantas.length; i++) {
        this.plantas[i] = Array(nPuertas).fill(0);
    }
}

//! Insertar propietarios con el ALERT previo (funcion mensajeCreacionProp)
function addPropietario(nombre, planta, puerta) {
    this.mensaje2 = mensajeCreacionProp(nombre, planta, puerta);
    this.plantas[planta][puerta-1] = nombre;
}

//! ALERT previo a insertar el edificio con sus datos en el TextArea.
function mensajeCreacion(calle, numero, cp, numplantas, numpuertas) {
    window.alert("Nuevo edifico en la calle " + calle + ", con el número: " + numero + " y con el código postal: " + cp + ". Tiene " + numplantas + " planta/s y " + numpuertas + " puerta/s en cada planta.");
}

//! ALERT previo a insertar el nombre del nuevo propietario de la vivienda (puerta).
function mensajeCreacionProp(nombre, planta, puerta) {
    window.alert(nombre + " ahora es dueñ@ de la puerta: " + puerta + " de la planta: " + planta);
}

//! Creacion de una fucion que retorna un String con los datos de cada planta dentro del TextArea.
function imprimePlantas() {
    let string = "";
    for (let i = 0; i < this.plantas.length; i++) {
        string += `Planta nº: ${i}: `;
        for (let j = 0; j < this.plantas[i].length; j++) {
            string += `Vivienda nº: ${j+1}, Nombre propietario: ${this.plantas[i][j]}, `;
        }
        string += `\n`;
    }
    return string;
}

//! Creacion de una fucion que retorna un String con los datos del nuevo edificio construido.
function imprimirInfo() {
    return 'EDIFICIO ' + this.numeroedificos + ' construido en la CALLE: ' + this.calle + ' bajo el Nº:' + this.numero + ' con el CÓDIGO POSTAL:' + this.cp;
}

//! CONTADOR DE EDIFICIOS (1,2,3...).
var auxiliar = 1;  
function numeroEdificio() {
    return auxiliar ++;
}
