let position = {
    // -1.216369, 36.676046
    lat: -1.216369,
    lon: 36.676046
};

const soil_url = "https://rest.isric.org/soilgrids/v2.0/properties/query?lon=" + position.lon + "&lat=" + position.lat;
const weather_url = "https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=" + position.lat + "&lon=" + position.lon + "&dt=1632276077&appid=d90ae287b66f40e2f146f51defdfbaaf"

function SoilData(bdod, nitrogen, ocd, ph, soc){
    this.bdod = bdod;
    this.nitrogen = nitrogen;
    this.ocd = ocd;
    this.ph = ph;
    this.soc = soc;
}

function WeatherData(wind_speed, humidity, temp, dew_point, rainfall){
    this.wind_speed = wind_speed;
    this.humidity = humidity;
    this.temp = temp;
    this.dew_point = dew_point;
    this.rainfall = rainfall;
}

//Process soil data from coordinates
async function getSoilData() {
    const soilData = new SoilData();
    const response = await fetch(soil_url);
    const data = await response.json();
    const layers = data.properties.layers;
    for (let i = 0; i < layers.length; i++) {
        if(layers[i].name == "bdod"){
            soilData.bdod = layers[i].depths[2].values.mean;
        }
        else if(layers[i].name == "nitrogen"){
            soilData.nitrogen = layers[i].depths[2].values.mean;
        }
        else if(layers[i].name == "ocd"){
            soilData.ocd = layers[i].depths[2].values.mean;
        }
        else if(layers[i].name == "phh2o"){
            soilData.ph = layers[i].depths[2].values.mean;
        }
        else if(layers[i].name == "soc"){
            soilData.soc = layers[i].depths[2].values.mean;
        }
        else{
            continue;
        }
    }
    console.log(soilData);
}

async function getWeatherData(){
    const weatherData = new WeatherData();
    const response = await fetch(weather_url);
    const data = await response.json();
    const layers = data.data;
    weatherData.wind_speed = data.wind_speed;
    weatherData.humidity = data.humidity;
    weatherData.temp = data.temp;
    weatherData.dew_point = data.dew_point/10;
    if(data.clouds >= 80){
        weatherData.rainfall = "very high";
    }else if(data.clouds >= 50 ){
        weatherData.rainfall = "high";
    }
    else if(data.clouds >= 40 ){
        weatherData.rainfall = "medium";
    }
    else if(data.clouds >= 30 ){
        weatherData.rainfall = "lower medium";
    }
    else if(data.clouds >= 20 ){
        weatherData.rainfall = "low";
    }else {
        weatherData.rainfall = "extremely low";
    }
    console.log(weatherData);
}

const forecast_url = "";

getSoilData();
getWeatherData();


const ambee_url = "";