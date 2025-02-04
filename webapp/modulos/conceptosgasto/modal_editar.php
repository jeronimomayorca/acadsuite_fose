<!-- MODAL EDITAR -->
<div class="modal fade" id="editConceptoModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editForm">
                <input type="hidden" name="action" value="editar">
                <input type="hidden" name="id" id="editId">
                <div class="modal-body">
                    <label>ID Rubro</label>
                    <input type="number" name="idrubro" id="editIdrubro" required class="form-control">
                    <label>Concepto</label>
                    <input type="text" name="concepto" id="editConcepto" required class="form-control">
                    <label>Objetivo</label>
                    <textarea name="objetivo" id="editObjetivo" required class="form-control"></textarea>
                    <label>ID Rubro In</label>
                    <input type="number" name="idrubroin" id="editIdrubroin" required class="form-control">
                    <label>Tipo</label>
                    <input type="text" name="tipo" id="editTipo" required class="form-control">
                    <label>Vida Útil</label>
                    <input type="number" name="vidautil" id="editVidautil" required class="form-control">
                    <label>Costo Residual</label>
                    <input type="number" name="costoresidual" id="editCostoresidual" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>