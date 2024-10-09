//Ejercicio 2
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
    let x = $("#boton1");
    x.click(presionBoton)

    let p_ = $("#parrafo_uno");
    p_.click(obtener_parrafo)
}

function presionBoton() {
    alert("Se presionó el botón");
}

function obtener_parrafo() {
    alert("click en parráfo uno");
}


//---------------------------------------------------------

//Ejercicio 3
function inicializarEventos() {
    let x = $("#fila1");
    x.click(presionFila1)
    x = $("#fila2");
    x.click(presionFila2)
}

function presionFila1() {
    let x = $("#fila1");
    x.css("background-color", "#0f0fff");
}

function presionFila2() {
    let x = $("#fila2");
    x.css("background-color", "#ff00f0");
}


//---------------------------------------------------------


function inicializarEventos() {
    let x = $("tr");  //selector por tag
    x.click(presionFila);
}

function presionFila() {
    let x = $(this); //captura QUE elemento mando el evento, en este caso el click y lo pinta
    x.css("background-color", "#0f0fff");
}


//---------------------------------------------------------

//Ejercicio 4

function inicializarEventos() {
    let x = $("li");  //selector por tag
    x.click(ocultarElemento);
}

function ocultarElemento() {
    let x = $(this); //captura QUE elemento mando el evento, en este caso el click y lo pinta
    x.hide;
}


//---------------------------------------------------------

//Ejercicio 5
function inicializarEventos() {
    let x = $("#lista1 li");  //selector por tag
    x.click(cambiarColorFila);
}

function cambiarColorFila() {
    let x = $(this); //captura QUE elemento mando el evento, en este caso el click y lo pinta
    x.css("background-color", "#0f0fff");
}


//---------------------------------------------------------

//Ejercicio 6

function inicializarEventos() {
    let x = $("#bt1");
    x.click(tamanioFuente1);
    x = $("#bt2");
    x.click(tamanioFuente2);
    x = $("#bt3");
    x.click(tamanioFuente3);

    function tamanioFuente1() {
        let x = $(".tamanioFuente1");
        x.css("font-size", "2rem");
    }

    function tamanioFuente2() {
        let x = $(".tamanioFuente2");
        x.css("font-size", "2rem");
    }

    function tamanioFuente3() {
        let x = $(".tamanioFuente3");
        x.css("font-size", "2rem");
    }

}


//---------------------------------------------------------

//Ejercicio 7

function inicializarEventos() {
    let x = $("#botonuno"); 
    x.click(modificarDatosTabla);
}

function modificarDatosTabla() {
    let x = $("#table1 td");
    x.text("texto nuevo");
  }


//---------------------------------------------------------

//Ejercicio 8

function inicializarEventos() {
    let x = $("#btt1");
    x.click(hipervinculoGoogle);
    x = $("#btt2");
    x.click(hipervinculoYahoo);
    x = $("#btt3");
    x.click(hipervinculoMsn);
  }
  
  function hipervinculoGoogle() {
    let x = $("a");
    x.attr("href", "http://www.google.com");
    x.text("Google");
  }
  
  function hipervinculoYahoo() {
    let x = $("a");
    x.attr("href", "http://www.yahoo.com");
    x.text("Yahoo");
  }
  
  function hipervinculoMsn() {
    let x = $("a");
    x.attr("href", "http://www.msn.com");
    x.text("Msn");
  }

  
