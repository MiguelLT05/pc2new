const $usuario = $("#usuario");
const $password = $("#password");

/* CREDENCIALES VERDADERAS */
const credencialesProfe = {
    usuario: "Profesor123",
    pass: "DesarrolloWeb123"
};
const credencialesAlumno = {
    usuario: "Alumno123",
    pass: "PracticaCalificada2"
};

$("#login").on("click", function(){
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    if (valueUsuario == credencialesProfe.usuario) {
        if (valuePassword == credencialesProfe.pass) {
            location.href = "dashboard_profe.html";
        } else {
            Swal.fire({
                title: "ERROR",
                text: "Contraseña incorrecta",
                icon: "error"
            });
        }
    } else {
        Swal.fire({
            title: "ERROR",
            text: "Usuario no encontrado",
            icon: "error"
        });
    }
});
$("#login").on("click", function(){
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    if (valueUsuario == credencialesAlumno.usuario) {
        if (valuePassword == credencialesAlumno.pass) {
            location.href = "dashboard_alumno.html";
        } else {
            Swal.fire({
                title: "ERROR",
                text: "Contraseña incorrecta",
                icon: "error"
            });
        }
    } else {
        Swal.fire({
            title: "ERROR",
            text: "Usuario no encontrado",
            icon: "error"
        });
    }
});
