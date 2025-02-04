<?php
session_start();
include("../session.php");
$ano = $_SESSION['ano'];

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$database = "acadsuite_fose_iexarasoft";

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
            if (!empty($_POST['cargo'])) {
                $stmt = $conn->prepare("INSERT INTO cargos (cargo) VALUES (?)");
                $stmt->bind_param("s", $_POST['cargo']);
                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Registro creado exitosamente"]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Error al crear el registro"]);
                }
                $stmt->close();
                exit;
            }
            break;

        case 'editar':
            if (!empty($_POST['id']) && !empty($_POST['cargo'])) {
                $stmt = $conn->prepare("UPDATE cargos SET cargo = ? WHERE idcargo = ?");
                $stmt->bind_param("si", $_POST['cargo'], $_POST['id']);
                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Registro actualizado correctamente"]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Error al actualizar el registro"]);
                }
                $stmt->close();
                exit;
            }
            break;

        case 'eliminar':
            if (!empty($_POST['id'])) {
                $stmt = $conn->prepare("DELETE FROM cargos WHERE idcargo = ?");
                $stmt->bind_param("i", $_POST['id']);
                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Registro eliminado"]);
                } else {
                    echo json_encode(["status" => "error", "message" => "Error al eliminar el registro"]);
                }
                $stmt->close();
                exit;
            }
            break;
    }
    echo json_encode(["status" => "error", "message" => "Acción inválida"]);
    exit;
}

$query = "SELECT * FROM cargos";
$result = $conn->query($query);
