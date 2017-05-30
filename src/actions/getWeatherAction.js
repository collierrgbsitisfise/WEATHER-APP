import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial';

export function getWeatherByLocationName (locationName) {
    return dispatch => {
        return axios.get(`${OPEN_WEATHER_MAP_URL}&q=${locationName}`)
    }
}

export function getWeatherByCordinates (lat=35, lon=139) {
    return dispatch => {
        const OPEN_WEATHER_MAP_URL_BY_CORD = `http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&lat=${lat}&lon=${lon}`;
        return axios.get(OPEN_WEATHER_MAP_URL_BY_CORD);
    }
}
