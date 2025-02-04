<?php
session_start();
include("../../session.php"); // Ajusta la ruta según corresponda
$ano = $_SESSION['ano'];

// Conexión a la base de datos
$servername = "localhost";
$username   = "root";
$password   = "";
$database   = "acadsuite_fose_iexarasoft";

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die(json_encode([
        "status" => "error",
        "message" => "Conexión fallida: " . $conn->connect_error
    ]));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    $action = $_POST['action'] ?? '';

    if ($action === 'crear') {
        // En la creación, no se envía idtercero porque es AUTO_INCREMENT.
        if (isset(
            $_POST['nombretercero'],
            $_POST['idtipodoc'],
            $_POST['numdoc'],
            $_POST['telefono'],
            $_POST['direccion'],
            $_POST['ciudad'],
            $_POST['email'],
            $_POST['idtipocont'],
            $_POST['declara'],
            $_POST['idie'],
            $_POST['iduser']
        )) {
            $stmt = $conn->prepare("INSERT INTO terceros (nombretercero, idtipodoc, numdoc, telefono, direccion, ciudad, email, idtipocont, declara, idie, iduser) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
            if (!$stmt) {
                echo json_encode(["status" => "error", "message" => "Prepare error: " . $conn->error]);
                exit();
            }
            // Cadena de tipos para crear: "sisssssiiiii" (11 caracteres)
            $stmt->bind_param(
                "sisssssiiii",
                $_POST['nombretercero'],
                $_POST['idtipodoc'],
                $_POST['numdoc'],
                $_POST['telefono'],
                $_POST['direccion'],
                $_POST['ciudad'],
                $_POST['email'],
                $_POST['idtipocont'],
                $_POST['declara'],
                $_POST['idie'],
                $_POST['iduser']
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
        // Para editar se requiere el id (idtercero) y los demás valores.
        if (isset(
            $_POST['id'],
            $_POST['nombretercero'],
            $_POST['idtipodoc'],
            $_POST['numdoc'],
            $_POST['telefono'],
            $_POST['direccion'],
            $_POST['ciudad'],
            $_POST['email'],
            $_POST['idtipocont'],
            $_POST['declara'],
            $_POST['idie'],
            $_POST['iduser']
        )) {
            $stmt = $conn->prepare("UPDATE terceros SET nombretercero = ?, idtipodoc = ?, numdoc = ?, telefono = ?, direccion = ?, ciudad = ?, email = ?, idtipocont = ?, declara = ?, idie = ?, iduser = ? WHERE idtercero = ?");
            if (!$stmt) {
                echo json_encode(["status" => "error", "message" => "Prepare error: " . $conn->error]);
                exit();
            }
            // Cadena de tipos para editar: "sisssssiiiii" para los 11 valores y "i" para el id en WHERE = "sisssssiiiiii" (12 caracteres)
            $stmt->bind_param(
                "sisssssiiiii",
                $_POST['nombretercero'],
                $_POST['idtipodoc'],
                $_POST['numdoc'],
                $_POST['telefono'],
                $_POST['direccion'],
                $_POST['ciudad'],
                $_POST['email'],
                $_POST['idtipocont'],
                $_POST['declara'],
                $_POST['idie'],
                $_POST['iduser'],
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
            $stmt = $conn->prepare("DELETE FROM terceros WHERE idtercero = ?");
            $stmt->bind_param("i", $_POST['id']);
            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Registro eliminado"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Error al eliminar el registro: " . $stmt->error]);
            }
            $stmt->close();
        } else {
            echo json_encode(["status" => "error", "message" => "No se recibió el ID"]);
        }
        exit();
    } else {
        echo json_encode(["status" => "error", "message" => "Acción inválida"]);
        exit();
    }
} else {
    // Si la petición no es POST, asumimos GET y mostramos la página
    $query = "SELECT * FROM terceros";
    $result = $conn->query($query);
}
