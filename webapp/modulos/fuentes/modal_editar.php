<!-- MODAL EDITAR -->
<div class="modal fade" id="editFuenteModal" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-content">
            <form id="editForm">
                <input type="hidden" name="action" value="editar">
                <input type="hidden" name="id" id="editId">
                <div class="modal-body">
                    <label>Código Rubro</label>
                    <input type="text" name="codrubro" id="editCodrubro" required class="form-control">
                    <label>Fuente</label>
                    <input type="text" name="fuente" id="editFuente" required class="form-control">
                    <label>ID Capítulo</label>
                    <input type="number" name="idcapitulo" id="editIdcapitulo" required class="form-control">
                    <label>Código Sifse</label>
                    <input type="number" name="codsifse" id="editCodsifse" required class="form-control">
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </form>
        </div>
    </div>
</div>