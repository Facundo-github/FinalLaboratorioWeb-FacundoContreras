
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const table = document.querySelector("table");

    form.addEventListener("input", updateTable);

    function updateTable() {
        const formData = new FormData(form);

        formData.forEach((value, key) => {
            const cell = table.querySelector(`td[data-key="${key}"]`);
            if (cell) {
                cell.textContent = value;
            }
        });
    }
});
