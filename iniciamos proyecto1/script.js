document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert(`Iniciando sesión con el correo: ${email}`);
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
