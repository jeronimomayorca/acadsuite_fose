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
            // Validamos que los campos de texto no estén vacíos y los numéricos estén definidos (pueden ser 0)
            if (!empty($_POST['numerocuenta']) && !empty($_POST['tipocuenta']) && isset($_POST['idnombrecuenta']) && isset($_POST['transferencia']) && isset($_POST['idie']) && isset($_POST['usuario'])) {
                $stmt = $conn->prepare("INSERT INTO cuentasbanco (numerocuenta, tipocuenta, idnombrecuenta, transferencia, idie, usuario) VALUES (?, ?, ?, ?, ?, ?)");
                $stmt->bind_param("ssiiii", $_POST['numerocuenta'], $_POST['tipocuenta'], $_POST['idnombrecuenta'], $_POST['transferencia'], $_POST['idie'], $_POST['usuario']);
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
            if (!empty($_POST['id']) && !empty($_POST['numerocuenta']) && !empty($_POST['tipocuenta']) && isset($_POST['idnombrecuenta']) && isset($_POST['transferencia']) && isset($_POST['idie']) && isset($_POST['usuario'])) {
                $stmt = $conn->prepare("UPDATE cuentasbanco SET numerocuenta = ?, tipocuenta = ?, idnombrecuenta = ?, transferencia = ?, idie = ?, usuario = ? WHERE idcuenta = ?");
                $stmt->bind_param("ssiiiii", $_POST['numerocuenta'], $_POST['tipocuenta'], $_POST['idnombrecuenta'], $_POST['transferencia'], $_POST['idie'], $_POST['usuario'], $_POST['id']);
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
                $stmt = $conn->prepare("DELETE FROM cuentasbanco WHERE idcuenta = ?");
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

$query  = "SELECT * FROM cuentasbanco";
$result = $conn->query($query);
