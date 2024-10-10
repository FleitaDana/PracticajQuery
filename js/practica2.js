//---------------------------------------------------------

//Ejercicio 9 - AddClass y removeClass

let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("#boton1");
    x.click(agregarClase);
    x = $("#boton2");
    x.click(quitarClase);
}

function agregarClase() {
    let x = $("th");
    x.addClass("titulo");
    x = $("td");
    x.addClass("cuerpo");
}

function quitarClase() {
    let x = $("th");
    x.removeClass("titulo");
    x = $("td");
    x.removeClass("cuerpo");
}

//---------------------------------------------------------

//Ejercicio 10 - Método html() y html(valor)
function inicializarEventos() {
    let x = $("#bt1");
    x.click(presionBoton1);
    x = $("#bt2");
    x.click(presionBoton2);
}

function presionBoton1() {
    let x = $("head");
    alert(x.html());
}
function presionBoton2() {
    let x = $("body");
    alert(x.html());
}


//---------------------------------------------------------

//Ejercicio 11 - Administración de eventos con jQuery

function inicializarEventos() {
    let x = $("strong");
    x.click(ocultarPalabra);
}

function ocultarPalabra() {
    $(this).hide();
}


//---------------------------------------------------------

//Ejercicio 12 - Eventos mouseover y mouseout

function inicializarEventos() {
    let x = $("#ejercicio12 td");
    x.mouseover(entraMouse);
    x.mouseout(salirMouse);
}

function entraMouse() {
    $(this).css("background-color", "#ff0ff0"); //this captura que td recibio el evento
}

function salirMouse() {
    $(this).css("background-color", "#ff0ff0");
}


//---------------------------------------------------------

//Ejercicio 13 - Evento hover

function inicializarEventos() {
    let g = $("#ejercicio13 td");
    g.hover(sobrElemento, fueraElemento);
}

function sobrElemento() {
    $(this).css("background-color", "#0ff");
}

function fueraElemento() {
    $(this).css("background-color", "#fff");
}


//---------------------------------------------------------

//Ejercicio 14 - mousemove


//---------------------------------------------------------

//Ejercicio 15 - Eventos mousedown y mouseup

function inicializarEventos() {
    let x = $("#b1");
    x.mousedown(presionaMouse);
    x.mouseup(sueltaMouse);
    x = $("#b2");
    x.mousedown(presionaMouse);
    x.mouseup(sueltaMouse);
  }
  
  function presionaMouse() {
    $(this).css("background-color", "#ff0ff0");
  }
  
  function sueltaMouse() {
    $(this).css("background-color", "#D4D0C8");
  }