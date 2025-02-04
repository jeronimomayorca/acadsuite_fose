<?php
//session_start();
$mensajes = 0;
$caracteres_permitidos  =  '0123456789';
$token = substr(str_shuffle($caracteres_permitidos), 0, 6);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Login Acadsuite</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link rel="shortcut icon" type="image/png" href="../images/favicon.jpg">
    <link href="../images/favicon.jpg" rel="icon">
    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="../assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="../assets/vendor/quill/quill.snow.css" rel="stylesheet">
    <link href="../assets/vendor/quill/quill.bubble.css" rel="stylesheet">
    <link href="../assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="../assets/vendor/simple-datatables/style.css" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="../assets/css/style.css" rel="stylesheet">

</head>

<body>

    <main>
        <div class="container">
            <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div class="card mb-3">
                                <div class="card-body">

                                    <div class="pt-4 pb-2">
                                        <center><img src="../images/favicon2.png" width="20%" height="20%" style="padding-top:2%;"></center>
                                        <center><label style="font-size:1.8em; color:maroon; font-family:sans-serif; font-style:italic;font-weight: bold;">&nbsp;Acadsuite</label></center>
                                        <center><label style="font-size:1.2em; color:gray; font-family:sans-serif; ">Módulo Financiero</label></center>
                                        <center><label style="font-size:1.2em; color:gray; font-family:sans-serif; ">FOSE</label></center>

                                        <h2 class="card-title text-center pb-0 fs-5">Iniciar sesión</h2>
                                    </div>
                                    <form action="login.php" method="POST" class="row g-3 needs-validation">


                                        <div class="col-12">
                                            <label for="yourUsername" class="form-label">Username</label>
                                            <input type="text" name="username" class="form-control" id="username" required>
                                            <div class="invalid-feedback">Ingrese su nombre de usuario!</div>
                                        </div>

                                        <div class="col-12">
                                            <label for="yourPassword" class="form-label">Contraseña</label>
                                            <input type="password" name="password" class="form-control" id="password" required>
                                            <div class="invalid-feedback">Ingrese su contraseña!</div>
                                        </div>

                                        <!-- <div class="col-12">
                                                <label for="colegio" class="form-label">Institución</label>
                                                <select id="plantel" class="form-select">
                                                  <div id="planteles"></div>
                                                </select>  
                                            </div> -->

                                        <br>
                                        <div class="col-12">
                                            <br>
                                            <button class="btn btn-primary w-100" type="submit">Acceder</button>
                                        </div>
                                        <div class="col-12">
                                            <center><img src="../images/logoxarasoft.jpg" width="30%" height="30%" style="padding-top:2%;"> </center>
                                        </div>
                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main><!-- End #main -->

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files -->
    <script src="../assets/vendor/apexcharts/apexcharts.min.js"></script>
    <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../assets/vendor/chart.js/chart.umd.js"></script>
    <script src="../assets/vendor/echarts/echarts.min.js"></script>
    <script src="../assets/vendor/quill/quill.min.js"></script>
    <script src="../assets/vendor/simple-datatables/simple-datatables.js"></script>
    <script src="../assets/vendor/tinymce/tinymce.min.js"></script>
    <script src="../assets/vendor/php-email-form/validate.js"></script>

    <!-- Template Main JS File -->
    <script src="../assets/js/main.js"></script>
</body>

</html>