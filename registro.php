<?php
// Verifica si se recibieron los datos por POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Asegúrate de validar y sanitizar los datos antes de usarlos
    // Conectar a la base de datos (asegúrate de modificar estos datos según tu configuración)
    $servername = "localhost";
    $username_db = "usuario_db";
    $password_db = "contraseña_db";
    $dbname = "mi_base_de_datos";

    $conn = new mysqli($servername, $username_db, $password_db, $dbname);

    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Inserta los datos en la base de datos
    $sql = "INSERT INTO usuarios (username, email, password) VALUES ('$username', '$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "¡Registro exitoso!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
