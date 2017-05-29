import React from 'react';
import { Route , IndexRoute } from 'react-router';


import Weather from './components/weather/Weather';
import WheatherMap from './components/weather/WeatherMap';
import About from './components/About';
import App from './components/App';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={About} />
        <Route path="weather" component={Weather}/>
        <Route path="weather-map" component={WheatherMap}/>
    </Route>
)
