<?php
//$conexionmaestro = mysqli_connect("www.acadsuite.net","academic_maestro","Firewall2025%","academic_acad10_maestro");
$conexionmaestro = mysqli_connect("localhost", "root", "", "acadsuite_fose_maestro");

$conexionmaestro->set_charset("utf8");

//Codigo para Validar Conexion a la Base
if (!$conexionmaestro) {
	echo "Conexi�n no exitosa a la base de datos";
	exit();
}
