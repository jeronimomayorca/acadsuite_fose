<!-- MODAL CREAR -->
<div class="modal fade" id="modalCrear" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="createForm">
                <input type="hidden" name="action" value="crear">
                <div class="modal-body my-3">
                    <label>Nombre Tercero</label>
                    <input type="text" name="nombretercero" id="createNombretercero" required class="form-control">
                    <label>ID Tipo Doc</label>
                    <input type="number" name="idtipodoc" id="createIdtipodoc" required class="form-control">
                    <label>Num Doc</label>
                    <input type="text" name="numdoc" id="createNumdoc" required class="form-control">
                    <label>Teléfono</label>
                    <input type="text" name="telefono" id="createTelefono" required class="form-control">
                    <label>Dirección</label>
                    <input type="text" name="direccion" id="createDireccion" required class="form-control">
                    <label>Ciudad</label>
                    <input type="text" name="ciudad" id="createCiudad" required class="form-control">
                    <label>Email</label>
                    <input type="email" name="email" id="createEmail" required class="form-control">
                    <label>ID Tipo Cont</label>
                    <input type="number" name="idtipocont" id="createIdtipocont" required class="form-control">
                    <label>Declara</label>
                    <input type="number" name="declara" id="createDeclara" required class="form-control">
                    <label>ID IE</label>
                    <input type="number" name="idie" id="createIdie" required class="form-control">
                    <label>ID User</label>
                    <input type="number" name="iduser" id="createIduser" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>