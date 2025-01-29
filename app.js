// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputNombre = document.getElementById("amigo"); // Corrigiendo el ID
    let nombre = inputNombre.value.trim(); // Eliminar espacios innecesarios

    // Validar la entrada: asegurarse de que el campo no esté vacío
    if (nombre === "") {
        alert("⚠️ Por favor, ingrese el nombre secreto.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Actualizar la lista en pantalla
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    inputNombre.value = "";
}

