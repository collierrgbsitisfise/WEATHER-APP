import React from 'react';
import { connect } from 'react-redux';
import WeatherForm  from './WeatherForm.js';
import { getWeatherByLocationName , getWeatherByCordinates } from './../../actions/getWeatherAction';

class Weather extends React.Component {
    render () {
        const { getWeatherByLocationName } = this.props;
        return (
            <div className="jumbotron">
                <WeatherForm getWeatherByLocationName={getWeatherByLocationName} getWeatherByCordinates={getWeatherByCordinates} />
            </div>
        )
    }
}

export default connect((state) => {return {} } , { getWeatherByLocationName, getWeatherByCordinates })(Weather);
