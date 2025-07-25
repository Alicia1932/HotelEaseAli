document.getElementById('acceptBtn').addEventListener('click', function () {
    const checkbox = document.getElementById('accept');
    if (checkbox.checked) {
        alert('Políticas aceptadas');
     
    } else {
        alert('Por favor, acepte las políticas para continuar');
    }
});
