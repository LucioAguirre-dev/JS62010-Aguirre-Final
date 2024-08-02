export const obtenerDatosDolar = async () => {
    const response = await fetch('https://dolarapi.com/v1/dolares');
    if (!response.ok) {
        throw new Error('Error al obtener los datos de la API');
    }
    const data = await response.json();
    return data;
};
