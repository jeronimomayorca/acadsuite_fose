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
            // Usamos isset() para los campos numéricos, ya que pueden ser 0
            if (isset($_POST['idcategoriaret'], $_POST['conceptoret'], $_POST['numuvt'], $_POST['base'])) {
                $stmt = $conn->prepare("INSERT INTO conceptosretencion (idcategoriaret, conceptoret, numuvt, base) VALUES (?, ?, ?, ?)");
                // Bind: idcategoriaret (i), conceptoret (s), numuvt (i), base (i)
                $stmt->bind_param("isii", $_POST['idcategoriaret'], $_POST['conceptoret'], $_POST['numuvt'], $_POST['base']);
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
            // Se requiere el id y todos los demás campos
            if (!empty($_POST['id']) && isset($_POST['idcategoriaret'], $_POST['conceptoret'], $_POST['numuvt'], $_POST['base'])) {
                $stmt = $conn->prepare("UPDATE conceptosretencion SET idcategoriaret = ?, conceptoret = ?, numuvt = ?, base = ? WHERE idconceptoret = ?");
                // Bind: idcategoriaret (i), conceptoret (s), numuvt (i), base (i), idconceptoret (i)
                $stmt->bind_param("isiii", $_POST['idcategoriaret'], $_POST['conceptoret'], $_POST['numuvt'], $_POST['base'], $_POST['id']);
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
                $stmt = $conn->prepare("DELETE FROM conceptosretencion WHERE idconceptoret = ?");
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

$query = "SELECT * FROM conceptosretencion";
$result = $conn->query($query);
