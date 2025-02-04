<?php
include 'conexionmaestro.php';

$user_login = $_POST['username'];
$user_pass  = $_POST['password'];

$crear_conexion = mysqli_query($conexionmaestro, "SELECT * FROM usuarios WHERE username_usuario = '$user_login' and contrasena_usuario = '$user_pass'");

if (!$crear_conexion) {
    header("location:logout.php");
}

$row = mysqli_fetch_array($crear_conexion);
if ($row) {
    $username_usuario = $row['username_usuario'];
    $contrasena_usuario = $row['contrasena_usuario'];

    if ($username_usuario == $user_login && $contrasena_usuario == $user_pass) {
        $cedula_usuario = $row['cedula_usuario'];
        $servidor_usuario = $row['servidor_usuario'];
        $idusuario_usuario = $row['idusuario_usuario'];
        $password_usuario = $row['password_usuario'];
        $database_usuario = $row['database_usuario'];
        $licencia_cuenta = $row['licencia_cuenta'];
        $fecha = $row['fecha'];

        //verifica en cuentas que haya pagado estadocuenta=0

        $query = "SELECT * FROM cuentas WHERE licencia_cuenta='$licencia_cuenta'";
        $resultado = $conexionmaestro->query($query);
        $row = $resultado->fetch_assoc();
        $departamento = $row['departamento'];
        /*
            if($cue==0){
                ?>
                <script type="text/javascript">
                    alert("La p�liza de la instituci�n est� vencida.");
                    window.location="logout.php";
                </script>
                <?php
                exit();
            }
*/
        //echo $servidor_usuario.'   '.$idusuario_usuario.'   '.$password_usuario.'   '.$database_usuario;exit;
        //conexion de colegio
        $conexion = mysqli_connect($servidor_usuario, $idusuario_usuario, $password_usuario, $database_usuario);
        $conexion->set_charset("utf8");


        $abre_usuarios = mysqli_query($conexion, "SELECT * FROM usuarios WHERE username_usuario = '$username_usuario' and password_usuario = '$contrasena_usuario'");
        if (!$abre_usuarios) {
            header("location:logout.php");
        }
        $rows = mysqli_fetch_array($abre_usuarios, MYSQLI_ASSOC);
        $nombre_usuario = $rows['nombre_usuario'];
        $cargo_usuario = $rows['cargo_usuario'];
        //echo $nombre_usuario;exit;
        //$cedula_usuario = $rows['numerodocumento_usuario'];


        $username_usuario_c = $rows['username_usuario'];
        $password_usuario_c = $rows['password_usuario'];


        //echo 'paso logoin.php maestro '.$username_usuario.'   '.$contrasena_usuario.'   '.$user_login.'   '.$user_pass.'   '.$username_usuario_c.'   '.$password_usuario_c;exit;


        if ($username_usuario_c == $user_login && $password_usuario_c == $user_pass) {
            //___________________________________________________________________________________________________
            //parametros

            $abre_parametros = mysqli_query($conexion, "SELECT * FROM parametros WHERE licencia_plantel = '$licencia_cuenta' ORDER BY ano_parametro DESC");
            if (!$abre_parametros) {
                header("location:logout.php");
            }
            $rowsp = mysqli_fetch_array($abre_parametros, MYSQLI_ASSOC);
            $nombre_plantel = $rowsp['nombre_plantel']; //plantel
            $ano_parametro = $rowsp['ano_parametro']; //Actual


            $direccion_plantel = $rowsp['direccion_plantel'];
            $telefonos_plantel = $rowsp['telefonos_plantel'];
            $correo_plantel = $rowsp['correo_plantel'];
            $municipio_plantel = $rowsp['municipio_plantel'];
            $nit_plantel = $rowsp['nit_plantel'];
            $dane_plantel = $rowsp['codigo_dane'];
            $icfesj1_plantel = $rowsp['codigoicfesj1_plantel'];
            $icfesj2_plantel = $rowsp['codigoicfesj2_plantel'];
            $resolucion1_plantel = $rowsp['resolucion1_plantel'];
            $resolucion2_plantel = $rowsp['resolucion2_plantel'];
            $eslogan_plantel = $rowsp['eslogan_plantel'];
            $nombrerector_plantel = $rowsp['nombrerector_plantel'];
            $documentorector_plantel = $rowsp['documentorector_plantel'];
            $nombresecretaria_plantel = $rowsp['nombresecretaria_plantel'];
            $documentosecretaria_plantel = $rowsp['documentosecretaria_plantel'];
            $cargo_secretario = $rowsp['cargo_secretario'];
            $cargo_secretariogral = $rowsp['cargo_secretariogral'];
            $cargo_auxiliar = $rowsp['cargo_auxiliar'];
            $eslogan = $rowsp['eslogan_plantel'];

            $fecha_primero = $rowsp['fecha_primero'];
            $fecha_segundo = $rowsp['fecha_segundo'];
            $fecha_tercero = $rowsp['fecha_tercero'];
            $fecha_cuarto = $rowsp['fecha_cuarto'];
            $fecha_quinto = $rowsp['fecha_quinto'];

            $fecharecuperacion_primero = $rowsp['fecharecuperacion_primero'];
            $fecharecuperacion_segundo = $rowsp['fecharecuperacion_segundo'];
            $fecharecuperacion_tercero = $rowsp['fecharecuperacion_tercero'];
            $fecharecuperacion_cuarto = $rowsp['fecharecuperacion_cuarto'];
            $fecharecuperacion_quinto = $rowsp['fecharecuperacion_quinto'];

            $transicionpropositos = $rowsp['transicion_propositos'];

            $rango_1 = $rowsp['rango_1'];
            $rango_2 = $rowsp['rango_2'];

            if ($rango_1 == 1 && $rango_2 == 0) {
                $rango_bajo_desde = $rowsp['rango1_bajo_desde'];
                $rango_bajo_hasta = $rowsp['rango1_bajo_hasta'];
                $rango_basico_desde = $rowsp['rango1_basico_desde'];
                $rango_basico_hasta = $rowsp['rango1_basico_hasta'];
                $rango_alto_desde = $rowsp['rango1_alto_desde'];
                $rango_alto_hasta = $rowsp['rango1_alto_hasta'];
                $rango_superior_desde = $rowsp['rango1_superior_desde'];
                $rango_superior_hasta = $rowsp['rango1_superior_hasta'];
            }

            if ($rango_2 == 1 && $rango_1 == 0) {
                $rango_bajo_desde = $rowsp['rango2_bajo_desde'];
                $rango_bajo_hasta = $rowsp['rango2_bajo_hasta'];
                $rango_basico_desde = $rowsp['rango2_basico_desde'];
                $rango_basico_hasta = $rowsp['rango2_basico_hasta'];
                $rango_alto_desde = $rowsp['rango2_alto_desde'];
                $rango_alto_hasta = $rowsp['rango2_alto_hasta'];
                $rango_superior_desde = $rowsp['rango2_superior_desde'];
                $rango_superior_hasta = $rowsp['rango2_superior_hasta'];
            }

            //______________________________________________________________
            //___________________________________________________________________________________________________

            $usuario_correcto = $username_usuario_c;
            $palabra_secreta_correcta = $password_usuario_c;
            //___________________________________________________________________________________________________
            $usuario = $_POST["username"];
            $palabra_secreta = $_POST["password"];
            # Luego de haber obtenido los valores, ya podemos comprobar:
            if ($usuario === $usuario_correcto && $palabra_secreta === $palabra_secreta_correcta) {
                ob_start();
                session_start();
                $_SESSION['nombre_plantel'] = $nombre_plantel; //actual
                $_SESSION['licencia'] = $licencia_cuenta; //actual
                $_SESSION['nombre_usuario'] = $nombre_usuario; //actual
                $_SESSION['cedula_usuario'] = $cedula_usuario; //actual
                $_SESSION['cargo_usuario'] = $cargo_usuario; //actual


                $_SESSION['user_db'] = $database_usuario; //actual
                $_SESSION['ano_parametro'] = $ano_parametro; //cambiante
                $_SESSION['ano_actual'] = $ano_parametro; //actual
                //conexion colegio
                $_SESSION['servidor_usuario'] = $servidor_usuario;
                $_SESSION['idusuario_usuario'] = $idusuario_usuario;
                $_SESSION['password_usuario'] = $password_usuario;
                $_SESSION['database_usuario'] = $database_usuario;

                $_SESSION['direccion_plantel'] = $direccion_plantel;
                $_SESSION['telefonos_plantel'] = $telefonos_plantel;
                $_SESSION['correo_plantel'] = $correo_plantel;
                $_SESSION['municipio_plantel'] = $municipio_plantel;
                $_SESSION['nit_plantel'] = $nit_plantel;
                $_SESSION['codigo_dane'] = $dane_plantel;
                $_SESSION['codigoicfesj1_plantel'] = $icfesj1_plantel;
                $_SESSION['codigoicfesj2_plantel'] = $icfesj2_plantel;
                $_SESSION['resolucion1_plantel'] = $resolucion1_plantel;
                $_SESSION['resolucion2_plantel'] = $resolucion2_plantel;
                $_SESSION['eslogan_plantel'] = $eslogan_plantel;

                $_SESSION['nombrerector_plantel'] = $nombrerector_plantel;
                $_SESSION['documentorector_plantel'] = $documentorector_plantel;
                $_SESSION['nombresecretaria_plantel'] = $nombresecretaria_plantel;
                $_SESSION['documentosecretaria_plantel'] = $documentosecretaria_plantel;
                $_SESSION['cargo_secretario'] = $cargo_secretario;
                $_SESSION['cargo_secretariogral'] = $cargo_secretariogral;
                $_SESSION['cargo_auxiliar'] = $cargo_auxiliar;
                $_SESSION['eslogan'] = $eslogan_plantel;

                $_SESSION['rango_1'] = $rango_1;
                $_SESSION['rango_2'] = $rango_2;

                $_SESSION['rango_bajo_desde'] = $rango_bajo_desde;
                $_SESSION['rango_bajo_hasta'] = $rango_bajo_hasta;
                $_SESSION['rango_basico_desde'] = $rango_basico_desde;
                $_SESSION['rango_basico_hasta'] = $rango_basico_hasta;
                $_SESSION['rango_alto_desde'] = $rango_alto_desde;
                $_SESSION['rango_alto_hasta'] = $rango_alto_hasta;
                $_SESSION['rango_superior_desde'] = $rango_superior_desde;
                $_SESSION['rango_superior_hasta'] = $rango_superior_hasta;
                $_SESSION['nombre_usuario'] = $nombre_usuario;

                $_SESSION['fecha_primero'] = $fecha_primero;
                $_SESSION['fecha_segundo'] = $fecha_segundo;
                $_SESSION['fecha_tercero'] = $fecha_tercero;
                $_SESSION['fecha_cuarto'] = $fecha_cuarto;
                $_SESSION['fecha_quinto'] = $fecha_quinto;

                $_SESSION['fecharecuperacion_primero'] = $fecharecuperacion_primero;
                $_SESSION['fecharecuperacion_segundo'] = $fecharecuperacion_segundo;
                $_SESSION['fecharecuperacion_tercero'] = $fecharecuperacion_tercero;
                $_SESSION['fecharecuperacion_cuarto'] = $fecharecuperacion_cuarto;
                $_SESSION['fecharecuperacion_quinto'] = $fecharecuperacion_quinto;

                $_SESSION['username'] = $usuario;

                if ($cue == 0) {
                    $_SESSION['mensaje'] = $mensaje;
                }

                $_SESSION['alumnos'] = $rows['alumnos'];
                $_SESSION['curriculo'] = $rows['curriculo'];
                $_SESSION['docentes'] = $rows['docentes'];
                $_SESSION['matriculas'] = $rows['matriculas'];
                $_SESSION['grupos'] = $rows['grupos'];
                $_SESSION['notas'] = $rows['notas'];
                $_SESSION['informes'] = $rows['informes'];
                $_SESSION['copias'] = $rows['notas'];

                $_SESSION['parametrosesc'] = $rows['parametros_esc'];
                $_SESSION['alumnosesc'] = $rows['alumnos_esc'];
                $_SESSION['curriculoesc'] = $rows['curriculo_esc'];
                $_SESSION['docentesesc'] = $rows['docentes_esc'];
                $_SESSION['matriculasesc'] = $rows['matriculas_esc'];
                $_SESSION['gruposesc'] = $rows['grupos_esc'];
                $_SESSION['notasesc'] = $rows['notas_esc'];

                $_SESSION['sms'] = $rows['sms'];
                $_SESSION['logs'] = $rows['logs'];

                $_SESSION['departamento'] = $departamento;


                //echo $_SESSION['alumnos'].'  '.$_SESSION['curriculo'].'   '.$_SESSION['docentes'].'   ' .$_SESSION['matriculas'].'   ' .$_SESSION['grupos'].'<br>';
                //echo $_SESSION['notas'].'   '.$_SESSION['informes'].'   '.$_SESSION['parametrosesc'].'  '.$_SESSION['alumnosesc'].'<br>';
                //echo $_SESSION['curriculoesc'].'  '.$_SESSION['docentesesc'].'   '.$_SESSION['matriculasesc'].'  '.$_SESSION['gruposesc'].'  '.$_SESSION['notasesc'];exit;

                // creamos el a�o parametro en tabla 'actual'

                $sql = "truncate table actual";
                $consulta = mysqli_query($conexion, $sql);

                $sql = "INSERT INTO actual (ano,semestre) values('$ano_parametro','1')";
                $consulta = mysqli_query($conexion, $sql);

                # Luego redireccionamos al menu

                header("Location:menu.php");
            } else {
?>
                <script type="text/javascript">
                    alert("Clave de acceso es Incorrecta!");
                    window.location = "logout.php";
                </script>
    <?php
            }
        }
        //___________________________________________________________________________________________________

    }
} else {
    ?>
    <script type="text/javascript">
        alert("Nombre de usuario o contrasena incorrecta!");
        window.location = "logout.php";
    </script>
<?php
}
?>