export const guardarDatosEnLocalStorage = (monto, tasa, plazo) => {
    const datos = { monto, tasa, plazo };
    localStorage.setItem('datosInversion', JSON.stringify(datos));
};

export const cargarDatosDeLocalStorage = () => {
    const datos = JSON.parse(localStorage.getItem('datosInversion'));
    return datos;
};

export const guardarHistorial = (monto, plazo, tasa, montoFinal) => {
    const historial = JSON.parse(localStorage.getItem('historial')) || [];
    historial.push({ monto, plazo, tasa, montoFinal, fecha: new Date() });
    localStorage.setItem('historial', JSON.stringify(historial));
};

export const cargarHistorial = () => {
    return JSON.parse(localStorage.getItem('historial')) || [];
};
