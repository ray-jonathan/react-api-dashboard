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
        this.setState({
            weather: weatherData.data
        });
    }
    render(){
        const styles={
            height:'300px', 
            width:'300px', 
            backgroundColor:'rgba(100,155,255,0.3)',
            border: '3px solid #FFF',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center'
        ,};
        return(<div style={styles}>
            {this.state.weather?<h3>{this.state.weather.name}, GA</h3>:null}
            {this.state.weather.main? <h3>Temp: {Math.round(this.state.weather.main.temp)} °F</h3> : null}
        </div>)
    }
}
export default Weather;