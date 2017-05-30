import React from 'react';
import { Link } from 'react-router';

export default () => {
    return (
        <nav className="navbar navbar-inverse">

            <div className="container-fluid">

                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                        <img alt="Brand" src="http://checktheweather.co/icon.png" width="25px" height="25px"/>
                    </Link>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">About</Link></li>
                        <li><Link to="weather">Weather</Link></li>
                        <li><Link to="weather-map">Whether Map</Link></li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}
