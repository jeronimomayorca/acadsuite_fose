<!-- MODAL CREAR -->
<div class="modal fade" id="modalCrear" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="createForm">
                <input type="hidden" name="action" value="crear">
                <div class="modal-body my-3">
                    <label class="mb-2">ID Rubro</label>
                    <input type="number" name="idrubro" id="createIdrubro" required class="form-control">
                    <label class="mb-2">Concepto</label>
                    <input type="text" name="concepto" id="createConcepto" required class="form-control">
                    <label class="mb-2">Objetivo</label>
                    <textarea name="objetivo" id="createObjetivo" required class="form-control"></textarea>
                    <label class="mb-2">ID Rubro In</label>
                    <input type="number" name="idrubroin" id="createIdrubroin" required class="form-control">
                    <label class="mb-2">Tipo</label>
                    <input type="text" name="tipo" id="createTipo" required class="form-control">
                    <label class="mb-2">Vida Útil</label>
                    <input type="number" name="vidautil" id="createVidautil" required class="form-control">
                    <label class="mb-2">Costo Residual</label>
                    <input type="number" name="costoresidual" id="createCostoresidual" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>