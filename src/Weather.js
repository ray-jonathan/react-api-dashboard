import React from 'react';
import axios from 'axios';

class Weather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            weather: {}
        };
    }
    async componentDidMount(){
        const weatherData = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=Atlanta,us&units=imperial&APPID=10d667ba6594ac68504b009b3669ad75')
        console.log(weatherData.data.main.temp);
        this.setState({
            weather: weatherData.data
        });
    }
    render(){
        const styles={height:'300px', width:'300px', backgroundColor:'rgb(100,155,255)'};
        return(<div style={styles}>
            <h3>{this.state.weather.name}</h3>
            {this.state.weather.main? <h3>Temp: {Math.round(this.state.weather.main.temp)} °F</h3> : null}
        </div>)
    }
}
export default Weather;