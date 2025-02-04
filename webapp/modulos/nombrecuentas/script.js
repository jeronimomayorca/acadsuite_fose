// Crear registro
document.querySelector("#createForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let formData = new FormData(this);
    fetch("nombrecuentas.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.status === "success") {
                location.reload();
            }
        })
        .catch(error => console.error("Error:", error));
});

// Preparar modal de edición
document.querySelectorAll(".edit-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.getElementById("editId").value = this.dataset.id;
        document.getElementById("editOrden").value = this.dataset.orden;
        document.getElementById("editNombrecuenta").value = this.dataset.nombrecuenta;
        document.getElementById("editTipocuenta").value = this.dataset.tipocuenta;
        document.getElementById("editModalidad").value = this.dataset.modalidad;
        document.getElementById("editIdauxiliar").value = this.dataset.idauxiliar;
    });
});

// Enviar formulario de edición
document.querySelector("#editForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let formData = new FormData(this);
    fetch("nombrecuentas.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.status === "success") {
                location.reload();
            }
        })
        .catch(error => console.error("Error:", error));
});

// Eliminar registro
document.querySelectorAll(".delete-btn").forEach(button => {
    button.addEventListener("click", function () {
        if (!confirm("¿Estás seguro de que deseas eliminar este registro?")) return;
        let formData = new FormData();
        formData.append("action", "eliminar");
        formData.append("id", this.dataset.id);
        fetch("nombrecuentas.php", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                if (data.status === "success") {
                    location.reload();
                }
            })
            .catch(error => console.error("Error:", error));
    });
});