<!-- MODAL CREAR -->
<div class="modal fade" id="modalCrear" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="createForm">
                <input type="hidden" name="action" value="crear">
                <div class="modal-body my-3">
                    <label>ID Subfuente</label>
                    <input type="number" name="idsubfuente" id="createIdsubfuente" required class="form-control">
                    <label>ID Fuente</label>
                    <input type="number" name="idfuente" id="createIdfuente" required class="form-control">
                    <label>Subfuente</label>
                    <input type="text" name="subfuente" id="createSubfuente" required class="form-control">
                    <label>Distribución Niv</label>
                    <input type="number" name="distribucionniv" id="createDistribucionniv" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>