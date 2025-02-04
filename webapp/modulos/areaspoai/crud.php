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
    die("Conexión fallida: " . $conn->connect_error);
}

// Manejo de peticiones CRUD
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';

    switch ($action) {
        case 'create':
            if (!empty($_POST['area'])) {
                $stmt = $conn->prepare("INSERT INTO areaspoai (area) VALUES (?)");
                $stmt->bind_param("s", $_POST['area']);
                $stmt->execute();
                $stmt->close();
            }
            break;
        case 'edit':
            if (!empty($_POST['id']) && !empty($_POST['area'])) {
                $stmt = $conn->prepare("UPDATE areaspoai SET area = ? WHERE idarea = ?");
                $stmt->bind_param("si", $_POST['area'], $_POST['id']);
                $stmt->execute();
                $stmt->close();
            }
            break;
        case 'delete':
            if (!empty($_POST['id'])) {
                $stmt = $conn->prepare("DELETE FROM areaspoai WHERE idarea = ?");
                $stmt->bind_param("i", $_POST['id']);
                $stmt->execute();
                $stmt->close();
            }
            break;
    }
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

$query = "SELECT * FROM areaspoai";
$result = $conn->query($query);
