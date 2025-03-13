// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim();

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        mostrarAlerta("Error", "⚠️ Ingrese el nombre del amigo secreto.");
        return;
    }

    

    // Validar que el nombre no sea demasiado largo (máximo 100 caracteres)
    const MAX_LONGITUD = 100;
    if (nombre.length > MAX_LONGITUD) {
        mostrarAlerta("Error", `⚠️ El nombre no debe exceder los ${MAX_LONGITUD} caracteres.`);
        return;
    }

    // Expresión regular: Permite solo letras, espacios, tildes y guiones, sin números
    const regexNombre = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s'-]+$/;
    if (!regexNombre.test(nombre)) {
        mostrarAlerta("Error", "⚠️ El nombre no debe contener números ni caracteres inválidos.");
        return;
    }

    // Validar que el nombre no esté repetido (sin importar mayúsculas/minúsculas)
    if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        mostrarAlerta("Error", "⚠️ Este nombre ya ha sido ingresado.");
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    inputNombre.value = "";
}

// Función para actualizar la lista de amigos en la interfaz con botones de eliminar
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Borra el contenido previo

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;

        // Botón de eliminar
        let botonEliminar = document.createElement("button");
        botonEliminar.innerHTML = "&times;"; // Usar el símbolo × en lugar de ❌
        botonEliminar.classList.add("boton-eliminar");
        botonEliminar.onclick = function () {
            eliminarAmigo(amigo);
        };

        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto y activar el botón de reinicio
function sortearAmigo() {
    if (amigos.length < 3) {
        alert("⚠️ Debe haber al menos tres participantes en la lista para realizar el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    let li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSecreto}`;
    resultadoLista.appendChild(li);

    // Habilitar el botón de reinicio solo después de realizar el sorteo
    document.getElementById("btnReiniciar").disabled = false;
}

// Función para reiniciar la lista de amigos y desactivar el botón de reinicio
function reiniciarLista() {
    amigos = []; // Vaciar la lista de amigos
    document.getElementById("listaAmigos").innerHTML = ""; // Limpiar la interfaz
    document.getElementById("resultado").innerHTML = ""; // Limpiar resultado
    document.getElementById("btnReiniciar").disabled = true; // Desactivar botón
}

// Función para capitalizar cada palabra correctamente
function formatearTexto(input) {
    input.value = input.value
        .toLowerCase()
        .split(" ") // Dividir por espacios
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)) // Capitalizar cada palabra
        .join(" "); // Volver a unir
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(nombre) {
    // Filtra la lista de amigos, eliminando el que coincida con el nombre dado
    amigos = amigos.filter(amigo => amigo !== nombre);
    
    // Actualiza la lista en la interfaz
    actualizarListaAmigos();
}

// Asegurarse de que el botón "Reiniciar" esté deshabilitado al cargar la página
window.onload = function () {
    document.getElementById("btnReiniciar").disabled = true;
};

// Función para mostrar la alerta personalizada
function mostrarAlerta(titulo, mensaje) {
    const customAlert = document.getElementById("customAlert");
    const customAlertTitle = document.getElementById("customAlertTitle");
    const customAlertMessage = document.getElementById("customAlertMessage");

    // Asignar el título y el mensaje
    customAlertTitle.textContent = titulo;
    customAlertMessage.textContent = mensaje;

    // Mostrar la alerta
    customAlert.style.display = "flex";
}

// Función para cerrar la alerta personalizada
function cerrarAlerta() {
    const customAlert = document.getElementById("customAlert");
    customAlert.style.display = "none";
}

// Asignar el evento de clic al botón de cerrar
document.getElementById("customAlertClose").addEventListener("click", cerrarAlerta);