<!-- MODAL CREAR -->
<div class="modal fade" id="modalCrear" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="createForm">
                <input type="hidden" name="action" value="crear">
                <div class="modal-body my-3">
                    <!-- Como el id es autogenerado, no se solicita en el formulario -->
                    <label>Tipocontribuyente</label>
                    <input type="text" name="tipocontribuyente" id="createTipocontribuyente" required class="form-control">
                    <label>IVA</label>
                    <input type="number" name="iva" id="createIva" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>