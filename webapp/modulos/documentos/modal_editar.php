<!-- MODAL EDITAR -->
<div class="modal fade" id="editDocumentoModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editForm">
                <input type="hidden" name="action" value="editar">
                <input type="hidden" name="id" id="editId">
                <div class="modal-body">
                    <label>ID Cuenta</label>
                    <input type="number" name="idcuenta" id="editIdcuenta" required class="form-control">
                    <label>Documento</label>
                    <input type="text" name="documento" id="editDocumento" required maxlength="3" class="form-control">
                    <label>Naturaleza</label>
                    <input type="number" name="naturaleza" id="editNaturaleza" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>