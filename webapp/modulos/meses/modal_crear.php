<!-- MODAL CREAR -->
<div class="modal fade" id="modalCrear" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="createForm">
                <input type="hidden" name="action" value="crear">
                <div class="modal-body my-3">
                    <label class="mb-2">ID</label>
                    <input type="number" name="idmes" id="createIdmes" required class="form-control">
                    <label class="mb-2">Número de Mes</label>
                    <input type="text" name="mesnum" id="createMesnum" required maxlength="2" class="form-control">
                    <label class="mb-2">Mes en Letras</label>
                    <input type="text" name="mesletras" id="createMesletras" required maxlength="15" class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>