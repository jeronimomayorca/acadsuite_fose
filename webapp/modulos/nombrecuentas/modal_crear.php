<!-- MODAL CREAR -->
<div class="modal fade" id="modalCrear" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="createForm">
                <input type="hidden" name="action" value="crear">
                <div class="modal-body my-3">
                    <label>ID Nombre Cuenta</label>
                    <input type="number" name="idnombrecuenta" id="createIdnombrecuenta" required class="form-control">
                    <label>Orden</label>
                    <input type="number" name="orden" id="createOrden" required class="form-control">
                    <label>Nombre Cuenta</label>
                    <input type="text" name="nombrecuenta" id="createNombrecuenta" required class="form-control">
                    <label>Tipo Cuenta</label>
                    <input type="text" name="tipocuenta" id="createTipocuenta" required class="form-control">
                    <label>Modalidad</label>
                    <input type="text" name="modalidad" id="createModalidad" required class="form-control">
                    <label>ID Auxiliar</label>
                    <input type="number" name="idauxiliar" id="createIdauxiliar" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>