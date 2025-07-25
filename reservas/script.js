// script.js
document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Reserva realizada con éxito');
});
function toggleSubservicios(id) {
    var subservicios = document.getElementById(id);
    if (subservicios.style.display === "none" || subservicios.style.display === "") {
        subservicios.style.display = "block";
    } else {
        subservicios.style.display = "none";
    }
}
