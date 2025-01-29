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

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente antes de agregar nuevos elementos
    lista.innerHTML = "";

    // Recorrer el array y agregar cada nombre como un <li>
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}