import React from 'react';
import axios from 'axios';

class Fortune extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fortune : {}
        };
    }
    async componentDidMount(){
        const aFortune = await axios.get('https://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune/wisdom');
        this.setState({
            fortune: aFortune.data.fortune
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
        return(
        <div style={styles}>
        <h4>Fortune:</h4>
            <h5>
                {this.state.fortune? `${this.state.fortune}`: 'null'}
            </h5>
        </div>)
        }
}

export default Fortune;