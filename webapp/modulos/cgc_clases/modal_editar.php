<!-- MODAL EDITAR -->
<div class="modal fade" id="editClaseModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editForm">
                <input type="hidden" name="action" value="editar">
                <input type="hidden" name="id" id="editId">
                <div class="modal-body">
                    <label>Código</label>
                    <input type="text" name="codigo" id="editCodigo" required class="form-control">

                    <label>Clase</label>
                    <input type="text" name="clase" id="editClase" required class="form-control">

                    <label>Nivel</label>
                    <input type="number" name="nivel" id="editNivel" required class="form-control">

                    <label>Naturaleza Cuenta</label>
                    <input type="text" name="naturalezacuenta" id="editNaturalezacuenta" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>