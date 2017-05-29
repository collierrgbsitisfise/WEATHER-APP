import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import WeatherTable from './WeatherTable';
import Autocomplete from 'react-google-autocomplete';


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

                   <Autocomplete name="locality" onChange={this.onChange}
                                 value={this.state.locality}
                                 placeholder="locality name..."
                                style={{width: '100%'}}
                                onPlaceSelected={(place) => {
                                    console.log(place);
                                    this.setState({locality: place.formatted_address})
                                }}/>
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
