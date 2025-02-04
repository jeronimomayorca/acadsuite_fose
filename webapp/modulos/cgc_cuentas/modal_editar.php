<!-- MODAL EDITAR -->
<div class="modal fade" id="editCuentaModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editForm">
                <input type="hidden" name="action" value="editar">
                <input type="hidden" name="id" id="editId">
                <div class="modal-body">
                    <label>Código</label>
                    <input type="text" name="codigo" id="editCodigo" required class="form-control">
                    <label>Cuenta</label>
                    <input type="text" name="cuenta" id="editCuenta" required class="form-control">
                    <label>ID Grupo</label>
                    <input type="number" name="idgrupo" id="editIdgrupo" required class="form-control">
                    <label>Nivel</label>
                    <input type="number" name="nivel" id="editNivel" required class="form-control">
                    <label>Naturaleza Cuenta</label>
                    <input type="number" name="naturalezacuenta" id="editNaturalezacuenta" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>