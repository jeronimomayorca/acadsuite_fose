<?php include("crud.php") ?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acadsuite FOSE - Gestión de Usuarios</title>
    <link href="../../images/favicon.png" rel="icon">
    <link href="../../assets/img/apple-touch-icon.png" rel="apple-touch-icon">
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
    <link href="../../../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../../../assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="../../../assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="../../../assets/vendor/quill/quill.snow.css" rel="stylesheet">
    <link href="../../../assets/vendor/quill/quill.bubble.css" rel="stylesheet">
    <link href="../../../assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="../../../assets/vendor/simple-datatables/style.css" rel="stylesheet">
    <link href="../../../assets/css/style.css" rel="stylesheet">
</head>

<body>
    <?php include("../../templates/header.php"); ?>
    <?php include("../../templates/sidebar.php"); ?>
    <main id="main" class="main">
        <div class="pagetitle">
            <h1>Gestión de Usuarios <?php echo $ano; ?></h1>
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="../../menu.php">Inicio</a></li>
                    <li class="breadcrumb-item active">Usuarios</li>
                </ol>
            </nav>
            <nav>
                <a class="nav-link" href="../../menu.php" style="color: indigo;" tabindex="-1" aria-disabled="true">Retornar</a>
            </nav>
        </div>
        <div class="d-flex justify-content-between my-4">
            <h1>Gestión de Usuarios <?php echo $ano; ?></h1>
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalCrear">Crear registro</button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>ID Usuario</th>
                    <th>Nombre Usuario</th>
                    <th>Cédula Usuario</th>
                    <th>Cargo Usuario</th>
                    <th>Dependencia Usuario</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Alumnos</th>
                    <th>Currículo</th>
                    <th>Logros</th>
                    <th>Docentes</th>
                    <th>Matriculas</th>
                    <th>Grupos</th>
                    <th>Notas</th>
                    <th>Finales</th>
                    <th>Informes</th>
                    <th>Copias</th>
                    <th>Parámetros Esc</th>
                    <th>Alumnos Esc</th>
                    <th>Currículo Esc</th>
                    <th>Logros Esc</th>
                    <th>Docentes Esc</th>
                    <th>Matriculas Esc</th>
                    <th>Grupos Esc</th>
                    <th>Notas Esc</th>
                    <th>Finales Esc</th>
                    <th>Pregunta</th>
                    <th>Respuesta</th>
                    <th>SMS</th>
                    <th>Logs</th>
                    <th class="text-end">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php while ($row = $result->fetch_assoc()): ?>
                    <tr>
                        <td><?= htmlspecialchars($row['id_usuario']) ?></td>
                        <td><?= htmlspecialchars($row['nombre_usuario']) ?></td>
                        <td><?= htmlspecialchars($row['cedula_usuario']) ?></td>
                        <td><?= htmlspecialchars($row['cargo_usuario']) ?></td>
                        <td><?= htmlspecialchars($row['dependencia_usuario']) ?></td>
                        <td><?= htmlspecialchars($row['username_usuario']) ?></td>
                        <td><?= htmlspecialchars($row['password_usuario']) ?></td>
                        <td><?= htmlspecialchars($row['alumnos']) ?></td>
                        <td><?= htmlspecialchars($row['curriculo']) ?></td>
                        <td><?= htmlspecialchars($row['logros']) ?></td>
                        <td><?= htmlspecialchars($row['docentes']) ?></td>
                        <td><?= htmlspecialchars($row['matriculas']) ?></td>
                        <td><?= htmlspecialchars($row['grupos']) ?></td>
                        <td><?= htmlspecialchars($row['notas']) ?></td>
                        <td><?= htmlspecialchars($row['finales']) ?></td>
                        <td><?= htmlspecialchars($row['informes']) ?></td>
                        <td><?= htmlspecialchars($row['copias']) ?></td>
                        <td><?= htmlspecialchars($row['parametros_esc']) ?></td>
                        <td><?= htmlspecialchars($row['alumnos_esc']) ?></td>
                        <td><?= htmlspecialchars($row['curriculo_esc']) ?></td>
                        <td><?= htmlspecialchars($row['logros_esc']) ?></td>
                        <td><?= htmlspecialchars($row['docentes_esc']) ?></td>
                        <td><?= htmlspecialchars($row['matriculas_esc']) ?></td>
                        <td><?= htmlspecialchars($row['grupos_esc']) ?></td>
                        <td><?= htmlspecialchars($row['notas_esc']) ?></td>
                        <td><?= htmlspecialchars($row['finales_esc']) ?></td>
                        <td><?= htmlspecialchars($row['pregunta']) ?></td>
                        <td><?= htmlspecialchars($row['respuesta']) ?></td>
                        <td><?= htmlspecialchars($row['sms']) ?></td>
                        <td><?= htmlspecialchars($row['logs']) ?></td>
                        <td class="d-flex justify-content-end">
                            <button type="button" class="btn btn-primary edit-btn mx-1"
                                data-id="<?= $row['id_usuario'] ?>"
                                data-nombre_usuario="<?= htmlspecialchars($row['nombre_usuario']) ?>"
                                data-cedula_usuario="<?= htmlspecialchars($row['cedula_usuario']) ?>"
                                data-cargo_usuario="<?= htmlspecialchars($row['cargo_usuario']) ?>"
                                data-dependencia_usuario="<?= htmlspecialchars($row['dependencia_usuario']) ?>"
                                data-username_usuario="<?= htmlspecialchars($row['username_usuario']) ?>"
                                data-password_usuario="<?= htmlspecialchars($row['password_usuario']) ?>"
                                data-alumnos="<?= htmlspecialchars($row['alumnos']) ?>"
                                data-curriculo="<?= htmlspecialchars($row['curriculo']) ?>"
                                data-logros="<?= htmlspecialchars($row['logros']) ?>"
                                data-docentes="<?= htmlspecialchars($row['docentes']) ?>"
                                data-matriculas="<?= htmlspecialchars($row['matriculas']) ?>"
                                data-grupos="<?= htmlspecialchars($row['grupos']) ?>"
                                data-notas="<?= htmlspecialchars($row['notas']) ?>"
                                data-finales="<?= htmlspecialchars($row['finales']) ?>"
                                data-informes="<?= htmlspecialchars($row['informes']) ?>"
                                data-copias="<?= htmlspecialchars($row['copias']) ?>"
                                data-parametros_esc="<?= htmlspecialchars($row['parametros_esc']) ?>"
                                data-alumnos_esc="<?= htmlspecialchars($row['alumnos_esc']) ?>"
                                data-curriculo_esc="<?= htmlspecialchars($row['curriculo_esc']) ?>"
                                data-logros_esc="<?= htmlspecialchars($row['logros_esc']) ?>"
                                data-docentes_esc="<?= htmlspecialchars($row['docentes_esc']) ?>"
                                data-matriculas_esc="<?= htmlspecialchars($row['matriculas_esc']) ?>"
                                data-grupos_esc="<?= htmlspecialchars($row['grupos_esc']) ?>"
                                data-notas_esc="<?= htmlspecialchars($row['notas_esc']) ?>"
                                data-finales_esc="<?= htmlspecialchars($row['finales_esc']) ?>"
                                data-pregunta="<?= htmlspecialchars($row['pregunta']) ?>"
                                data-respuesta="<?= htmlspecialchars($row['respuesta']) ?>"
                                data-sms="<?= htmlspecialchars($row['sms']) ?>"
                                data-logs="<?= htmlspecialchars($row['logs']) ?>"
                                data-bs-toggle="modal" data-bs-target="#editTerceroModal">Editar</button>
                            <button type="button" class="btn btn-danger delete-btn mx-1" data-id="<?= $row['id_usuario'] ?>">Eliminar</button>
                        </td>
                    </tr>
                <?php endwhile; ?>
            </tbody>
        </table>
    </main>

    <?php include("modal_crear.php") ?>
    <?php include("modal_editar.php") ?>

    <!-- Footer -->
    <?php include("../../templates/footer.php"); ?>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center">
        <i class="bi bi-arrow-up-short"></i>
    </a>
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
    <script src="script.js"></script>
</body>

</html>