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

<body>

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
        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="../../webapp/presupuesto/presupuesto.php">
              <i class="bi bi-circle"></i><span>Presupuesto</span>
            </a>
          </li>

          <li>
            <a href="../../webapp/contabilidad/contabilidad.php">
              <i class="bi bi-circle"></i><span>Contabilidad</span>
            </a>
          </li>
          <li>
            <a href="tesoreria.php">
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
        <ul id="inventario-nav" class="nav-content" data-bs-parent="#sidebar-nav">
          <li>
            <a href="inventarios.php">
              <i class="bi bi-circle"></i><span>Almacen e inventario</span>
            </a>
          </li>
          <li>
            <a href="movimientos.php">
              <i class="bi bi-circle"></i><span>Movimientos</span>
            </a>
          </li>
          <li>
            <a href="contabilidad.php">
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
      </li><!-- End Icons Nav -->
    </ul>
  </aside><!-- End Sidebar-->

  <main id="main" class="main">

    <div class="pagetitle">
      <h1>Gestión Recursos Físicos / Movimientos <?php echo $ano?></h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="../../webapp/menu.php">Inicio</a></li>
          <li class="breadcrumb-item active">Movimientos</li>
        </ol>
      </nav>

      <div>&nbsp;</div>
    </div><!-- End Page Title -->


    <section class="section movimientosalmacen">
      <div class="row">
        <div class="col-lg-12">

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Movimientos</h5>

              <ul class="nav nav-tabs d-flex" id="myTabjustified" role="tablist">
                <li class="nav-item flex-fill" role="requisicion">
                  <button class="nav-link w-100 active" id="requisicion-tab" data-bs-toggle="tab" data-bs-target="#requisicion-justified" type="button" role="tab" aria-controls="requisicion" aria-selected="false">Requisición</button>
                </li>

                <li class="nav-item flex-fill" role="entradaalmacen">
                  <button class="nav-link w-100" id="entradaalmacen-tab" data-bs-toggle="tab" data-bs-target="#entradaalmacen-justified" type="button" role="tab" aria-controls="entradaalmacen" aria-selected="false">Entrada</button>
                </li>

                <li class="nav-item flex-fill" role="salidaalmacen">
                  <button class="nav-link w-100" id="salidaalmacen-tab" data-bs-toggle="tab" data-bs-target="#salidaalmacen-justified" type="button" role="tab" aria-controls="salidaalmacen" aria-selected="false">Salida</button>
                </li>                                

                <li class="nav-item flex-fill" role="trasladoalmacen">
                  <button class="nav-link w-100" id="trasladoalmacen-tab" data-bs-toggle="tab" data-bs-target="#trasladoalmacen-justified" type="button" role="tab" aria-controls="trasladoalmacen" aria-selected="false">Traslado</button>
                </li>

                <li class="nav-item flex-fill" role="reintegroalmacen">
                  <button class="nav-link w-100" id="reintegroalmacen-tab" data-bs-toggle="tab" data-bs-target="#reintegroalmacen-justified" type="button" role="tab" aria-controls="reintegroalmacen" aria-selected="false">Reintegro</button>
                </li>

                <li class="nav-item flex-fill" role="bajaalmacen">
                  <button class="nav-link w-100" id="bajaalmacen-tab" data-bs-toggle="tab" data-bs-target="#bajaalmacen-justified" type="button" role="tab" aria-controls="bajaalmacen" aria-selected="false">Baja de Almacén</button>
                </li>

                <li class="nav-item flex-fill" role="depreciacionalmacen">
                  <button class="nav-link w-100" id="depreciacionalmacen-tab" data-bs-toggle="tab" data-bs-target="#depreciacionalmacen-justified" type="button" role="tab" aria-controls="depreciacionalmacen" aria-selected="false">Depreciación</button>
                </li>


                <li class="nav-item flex-fill" role="avaluoalmacen">
                  <button class="nav-link w-100" id="avaluoalmacen-tab" data-bs-toggle="tab" data-bs-target="#avaluoalmacen-justified" type="button" role="tab" aria-controls="avaluoalmacen" aria-selected="false">Avalúo Almacén</button>
                </li>


                <li class="nav-item flex-fill" role="movimientoalmacen">
                  <button class="nav-link w-100" id="movimientoalmacen-tab" data-bs-toggle="tab" data-bs-target="#movimientoalmacen-justified" type="button" role="tab" aria-controls="movimientoalmacen" aria-selected="false">Movimiento de Almacén</button>
                </li>
              </ul>


              <div class="tab-content pt-2" id="myTabjustifiedContent">
                <div class="tab-pane fade show active" id="requisicion-justified" role="tabpanel" aria-labelledby="requisicion-tab">
                  1
                </div>
                <div class="tab-pane fade" id="entradaalmacen-justified" role="tabpanel" aria-labelledby="entradaalmacen-tab">
                  2
                </div>
                <div class="tab-pane fade" id="salidaalmacen-justified" role="tabpanel" aria-labelledby="salidaalmacen-tab">
                  3
                </div>
                <div class="tab-pane fade" id="trasladoalmacen-justified" role="tabpanel" aria-labelledby="trasladoalmacen-tab">
                  4
                </div>
                <div class="tab-pane fade" id="reintegroalmacen-justified" role="tabpanel" aria-labelledby="reintegroalmacen-tab">
                  5
                </div>
                <div class="tab-pane fade" id="bajaalmacen-justified" role="tabpanel" aria-labelledby="bajaalmacen-tab">
                  6
                </div>

                <div class="tab-pane fade" id="depreciacionalmacen-justified" role="tabpanel" aria-labelledby="depreciacionalmacen-tab">
                  7
                </div>
                <div class="tab-pane fade" id="avaluoalmacen-justified" role="tabpanel" aria-labelledby="avaluoalmacen-tab">
                  8
                </div>
                <div class="tab-pane fade" id="movimientoalmacen-justified" role="tabpanel" aria-labelledby="movimientoalmacen-tab">
                  9
                </div>

              </div><!-- End Default Tabs -->
            </div>  
          </div>  
        </div>
      </div>
    </section>      
  </main><!-- End #main -->

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