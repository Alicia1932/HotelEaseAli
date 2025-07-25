document.getElementById('registration-form').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const repassword = document.getElementById('repassword').value;

    if (password !== repassword) {
        alert('Las contraseñas no coinciden.');
        event.preventDefault(); // Detener el envío del formulario
    }
});
