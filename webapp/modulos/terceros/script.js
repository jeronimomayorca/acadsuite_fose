document.addEventListener("DOMContentLoaded", () => {
    const processResponse = (response) => {
        return response.text().then(text => {
            if (!text) {
                throw new Error("Respuesta vacía recibida desde el servidor.");
            }
            try {
                return JSON.parse(text);
            } catch (e) {
                throw new Error("Error al parsear JSON: " + e.message + ". Respuesta recibida: " + text);
            }
        });
    };

    // Formulario de creación
    const createForm = document.getElementById("createForm");
    if (createForm) {
        createForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(createForm);
            fetch("terceros.php", {
                method: "POST",
                body: formData
            })
                .then(processResponse)
                .then(data => {
                    alert(data.message);
                    if (data.status === "success") {
                        window.location.reload();
                    }
                })
                .catch(error => console.error("Error:", error));
        });
    }

    // Formulario de edición
    const editForm = document.getElementById("editForm");
    if (editForm) {
        editForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new FormData(editForm);
            fetch("terceros.php", {
                method: "POST",
                body: formData
            })
                .then(processResponse)
                .then(data => {
                    alert(data.message);
                    if (data.status === "success") {
                        window.location.reload();
                    }
                })
                .catch(error => console.error("Error:", error));
        });
    }

    // Botones de eliminación
    document.querySelectorAll(".delete-btn").forEach((button) => {
        button.addEventListener("click", function () {
            if (!confirm("¿Estás seguro de que deseas eliminar este registro?")) return;
            const formData = new FormData();
            formData.append("action", "eliminar");
            formData.append("id", this.dataset.id);
            fetch("terceros.php", {
                method: "POST",
                body: formData
            })
                .then(processResponse)
                .then(data => {
                    alert(data.message);
                    if (data.status === "success") {
                        window.location.reload();
                    }
                })
                .catch(error => console.error("Error:", error));
        });
    });

    // Botones de edición para llenar el modal
    document.querySelectorAll(".edit-btn").forEach((button) => {
        button.addEventListener("click", function () {
            document.getElementById("editId").value = this.dataset.id;
            document.getElementById("editNombretercero").value = this.dataset.nombretercero;
            document.getElementById("editIdtipodoc").value = this.dataset.idtipodoc;
            document.getElementById("editNumdoc").value = this.dataset.numdoc;
            document.getElementById("editTelefono").value = this.dataset.telefono;
            document.getElementById("editDireccion").value = this.dataset.direccion;
            document.getElementById("editCiudad").value = this.dataset.ciudad;
            document.getElementById("editEmail").value = this.dataset.email;
            document.getElementById("editIdtipocont").value = this.dataset.idtipocont;
            document.getElementById("editDeclara").value = this.dataset.declara;
            document.getElementById("editIdie").value = this.dataset.idie;
            document.getElementById("editIduser").value = this.dataset.iduser;
        });
    });
});