<!-- MODAL EDITAR -->
<div class="modal fade" id="editSedeModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editForm">
                <input type="hidden" name="action" value="editar">
                <input type="hidden" name="id" id="editId">
                <div class="modal-body">
                    <label>Sede</label>
                    <input type="text" name="sede" id="editSede" required class="form-control">
                    <label>ID IE</label>
                    <input type="number" name="idie" id="editIdie" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>