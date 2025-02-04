<!-- MODAL EDITAR -->
<div class="modal fade" id="editCuentaModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editForm">
                <input type="hidden" name="action" value="editar">
                <input type="hidden" name="id" id="editId">
                <div class="modal-body">
                    <label>Número de Cuenta</label>
                    <input type="text" name="numerocuenta" id="editNumerocuenta" required class="form-control">
                    <label>Tipo de Cuenta</label>
                    <input type="text" name="tipocuenta" id="editTipocuenta" required class="form-control">
                    <label>ID Nombre Cuenta</label>
                    <input type="number" name="idnombrecuenta" id="editIdnombrecuenta" required class="form-control">
                    <label>Transferencia</label>
                    <input type="number" name="transferencia" id="editTransferencia" required class="form-control">
                    <label>ID IE</label>
                    <input type="number" name="idie" id="editIdie" required class="form-control">
                    <label>Usuario</label>
                    <input type="number" name="usuario" id="editUsuario" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>