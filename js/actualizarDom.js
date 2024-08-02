// Archivo: actualizarDom.js

export const mostrarElemento = (elemento) => {
    elemento.style.display = 'block';
};

export const ocultarElemento = (elemento) => {
    elemento.style.display = 'none';
};

export const limpiarFormulario = (form) => {
    form.reset();
};

export const limpiarResultados = (resultadosDiv) => {
    resultadosDiv.innerHTML = '';
};
