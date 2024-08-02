
export const mostrarResultados = (monto, plazo, tasa, montoFinal, ganancia, datosDolar) => {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <p><strong>Monto Inicial:</strong> $${monto.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
        <p><strong>Duración:</strong> ${plazo} años (${plazo * 12} meses)</p>
        <p><strong>Tasa de Interés:</strong> ${tasa.toFixed(2)}%</p>
        <p><strong>Monto Final:</strong> $${montoFinal.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
        <p><strong>Ganancia:</strong> $${ganancia.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
    `;
    
    resultadosDiv.innerHTML += '<h4>Ganancia en dólares según Compra y Venta de diferentes mercados cambiarios</h4>';
    datosDolar.forEach(dolar => {
        resultadosDiv.innerHTML += `
            <div class="card mb-3 card-custom">
                <div class="card-body">
                    <h5 class="card-title">${dolar.nombre}</h5>
                    <p class="card-text">Compra: $${(montoFinal / dolar.compra).toFixed(2)}</p>
                    <p class="card-text">Venta: $${(montoFinal / dolar.venta).toFixed(2)}</p>
                </div>
            </div>
        `;
    });
};
