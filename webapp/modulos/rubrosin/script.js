// Crear registro
document.querySelector("#createForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch("rubrosin.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.status === "success") {
                window.location.reload();
            }
        })
        .catch(error => console.error("Error:", error));
});


// Preparar modal de edición
document.querySelectorAll(".edit-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.getElementById("editId").value = this.dataset.id;
        document.getElementById("editCodrubro").value = this.dataset.codrubro;
        document.getElementById("editNomrubro").value = this.dataset.nomrubro;
        document.getElementById("editIdfuente").value = this.dataset.idfuente;
        document.getElementById("editIdsubfuente").value = this.dataset.idsubfuente;
        document.getElementById("editModalidad").value = this.dataset.modalidad;
        document.getElementById("editSubfuente").value = this.dataset.subfuente;
        document.getElementById("editIdcapitulo").value = this.dataset.idcapitulo;
        document.getElementById("editSubcapitulo").value = this.dataset.subcapitulo;
        document.getElementById("editOculto").value = this.dataset.oculto;
    });
});

// Enviar formulario de edición
document.querySelector("#editForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let formData = new FormData(this);
    fetch("rubrosin.php", {
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
        fetch("rubrosin.php", {
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