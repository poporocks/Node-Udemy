const fs = require('fs');
const axios = require('axios');

class Busquedas {
    historial = ['Culiacán', 'Mazatlán', 'Guadalajara'];
    dbPath = './db/database.json';

    paramsLocationIQ(city = '') {
        return { 
            'format': 'json',
            'key': process.env.LOCATIONIQ_KEY,
            'q': city,
            'accept-language': 'es'
        }
    }

    paramsOpenWeatherMap(lati = 0, long = 0){
        return { 
            'appid': process.env.OPENWEATHER_KEY,
            'lat': lati,
            'lon': long,
            'lang': 'es',
            'units': 'metric'
        }
    }

    async buscarCiudad(ciudad = '') {
        try {
            const instancia = axios.create({
                baseURL: 'https://us1.locationiq.com/v1/search.php',
                params: this.paramsLocationIQ(ciudad),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept-Encoding': 'application/json'
                }
            });

            const resp = await instancia.get();
            // const data = JSON.stringify(resp.data, null, 4);

            return resp.data.map(lugar => ({
                id: lugar.place_id,
                nombre: lugar.display_name,
                lon: lugar.lon,
                lat: lugar.lat
            }));
        } catch (error) {
            return [];
        }
    }

    async buscarClima(lat = 0, lon = 0) {
        try{
            const instancia = axios.create({
                baseURL: 'https://api.openweathermap.org/data/2.5/weather',
                params: this.paramsOpenWeatherMap(lat, lon)
            });

            const resp = await instancia.get();
            const {weather, main} = resp.data;

            return {
                desc: weather[0].description,
                temp: main.temp,
                temp_min: main.temp_min,
                temp_max: main.temp_max
            }
        } catch(error) {
            console.log(error);
            return [];
        }
    }

    agregarHistorial(lugar = '') {
        if(this.historial.includes(lugar.toLowerCase())) return;
        this.historial.unshift(lugar.toLowerCase());
        this.guardarDB();
    }

    guardarDB() {
        const payload = {
            historial: this.historial
        }

        console.log(payload);
        try{
            fs.writeFileSync(this.dbPath, JSON.stringify(payload));
        } catch (err){
            console.log('catch')
            throw err;
        }
    }

    leerDB() {
        if (fs.existsSync(this.dbPath)) return;

        try{        
            const info = fs.readFileSync(this.dbPath, {encoding: 'utf-8'});
            const data = JSON.parse(info);
            
            console.log(data.historial);
            this.historial = data.historial;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Busquedas;