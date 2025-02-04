<!-- MODAL EDITAR -->
<div class="modal fade" id="editTerceroModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editForm">
                <input type="hidden" name="action" value="editar">
                <input type="hidden" name="id" id="editId">
                <div class="modal-body">
                    <label>Nombre Usuario</label>
                    <input type="text" name="nombre_usuario" id="editNombre_usuario" required class="form-control">
                    <label>Cédula Usuario</label>
                    <input type="text" name="cedula_usuario" id="editCedula_usuario" required class="form-control">
                    <label>Cargo Usuario</label>
                    <input type="text" name="cargo_usuario" id="editCargo_usuario" required class="form-control">
                    <label>Dependencia Usuario</label>
                    <input type="text" name="dependencia_usuario" id="editDependencia_usuario" required class="form-control">
                    <label>Username Usuario</label>
                    <input type="text" name="username_usuario" id="editUsername_usuario" required class="form-control">
                    <label>Password Usuario</label>
                    <input type="text" name="password_usuario" id="editPassword_usuario" required class="form-control">
                    <label>Alumnos</label>
                    <input type="number" name="alumnos" id="editAlumnos" required class="form-control">
                    <label>Currículo</label>
                    <input type="number" name="curriculo" id="editCurriculo" required class="form-control">
                    <label>Logros</label>
                    <input type="number" name="logros" id="editLogros" required class="form-control">
                    <label>Docentes</label>
                    <input type="number" name="docentes" id="editDocentes" required class="form-control">
                    <label>Matriculas</label>
                    <input type="number" name="matriculas" id="editMatriculas" required class="form-control">
                    <label>Grupos</label>
                    <input type="number" name="grupos" id="editGrupos" required class="form-control">
                    <label>Notas</label>
                    <input type="number" name="notas" id="editNotas" required class="form-control">
                    <label>Finales</label>
                    <input type="number" name="finales" id="editFinales" required class="form-control">
                    <label>Informes</label>
                    <input type="number" name="informes" id="editInformes" required class="form-control">
                    <label>Copias</label>
                    <input type="number" name="copias" id="editCopias" required class="form-control">
                    <label>Parámetros Esc</label>
                    <input type="number" name="parametros_esc" id="editParametros_esc" required class="form-control">
                    <label>Alumnos Esc</label>
                    <input type="number" name="alumnos_esc" id="editAlumnos_esc" required class="form-control">
                    <label>Currículo Esc</label>
                    <input type="number" name="curriculo_esc" id="editCurriculo_esc" required class="form-control">
                    <label>Logros Esc</label>
                    <input type="number" name="logros_esc" id="editLogros_esc" required class="form-control">
                    <label>Docentes Esc</label>
                    <input type="number" name="docentes_esc" id="editDocentes_esc" required class="form-control">
                    <label>Matriculas Esc</label>
                    <input type="number" name="matriculas_esc" id="editMatriculas_esc" required class="form-control">
                    <label>Grupos Esc</label>
                    <input type="number" name="grupos_esc" id="editGrupos_esc" required class="form-control">
                    <label>Notas Esc</label>
                    <input type="number" name="notas_esc" id="editNotas_esc" required class="form-control">
                    <label>Finales Esc</label>
                    <input type="number" name="finales_esc" id="editFinales_esc" required class="form-control">
                    <label>Pregunta</label>
                    <input type="text" name="pregunta" id="editPregunta" required class="form-control">
                    <label>Respuesta</label>
                    <input type="text" name="respuesta" id="editRespuesta" required class="form-control">
                    <label>SMS</label>
                    <input type="number" name="sms" id="editSms" required class="form-control">
                    <label>Logs</label>
                    <input type="number" name="logs" id="editLogs" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>