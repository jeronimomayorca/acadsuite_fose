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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    $action = $_POST['action'] ?? '';

    if ($action === 'crear') {
        if (isset($_POST['idsubfuente'], $_POST['idfuente'], $_POST['subfuente'], $_POST['distribucionniv'])) {
            $stmt = $conn->prepare("INSERT INTO subfuentes (idsubfuente, idfuente, subfuente, distribucionniv) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("iisi", $_POST['idsubfuente'], $_POST['idfuente'], $_POST['subfuente'], $_POST['distribucionniv']);
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
        // Se requiere el campo "id" (corresponde a idsubfuente) y los demás campos
        if (isset($_POST['id'], $_POST['idfuente'], $_POST['subfuente'], $_POST['distribucionniv'])) {
            $stmt = $conn->prepare("UPDATE subfuentes SET idfuente = ?, subfuente = ?, distribucionniv = ? WHERE idsubfuente = ?");
            $stmt->bind_param("isii", $_POST['idfuente'], $_POST['subfuente'], $_POST['distribucionniv'], $_POST['id']);
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
            $stmt = $conn->prepare("DELETE FROM subfuentes WHERE idsubfuente = ?");
            $stmt->bind_param("i", $_POST['id']);
            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Registro eliminado"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Error al eliminar el registro: " . $stmt->error]);
            }
            $stmt->close();
        }
        exit();
    } else {
        echo json_encode(["status" => "error", "message" => "Acción inválida"]);
        exit();
    }
} else {
    // Si no es POST, procesamos la consulta para mostrar la página (GET)
    $query  = "SELECT * FROM subfuentes";
    $result = $conn->query($query);
}
