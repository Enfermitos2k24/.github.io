// Mostrar u ocultar el formulario de registro al hacer clic en "Unirse"
document.getElementById('unirse-btn').addEventListener('click', function(event) {
    var formulario = document.getElementById('registro');
    
    // Si el formulario está visible, lo ocultamos, si no, lo mostramos
    if (formulario.style.display === 'block') {
        formulario.style.display = 'none';
    } else {
        formulario.style.display = 'block';
    }

    // Evitar que el clic en "Unirse" cierre el formulario inmediatamente
    event.stopPropagation();
});

// Función para cerrar el formulario de registro
function cerrarRegistro() {
    document.getElementById('registro').style.display = 'none';
}

// Detectar clics fuera del formulario para cerrarlo
document.addEventListener('click', function(event) {
    var formulario = document.getElementById('registro');
    var botonUnirse = document.getElementById('unirse-btn');

    // Si el clic fue fuera del formulario y del botón "Unirse", cerramos el formulario
    if (!formulario.contains(event.target) && event.target !== botonUnirse) {
        formulario.style.display = 'none';
    }
});
// Captura el formulario y evita que se recargue la página
document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita la recarga de la página

    // Recoge los datos del formulario
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Crea el objeto FormData para enviar los datos del formulario
    var formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    // Crea la solicitud AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "procesar_registro.php", true);  // Ruta del archivo PHP donde procesas el formulario

    // Establece qué hacer cuando se recibe la respuesta del servidor
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("mensaje").innerHTML = "Chevere " + xhr.responseText;
        } else {
            document.getElementById("mensaje").innerHTML = "Error (falta plata pal server)";
        }
    };

    // Envía los datos al servidor
    xhr.send(formData);
});
