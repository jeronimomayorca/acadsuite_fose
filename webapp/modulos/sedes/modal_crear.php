<!-- MODAL CREAR -->
<div class="modal fade" id="modalCrear" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="createForm">
                <input type="hidden" name="action" value="crear">
                <div class="modal-body my-3">
                    <label>ID Sede</label>
                    <input type="number" name="idsede" id="createIdsede" required class="form-control">
                    <label>Sede</label>
                    <input type="text" name="sede" id="createSede" required class="form-control">
                    <label>ID IE</label>
                    <input type="number" name="idie" id="createIdie" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>