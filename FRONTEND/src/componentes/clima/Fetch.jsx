
export async function RecibirClima() {  
    const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=10.998605&longitude=-63.797424&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&forecast_days=1";
    const requestOptions = {
        method: "GET", 
        headers: {}
    };
    try {
    const resultado = await fetch(apiUrl, requestOptions)
     .then(response => response.json())
     .then(data => {
         return(data)
     })
     .catch(error => {
         console.error("Error al realizar la solicitud:", error);
         throw error
     });
     return resultado
    } catch (error) {
        throw error
    }
}