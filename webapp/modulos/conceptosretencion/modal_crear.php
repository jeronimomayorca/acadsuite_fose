<!-- MODAL CREAR -->
<div class="modal fade" id="modalCrear" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="createForm">
                <input type="hidden" name="action" value="crear">
                <div class="modal-body my-3">
                    <label class="mb-2">ID Categoria Retención</label>
                    <input type="number" name="idcategoriaret" id="createIdcategoriaret" required class="form-control">
                    <label class="mb-2">Concepto de Retención</label>
                    <input type="text" name="conceptoret" id="createConceptoret" required class="form-control">
                    <label class="mb-2">Num UVT</label>
                    <input type="number" name="numuvt" id="createNumuvt" required class="form-control">
                    <label class="mb-2">Base</label>
                    <input type="number" name="base" id="createBase" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>