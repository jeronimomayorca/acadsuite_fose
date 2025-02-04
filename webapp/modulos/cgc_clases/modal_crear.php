<!-- MODAL CREAR -->
<div class="modal fade" id="modalCrear" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="createForm">
                <input type="hidden" name="action" value="crear">
                <div class="modal-body my-3">
                    <label class="mb-2">Código</label>
                    <input type="text" name="codigo" id="createCodigo" required class="form-control">

                    <label class="mb-2">Clase</label>
                    <input type="text" name="clase" id="createClase" required class="form-control">

                    <label class="mb-2">Nivel</label>
                    <input type="number" name="nivel" id="createNivel" required class="form-control">

                    <label class="mb-2">Naturaleza Cuenta</label>
                    <input type="text" name="naturalezacuenta" id="createNaturalezacuenta" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>