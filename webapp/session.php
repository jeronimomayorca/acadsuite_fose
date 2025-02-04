<?php
    if (!isset($_SESSION['tiempo'])) {
        $_SESSION['tiempo']=time();
    }else if (time() - $_SESSION['tiempo'] > 19200) {
        session_destroy();
        /* Aqui redireccionas a la url especifica */
        header("location: logout.php");
        die();  
    }

    $_SESSION['tiempo']=time(); //Si hay actividad seteamos el valor al tiempo actual

    $actual = $_SESSION['ano_actual']; //Año actual
    $ano_parametro = $_SESSION['ano_parametro']; //lectivo



//echo $_SESSION['servidor_usuario'].'   '.$_SESSION['database_usuario'];exit;

    if(isset($_SESSION['servidor_usuario']) || isset($_SESSION['idusuario_usuario']) || isset($_SESSION['password_usuario']) || isset($_SESSION['database_usuario'])){
        $ser = $_SESSION['servidor_usuario'];
        $usr = $_SESSION['idusuario_usuario'];
        $pas = $_SESSION['password_usuario'];
        $db = $_SESSION['database_usuario'];
 

        $lic = $_SESSION['licencia'];
        $conexion = mysqli_connect($ser,$usr,$pas,$db); //conexion
        $conexion->set_charset("utf8");
        if(!$conexion){
            header("Location:logout.php");
        }
   }else {
        //echo "No tiene permisos para estar en este sitio.";
        header("Location:logout.php");
   }

    if(isset($conexion)){

        $abre_parametros = mysqli_query($conexion,"SELECT * FROM parametros WHERE licencia_plantel = '$lic' ORDER BY ano_parametro asc"); //obtener los años electivo    
        if(empty($abre_parametros)){
            header("Location:logout.php");
        }
    }
?>