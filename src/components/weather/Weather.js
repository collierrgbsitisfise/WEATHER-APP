import React from 'react';
import { connect } from 'react-redux';
import WeatherForm  from './WeatherForm.js';
import { getWeatherByLocationName } from './../../actions/getWeatherAction';

class Weather extends React.Component {
    render () {
        const { getWeatherByLocationName } = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <WeatherForm getWeatherByLocationName={getWeatherByLocationName} />
                </div>
            </div>
        )
    }
}

export default connect((state) => {return {} } , { getWeatherByLocationName })(Weather);
