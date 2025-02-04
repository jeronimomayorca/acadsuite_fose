<?php include("crud.php") ?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title>Acadsuite FOSE - Gestión de CGC Clases</title>
    <meta content="" name="description">
    <meta content="" name="keywords">
    <!-- Favicons -->
    <link href="../../images/favicon.png" rel="icon">
    <link href="../../assets/img/apple-touch-icon.png" rel="apple-touch-icon">
    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
    <!-- Vendor CSS Files -->
    <link href="../../../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../../../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="../../../assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="../../../assets/vendor/quill/quill.snow.css" rel="stylesheet">
    <link href="../../../assets/vendor/quill/quill.bubble.css" rel="stylesheet">
    <link href="../../../assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="../../../assets/vendor/simple-datatables/style.css" rel="stylesheet">
    <!-- Template Main CSS File -->
    <link href="../../../assets/css/style.css" rel="stylesheet">
</head>

<body>
    <!-- Header -->
    <?php include("../../templates/header.php"); ?>

    <!-- Sidebar -->
    <?php include("../../templates/sidebar.php"); ?>

    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Gestión de CGC Clases <?php echo $ano; ?></h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="../../menu.php">Inicio</a></li>
                    <li class="breadcrumb-item active">CGC Clases</li>
                </ol>
            </nav>
            <nav>
                <a class="nav-link" href="../../menu.php" style="color:indigo;" tabindex="-1" aria-disabled="true">Retornar</a>
            </nav>
        </div>

        <div class="d-flex justify-content-between my-4">
            <h1>Gestión de CGC Clases</h1>
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalCrear">Crear registro</button>
        </div>

        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Código</th>
                    <th>Clase</th>
                    <th>Nivel</th>
                    <th>Naturaleza Cuenta</th>
                    <th class="text-end">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php while ($row = $result->fetch_assoc()): ?>
                    <tr>
                        <td><?= htmlspecialchars($row['idclase']) ?></td>
                        <td><?= htmlspecialchars($row['codigo']) ?></td>
                        <td><?= htmlspecialchars($row['clase']) ?></td>
                        <td><?= htmlspecialchars($row['nivel']) ?></td>
                        <td><?= htmlspecialchars($row['naturalezacuenta']) ?></td>
                        <td class="d-flex justify-content-end">
                            <button type="button" class="btn btn-primary edit-btn mx-1"
                                data-id="<?= $row['idclase'] ?>"
                                data-codigo="<?= htmlspecialchars($row['codigo']) ?>"
                                data-clase="<?= htmlspecialchars($row['clase']) ?>"
                                data-nivel="<?= htmlspecialchars($row['nivel']) ?>"
                                data-naturalezacuenta="<?= htmlspecialchars($row['naturalezacuenta']) ?>"
                                data-bs-toggle="modal" data-bs-target="#editClaseModal">Editar</button>
                            <button type="button" class="btn btn-danger delete-btn mx-1" data-id="<?= $row['idclase'] ?>">Eliminar</button>
                        </td>
                    </tr>
                <?php endwhile; ?>
            </tbody>
        </table>
    </main>

    <?php include("modal_crear.php") ?>
    <?php include("modal_editar.php") ?>

    <!-- Lógica en JavaScript -->
    <script src="script.js"></script>

    <!-- Footer -->
    <?php include("../../templates/footer.php"); ?>

    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    <!-- Vendor JS Files -->
    <script src="../../../assets/vendor/apexcharts/apexcharts.min.js"></script>
    <script src="../../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../../../assets/vendor/chart.js/chart.umd.js"></script>
    <script src="../../../assets/vendor/echarts/echarts.min.js"></script>
    <script src="../../../assets/vendor/quill/quill.min.js"></script>
    <script src="../../../assets/vendor/simple-datatables/simple-datatables.js"></script>
    <script src="../../../assets/vendor/tinymce/tinymce.min.js"></script>
    <script src="../../../assets/vendor/php-email-form/validate.js"></script>

    <!-- Template Main JS File -->
    <script src="../../../assets/js/main.js"></script>
</body>

</html>