import React from 'react';
import WeatherTable from './WeatherTable';

class WeatherMap extends React.Component {
    constructor(props){
    	super(props);
    	this.state = {
            locality: '',
            weatherData: {},
            isLoading: false,
            isLoaded: false
        };

        this.getWeatherData = this.getWeatherData.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    getWeatherData (e) {
        this.setState({isLoaded: false});
        this.setState({isLoading: true});
        e.preventDefault();
        setTimeout( () => {
            this.props.getWeatherByLocationName(this.state.locality)
                .then(data => {
                    this.setState({
                        weatherData: data,
                        isLoading: false,
                        isLoaded: true
                    });
                })
                .catch(err => {
                    this.setState({isLoading: false});
                })
        }, 2000)
    }

    onChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render () {
        return (
        <div className="row">
            <form onSubmit={this.getWeatherData}>
                <div className="form-group">
                    <input type="text" name="locality" className="form-control"
                           onChange={this.onChange}
                           value={this.state.locality}
                           placeholder="locality name..."/>
                </div>
                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg btn-block">Get weather</button>
                </div>
                <div className="form-group">
                    {this.state.isLoading ? <div className="loader"></div>: ''}
                </div>
            </form>
            {this.state.isLoaded ? <WeatherTable weatherData={this.state.weatherData}/> : ''}
        </div>
        )
    }
}

export default WeatherMap;
