<?php
session_start();
include("../session.php");
$ano = $_SESSION['ano'];

// Conexión a la base de datos
$servername = "localhost";
$username   = "root";
$password   = "";
$database   = "acadsuite_fose_iexarasoft";

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Conexión fallida: " . $conn->connect_error]));
}

// Si es una petición POST, procesamos el CRUD y salimos
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    $action = $_POST['action'] ?? '';

    switch ($action) {
        case 'crear':
            if (isset($_POST['idrubro'], $_POST['codrubro'], $_POST['nomrubro'], $_POST['modalidad'], $_POST['idcapitulo'], $_POST['subcapitulo'], $_POST['oculto'], $_POST['codsifseg'])) {
                $stmt = $conn->prepare("INSERT INTO rubroseg (idrubro, codrubro, nomrubro, modalidad, idcapitulo, subcapitulo, oculto, codsifseg) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
                $stmt->bind_param("isssiiii", $_POST['idrubro'], $_POST['codrubro'], $_POST['nomrubro'], $_POST['modalidad'], $_POST['idcapitulo'], $_POST['subcapitulo'], $_POST['oculto'], $_POST['codsifseg']);
                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Registro creado exitosamente"]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Error al crear el registro: " . $stmt->error]);
                }
                $stmt->close();
            }
            break;

        case 'editar':
            if (isset($_POST['id'], $_POST['codrubro'], $_POST['nomrubro'], $_POST['modalidad'], $_POST['idcapitulo'], $_POST['subcapitulo'], $_POST['oculto'], $_POST['codsifseg'])) {
                $stmt = $conn->prepare("UPDATE rubroseg SET codrubro = ?, nomrubro = ?, modalidad = ?, idcapitulo = ?, subcapitulo = ?, oculto = ?, codsifseg = ? WHERE idrubro = ?");
                $stmt->bind_param("ssiiiiii", $_POST['codrubro'], $_POST['nomrubro'], $_POST['modalidad'], $_POST['idcapitulo'], $_POST['subcapitulo'], $_POST['oculto'], $_POST['codsifseg'], $_POST['id']);
                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Registro actualizado correctamente"]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Error al actualizar el registro: " . $stmt->error]);
                }
                $stmt->close();
            } else {
                echo json_encode(["status" => "error", "message" => "No se recibieron todos los datos necesarios para la edición"]);
            }
            break;

        case 'eliminar':
            if (!empty($_POST['id'])) {
                $stmt = $conn->prepare("DELETE FROM rubroseg WHERE idrubro = ?");
                $stmt->bind_param("i", $_POST['id']);
                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Registro eliminado"]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Error al eliminar el registro: " . $stmt->error]);
                }
                $stmt->close();
            }
            break;
    }
    echo json_encode(["status" => "error", "message" => "Acción inválida"]);
    exit;
} else {
    // Si no es POST, es GET: aquí se ejecuta el código para mostrar la página
    $query  = "SELECT * FROM rubroseg";
    $result = $conn->query($query);
}
