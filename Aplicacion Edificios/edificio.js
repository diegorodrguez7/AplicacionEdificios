//TODO: Clase edificio donde esta alojada la logica + los eventos load y click.
//! Evento para recoger los values de los IDS del HTML. Se recogeran cuando los demas recursos han terminado de cargar.
addEventListener("load", inicio, false);

//! Funcion para recoger los ids tanto de botones como de los input del formulario.
function inicio() {
    let addEdificio = document.getElementById("addEdificio");
    let addPropietario = document.getElementById("addPropietario");
    let calle = document.getElementById("calle");
    let numero = document.getElementById("numero");
    let cp = document.getElementById("cp");
    let npuertas = document.getElementById("npuertas");
    let nombre = document.getElementById("nombre");
    let planta = document.getElementById("planta");
    let nplantas = document.getElementById("nplantas");
    let nedificio = document.getElementById("nEdificio");
    let puerta = document.getElementById("puerta");
    let resultado = document.getElementById("resultado");
    let mostrar = document.getElementById("mostrar");
    let resultado2 = document.getElementById("resultado2");
    
    //? ARRAY DE EDIFICIOS INICIALIZADO A NULL.
    let arrayEdificios = [];

    //! Evento con una funcion que al clicar introduce edificios nuevos al array e incorpora las plantas y sus puertas en cada planta.
    //! Al final muestra el array de edificios en el TextArea, y sin plantas, puertas y propietarios en la tabla.
    addEdificio.addEventListener("click", function () {
        let ed = new Edificio(calle.value, numero.value, cp.value, crearArrayPlantas(nplantas.value), nplantas.value, npuertas.value);
        ed.addPlantasPuertas(parseInt(npuertas.value));
        arrayEdificios.push(ed);
        resultado.value = "";
        resultado.value += mostrarArrayTextArea(arrayEdificios);
        resultado2.value = "";
        resultado2.value += mostrarArrayTabla(arrayEdificios);
    }, false);
    
    //! Evento con una funcion que al clicar busca el edificio introducido y y mete el nombre dentro del arrayEdificios.
    //! Al final muestra el array de edificios cambiando el 0 por el nombre del campo propietario y lo actualiza en el TextArea.
    addPropietario.addEventListener("click", function () {
        arrayEdificios[nedificio.value - 1].addPropietario(nombre.value, planta.value, puerta.value);
        resultado.value = "";
        resultado.value += mostrarArrayTextArea(arrayEdificios);
    }, false);
}

//! Funcion para mostrar el Array de edificios en la Tabla.
function mostrarArrayTabla(array) {
    let texto = "<table id='tablaDatos' class='table table-striped table-dark'><tr><th>Nº FILA</th><th>1.EDIFICIO</th><th>2.CALLE</th><th>3.NUMERO</th><th>4.CODIGO POSTAL</th></tr>";
    var numeroedificios = 1;
    var numerofilas = 2;
    array.forEach(element => {
        texto += "<tr><td>"+numerofilas+"</td><td>"+numeroedificios+"</td><td>"+element.calle+"</td><td>"+element.numero+"</td><td>"+element.cp+"</td></tr>";
        numeroedificios++;
        numerofilas++;
    });
    texto += "</table>";
    document.getElementById("resultado2").innerHTML = texto;
}

//! Funcion para mostrar el Array de edificios en el TextArea.
function mostrarArrayTextArea(array) {
    let texto = "";
    for (const arrayElement of array) {
        texto += `${arrayElement.imprimirInfo()}\n${arrayElement.imprimePlantas()}\n`;
    }
    return texto;
}

//! Funcion para definir un array de Plantas.
function crearArrayPlantas(nPlantas) {
    let array = [nPlantas];
    for (let i = 0; i < nPlantas - 1; i++) {
        array.push(i);
    }
    return array;
}

//! Funcion para modificar (dinamicamente) la tabla de edificios ya creada 
function cambiarContenidoCelda() {
    let fila = parseInt(prompt("Introduce el numero de la fila:"));
    let columna = parseInt(prompt("Introduce el numero de la columna:"));
    //? Maximo 50 edificios, es decir 50 filas en la tabla.
    if ((fila >= 2 && fila <= 50) && (columna >=3 && columna <= 5)) {
        let celdas = document.getElementById("tablaDatos").rows[fila - 1].cells;
        celdas[columna - 1].innerHTML = prompt("Digite un nuevo valor para la celda: ");
    } else {
        window.alert("El numero de fila tiene que ser minimo 2. Los valores de las columnas van de 2 a 5.");
    }
}