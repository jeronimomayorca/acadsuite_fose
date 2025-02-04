 <!-- MODAL CREAR -->
 <div class="modal fade" id="modalCrear" tabindex="-1">
     <div class="modal-dialog">
         <div class="modal-content">
             <form id="createForm">
                 <input type="hidden" name="action" value="crear">
                 <div class="modal-body my-3">
                     <label class="mb-2">Identidad</label>
                     <input type="number" name="identidad" id="createIdentidad" required class="form-control">
                     <label class="mb-2">Entidad</label>
                     <input type="text" name="entidad" id="createEntidad" required class="form-control">
                 </div>
                 <div class="modal-footer">
                     <button type="submit" class="btn btn-primary">Guardar</button>
                 </div>
             </form>
         </div>
     </div>
 </div>