import React from 'react';

class WeatherMapTable extends React.Component {
    render () {
        console.log('THIS IS OUR PROPS');
        console.log(this.props);
        return (
        <div style={{width: '100%'}}>
            <table className="table table-striped">

                 <thead>

                     <tr>
                         <td className="text-center"><strong>country</strong></td>
                         <td className="text-center"><strong>city</strong></td>
                         <td className="text-center"><strong>temp</strong></td>
                         <td className="text-center"><strong>pressure</strong></td>
                         <td className="text-center"><strong>humidity</strong></td>
                         <td className="text-center"><strong>temp_min</strong></td>
                         <td className="text-center"><strong>temp_max</strong></td>
                     </tr>

                 </thead>

                <tbody>
                    <tr>
                        <td className="text-center">{this.props.regionInfo}</td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                        <td className="text-center"></td>
                    </tr>
                </tbody>

            </table>


        </div>
        )
    }
}

export default WeatherMapTable;
