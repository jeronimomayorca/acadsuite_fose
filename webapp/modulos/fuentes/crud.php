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
            // Validamos que los campos estén definidos; usamos isset() para campos numéricos
            if (!empty($_POST['codrubro']) && !empty($_POST['fuente']) && isset($_POST['idcapitulo']) && isset($_POST['codsifse'])) {
                $stmt = $conn->prepare("INSERT INTO fuentes (codrubro, fuente, idcapitulo, codsifse) VALUES (?, ?, ?, ?)");
                // Bind: codrubro (s), fuente (s), idcapitulo (i), codsifse (i)
                $stmt->bind_param("ssii", $_POST['codrubro'], $_POST['fuente'], $_POST['idcapitulo'], $_POST['codsifse']);
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
            // Se requiere el id y los demás campos
            if (!empty($_POST['id']) && !empty($_POST['codrubro']) && !empty($_POST['fuente']) && isset($_POST['idcapitulo']) && isset($_POST['codsifse'])) {
                $stmt = $conn->prepare("UPDATE fuentes SET codrubro = ?, fuente = ?, idcapitulo = ?, codsifse = ? WHERE idfuente = ?");
                // Bind: codrubro (s), fuente (s), idcapitulo (i), codsifse (i), idfuente (i)
                $stmt->bind_param("ssiii", $_POST['codrubro'], $_POST['fuente'], $_POST['idcapitulo'], $_POST['codsifse'], $_POST['id']);
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
                $stmt = $conn->prepare("DELETE FROM fuentes WHERE idfuente = ?");
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

$query = "SELECT * FROM fuentes";
$result = $conn->query($query);
