<!-- MODAL EDITAR -->
<div class="modal fade" id="editMesModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editForm">
                <input type="hidden" name="action" value="editar">
                <input type="hidden" name="id" id="editId">
                <div class="modal-body">
                    <label>Número de Mes</label>
                    <input type="text" name="mesnum" id="editMesnum" required maxlength="2" class="form-control">
                    <label>Mes en Letras</label>
                    <input type="text" name="mesletras" id="editMesletras" required maxlength="15" class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>