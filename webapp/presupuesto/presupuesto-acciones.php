<?php

	include('../session.php'); 
	date_default_timezone_set('America/Bogota');

//echo 'pasó';exit;
	$ano=$_POST['ano'];
	$accion = $_POST['accion'];

	$fecha=date('Y-m-d');
 
    $query = "SELECT * from presinicialgas where vigencia='$ano' ";
    $resultado= $conexion->query($query);

//echo mysqli_num_rows($resultado);exit;

	if($accion == 'cargarapropiacion') {	
		?>	

                    <div class='table-responsive'>
                        <table id="example" class="table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <td><center>Fuente</center></td>
                                    <td><center>Subfuente</center></td>
                                    <td><center>Concepto</center></td>
                                    <td><center>Rubro</center></td>
                                    <td><center>Valor</center></td>
                                    <td>Capítulo</td>
                                    <td><center>Subcapítulo</center></td>
                                    <td><center>Idie</center></td>
                                    <td><center>IdUser</center></td>

                                </tr>
                            </thead>  
                            <tbody>
                                <?php
                                while ($row=$resultado->fetch_assoc()) {
                                    ?>
                                        <tr>
                                            <td><?php echo $row['idfuente']?></td>
                                            <td><center><?php echo $row['idsubfuente'];?></center></td>
                                            <td><center><?php echo $row['idconcepto'];?></center></td>
                                            <td><center><?php echo $row['idrubro'];?></center></td>
                                            <td><center><?php echo $row['valor'];?></center></td>
                                            <td><center><?php echo $row['idcapitulo'];?></center></td>
                                            <td><center><?php echo $row['subcapitulo'];?></center></td>

                                            <td><center><?php echo $row['idie'];?></center></td>
                                            <td><center><?php echo $row['iduser'];?></center></td>
                                                                                           
                                        </tr>
                                      <?php
                                       }
                                      ?>
                                    </tbody>
                                    <br><br><br>
                                </table>
                            </div>

<?php
  exit;
} elseif($accion == '') {
	echo '
		    {"planilla": "'.$planilla.'"}
	';

} elseif($accion == 'cambiarhora') {
	echo '
		    {"horasalida": "'.$hora.'"}

	';

}

?>
