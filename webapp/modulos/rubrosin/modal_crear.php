<!-- MODAL CREAR -->
<div class="modal fade" id="modalCrear" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="createForm">
                <input type="hidden" name="action" value="crear">
                <div class="modal-body my-3">
                    <label>ID Rubro</label>
                    <input type="number" name="idrubro" id="createIdrubro" required class="form-control">
                    <label>Código Rubro</label>
                    <input type="text" name="codrubro" id="createCodrubro" required class="form-control">
                    <label>Nombre Rubro</label>
                    <input type="text" name="nomrubro" id="createNomrubro" required class="form-control">
                    <label>ID Fuente</label>
                    <input type="number" name="idfuente" id="createIdfuente" required class="form-control">
                    <label>ID Subfuente</label>
                    <input type="number" name="idsubfuente" id="createIdsubfuente" required class="form-control">
                    <label>Modalidad</label>
                    <input type="text" name="modalidad" id="createModalidad" required class="form-control">
                    <label>Subfuente</label>
                    <input type="number" name="subfuente" id="createSubfuente" required class="form-control">
                    <label>ID Capítulo</label>
                    <input type="number" name="idcapitulo" id="createIdcapitulo" required class="form-control">
                    <label>Subcapítulo</label>
                    <input type="number" name="subcapitulo" id="createSubcapitulo" required class="form-control">
                    <label>Oculto</label>
                    <input type="number" name="oculto" id="createOculto" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>