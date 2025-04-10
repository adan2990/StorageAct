/** 
function welcomeNombre(){
    alert("Se ejecuto el JS welcome");
    let nombre = document.getElementById("nombre").value;
    let encabezado1 = document.getElementsByTagName("h1").item(0);
    let nombreAuxiliar= localStorage.getItem("nombre");
    //encabezado1.innerText = `Bienvenido de nuevo ${nombreAuxiliar}`;
    alert("Hola");


    let txtName = document.getElementById("nombre");
    alert(`Hola ${txtName}`);
}

btnEliminar.addEventListener("click", function(event){
    alert("Eliminando usuario, escuchar");
    //localStorage.removeItem("nombre");
    
});
*/


window.addEventListener("DOMContentLoaded", function () {
    let nombreGuardado = localStorage.getItem("nombre");

    // Si se encuentra un nombre guardado en el localStorage
    if (nombreGuardado) {
        let encabezado1 = document.getElementsByTagName("h1")[0];
        encabezado1.innerText = `Bienvenido de nuevo, ${nombreGuardado}`;
    } else {
        // Si no hay nombre guardado, muestra una alerta y redirige a la página de inicio
        let encabezado1 = document.getElementsByTagName("h1")[0];
        encabezado1.innerText = `No hay nombres registrados, ve a la pagina de inicio y registralo por favor`;
        // alert("No hay ningún nombre guardado. Redirigiendo...");
        // window.location.href = "./index.html";
    }

    // Funcion eliminar nombre guardado
    let btnEliminar = document.getElementById("btnEliminar");
    if (btnEliminar) {
        btnEliminar.addEventListener("click", function () {
            alert("Eliminando usuario...");
            localStorage.removeItem("nombre");  // Elimina el nombre guardado
            location.reload();  // Recarga la pagina
        });
    }
});



