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
        if (isset(
            $_POST['nombre_usuario'],
            $_POST['cedula_usuario'],
            $_POST['cargo_usuario'],
            $_POST['dependencia_usuario'],
            $_POST['username_usuario'],
            $_POST['password_usuario'],
            $_POST['alumnos'],
            $_POST['curriculo'],
            $_POST['logros'],
            $_POST['docentes'],
            $_POST['matriculas'],
            $_POST['grupos'],
            $_POST['notas'],
            $_POST['finales'],
            $_POST['informes'],
            $_POST['copias'],
            $_POST['parametros_esc'],
            $_POST['alumnos_esc'],
            $_POST['curriculo_esc'],
            $_POST['logros_esc'],
            $_POST['docentes_esc'],
            $_POST['matriculas_esc'],
            $_POST['grupos_esc'],
            $_POST['notas_esc'],
            $_POST['finales_esc'],
            $_POST['pregunta'],
            $_POST['respuesta'],
            $_POST['sms'],
            $_POST['logs']
        )) {
            $stmt = $conn->prepare("INSERT INTO usuarios (nombre_usuario, cedula_usuario, cargo_usuario, dependencia_usuario, username_usuario, password_usuario, alumnos, curriculo, logros, docentes, matriculas, grupos, notas, finales, informes, copias, parametros_esc, alumnos_esc, curriculo_esc, logros_esc, docentes_esc, matriculas_esc, grupos_esc, notas_esc, finales_esc, pregunta, respuesta, sms, logs) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
            if (!$stmt) {
                echo json_encode(["status" => "error", "message" => "Prepare error: " . $conn->error]);
                exit();
            }
            $stmt->bind_param(
                "ssssss" .
                    "iiiiiiiiiiiiiiiiiii" .
                    "ssii",
                $_POST['nombre_usuario'],
                $_POST['cedula_usuario'],
                $_POST['cargo_usuario'],
                $_POST['dependencia_usuario'],
                $_POST['username_usuario'],
                $_POST['password_usuario'],
                $_POST['alumnos'],
                $_POST['curriculo'],
                $_POST['logros'],
                $_POST['docentes'],
                $_POST['matriculas'],
                $_POST['grupos'],
                $_POST['notas'],
                $_POST['finales'],
                $_POST['informes'],
                $_POST['copias'],
                $_POST['parametros_esc'],
                $_POST['alumnos_esc'],
                $_POST['curriculo_esc'],
                $_POST['logros_esc'],
                $_POST['docentes_esc'],
                $_POST['matriculas_esc'],
                $_POST['grupos_esc'],
                $_POST['notas_esc'],
                $_POST['finales_esc'],
                $_POST['pregunta'],
                $_POST['respuesta'],
                $_POST['sms'],
                $_POST['logs']
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
        if (isset(
            $_POST['id'],
            $_POST['nombre_usuario'],
            $_POST['cedula_usuario'],
            $_POST['cargo_usuario'],
            $_POST['dependencia_usuario'],
            $_POST['username_usuario'],
            $_POST['password_usuario'],
            $_POST['alumnos'],
            $_POST['curriculo'],
            $_POST['logros'],
            $_POST['docentes'],
            $_POST['matriculas'],
            $_POST['grupos'],
            $_POST['notas'],
            $_POST['finales'],
            $_POST['informes'],
            $_POST['copias'],
            $_POST['parametros_esc'],
            $_POST['alumnos_esc'],
            $_POST['curriculo_esc'],
            $_POST['logros_esc'],
            $_POST['docentes_esc'],
            $_POST['matriculas_esc'],
            $_POST['grupos_esc'],
            $_POST['notas_esc'],
            $_POST['finales_esc'],
            $_POST['pregunta'],
            $_POST['respuesta'],
            $_POST['sms'],
            $_POST['logs']
        )) {
            $stmt = $conn->prepare("UPDATE usuarios SET nombre_usuario = ?, cedula_usuario = ?, cargo_usuario = ?, dependencia_usuario = ?, username_usuario = ?, password_usuario = ?, alumnos = ?, curriculo = ?, logros = ?, docentes = ?, matriculas = ?, grupos = ?, notas = ?, finales = ?, informes = ?, copias = ?, parametros_esc = ?, alumnos_esc = ?, curriculo_esc = ?, logros_esc = ?, docentes_esc = ?, matriculas_esc = ?, grupos_esc = ?, notas_esc = ?, finales_esc = ?, pregunta = ?, respuesta = ?, sms = ?, logs = ? WHERE id_usuario = ?");
            if (!$stmt) {
                echo json_encode(["status" => "error", "message" => "Prepare error: " . $conn->error]);
                exit();
            }
            $stmt->bind_param(
                "ssssssssiiiiiiiiiiiiiiiiiiiiii",
                $_POST['nombre_usuario'],
                $_POST['cedula_usuario'],
                $_POST['cargo_usuario'],
                $_POST['dependencia_usuario'],
                $_POST['username_usuario'],
                $_POST['password_usuario'],
                $_POST['pregunta'],
                $_POST['respuesta'],
                $_POST['alumnos'],
                $_POST['curriculo'],
                $_POST['logros'],
                $_POST['docentes'],
                $_POST['matriculas'],
                $_POST['grupos'],
                $_POST['notas'],
                $_POST['finales'],
                $_POST['informes'],
                $_POST['copias'],
                $_POST['parametros_esc'],
                $_POST['alumnos_esc'],
                $_POST['curriculo_esc'],
                $_POST['logros_esc'],
                $_POST['docentes_esc'],
                $_POST['matriculas_esc'],
                $_POST['grupos_esc'],
                $_POST['notas_esc'],
                $_POST['finales_esc'],
                $_POST['sms'],
                $_POST['logs'],
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
            $stmt = $conn->prepare("DELETE FROM usuarios WHERE id_usuario = ?");
            if (!$stmt) {
                echo json_encode(["status" => "error", "message" => "Prepare error: " . $conn->error]);
                exit();
            }
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
    $query = "SELECT * FROM usuarios";
    $result = $conn->query($query);
}
