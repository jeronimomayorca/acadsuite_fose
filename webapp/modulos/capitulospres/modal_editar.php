<!-- MODAL EDITAR -->
<div class="modal fade" id="editCapituloModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editForm">
                <input type="hidden" name="action" value="editar">
                <input type="hidden" name="id" id="editId">
                <div class="modal-body">
                    <label>Código</label>
                    <input type="text" name="codigo" id="editCodigo" required class="form-control">
                    <label>Nombre</label>
                    <input type="text" name="nombre" id="editNombre" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>