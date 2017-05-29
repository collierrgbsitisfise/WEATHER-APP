import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial';

export function getWeatherByLocationName (locationName) {
    return dispatch => {
        return axios.get(`${OPEN_WEATHER_MAP_URL}&q=${locationName}`)
    }
}
