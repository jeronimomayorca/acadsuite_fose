<!-- MODAL CREAR -->
<div class="modal fade" id="modalCrear" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="createForm">
                <input type="hidden" name="action" value="crear">
                <div class="modal-body my-3">
                    <!-- id_usuario se genera automáticamente -->
                    <label>Nombre Usuario</label>
                    <input type="text" name="nombre_usuario" id="createNombre_usuario" required class="form-control">
                    <label>Cédula Usuario</label>
                    <input type="text" name="cedula_usuario" id="createCedula_usuario" required class="form-control">
                    <label>Cargo Usuario</label>
                    <input type="text" name="cargo_usuario" id="createCargo_usuario" required class="form-control">
                    <label>Dependencia Usuario</label>
                    <input type="text" name="dependencia_usuario" id="createDependencia_usuario" required class="form-control">
                    <label>Username Usuario</label>
                    <input type="text" name="username_usuario" id="createUsername_usuario" required class="form-control">
                    <label>Password Usuario</label>
                    <input type="text" name="password_usuario" id="createPassword_usuario" required class="form-control">
                    <label>Alumnos</label>
                    <input type="number" name="alumnos" id="createAlumnos" required class="form-control">
                    <label>Currículo</label>
                    <input type="number" name="curriculo" id="createCurriculo" required class="form-control">
                    <label>Logros</label>
                    <input type="number" name="logros" id="createLogros" required class="form-control">
                    <label>Docentes</label>
                    <input type="number" name="docentes" id="createDocentes" required class="form-control">
                    <label>Matriculas</label>
                    <input type="number" name="matriculas" id="createMatriculas" required class="form-control">
                    <label>Grupos</label>
                    <input type="number" name="grupos" id="createGrupos" required class="form-control">
                    <label>Notas</label>
                    <input type="number" name="notas" id="createNotas" required class="form-control">
                    <label>Finales</label>
                    <input type="number" name="finales" id="createFinales" required class="form-control">
                    <label>Informes</label>
                    <input type="number" name="informes" id="createInformes" required class="form-control">
                    <label>Copias</label>
                    <input type="number" name="copias" id="createCopias" required class="form-control">
                    <label>Parámetros Esc</label>
                    <input type="number" name="parametros_esc" id="createParametros_esc" required class="form-control">
                    <label>Alumnos Esc</label>
                    <input type="number" name="alumnos_esc" id="createAlumnos_esc" required class="form-control">
                    <label>Currículo Esc</label>
                    <input type="number" name="curriculo_esc" id="createCurriculo_esc" required class="form-control">
                    <label>Logros Esc</label>
                    <input type="number" name="logros_esc" id="createLogros_esc" required class="form-control">
                    <label>Docentes Esc</label>
                    <input type="number" name="docentes_esc" id="createDocentes_esc" required class="form-control">
                    <label>Matriculas Esc</label>
                    <input type="number" name="matriculas_esc" id="createMatriculas_esc" required class="form-control">
                    <label>Grupos Esc</label>
                    <input type="number" name="grupos_esc" id="createGrupos_esc" required class="form-control">
                    <label>Notas Esc</label>
                    <input type="number" name="notas_esc" id="createNotas_esc" required class="form-control">
                    <label>Finales Esc</label>
                    <input type="number" name="finales_esc" id="createFinales_esc" required class="form-control">
                    <label>Pregunta</label>
                    <input type="text" name="pregunta" id="createPregunta" required class="form-control">
                    <label>Respuesta</label>
                    <input type="text" name="respuesta" id="createRespuesta" required class="form-control">
                    <label>SMS</label>
                    <input type="number" name="sms" id="createSms" required class="form-control">
                    <label>Logs</label>
                    <input type="number" name="logs" id="createLogs" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>