<!-- MODAL CREAR -->
<div class="modal fade" id="modalCrear" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="createForm">
                <input type="hidden" name="action" value="crear">
                <div class="modal-body my-3">
                    <!-- Como idtiporetencion es AUTO_INCREMENT, no se solicita -->
                    <label>Tiporetencion</label>
                    <input type="text" name="tiporetencion" id="createTiporetencion" required class="form-control">
                    <label>Descuento</label>
                    <input type="text" name="descuento" id="createDescuento" required class="form-control">
                    <label>Identidad</label>
                    <input type="number" name="identidad" id="createIdentidad" required class="form-control">
                    <label>Activo</label>
                    <input type="number" name="activo" id="createActivo" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>