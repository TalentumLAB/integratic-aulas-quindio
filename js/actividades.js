$(document).on("click", ".crear-respuesta-boton", function() {
    let actividad = $(this).attr("data-actividad");
    $("#respuesta-actividad-id").val(actividad);
});

$(document).on("click", ".cargar-respuestas-boton", function() {
    let actividad = $(this).attr("data-actividad");
    $(".items-repsuestas-estudiante").html("<tr><td colspan='7'><div class='loader'></td></div></tr>");
    obtener_actividad_respuestas(actividad);
});

$(document).on("click", ".btn-guardar-calificar", function() {
    let respuesta = $(this).attr("data-id");
    let calificacion = $("#calificacion-respuesta-" + respuesta).val();
    calificar_respuesta(respuesta, calificacion);
});

$(document).on("click", ".btn-calificar", function() {
    let respuesta = $(this).attr("data-id");
    $("#calificacion-respuesta-" + respuesta).removeClass("no-calificar");
    $("#calificacion-respuesta-" + respuesta).prop("readonly", false);
    $(this).hide();
    $("#btn-guardar-calificacion-" + respuesta).show();
});

function guardar_actividad() {
    if ($("#nueva-actividad-titulo").val().trim() != "" && $("#nueva-actividad-descripcion").val().trim() != "" && $("#nueva-actividad-date").val().trim() != "" && $("#nueva-actividad-time").val().trim() != "") {
        var formData = new FormData();
        formData.append("titulo", $("#nueva-actividad-titulo").val());
        formData.append("descripcion", $("#nueva-actividad-descripcion").val());
        formData.append("date", $("#nueva-actividad-date").val());
        formData.append("time", $("#nueva-actividad-time").val());
        formData.append("userfile", $('#nueva-actividad-file')[0].files[0]);

        $.ajax({
            url: 'index.php/Actividades/guardar',
            data: formData,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function(data) {
                console.log(data);
                var response = JSON.parse(data);

                if (response.status) {
                    $('#actividad-form').trigger("reset");
                    $("#agregar-nueva-actividad").modal("hide");
                }

                alert(response.message);
            }
        });
    } else {
        alert("Por favor complete todos los campos requeridos");
    }
}

function guardar_actividad_respuesta() {
    if ($("#respuesta-actividad-id").val().trim() != "" && $("#respuesta-actividad-id").val() != null) {
        var formData = new FormData();
        formData.append("id_actividad", $("#respuesta-actividad-id").val());
        formData.append("notas", $("#respuesta-actividad-notas").val());
        formData.append("userfile", $('#respuesta-actividad-file')[0].files[0]);

        $.ajax({
            url: 'index.php/Actividades/guardar_respuesta',
            data: formData,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function(data) {
                var response = JSON.parse(data);

                if (response.status) {
                    $('#respuesta-actividad-form').trigger("reset");
                    $("#agregar-respuesta-actividad").modal("hide");
                }

                alert(response.message);
            }
        });
    } else {
        alert("Por favor complete todos los campos requeridos");
    }
}

function obtener_actividad_respuestas(actividad) {
    $.ajax({
        url: 'index.php/Actividades/actividades_respuestas',
        data: { id_actividad: actividad },
        type: 'POST',
        success: function(data) {
            var response = JSON.parse(data);
            $(".items-repsuestas-estudiante").html(response.object);
        }
    });
}

function calificar_respuesta(respuesta = null, calificacion = null) {
    if (respuesta != null && calificacion != null) {
        $.ajax({
            url: 'index.php/Actividades/calificar_respuesta',
            data: {
                id: respuesta,
                calificacion: calificacion
            },
            type: 'POST',
            success: function(data) {
                var response = JSON.parse(data);
                if (response.status) {
                    $("#calificacion-respuesta-" + respuesta).addClass("no-calificar");
                    $("#calificacion-respuesta-" + respuesta).prop("readonly", true);
                    $("#btn-modificar-calificacion-" + respuesta).show();
                    $("#btn-guardar-calificacion-" + respuesta).hide();
                }

                alert(response.message);
            }
        });
    }
}