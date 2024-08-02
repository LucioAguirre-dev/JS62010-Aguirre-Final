// Archivo: mensajes.js

export const mostrarMensaje = (mensaje) => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: mensaje,
    });
};
