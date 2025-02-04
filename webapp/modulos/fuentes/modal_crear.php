<!-- MODAL CREAR -->
<div class="modal fade" id="modalCrear" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="createForm">
                <input type="hidden" name="action" value="crear">
                <div class="modal-body my-3">
                    <label class="mb-2">Código Rubro</label>
                    <input type="text" name="codrubro" id="createCodrubro" required class="form-control">
                    <label class="mb-2">Fuente</label>
                    <input type="text" name="fuente" id="createFuente" required class="form-control">
                    <label class="mb-2">ID Capítulo</label>
                    <input type="number" name="idcapitulo" id="createIdcapitulo" required class="form-control">
                    <label class="mb-2">Código Sifse</label>
                    <input type="number" name="codsifse" id="createCodsifse" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    </div>
</div>