import React from 'react';
import GoogleMapReact from 'google-map-react';

class WeatherTable extends React.Component {
    constructor(props){

        super(props);
    	this.state = {};

        this.fromFarhenheitToCelsius = this.fromFarhenheitToCelsius.bind(this);

    }

    fromFarhenheitToCelsius (tmpInFar) {
        return Math.round((tmpInFar - 32) / 1.8);
    }

    render () {
        return (
        <div className="row">
            <table className="table table-striped">

                 <thead>

                     <tr>
                         {/* <td className="text-center"><strong>country</strong></td>
                         <td className="text-center"><strong>city</strong></td> */}
                         <td className="text-center"><strong>temp</strong></td>
                         <td className="text-center"><strong>pressure</strong></td>
                         <td className="text-center"><strong>humidity</strong></td>
                         <td className="text-center"><strong>temp_min</strong></td>
                         <td className="text-center"><strong>temp_max</strong></td>
                     </tr>

                 </thead>

                <tbody>
                    <tr>
                        {/* <td className="text-center">{this.props.weatherData.data.sys.country}</td>
                        <td className="text-center">{this.props.weatherData.data.name}</td> */}
                        <td className="text-center">{this.fromFarhenheitToCelsius(this.props.weatherData.data.main.temp) + '(°C)'}</td>
                        <td className="text-center">{this.props.weatherData.data.main.pressure + '(hPa)' }</td>
                        <td className="text-center">{this.props.weatherData.data.main.humidity + '%'}</td>
                        <td className="text-center">{this.fromFarhenheitToCelsius(this.props.weatherData.data.main.temp_min) + '(°C)'}</td>
                        <td className="text-center">{this.fromFarhenheitToCelsius(this.props.weatherData.data.main.temp_max) + '(°C)'}</td>
                    </tr>
                </tbody>

            </table>

            <div style={{width: '100%', height: '400px'}}>
                <GoogleMapReact
                    defaultCenter={{lat: this.props.weatherData.data.coord.lat, lng: this.props.weatherData.data.coord.lon}}
                    defaultZoom={11}
                    onClick={(place) => console.log(place)}>
               </GoogleMapReact>
           </div>

        </div>
        )
    }
}

export default WeatherTable;
