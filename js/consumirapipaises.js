var respuestaPaisesAPI = 

function poblarDatosPaises() {

    var url = "https://restcountries.com/v3.1/independent?status=true"

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(paises => {

            /*crearListaPaises(paises);*/
            adicionarDatosTablaPaises(paises);
            agregarElementosSelect(paises);

        });

    function adicionarDatosTablaPaises(paises) {

        var tabla = document.getElementById("tablaPaises");

        for (const pais of paises) {

            var fila = tabla.insertRow(-1);
            var columnaNombre = fila.insertCell(0);
            var columnaCapitales = fila.insertCell(1);
            var columnaMoneda = fila.insertCell(2);
            var columnaBanderas = fila.insertCell(3);
            var columnaPoblacion = fila.insertCell(4);

            columnaNombre.innerHTML = pais.name.official;
            columnaCapitales.innerHTML = pais.capital[0];
            columnaMoneda.innerHTML = pais.currencies;
            columnaBanderas.innerHTML = pais.flags.png.svg;
            columnaPoblacion.innerHTML = pais.population;
        }
    }


    function crearListaPaises(paises) {

        var ul = crearNodo("ul");

        for (const pais of paises) {

            var li = crearNodoTexto("li");
            adicionarNodoContenedor(ul, li);

        }
        adicionarNodoBody(ul);

    }


}

function agregarElementosSelect(paises) {


    var selectPaises = document.getElementById("selectPaises")

    for (const pais of paises) {

        var option = crearNodoTexto('option', pais.name.official);
        adicionarNodoContenedor(selectPaises, option);

    }


}

function mostrarDatosPaisSeleccionado(paisBuscar) {

    var tabla = document.getElementById("tablaPaises");

    tabla.remove();

    for (const pais of paises) {

        if (paisBuscar == pais.name.common) {

            var fila = tabla.insertRow(-1);
            var columnaNombre = fila.insertCell(0);
            var columnaCapitales = fila.insertCell(1);
            var columnaMoneda = fila.insertCell(2);
            var columnaBanderas = fila.insertCell(3);
            var columnaPoblacion = fila.insertCell(4);

            columnaNombre.innerHTML = pais.name.official;
            columnaCapitales.innerHTML = pais.capital[0];
            columnaMoneda.innerHTML = pais.currencies;
            columnaBanderas.innerHTML = pais.flags.png.svg;
            columnaPoblacion.innerHTML = pais.population;

        }

    }



}