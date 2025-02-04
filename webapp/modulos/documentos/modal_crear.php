<!-- MODAL CREAR -->
<div class="modal fade" id="modalCrear" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="createForm">
                <input type="hidden" name="action" value="crear">
                <div class="modal-body my-3">
                    <label class="mb-2">ID Cuenta</label>
                    <input type="number" name="idcuenta" id="createIdcuenta" required class="form-control">
                    <label class="mb-2">Documento</label>
                    <input type="text" name="documento" id="createDocumento" required maxlength="3" class="form-control">
                    <label class="mb-2">Naturaleza</label>
                    <input type="number" name="naturaleza" id="createNaturaleza" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>