import React from 'react';
import Axios from 'axios';
class GOT extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            character:{}
        };
    }
    async componentDidMount(){
        let number = Math.floor(Math.random() * Math.floor(2138)) + 1;
        const gotData = await Axios.get(`https://my-little-cors-proxy.herokuapp.com/https://anapioficeandfire.com/api/characters/${number}`, {headers : {'Accepts':'application/JSON'}});
        console.log(gotData.data);
        this.setState({
            character: gotData.data
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
            justifyContent:'center',
            };
        return(<div style={styles}>
            <h4 style={{margin:'10px'}}>Game of Thrones Character Finder:</h4>
            {this.state.character? <h4 style={{margin:'2px'}}>{this.state.character.name}</h4> : null}
            {this.state.character? <h5 style={{margin:'2px'}}>{this.state.character.culture}</h5> : null}
            {this.state.character? <h5 style={{margin:'2px'}}>{this.state.character.playedBy}</h5> : null}
        </div>)
    }
}
export default GOT;