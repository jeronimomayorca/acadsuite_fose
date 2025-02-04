document.querySelectorAll(".edit-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.getElementById("editId").value = this.dataset.id;
        document.getElementById("editArea").value = this.dataset.area;
    });
});

document.querySelectorAll(".delete-form").forEach(form => {
    form.addEventListener("submit", function (event) {
        if (!confirm("¿Estás seguro de que deseas eliminar este registro?")) {
            event.preventDefault();
        }
    });
});