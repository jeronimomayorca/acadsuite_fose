<?php
    session_start(); 
    include("../session.php");
    $ano=$_SESSION['ano'];

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Acadsuite FOSE</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="../../images/favicon.png" rel="icon">
  <link href="../../assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.gstatic.com" rel="preconnect">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="../../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="../../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="../../assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="../../assets/vendor/quill/quill.snow.css" rel="stylesheet">
  <link href="../../assets/vendor/quill/quill.bubble.css" rel="stylesheet">
  <link href="../../assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="../../assets/vendor/simple-datatables/style.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="../../assets/css/style.css" rel="stylesheet">

</head>

  <body onload="cargarapropiacion('<?php echo $ano?>')">
  

  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">

    <div class="d-flex align-items-center justify-content-between">
      <a href="../../webapp/menu.php" class="logo d-flex align-items-center">
        <img src="../../images/logoacademico.png" alt="">
        <span class="d-none d-lg-block">Acadsuite FOSE</span>
      </a>
      <i class="bi bi-list toggle-sidebar-btn"></i>
    </div><!-- End Logo -->

    <div class="search-bar">
      <form class="search-form d-flex align-items-center" method="POST" action="#">
        <span style="color:red;"><?php echo $_SESSION['nombre_plantel']?></span>
      </form>
    </div><!-- End Search Bar -->

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">

        <li class="nav-item d-block d-lg-none">
          <a class="nav-link nav-icon search-bar-toggle " href="#">
            <i class="bi bi-search"></i>
          </a>
        </li><!-- End Search Icon-->


        <li class="nav-item dropdown pe-3">

          <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src="../../assets/img/profile-img.jpg"  class="rounded-circle">
            <span class="d-none d-md-block dropdown-toggle ps-2"><?php echo $_SESSION['nombre_usuario']?></span>
          </a><!-- End Profile Iamge Icon -->

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li class="dropdown-header">
              <h6><?php echo $_SESSION['nombre_usuario']?></h6>
              <span>Contador</span>
            </li>
            <li>
              <a class="dropdown-item d-flex align-items-center" href="../../webapp/logout.php">
                <i class="bi bi-box-arrow-right"></i>
                <span>Salir</span>
              </a>
            </li>

          </ul><!-- End Profile Dropdown Items -->
        </li><!-- End Profile Nav -->

      </ul>
    </nav><!-- End Icons Navigation -->

  </header><!-- End Header -->



  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <a class="nav-link " href="../../webapp/menu.php">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li><!-- End Dashboard Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i class="ri ri-bank-line"></i><span>Gestión Financiera</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" class="nav-content " data-bs-parent="#sidebar-nav">
          <li>
            <a href="presupuesto.php">
              <i class="bi bi-circle"></i><span>Presupuesto</span>
            </a>
          </li>

          <li>
            <a href="../../webapp/contabilidad/contabilidad.php">
              <i class="bi bi-circle"></i><span>Contabilidad</span>
            </a>
          </li>
          <li>
            <a href="../../webapp/tesoreria/tesoreria.php">
              <i class="bi bi-circle"></i><span>Tesorería</span>
            </a>
          </li>
          <li>
            <a href="../../webapp/costos/costos.php">
              <i class="bi bi-circle"></i><span>Distribución de costo</span>
            </a>
          </li>
          <li>
            <a href="../../webapp/amortizaciones/amortizaciones.php">
              <i class="bi bi-circle"></i><span>Amortizaciones</span>
            </a>
          </li>
          <li>
            <a href="../../webapp/trasladoscentros/trasladoscentros.php">
              <i class="bi bi-circle"></i><span>Traslados centros de costo</span>
            </a>
          </li>
        </ul>
      </li><!-- End Components Nav -->


      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#inventario-nav" data-bs-toggle="collapse" href="#">
          <i class="ri-hotel-line"></i><span>Gestión Recursos físicos</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="inventario-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="../../webapp/almacen/inventarios.php">
              <i class="bi bi-circle"></i><span>Almacen e inventario</span>
            </a>
          </li>
          <li>
            <a href="../../webapp/almacen/movimientos.php">
              <i class="bi bi-circle"></i><span>Movimientos</span>
            </a>
          </li>
          <li>
            <a href="../../webapp/almacen/contabilidad.php">
              <i class="bi bi-circle"></i><span>Contabilidad</span>
            </a>
          </li>
        </ul>
      </li><!-- End Forms Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i class="ri ri-meteor-line"></i><span>Gestión de proyectos</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="../../webapp/proyectos/proyectos.php">
              <i class="bi bi-circle"></i><span>Proyectos</span>
            </a>
          </li>
          <li>
            <a href="../../webapp/proyectos/movimientos.php">
              <i class="bi bi-circle"></i><span>Movimiento</span>
            </a>
          </li>
        </ul>
      </li><!-- End Forms Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-layout-text-window-reverse"></i><span>Informes</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="../../webapp/informes/basicos.php">
              <i class="bi bi-circle"></i><span>Básicos</span>
            </a>
          </li>
          <li>
            <a href="../../webapp/informes/movimientos.php">
              <i class="bi bi-circle"></i><span>Movimientos</span>
            </a>
          </li>

        </ul>
      </li><!-- End Tables Nav -->

      <li class="nav-item">
        <a class="nav-link" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-bar-chart"></i><span>Catálogos</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="charts-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
          <li>
            <a href="../../webapp/catalogos/catalogos.php">
              <i class="bi bi-circle"></i><span>Catálogos</span>
            </a>
          </li>
        </ul>
      </li><!-- End Charts Nav -->


      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
          <i class="ri ri-settings-5-line"></i><span>Matenimiento</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="icons-nav" class="nav-content " data-bs-parent="#sidebar-nav">
          <li>
            <a href="../../webapp/mantenimiento/mantenimiento.php">
              <i class="bi bi-circle"></i><span>Mantenimiento</span>
            </a>
          </li>
        </ul>
      </li><!-- End Icons Nav -->

    </ul>
  </aside><!-- End Sidebar-->

  <main id="main" class="main">

    <div class="pagetitle">
      <h1>Gestión Financiera / Presupuesto <?php echo $ano?></h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="../../webapp/menu.php">Inicio</a></li>
          <li class="breadcrumb-item active">Presupuesto</li>
        </ol>
      </nav>

      <nav>   
      <ul class="nav nav-pills">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" style="color:indigo;" role="button" aria-expanded="false">Listados</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" style="color:black;" >Plan Presupuestal</a></li>
            <li><a class="dropdown-item" href="#" style="color:black;" >Apropiaciones iniciales</a></li>
            <li><a class="dropdown-item" href="#" style="color:black;" >Configuración concepto</a></li>
            <li><a class="dropdown-item" href="#" style="color:black;" >Fuentes de recursos</a></li>
          </ul>
        </li>

        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" style="color:indigo;" role="button" aria-expanded="false">Auxiliares</a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" style="color:black;" >Comprobantes presupuestales - Gastos</a></li>
            <li><a class="dropdown-item" href="#" style="color:black;" >Comprobantes presupuestales - Ingresos</a></li>
            <li><a class="dropdown-item" href="#" style="color:black;" >Seguimientoa a disponibilidad</a></li>
            <li><a class="dropdown-item" href="#" style="color:black;" >Listado comprobantes tipo</a></li>
            <li><a class="dropdown-item" href="#" style="color:black;" >Libro auxiliar presupuestal</a></li>
        </ul>


        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" style="color:indigo;" role="button" aria-expanded="false">Informes generales</a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" style="color:black;" >Ejecución Presupuestal de Gastos de inversión acumulados</a></li>
            <li><a class="dropdown-item" href="#" style="color:black;" >Ejecución Presupuestal de Rentas e Ingresos</a></li>
            <li><a class="dropdown-item" href="#" style="color:black;" >Ejecución Presupuestal de Gastos e Inversión por período</a></li>
            <li><a class="dropdown-item" href="#" style="color:black;" >Ejecución Presupuestal de Rentas e Ingresos por período</a></li>
            <li><a class="dropdown-item" href="#" style="color:black;" >Ejecución Presupuestal de Reservas</a></li>
            <li><a class="dropdown-item" href="#" style="color:black;" >Ejecución Presupuestal de Cuentas por Pagar -Vigencia anterior</a></li>
            <li><a class="dropdown-item" href="#" style="color:black;" >Conciliación Ingresos -Gastos por Fuente</a></li>
        </ul>

        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" style="color:indigo;" role="button" aria-expanded="false">Informes SIFSE</a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" style="color:black;">Presupuestal de Gastos</a></li>
            <li><a class="dropdown-item" href="#" style="color:black;">Presupuestal de Ingresos</a></li>
        </ul>

        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" style="color:indigo;" role="button" aria-expanded="false">Informes Administrativos</a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" style="color:black;">Ejecución de Gastos</a></li>
            <li><a class="dropdown-item" href="#" style="color:black;">Ejecución de Ingresos</a></li>
        </ul>

        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" style="color:indigo;" role="button" aria-expanded="false">Comprobantes en Lote</a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" style="color:black;">Disponibilidades</a></li>
            <li><a class="dropdown-item" href="#" style="color:black;">Registros</a></li>
        </ul>

       
        <li class="nav-item">
          <a class="nav-link" href="../../webapp/menu.php" style="color:indigo;" tabindex="-1" aria-disabled="true">Retornar</a>
        </li>


      </ul>
      </nav>



    </div><!-- End Page Title -->


    <section class="section presupuesto">
      <div class="row">
        <div class="col-lg-12">

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Movimientos</h5>

              <ul class="nav nav-tabs" id="myTabjustified" role="tablist">
                <li class="nav-item" role="apropiacion">
                  <button class="nav-link active" id="apropiacion-tab" data-bs-toggle="tab" data-bs-target="#apropiacion-justified" type="button" role="tab" aria-controls="apropiacion" aria-selected="false">Aprop. inicial</button>
                </li>

                <li class="nav-item" role="adicion">
                  <button class="nav-link" id="adicion-tab" data-bs-toggle="tab" data-bs-target="#adicion-justified" type="button" role="tab" aria-controls="adicion" aria-selected="true">Adición</button>
                </li>

                <li class="nav-item" role="cdp">
                  <button class="nav-link" id="cdp-tab" data-bs-toggle="tab" data-bs-target="#cdp-justified" type="button" role="tab" aria-controls="cdp" aria-selected="false">CDP</button>
                </li>

                <li class="nav-item" role="rp">
                  <button class="nav-link" id="rp-tab" data-bs-toggle="tab" data-bs-target="#rp-justified" type="button" role="tab" aria-controls="rp" aria-selected="false">RP</button>
                </li>

                <li class="nav-item" role="reduccion">
                  <button class="nav-link" id="reduccion-tab" data-bs-toggle="tab" data-bs-target="#reduccion-justified" type="button" role="tab" aria-controls="reduccion" aria-selected="false">Reducción</button>
                </li>
                <li class="nav-item" role="modificacdp">
                  <button class="nav-link" id="modificacdp-tab" data-bs-toggle="tab" data-bs-target="#modificacdp-justified" type="button" role="tab" aria-controls="modificacdp" aria-selected="false">Modifica CDP</button>
                </li>

                <li class="nav-item" role="modificarp">
                  <button class="nav-link" id="modificarp-tab" data-bs-toggle="tab" data-bs-target="#modificarp-justified" type="button" role="tab" aria-controls="modificarp" aria-selected="false">Modifica RP
                  </button>
                </li>

                <li class="nav-item" role="traslado">
                  <button class="nav-link" id="traslado-tab" data-bs-toggle="tab" data-bs-target="#traslado-justified" type="button" role="tab" aria-controls="traslado" aria-selected="false">Traslado</button>
                </li>                                                                
                <li class="nav-item" role="recaudo">
                  <button class="nav-link" id="recaudo-tab" data-bs-toggle="tab" data-bs-target="#recaudo-justified" type="button" role="tab" aria-controls="recaudo" aria-selected="false">Recaudo</button>
                </li>    
                <li class="nav-item" role="cierre">
                  <button class="nav-link" id="cierre-tab" data-bs-toggle="tab" data-bs-target="#cierre-justified" type="button" role="tab" aria-controls="cierre" aria-selected="false">Cierre</button>
                </li>                                
              </ul>


              <div class="tab-content pt-2" id="myTabjustifiedContent">
                <div class="tab-pane fade show active" id="apropiacion-justified" role="tabpanel" aria-labelledby="apropiacion-tab">
                   <div id='tablaapropiacion'></div> 
                  1
                </div>
                <div class="tab-pane fade" id="adicion-justified" role="tabpanel" aria-labelledby="adicion-tab">
                  2
                </div>
                <div class="tab-pane fade" id="cdp-justified" role="tabpanel" aria-labelledby="cdp-tab">
                  3
                </div>
                <div class="tab-pane fade" id="rp-justified" role="tabpanel" aria-labelledby="rp-tab">
                  4
                </div>
                <div class="tab-pane fade" id="reduccion-justified" role="tabpanel" aria-labelledby="reduccion-tab">
                  5
                </div>
                <div class="tab-pane fade" id="modificacdp-justified" role="tabpanel" aria-labelledby="modificacdp-tab">
                  6
                </div>
                <div class="tab-pane fade" id="modificarp-justified" role="tabpanel" aria-labelledby="modificarp-tab">
                  7
                </div>            
                <div class="tab-pane fade" id="traslado-justified" role="tabpanel" aria-labelledby="traslado-tab">
                  8
                </div>
                <div class="tab-pane fade" id="recaudo-justified" role="tabpanel" aria-labelledby="recaudo-tab">
                  9
                </div>
                <div class="tab-pane fade" id="cierre-justified" role="tabpanel" aria-labelledby="cierre-tab">
                  10
                </div>


              </div><!-- End Default Tabs -->
            </div>  
          </div>  
        </div>
      </div>
    </section>      
  </main><!-- End #main -->



