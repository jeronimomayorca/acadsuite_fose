<?php
session_start();
include("../../session.php"); // Ajusta la ruta según corresponda
$ano = $_SESSION['ano'];

// Conexión a la base de datos
$servername = "localhost";
$username   = "root";
$password   = "";
$database   = "acadsuite_fose_iexarasoft";

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die(json_encode([
        "status" => "error",
        "message" => "Conexión fallida: " . $conn->connect_error
    ]));
}

// Procesamos la petición según el método HTTP
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    $action = $_POST['action'] ?? '';

    if ($action === 'crear') {
        // Para crear, no se envía idtipodoc (se supone autogenerado)
        if (isset($_POST['tipodocid'])) {
            $stmt = $conn->prepare("INSERT INTO tipodocid (tipodocid) VALUES (?)");
            if (!$stmt) {
                echo json_encode(["status" => "error", "message" => "Prepare error: " . $conn->error]);
                exit();
            }
            // Cadena de tipos: tipodocid → s
            $stmt->bind_param("s", $_POST['tipodocid']);
            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Registro creado exitosamente"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Error al crear el registro: " . $stmt->error]);
            }
            $stmt->close();
        } else {
            echo json_encode(["status" => "error", "message" => "Faltan datos para crear el registro"]);
        }
        exit();
    } elseif ($action === 'editar') {
        // Para editar se requiere el id y el nuevo valor de tipodocid
        if (isset($_POST['id'], $_POST['tipodocid'])) {
            $stmt = $conn->prepare("UPDATE tipodocid SET tipodocid = ? WHERE idtipodoc = ?");
            if (!$stmt) {
                echo json_encode(["status" => "error", "message" => "Prepare error: " . $conn->error]);
                exit();
            }
            // Cadena de tipos: tipodocid → s, idtipodoc → i
            $stmt->bind_param("si", $_POST['tipodocid'], $_POST['id']);
            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Registro actualizado correctamente"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Error al actualizar el registro: " . $stmt->error]);
            }
            $stmt->close();
        } else {
            echo json_encode(["status" => "error", "message" => "No se recibieron todos los datos necesarios para la edición"]);
        }
        exit();
    } elseif ($action === 'eliminar') {
        if (!empty($_POST['id'])) {
            $stmt = $conn->prepare("DELETE FROM tipodocid WHERE idtipodoc = ?");
            if (!$stmt) {
                echo json_encode(["status" => "error", "message" => "Prepare error: " . $conn->error]);
                exit();
            }
            $stmt->bind_param("i", $_POST['id']);
            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Registro eliminado"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Error al eliminar el registro: " . $stmt->error]);
            }
            $stmt->close();
        } else {
            echo json_encode(["status" => "error", "message" => "No se recibió el ID"]);
        }
        exit();
    } else {
        echo json_encode(["status" => "error", "message" => "Acción inválida"]);
        exit();
    }
} else {
    // Para GET, obtenemos los registros para mostrarlos
    $query = "SELECT * FROM tipodocid";
    $result = $conn->query($query);
}
