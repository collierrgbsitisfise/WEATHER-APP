import React from 'react';
import WeatherForm from './WeatherForm.';

class WeatherMap extends React.Component {
    render () {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <WeatherForm />
                </div>
            </div>
        )
    }
}

export default WeatherMap;
