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
            // Validamos: codigo y grupo deben tener valor, y los campos numéricos (idclase, nivel, naturalezacuenta) se validan con isset()
            if (!empty($_POST['codigo']) && !empty($_POST['grupo']) && isset($_POST['idclase']) && isset($_POST['nivel']) && isset($_POST['naturalezacuenta'])) {
                $stmt = $conn->prepare("INSERT INTO cgc_grupos (codigo, grupo, idclase, nivel, naturalezacuenta) VALUES (?, ?, ?, ?, ?)");
                // Bind: codigo (s), grupo (s), idclase (i), nivel (i), naturalezacuenta (i)
                $stmt->bind_param("ssiii", $_POST['codigo'], $_POST['grupo'], $_POST['idclase'], $_POST['nivel'], $_POST['naturalezacuenta']);
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
            if (!empty($_POST['id']) && !empty($_POST['codigo']) && !empty($_POST['grupo']) && isset($_POST['idclase']) && isset($_POST['nivel']) && isset($_POST['naturalezacuenta'])) {
                $stmt = $conn->prepare("UPDATE cgc_grupos SET codigo = ?, grupo = ?, idclase = ?, nivel = ?, naturalezacuenta = ? WHERE idgrupo = ?");
                // Bind: código (s), grupo (s), idclase (i), nivel (i), naturalezacuenta (i), idgrupo (i)
                $stmt->bind_param("ssiiii", $_POST['codigo'], $_POST['grupo'], $_POST['idclase'], $_POST['nivel'], $_POST['naturalezacuenta'], $_POST['id']);
                if ($stmt->execute()) {
                    echo json_encode(["status" => "success", "message" => "Registro actualizado correctamente"]);
                } else {
                    // Agregamos $stmt->error para ver el detalle del error
                    echo json_encode(["status" => "error", "message" => "Error al actualizar el registro: " . $stmt->error]);
                }
                $stmt->close();
                exit;
            }
            break;


        case 'eliminar':
            if (!empty($_POST['id'])) {
                $stmt = $conn->prepare("DELETE FROM cgc_grupos WHERE idgrupo = ?");
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

$query = "SELECT * FROM cgc_grupos";
$result = $conn->query($query);
