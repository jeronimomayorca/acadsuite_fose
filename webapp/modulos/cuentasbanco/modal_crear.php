<!-- MODAL CREAR -->
<div class="modal fade" id="modalCrear" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="createForm">
                <input type="hidden" name="action" value="crear">
                <div class="modal-body my-3">
                    <label class="mb-2">Número de Cuenta</label>
                    <input type="text" name="numerocuenta" id="createNumerocuenta" required class="form-control">
                    <label class="mb-2">Tipo de Cuenta</label>
                    <input type="text" name="tipocuenta" id="createTipocuenta" required class="form-control">
                    <label class="mb-2">ID Nombre Cuenta</label>
                    <input type="number" name="idnombrecuenta" id="createIdnombrecuenta" required class="form-control">
                    <label class="mb-2">Transferencia</label>
                    <input type="number" name="transferencia" id="createTransferencia" required class="form-control">
                    <label class="mb-2">ID IE</label>
                    <input type="number" name="idie" id="createIdie" required class="form-control">
                    <label class="mb-2">Usuario</label>
                    <input type="number" name="usuario" id="createUsuario" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>