
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Navegando a: ${button.textContent}`);
    });
});

document.querySelector('.pay-btn').addEventListener('click', () => {
    alert('Procesando el pago...');
});
