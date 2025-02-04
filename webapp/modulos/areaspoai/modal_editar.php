<!-- Modal Editar -->
<div class="modal fade" id="editAreaModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form method="POST">
                <input type="hidden" name="action" value="edit">
                <input type="hidden" name="id" id="editId">
                <div class="modal-body my-3">
                    <label>Nombre del Área</label>
                    <input type="text" name="area" id="editArea" required class="form-control mt-3">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>