$(document).on("click", ".notificaciones-icon", function() {
    actualizar_fecha_notificaciones();
});

$(document).on("click", ".open-section", function() {
    if ($(this).hasClass("fa-chevron-down")) {
        $(this).removeClass("fa-chevron-down");
        $(this).addClass("fa-chevron-up");
    } else {
        $(this).removeClass("fa-chevron-up");
        $(this).addClass("fa-chevron-down");
    }
    $(".section-" + $(this).attr("data-section")).slideToggle();
});


function cambiar_clave() {
    var url = "./index.php/principal/cambio_clave";
    $.ajax({
        url: url,
        type: 'POST',
        data: $("#frmcambio").serialize(),
        success: function(data) {
            var data = JSON.parse(data);

            if (data.status) {
                user["clave"] = data.object.nueva;
                $("#contenedor").html('');
            }
            alert(data.message);

        },
        error: function() { alert("Error!"); }
    });

}

function ver_foro(id_foro) {
    var url = "./index.php/Foros/ver/" + id_foro;
    $.ajax({
        url: url,
        type: 'GET',
        success: function(data) {
            $("#listacon").html(data);
        },
        error: function() { alert("Error!"); }
    });
}

function actualizar_notificaciones() {
    obtener_notificaciones();
    obtener_lista_notificaciones();
}

function obtener_notificaciones() {
    $.ajax({
        url: "./index.php/Notificaciones/obtener_contador_notificaciones",
        type: 'GET',
        success: function(data) {
            var data = JSON.parse(data);
            if (data.status) {
                $('#contador-notificaciones').html(data.object);
            } else {
                $('#contador-notificaciones').html("0");
            }
        },
        error: function() { $('#contador-notificaciones').html("0"); }
    });
}

function actualizar_fecha_notificaciones() {
    $.ajax({
        url: "./index.php/Usuarios/actualizar_fecha_notificaciones",
        type: 'GET',
        success: function(data) {
            var data = JSON.parse(data);
            if (data.status) {
                $('#contador-notificaciones').html("0");
            }
        },
        error: function() {}
    });
}

function obtener_lista_notificaciones() {
    $.ajax({
        url: "./index.php/Notificaciones/obtener_lista_notificaciones",
        type: 'GET',
        success: function(data) {
            var data = JSON.parse(data);
            console.log(data);
            if (data.status) {
                $('#notificaciones-container').html(data.object);
            }
        },
        error: function() { $('#contador-notificaciones').html("0"); }
    });
}

function guardar_respuesta(foro) {
    var url = "./index.php/Foros/agregar_respuesta";
    $.ajax({
        url: url,
        type: 'POST',
        data: {
            mensaje: editorImageRespuesta.getContents(),
            id_foro: idForo,
            id_respuesta: idRespuestaForo,
            tipo: tipoRespuestaForo
        },
        success: function(data) {
            var data = JSON.parse(data);

            if (data.status) {
                $('#agregar-respuesta-foro').modal('hide');

                setTimeout(() => {
                    ver_foro(foro);
                }, 1000)

            }
            alert(data.message);
        },
        error: function() { alert("Error!"); }
    });
}

function guardar_foro() {
    let titulo = $("#nuevo-foro-titulo").val();
    let materia = $("#nuevo-foro-materia").val();
    let grupo = $("#nuevo-foro-grupo").val();

    if (titulo.trim() != "" && materia && grupo) {
        var url = "./index.php/Foros/agregar_foro";
        $.ajax({
            url: url,
            type: 'POST',
            data: {
                descripcion: editorImageForo.getContents(),
                titulo: titulo,
                materia: materia,
                grupo: grupo
            },
            success: function(data) {
                var data = JSON.parse(data);

                if (data.status) {
                    let titulo = $("#nuevo-foro-titulo").val("");
                    $('#agregar-nuevo-foro').modal('hide');

                    setTimeout(() => {
                        ver_foro(data.object.id_foro);
                    }, 1000)
                }

                alert(data.message);
            },
            error: function() { alert("Error!"); }
        });
    } else {
        alert("Por favor complete todos los campos requeridos!");
    }
}