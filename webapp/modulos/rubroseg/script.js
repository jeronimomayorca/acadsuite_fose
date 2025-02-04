// Crear registro
document.querySelector("#createForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let formData = new FormData(this);
    fetch("rubroseg.php", {
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
        document.getElementById("editCodrubro").value = this.dataset.codrubro;
        document.getElementById("editNomrubro").value = this.dataset.nomrubro;
        document.getElementById("editModalidad").value = this.dataset.modalidad;
        document.getElementById("editIdcapitulo").value = this.dataset.idcapitulo;
        document.getElementById("editSubcapitulo").value = this.dataset.subcapitulo;
        document.getElementById("editOculto").value = this.dataset.oculto;
        document.getElementById("editCodsifseg").value = this.dataset.codsifseg;
    });
});

// Enviar formulario de edición
document.querySelector("#editForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let formData = new FormData(this);
    fetch("rubroseg.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(text => {
            if (text) {
                try {
                    const data = JSON.parse(text);
                    alert(data.message);
                    if (data.status === "success") {
                        location.reload();
                    }
                } catch (e) {
                    console.error("Error al parsear JSON:", e, text);
                }
            } else {
                console.error("Respuesta vacía recibida desde rubroseg.php");
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
        fetch("rubroseg.php", {
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