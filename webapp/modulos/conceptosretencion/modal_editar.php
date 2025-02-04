<!-- MODAL EDITAR -->
<div class="modal fade" id="editConceptoRetModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editForm">
                <input type="hidden" name="action" value="editar">
                <input type="hidden" name="id" id="editId">
                <div class="modal-body">
                    <label>ID Categoria Retención</label>
                    <input type="number" name="idcategoriaret" id="editIdcategoriaret" required class="form-control">
                    <label>Concepto de Retención</label>
                    <input type="text" name="conceptoret" id="editConceptoret" required class="form-control">
                    <label>Num UVT</label>
                    <input type="number" name="numuvt" id="editNumuvt" required class="form-control">
                    <label>Base</label>
                    <input type="number" name="base" id="editBase" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>