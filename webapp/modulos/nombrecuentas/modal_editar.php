<!-- MODAL EDITAR -->
<div class="modal fade" id="editNombreCuentaModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editForm">
                <input type="hidden" name="action" value="editar">
                <input type="hidden" name="id" id="editId">
                <div class="modal-body">
                    <label>Orden</label>
                    <input type="number" name="orden" id="editOrden" required class="form-control">
                    <label>Nombre Cuenta</label>
                    <input type="text" name="nombrecuenta" id="editNombrecuenta" required class="form-control">
                    <label>Tipo Cuenta</label>
                    <input type="text" name="tipocuenta" id="editTipocuenta" required class="form-control">
                    <label>Modalidad</label>
                    <input type="text" name="modalidad" id="editModalidad" required class="form-control">
                    <label>ID Auxiliar</label>
                    <input type="number" name="idauxiliar" id="editIdauxiliar" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>