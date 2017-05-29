import React from 'react';
import GoogleMapReact from 'google-map-react';

class WeatherTable extends React.Component {
    render () {
        console.log(this.props);
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
                        <td className="text-center">{this.props.weatherData.data.main.temp}</td>
                        <td className="text-center">{this.props.weatherData.data.main.pressure}</td>
                        <td className="text-center">{this.props.weatherData.data.main.humidity}</td>
                        <td className="text-center">{this.props.weatherData.data.main.temp_min}</td>
                        <td className="text-center">{this.props.weatherData.data.main.temp_max}</td>
                    </tr>
                </tbody>

            </table>

            <div style={{width: '100%', height: '400px'}}>
                <GoogleMapReact
                    defaultCenter={{lat: this.props.weatherData.data.coord.lat, lng: this.props.weatherData.data.coord.lon}}
                    defaultZoom={11}>
               </GoogleMapReact>
           </div>

        </div>
        )
    }
}

export default WeatherTable;
