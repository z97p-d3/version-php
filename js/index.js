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


playVideoOnScroll();
inicializarSlider();
$(document).ready(function() {


    $("#mostrarTodos").click(function() {

        $.getJSON("data-1.json", function(result) {
            $.each(result, function(c, v) {
                $(".lista").append(

                    "<div class='row z-depth-3'>" +

                    "<div class='card'>" +
                    "<div class='card-image waves-effect waves-block waves-light col s12 m6 l4'>" +
                    "<img class='activator' src='img/home.jpg'>" +
                    "</div>" +
                    "<div class='card-stacked col s12 m6 l8'>" +
                    "<div class='card-content'>" +
                    "<div>" +
                    "<b> Direccion: </b>" +
                    v.Direccion + " </div> " +
                    "<div>" +
                    "<b> Ciudad: </b>" +
                    v.Ciudad + "</div>" +
                    "<div>" +
                    "<b> Telefono: </b>" +
                    v.Telefono + "</div>" +
                    "<div>" +
                    "<b> Código postal: </b>" +
                    v.Codigo_Postal +
                    "</div> " +
                    "<div>" +
                    "<b>" + "Precio: </b>" +
                    v.Precio +
                    "</div>" +
                    " <div>" +
                    "<b> Tipo: </b>" +
                    v.Tipo + "</div> " +

                    "<div class='card-action'>" +
                    "<a href='#'>Leer mas</a>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "</div>" +

                    "</div>"


                )

            })
        });
    });






});

/*function cargarDatos() {
    var data = $(this).serializeArray();
    data.push({ name: 'tag', value: 'login' })

    $.ajax({

            url: 'modulo.php',
            type: 'post',
            dataType: 'json',
            data: data,
            beforeSend: function() {
                $('#fas').css({ 'display': 'inline' });
            }
        })
        .done(function() {
            $('span').html("correcto");
        }).fail(function() {
            $('span').html("falso")
        }).always(function() {
            $('#fas').hide();

        })*/


/*function sendrequest() {
        var obj = new XMLHttpRequest();
        obj.open('POST', 'modulo.php', true);
        obj.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencode');
        obj.onreadystatechange = function() {
            document.getElementById('titulo').innerHTML = obj.responseText;
        }
        obj.send();





}*/

function enviarDatos() {

    var obtenerdatos = $.getJSON("data-1.json")
    $.ajax({

            url: 'data-1.json',
            type: 'post',
            dataType: 'json',
            data: obtenerdatos,
            beforeSend: function() {

            }
        })
        .done(function(datos, textStatus, jqXHR) {
            console.log("transmision recibida con exito")

        }).fail(function() {

        }).always(function() {

        })
}



/*$("#selectTipo").show();
$("#selectTipo1").show();
$(".filtroCiudad").show();
$(".filtrosContenido").show();*/

$('select').formSelect();