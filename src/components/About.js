import React from 'react';

class About extends React.Component {
    render () {
        return (
            <div className="jumbotron">
                <blockquote>

                    <p className="text-center">

                        This is simple weather app , was created by <a href="https://vk.com/import_brain" target="_blank"> Nicolaev Vadim. </a>
                        <strong>Weather Together</strong> provide info about weather in any world location.This app was , created using <a href="https://facebook.github.io/react/docs/hello-world.html" target="_blank">React.</a>
                        Also used <a href="http://redux.js.org/docs/introduction/" target="_blank">Redux</a> , <a href="https://github.com/ReactTraining/react-router" target="_blank">React-router</a>.
                        The source code of app you can find on <a href="https://github.com/collierrgbsitisfise" target="_blank">GitHub</a>

                    </p>

                </blockquote>
            </div>
        )
    }
}

export default About;
