// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim();

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("⚠️ Ingrese el nombre del amigo secreto.");
        return;
    }

    // Expresión regular: Permite solo letras, espacios, tildes y guiones, sin números
    const regexNombre = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s'-]+$/;
    if (!regexNombre.test(nombre)) {
        alert("⚠️ El nombre no debe contener números ni caracteres inválidos.");
        return;
    }

    // Validar que el nombre no esté repetido (sin importar mayúsculas/minúsculas)
    if (amigos.some(amigo => amigo.toLowerCase() === nombre.toLowerCase())) {
        alert("⚠️ Este nombre ya ha sido ingresado.");
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    inputNombre.value = "";
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");

  //  if (!lista) {
  //      console.error("❌ Error: No se encontró el elemento con ID 'listaAmigos'");
  //      return;
  //  }

    lista.innerHTML = "";
    
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("⚠️ No hay nombres en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];
    
    // Mostrar el resultado en la interfaz
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    let li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSecreto}`;
    resultadoLista.appendChild(li);
}
// Función para capitalizar cada palabra correctamente
function formatearTexto(input) {
    input.value = input.value
        .toLowerCase()
        .split(" ") // Dividir por espacios
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)) // Capitalizar cada palabra
        .join(" "); // Volver a unir
}