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
            if (!empty($_POST['codigo']) && !empty($_POST['cuenta']) && isset($_POST['idgrupo']) && isset($_POST['nivel']) && isset($_POST['naturalezacuenta'])) {
                $stmt = $conn->prepare("INSERT INTO cgc_cuentas (codigo, cuenta, idgrupo, nivel, naturalezacuenta) VALUES (?, ?, ?, ?, ?)");
                // Bind: código (s), cuenta (s), idgrupo (i), nivel (i), naturalezacuenta (i)
                $stmt->bind_param("ssiii", $_POST['codigo'], $_POST['cuenta'], $_POST['idgrupo'], $_POST['nivel'], $_POST['naturalezacuenta']);
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
            if (!empty($_POST['id']) && !empty($_POST['codigo']) && !empty($_POST['cuenta']) && isset($_POST['idgrupo']) && isset($_POST['nivel']) && isset($_POST['naturalezacuenta'])) {
                $stmt = $conn->prepare("UPDATE cgc_cuentas SET codigo = ?, cuenta = ?, idgrupo = ?, nivel = ?, naturalezacuenta = ? WHERE idcuenta = ?");
                // Bind: código (s), cuenta (s), idgrupo (i), nivel (i), naturalezacuenta (i), idcuenta (i)
                $stmt->bind_param("ssiiii", $_POST['codigo'], $_POST['cuenta'], $_POST['idgrupo'], $_POST['nivel'], $_POST['naturalezacuenta'], $_POST['id']);
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
                $stmt = $conn->prepare("DELETE FROM cgc_cuentas WHERE idcuenta = ?");
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

$query = "SELECT * FROM cgc_cuentas";
$result = $conn->query($query);
