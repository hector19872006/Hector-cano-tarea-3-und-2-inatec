$(document).ready(function() {
    alert("hello world!");

    // Opciones de configuración
    var options = {
        auto: true,
        Lm10Delay: 444444444444444000
    };

    // Inicializa el widget
    $("#ul1").responsive(options);
    console.log(options);
});
