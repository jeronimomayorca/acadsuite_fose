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
        // Si idtipocont es autoincremental, no se envía en el formulario de creación.
        if (isset($_POST['tipocontribuyente'], $_POST['iva'])) {
            $stmt = $conn->prepare("INSERT INTO tipocontribuyente (tipocontribuyente, iva) VALUES (?, ?)");
            if (!$stmt) {
                echo json_encode(["status" => "error", "message" => "Prepare error: " . $conn->error]);
                exit();
            }
            // Cadena de tipos: tipocontribuyente → s, iva → i
            $stmt->bind_param("si", $_POST['tipocontribuyente'], $_POST['iva']);
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
        // Para editar se requiere el ID y los demás campos.
        if (isset($_POST['id'], $_POST['tipocontribuyente'], $_POST['iva'])) {
            $stmt = $conn->prepare("UPDATE tipocontribuyente SET tipocontribuyente = ?, iva = ? WHERE idtipocont = ?");
            if (!$stmt) {
                echo json_encode(["status" => "error", "message" => "Prepare error: " . $conn->error]);
                exit();
            }
            // Cadena de tipos: s (tipocontribuyente), i (iva), i (idtipocont)
            $stmt->bind_param("sii", $_POST['tipocontribuyente'], $_POST['iva'], $_POST['id']);
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
            $stmt = $conn->prepare("DELETE FROM tipocontribuyente WHERE idtipocont = ?");
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
    // Si no es POST, asumimos GET y procesamos la consulta para mostrar la página.
    $query = "SELECT * FROM tipocontribuyente";
    $result = $conn->query($query);
}
