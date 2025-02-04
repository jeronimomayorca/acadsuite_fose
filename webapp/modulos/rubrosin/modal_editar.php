<!-- MODAL EDITAR -->
<div class="modal fade" id="editRubrosinModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editForm">
                <input type="hidden" name="action" value="editar">
                <!-- El ID se pasa como campo oculto y no se edita -->
                <input type="hidden" name="id" id="editId">
                <div class="modal-body">
                    <label>Código Rubro</label>
                    <input type="text" name="codrubro" id="editCodrubro" required class="form-control">
                    <label>Nombre Rubro</label>
                    <input type="text" name="nomrubro" id="editNomrubro" required class="form-control">
                    <label>ID Fuente</label>
                    <input type="number" name="idfuente" id="editIdfuente" required class="form-control">
                    <label>ID Subfuente</label>
                    <input type="number" name="idsubfuente" id="editIdsubfuente" required class="form-control">
                    <label>Modalidad</label>
                    <input type="text" name="modalidad" id="editModalidad" required class="form-control">
                    <label>Subfuente</label>
                    <input type="number" name="subfuente" id="editSubfuente" required class="form-control">
                    <label>ID Capítulo</label>
                    <input type="number" name="idcapitulo" id="editIdcapitulo" required class="form-control">
                    <label>Subcapítulo</label>
                    <input type="number" name="subcapitulo" id="editSubcapitulo" required class="form-control">
                    <label>Oculto</label>
                    <input type="number" name="oculto" id="editOculto" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>