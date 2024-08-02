// Archivo: calculos.js
// Funciones para manejar los cálculos financieros

export const validarEntradas = (monto, tasa, plazo) => {
    if (isNaN(monto) || monto <= 0) {
        throw new Error('Por favor, ingrese un monto inicial positivo y válido.');
    }
    if (isNaN(tasa) || tasa <= 0 || tasa > 100) {
        throw new Error('Por favor, ingrese una tasa de interés anual positiva y válida (0-100).');
    }
    if (isNaN(plazo) || plazo <= 0 || !Number.isInteger(plazo)) {
        throw new Error('Por favor, ingrese un plazo de inversión positivo y válido en años.');
    }
};

export const calcularMontoFinal = (monto, tasa, plazo) => {
    const meses = plazo * 12;
    const tasaMensual = (tasa / 100) / 12;
    return monto * Math.pow(1 + tasaMensual, meses);
};

export const calcularGanancia = (montoInicial, montoFinal) => {
    return montoFinal - montoInicial;
};
