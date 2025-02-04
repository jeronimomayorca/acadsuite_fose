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
            // Verificamos que todos los campos estén definidos
            if (isset($_POST['idrubro'], $_POST['concepto'], $_POST['objetivo'], $_POST['idrubroin'], $_POST['tipo'], $_POST['vidautil'], $_POST['costoresidual'])) {
                $stmt = $conn->prepare("INSERT INTO conceptosgasto (idrubro, concepto, objetivo, idrubroin, tipo, vidautil, costoresidual) VALUES (?, ?, ?, ?, ?, ?, ?)");
                // Bind: idrubro (i), concepto (s), objetivo (s), idrubroin (i), tipo (s), vidautil (i), costoresidual (i)
                $stmt->bind_param("isssisi", $_POST['idrubro'], $_POST['concepto'], $_POST['objetivo'], $_POST['idrubroin'], $_POST['tipo'], $_POST['vidautil'], $_POST['costoresidual']);
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
            // En la edición, se requiere el id y todos los demás campos
            if (!empty($_POST['id']) && isset($_POST['idrubro'], $_POST['concepto'], $_POST['objetivo'], $_POST['idrubroin'], $_POST['tipo'], $_POST['vidautil'], $_POST['costoresidual'])) {
                $stmt = $conn->prepare("UPDATE conceptosgasto SET idrubro = ?, concepto = ?, objetivo = ?, idrubroin = ?, tipo = ?, vidautil = ?, costoresidual = ? WHERE idconcepto = ?");
                // Bind: idrubro (i), concepto (s), objetivo (s), idrubroin (i), tipo (s), vidautil (i), costoresidual (i), idconcepto (i)
                $stmt->bind_param("isssissi", $_POST['idrubro'], $_POST['concepto'], $_POST['objetivo'], $_POST['idrubroin'], $_POST['tipo'], $_POST['vidautil'], $_POST['costoresidual'], $_POST['id']);
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
                $stmt = $conn->prepare("DELETE FROM conceptosgasto WHERE idconcepto = ?");
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

$query = "SELECT * FROM conceptosgasto";
$result = $conn->query($query);
