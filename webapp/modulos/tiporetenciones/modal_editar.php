<!-- MODAL EDITAR -->
<div class="modal fade" id="editTiporetencionesModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editForm">
                <input type="hidden" name="action" value="editar">
                <input type="hidden" name="id" id="editId">
                <div class="modal-body">
                    <label>Tiporetencion</label>
                    <input type="text" name="tiporetencion" id="editTiporetencion" required class="form-control">
                    <label>Descuento</label>
                    <input type="text" name="descuento" id="editDescuento" required class="form-control">
                    <label>Identidad</label>
                    <input type="number" name="identidad" id="editIdentidad" required class="form-control">
                    <label>Activo</label>
                    <input type="number" name="activo" id="editActivo" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>