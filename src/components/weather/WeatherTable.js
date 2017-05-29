import React from 'react';

class WeatherTable extends React.Component {
    render () {
        console.log('it is my props');
        console.log(this.props);
        return (
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
                <br/>
                <br/>
                <br/>

            </table>
        )
    }
}

export default WeatherTable;
