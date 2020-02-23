/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
    $(this).scroll(function() {
        var $this = $(this);
        if ($this.data('scrollTimeout')) {
            clearTimeout($this.data('scrollTimeout'));
        }
        $this.data('scrollTimeout', setTimeout(callback, timeout));
    });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider() {
    $("#rangoPrecio").ionRangeSlider({
        type: "double",
        grid: false,
        min: 0,
        max: 100000,
        from: 200,
        to: 80000,
        prefix: "$"
    });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll() {
    var ultimoScroll = 0,
        intervalRewind;
    var video = document.getElementById('vidFondo');
    $(window)
        .scroll((event) => {
            var scrollActual = $(window).scrollTop();
            if (scrollActual > ultimoScroll) {
                video.play();
            } else {
                //this.rewind(1.0, video, intervalRewind);
                video.play();
            }
            ultimoScroll = scrollActual;
        })
        .scrollEnd(() => {
            video.pause();
        }, 10)
}



$(document).ready(function() {
    init();
    inicializarSlider();



    $("#mostrarTodos").click(function() {

        $.getJSON("data-1.json", function(result) {
            showResult(result)
        });
    });

    function showResult(array) {

        for (let i = 0; i < array.length; i++) {
            $(".lista").append(

                "<div class='row z-depth-2'>" +

                "<div class='card'>" +
                "<div class='card-image waves-effect waves-block waves-light col s12 m6 l4'>" +
                "<img class='activator' src='img/home.jpg'>" +
                "</div>" +
                "<div class='card-stacked col s12 m6 l8' irs-min>" +
                "<div class='card-content'>" +
                "<div>" +
                "<b> Direccion: </b>" +
                `${array[i].Direccion} ` + " </div> " +
                "<div>" +
                "<b> Ciudad: </b>" +
                `${array[i].Ciudad} ` + "</div>" +
                "<div>" +
                "<b> Telefono: </b>" +
                `${array[i].Telefono} ` + "</div>" +
                "<div>" +
                "<b> Código postal: </b>" +
                `${array[i].Codigo_Postal} ` +
                "</div> " +
                "<div>" +
                "<b>" + "Precio: </b>" +
                "<b class='precioTexto'>" + `${array[i].Precio} ` + "</b>" +
                "</div>" +
                " <div>" +
                "<b> Tipo: </b>" +
                `${array[i].Tipo} ` + "</div> " +
                "</div>" +

                "<div class='card-action'>" +
                "<a href='#'>Leer mas</a>" +
                "</div>" +
                "</div>" +

                "</div>" +
                "</div>" +

                "</div>"



            )
        }

    }







});

function init() {
    var tipos = [];
    var ciudades = [];
    $.get('data-1.json', function(data) {
        for (let i = 0; i < data.length; i++) {
            if (tipos.indexOf(data[i].Tipo) === -1) tipos.push(data[i].Tipo);
            if (ciudades.indexOf(data[i].Ciudad) === -1) ciudades.push(data[i].Ciudad);
        }
        for (let i = 0; i < ciudades.length; i++) {
            $('#selectCiudad').append('<option value="' + ciudades[i] + '">' + ciudades[i] + '</option>');
        }
        for (let j = 0; j < tipos.length; j++) {
            $('#selectTipo').append('<option value="' + tipos[j] + '">' + tipos[j] + '</option>');
        }

        $('select').formSelect();
    });
}

//funcion para busqueda
$('#submitButton').click(function() {
    let ciudad = $('#selectCiudad option:selected').val();
    let tipo = $('#selectTipo option:selected').val();
    let precio = $('#rangoPrecio').val();


    //Simular llamada a base de datos en buscador.php con AJAX y metodo GET. No se tienen datos sensibles
    $.post('crear_datos.php', { ciudad: ciudad, tipo: tipo, precio: precio }, function(response) {
        let data = JSON.parse(response);
        var r = data.data;
        showResult(r);
    });
});