<script type="text/javascript">           
    function cargarapropiacion1(){
    
        var ano='<?php echo $ano ?>';
        var accion='cargarapropiacion';
    
    alert(ano+'   '+accion)
        $.ajax({
            url:"presupuesto-acciones.php",
            type:"POST",
            cache:false,
            data:{ano:ano},
            success: function(resp){alert(resp);return;
                $('#tablaapropiacion').html(resp);
            }                
        });
                
    }

</script>       

<script type="text/javascript">           
    function cargarapropiacion= (ano) => {
          let accion = 'cargarapropiacion';

          let data = new FormData();
          data.append('ano', ano);
          data.append('accion', accion);

          fetch('presupuesto-acciones.php',{
            method: 'POST',
            body: data
          })
          .then(response=>response.text())
          .then(result=>{
                $('#tablaapropiacion').html(response);
          })
    } 
  </script>

  <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">
    <div class="copyright">
      &copy; Derechos reservados <strong><span>Acadsuite Net</span></strong>
    </div>
    <div class="credits">
      <!-- All the links in the footer should remain intact. -->
      <!-- You can delete the links only if you purchased the pro version. -->
      <!-- Licensing information: https://bootstrapmade.com/license/ -->
      <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
      Diseñado por <a href="https://xarasoft.co/">Soluciones en la nube Xarasoft</a>
    </div>
  </footer><!-- End Footer -->


  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="../../assets/vendor/apexcharts/apexcharts.min.js"></script>
  <script src="../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="../../assets/vendor/chart.js/chart.umd.js"></script>
  <script src="../../assets/vendor/echarts/echarts.min.js"></script>
  <script src="../../assets/vendor/quill/quill.min.js"></script>
  <script src="../../assets/vendor/simple-datatables/simple-datatables.js"></script>
  <script src="../../assets/vendor/tinymce/tinymce.min.js"></script>
  <script src="../../assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="../../assets/js/main.js"></script>


</body>

</html>