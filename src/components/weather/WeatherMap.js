import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import  { getWeatherByCordinates } from './../../actions/getWeatherAction';
import WeatherMapTable from './WeatherMapTable';

class WeatherMap extends React.Component {
    constructor(props){
    	super(props);

        this.state = {
            cordinates: {
                lat: 50,
                lng: 50
            },
            regionInfo: {},
            isLoaded: false
        };


        this.changeCordinates = this.changeCordinates.bind(this);
        this.getInfoByCordinates = this.getInfoByCordinates.bind(this);
        this.tableInfo = this.tableInfo.bind(this);
    }

    tableInfo (regionInfo) {
        console.log('AAAAAA');
        console.log(regionInfo);
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
                            <td className="text-center">{regionInfo.sys.country}</td>
                            <td className="text-center">{regionInfo.name}</td>
                            <td className="text-center">{regionInfo.main.temp}</td>
                            <td className="text-center">{regionInfo.main.pressure}</td>
                            <td className="text-center">{regionInfo.main.humidity}</td>
                            <td className="text-center">{regionInfo.main.temp_min}</td>
                            <td className="text-center">{regionInfo.main.temp_max}</td>
                        </tr>
                    </tbody>

                </table>


            </div>
        )
    }

    getInfoByCordinates (lat , lng) {

        // this.setState({isLoaded: false});

        this.props.getWeatherByCordinates(lat, lng)
            .then(res => {
                console.log(res.data);
                this.setState({isLoaded: true});
                this.setState({regionInfo: res.data});
            })
            .catch(err => {
                this.setState({isLoaded: false});
            })

    }

    changeCordinates (place) {
        this.setState({
            cordinates: {
                lat: place.lat,
                lng: place.lng
            }
        }, () => {

            let { lat , lng } = this.state.cordinates;

            this.getInfoByCordinates(lat, lng);

        })

    }

    render () {
        const { isLoaded, regionInfo } = this.state;
        console.log('rerender');
        console.log(regionInfo);
        return (
            <div className="jumbotron">
                {Object.keys(regionInfo).length == 0 ? '' : this.tableInfo(regionInfo)}
                <div style={{width: '100%', height: '800px'}}>
                    <GoogleMapReact
                        defaultCenter={{lat: 50, lng: 50}}
                        defaultZoom={5}
                        onClick={(place) => this.changeCordinates(place)}>
                   </GoogleMapReact>
               </div>
            </div>
        )
    }
}

export default connect((state) => {return {} } , { getWeatherByCordinates })(WeatherMap);
