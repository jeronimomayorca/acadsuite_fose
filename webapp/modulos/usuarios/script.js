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
            fetch("usuarios.php", {
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
            fetch("usuarios.php", {
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
            fetch("usuarios.php", {
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
            document.getElementById("editNombre_usuario").value = this.dataset.nombre_usuario;
            document.getElementById("editCedula_usuario").value = this.dataset.cedula_usuario;
            document.getElementById("editCargo_usuario").value = this.dataset.cargo_usuario;
            document.getElementById("editDependencia_usuario").value = this.dataset.dependencia_usuario;
            document.getElementById("editUsername_usuario").value = this.dataset.username_usuario;
            document.getElementById("editPassword_usuario").value = this.dataset.password_usuario;
            document.getElementById("editAlumnos").value = this.dataset.alumnos;
            document.getElementById("editCurriculo").value = this.dataset.curriculo;
            document.getElementById("editLogros").value = this.dataset.logros;
            document.getElementById("editDocentes").value = this.dataset.docentes;
            document.getElementById("editMatriculas").value = this.dataset.matriculas;
            document.getElementById("editGrupos").value = this.dataset.grupos;
            document.getElementById("editNotas").value = this.dataset.notas;
            document.getElementById("editFinales").value = this.dataset.finales;
            document.getElementById("editInformes").value = this.dataset.informes;
            document.getElementById("editCopias").value = this.dataset.copias;
            document.getElementById("editParametros_esc").value = this.dataset.parametros_esc;
            document.getElementById("editAlumnos_esc").value = this.dataset.alumnos_esc;
            document.getElementById("editCurriculo_esc").value = this.dataset.curriculo_esc;
            document.getElementById("editLogros_esc").value = this.dataset.logros_esc;
            document.getElementById("editDocentes_esc").value = this.dataset.docentes_esc;
            document.getElementById("editMatriculas_esc").value = this.dataset.matriculas_esc;
            document.getElementById("editGrupos_esc").value = this.dataset.grupos_esc;
            document.getElementById("editNotas_esc").value = this.dataset.notas_esc;
            document.getElementById("editFinales_esc").value = this.dataset.finales_esc;
            document.getElementById("editPregunta").value = this.dataset.pregunta;
            document.getElementById("editRespuesta").value = this.dataset.respuesta;
            document.getElementById("editSms").value = this.dataset.sms;
            document.getElementById("editLogs").value = this.dataset.logs;
        });
    });
});