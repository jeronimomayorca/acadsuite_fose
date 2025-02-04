<!-- MODAL EDITAR -->
<div class="modal fade" id="editTipocontribuyenteModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editForm">
                <input type="hidden" name="action" value="editar">
                <input type="hidden" name="id" id="editId">
                <div class="modal-body">
                    <label>Tipocontribuyente</label>
                    <input type="text" name="tipocontribuyente" id="editTipocontribuyente" required class="form-control">
                    <label>IVA</label>
                    <input type="number" name="iva" id="editIva" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>