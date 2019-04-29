import React from 'react';
import axios from 'axios';
class Joke extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            joke:{}
        }
    }
    // async componentDidMount(){
    //     const data = await axios.request({
    //         url : 'https://icanhazdadjoke.com/',
    //         method: 'get',
    //         headers: {
    //             'Accept': 'application/json'
    //         }
    //     });
    //     console.log(data);

    async componentDidMount() {

        const jokeData = await axios.get("https://icanhazdadjoke.com/",{
            headers: { 'Accept': 'application/json'}
        })
        // console.log(jokeData.data.joke)
        this.setState({
            joke: jokeData.data
        })
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
            <h3>Joke: </h3>
            {this.state.joke?<h4>{this.state.joke.joke}</h4>:null}
        </div>)
    }
}

export default Joke;