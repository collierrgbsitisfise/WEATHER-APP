import React from 'react';
import { Link } from 'react-router';

export default () => {
    return (
        <nav className="navbar navbar-inverse">

            <div className="container-fluid">

                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                        <img alt="Brand" src="https://lh3.googleusercontent.com/SDGdPRkZikGK8hZw4Zi0uLOxCV8IhMpOn3NVTwhpZ0Qlo7aTjaUk03VoXFs7L05lIg=w300" width="25px" height="25px"/>
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
