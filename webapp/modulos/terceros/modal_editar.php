<!-- MODAL EDITAR -->
<div class="modal fade" id="editTerceroModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editForm">
                <input type="hidden" name="action" value="editar">
                <input type="hidden" name="id" id="editId">
                <div class="modal-body">
                    <label>Nombre Tercero</label>
                    <input type="text" name="nombretercero" id="editNombretercero" required class="form-control">
                    <label>ID Tipo Doc</label>
                    <input type="number" name="idtipodoc" id="editIdtipodoc" required class="form-control">
                    <label>Num Doc</label>
                    <input type="text" name="numdoc" id="editNumdoc" required class="form-control">
                    <label>Teléfono</label>
                    <input type="text" name="telefono" id="editTelefono" required class="form-control">
                    <label>Dirección</label>
                    <input type="text" name="direccion" id="editDireccion" required class="form-control">
                    <label>Ciudad</label>
                    <input type="text" name="ciudad" id="editCiudad" required class="form-control">
                    <label>Email</label>
                    <input type="email" name="email" id="editEmail" required class="form-control">
                    <label>ID Tipo Cont</label>
                    <input type="number" name="idtipocont" id="editIdtipocont" required class="form-control">
                    <label>Declara</label>
                    <input type="number" name="declara" id="editDeclara" required class="form-control">
                    <label>ID IE</label>
                    <input type="number" name="idie" id="editIdie" required class="form-control">
                    <label>ID User</label>
                    <input type="number" name="iduser" id="editIduser" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>