function guardarNombre() {
    const nombre = document.getElementById("nombreUsuario").value;
    localStorage.setItem("nombre",nombre);
    alert(`Se guardo correctamente tu nombre: ${nombre}`);
  }

