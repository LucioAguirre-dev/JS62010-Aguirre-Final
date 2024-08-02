// Archivo: main.js
// Lucio Aguirre

import { guardarDatosEnLocalStorage, cargarDatosDeLocalStorage } from './almacenamiento.js';
import { mostrarMensaje } from './mensajes.js';
import { obtenerDatosDolar } from './api.js';
import { validarEntradas, calcularMontoFinal, calcularGanancia } from './calculos.js';
import { mostrarResultados } from './resultados.js';
import { mostrarElemento, ocultarElemento, limpiarFormulario, limpiarResultados } from './actualizarDom.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('investment-form');
    const resultadosDiv = document.getElementById('resultados');
    const resetButton = document.getElementById('reset-button');

    const calcularInversion = async () => {
        try {
            const monto = parseFloat(document.getElementById('monto').value);
            const tasa = parseFloat(document.getElementById('tasa').value);
            const plazo = parseInt(document.getElementById('plazo').value);

            validarEntradas(monto, tasa, plazo);

            guardarDatosEnLocalStorage(monto, tasa, plazo);

            const montoFinal = calcularMontoFinal(monto, tasa, plazo);
            const ganancia = calcularGanancia(monto, montoFinal);

            let datosDolar;
            try {
                datosDolar = await obtenerDatosDolar();
            } catch {
                mostrarMensaje('No se pudieron obtener los datos del dólar. Intente de nuevo más tarde.');
                return;
            }

            mostrarResultados(monto, plazo, tasa, montoFinal, ganancia, datosDolar);
            mostrarElemento(resultadosDiv);
            mostrarElemento(resetButton);

        } catch (err) {
            mostrarMensaje(err.message);
        }
    };

    const datosGuardados = cargarDatosDeLocalStorage();
    if (datosGuardados) {
        document.getElementById('monto').value = datosGuardados.monto;
        document.getElementById('tasa').value = datosGuardados.tasa;
        document.getElementById('plazo').value = datosGuardados.plazo;
        calcularInversion();
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        calcularInversion();
    });

    resetButton.addEventListener('click', () => {
        localStorage.clear();
        limpiarFormulario(form);
        limpiarResultados(resultadosDiv);
        ocultarElemento(resetButton);
        ocultarElemento(resultadosDiv);
    });
});
