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

// Manejo de peticiones CRUD
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    $action = $_POST['action'] ?? '';

    switch ($action) {
        case 'crear':
            // Validamos que se hayan enviado todos los campos
            if (!empty($_POST['idmes']) && !empty($_POST['mesnum']) && !empty($_POST['mesletras'])) {
                $stmt = $conn->prepare("INSERT INTO meses (idmes, mesnum, mesletras) VALUES (?, ?, ?)");
                $stmt->bind_param("iss", $_POST['idmes'], $_POST['mesnum'], $_POST['mesletras']);
                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Registro creado exitosamente"]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Error al crear el registro: " . $stmt->error]);
                }
                $stmt->close();
                exit;
            }
            break;

        case 'editar':
            // Se requiere el id (idmes) y los nuevos valores
            if (!empty($_POST['id']) && !empty($_POST['mesnum']) && !empty($_POST['mesletras'])) {
                $stmt = $conn->prepare("UPDATE meses SET mesnum = ?, mesletras = ? WHERE idmes = ?");
                $stmt->bind_param("ssi", $_POST['mesnum'], $_POST['mesletras'], $_POST['id']);
                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Registro actualizado correctamente"]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Error al actualizar el registro: " . $stmt->error]);
                }
                $stmt->close();
                exit;
            }
            break;

        case 'eliminar':
            if (!empty($_POST['id'])) {
                $stmt = $conn->prepare("DELETE FROM meses WHERE idmes = ?");
                $stmt->bind_param("i", $_POST['id']);
                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Registro eliminado"]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Error al eliminar el registro: " . $stmt->error]);
                }
                $stmt->close();
                exit;
            }
            break;
    }
    echo json_encode(["status" => "error", "message" => "Acción inválida"]);
    exit;
}

$query  = "SELECT * FROM meses";
$result = $conn->query($query);
