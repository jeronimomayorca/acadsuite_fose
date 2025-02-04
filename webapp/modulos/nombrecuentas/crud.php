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
            // Validamos que todos los campos estén definidos.
            if (isset($_POST['idnombrecuenta'], $_POST['orden'], $_POST['nombrecuenta'], $_POST['tipocuenta'], $_POST['modalidad'], $_POST['idauxiliar'])) {
                $stmt = $conn->prepare("INSERT INTO nombrecuentas (idnombrecuenta, orden, nombrecuenta, tipocuenta, modalidad, idauxiliar) VALUES (?, ?, ?, ?, ?, ?)");
                $stmt->bind_param("iiissi", $_POST['idnombrecuenta'], $_POST['orden'], $_POST['nombrecuenta'], $_POST['tipocuenta'], $_POST['modalidad'], $_POST['idauxiliar']);
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
            // Se requiere el id y los nuevos valores (los demás campos)
            if (!empty($_POST['id']) && isset($_POST['orden'], $_POST['nombrecuenta'], $_POST['tipocuenta'], $_POST['modalidad'], $_POST['idauxiliar'])) {
                $stmt = $conn->prepare("UPDATE nombrecuentas SET orden = ?, nombrecuenta = ?, tipocuenta = ?, modalidad = ?, idauxiliar = ? WHERE idnombrecuenta = ?");
                $stmt->bind_param("isssii", $_POST['orden'], $_POST['nombrecuenta'], $_POST['tipocuenta'], $_POST['modalidad'], $_POST['idauxiliar'], $_POST['id']);
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
                $stmt = $conn->prepare("DELETE FROM nombrecuentas WHERE idnombrecuenta = ?");
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

$query  = "SELECT * FROM nombrecuentas";
$result = $conn->query($query);
