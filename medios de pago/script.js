
function navigateTo(method) {
    // Simulación de navegación: Cambiar mensaje o alertar
    switch (method) {
        case 'credit':
            alert('Navegando a pago con Tarjeta de Crédito');
            break;
        case 'debit':
            alert('Navegando a pago con Tarjeta Débito');
            break;
        case 'qr':
            alert('Navegando a pago con Código QR');
            break;
        case 'pse':
            alert('Navegando a pago con PSE');
            break;
        default:
            console.error('Opción no válida');
    }
}
