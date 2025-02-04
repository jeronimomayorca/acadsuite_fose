<?php
   session_start();
    include("session.php");
    $id = 1;
    $ano = $_POST['ano'];
    mysqli_query($conexion, "UPDATE actual SET ano='{$ano}' WHERE id_actual='{$id}'");
    header("Location:menu.php");
?>