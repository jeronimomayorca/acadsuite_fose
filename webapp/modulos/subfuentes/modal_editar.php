<!-- MODAL EDITAR -->
<div class="modal fade" id="editSubfuenteModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editForm">
                <input type="hidden" name="action" value="editar">
                <!-- Campo oculto para el ID -->
                <input type="hidden" name="id" id="editId">
                <div class="modal-body">
                    <label>ID Fuente</label>
                    <input type="number" name="idfuente" id="editIdfuente" required class="form-control">
                    <label>Subfuente</label>
                    <input type="text" name="subfuente" id="editSubfuente" required class="form-control">
                    <label>Distribución Niv</label>
                    <input type="number" name="distribucionniv" id="editDistribucionniv" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>