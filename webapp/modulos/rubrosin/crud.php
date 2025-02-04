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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    $action = $_POST['action'] ?? '';

    if ($action === 'crear') {
        if (
            isset(
                $_POST['idrubro'],
                $_POST['codrubro'],
                $_POST['nomrubro'],
                $_POST['idfuente'],
                $_POST['idsubfuente'],
                $_POST['modalidad'],
                $_POST['subfuente'],
                $_POST['idcapitulo'],
                $_POST['subcapitulo'],
                $_POST['oculto']
            )
        ) {
            $stmt = $conn->prepare("INSERT INTO rubrosin (idrubro, codrubro, nomrubro, idfuente, idsubfuente, modalidad, subfuente, idcapitulo, subcapitulo, oculto) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
            $stmt->bind_param(
                "issiisiiii",
                $_POST['idrubro'],
                $_POST['codrubro'],
                $_POST['nomrubro'],
                $_POST['idfuente'],
                $_POST['idsubfuente'],
                $_POST['modalidad'],
                $_POST['subfuente'],
                $_POST['idcapitulo'],
                $_POST['subcapitulo'],
                $_POST['oculto']
            );
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
        if (
            isset(
                $_POST['id'],
                $_POST['codrubro'],
                $_POST['nomrubro'],
                $_POST['idfuente'],
                $_POST['idsubfuente'],
                $_POST['modalidad'],
                $_POST['subfuente'],
                $_POST['idcapitulo'],
                $_POST['subcapitulo'],
                $_POST['oculto']
            )
        ) {
            $stmt = $conn->prepare("UPDATE rubrosin SET codrubro = ?, nomrubro = ?, idfuente = ?, idsubfuente = ?, modalidad = ?, subfuente = ?, idcapitulo = ?, subcapitulo = ?, oculto = ? WHERE idrubro = ?");
            // Cadena de tipos: 
            // - codrubro: s  
            // - nomrubro: s  
            // - idfuente: i  
            // - idsubfuente: i  
            // - modalidad: s  
            // - subfuente: i  
            // - idcapitulo: i  
            // - subcapitulo: i  
            // - oculto: i  
            // - id (WHERE): i  
            // Total: "ssii s iiii" sin espacios → "ssiisiiiii"
            $stmt->bind_param(
                "ssiisiiiii",
                $_POST['codrubro'],
                $_POST['nomrubro'],
                $_POST['idfuente'],
                $_POST['idsubfuente'],
                $_POST['modalidad'],
                $_POST['subfuente'],
                $_POST['idcapitulo'],
                $_POST['subcapitulo'],
                $_POST['oculto'],
                $_POST['id']
            );
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
            $stmt = $conn->prepare("DELETE FROM rubrosin WHERE idrubro = ?");
            $stmt->bind_param("i", $_POST['id']);
            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Registro eliminado"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Error al eliminar el registro: " . $stmt->error]);
            }
            $stmt->close();
        }
        exit();
    } else {
        echo json_encode(["status" => "error", "message" => "Acción inválida"]);
        exit();
    }
} else {
    // Si no es una petición POST, continuamos con el flujo normal (GET)
    $query  = "SELECT * FROM rubrosin";
    $result = $conn->query($query);
}
