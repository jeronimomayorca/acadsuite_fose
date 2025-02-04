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
            if (
                !empty($_POST['codigo']) &&
                !empty($_POST['auxiliar']) &&
                !empty($_POST['naturaleza']) &&
                isset($_POST['idsubcuenta']) &&
                isset($_POST['nivel']) &&
                !empty($_POST['naturalezacuenta'])
            ) {
                $stmt = $conn->prepare("INSERT INTO cgc_auxiliares (codigo, auxiliar, naturaleza, idsubcuenta, nivel, naturalezacuenta) VALUES (?, ?, ?, ?, ?, ?)");
                $stmt->bind_param("sssiss", $_POST['codigo'], $_POST['auxiliar'], $_POST['naturaleza'], $_POST['idsubcuenta'], $_POST['nivel'], $_POST['naturalezacuenta']);
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
            if (
                !empty($_POST['id']) &&
                !empty($_POST['codigo']) &&
                !empty($_POST['auxiliar']) &&
                !empty($_POST['naturaleza']) &&
                isset($_POST['idsubcuenta']) &&
                isset($_POST['nivel']) &&
                !empty($_POST['naturalezacuenta'])
            ) {
                $stmt = $conn->prepare("UPDATE cgc_auxiliares SET codigo = ?, auxiliar = ?, naturaleza = ?, idsubcuenta = ?, nivel = ?, naturalezacuenta = ? WHERE idauxiliar = ?");
                $stmt->bind_param("sssissi", $_POST['codigo'], $_POST['auxiliar'], $_POST['naturaleza'], $_POST['idsubcuenta'], $_POST['nivel'], $_POST['naturalezacuenta'], $_POST['id']);
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
                $stmt = $conn->prepare("DELETE FROM cgc_auxiliares WHERE idauxiliar = ?");
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

$query = "SELECT * FROM cgc_auxiliares";
$result = $conn->query($query);
