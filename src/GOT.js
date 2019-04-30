import React from 'react';
import Axios from 'axios';
class GOT extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            character:{},
            history:[],
            lookUp: 0
        };
    }
    componentDidMount(){
        this._saltNPeppa();
    }
    _saltNPeppa (){
        let number = Math.floor(Math.random() * Math.floor(2138)) + 1;
        Axios.get(`https://my-little-cors-proxy.herokuapp.com/https://anapioficeandfire.com/api/characters/${number}`, {headers : {'Accepts':'application/JSON'}})
        // console.log(gotData.data);
        .then((gotData) =>{ this.setState({
            character: gotData.data,
            history: [...this.state.history, gotData.data]
        }, () => console.log(this.state.history));
        });
    }
    _laffyTaffy(){
        const comparison = this.state.history.length -1;
        if(this.state.lookUp < comparison){
            this.setState({

            });
        }
        else{
            this._saltNPeppa();
        }
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
            {this.state.history[this.state.lookUp]? <h4 style={{margin:'2px'}}>{this.state.history[this.state.lookUp].name}</h4> : null}
            {this.state.history[this.state.lookUp]? <h5 style={{margin:'2px'}}>{this.state.history[this.state.lookUp].culture}</h5> : null}
            {this.state.history[this.state.lookUp]? <h5 style={{margin:'2px'}}>{this.state.history[this.state.lookUp].playedBy}</h5> : null}
            {this.state.lookUp < 1? null :  
            <button 
                onClick={() => 
                    this.setState({lookUp: this.state.lookUp -1},
                        this._laffyTaffy())
                }>
                Previous</button> } 
            <button 
                onClick={() => 
                this.setState({lookUp: this.state.lookUp +1},
                    this._laffyTaffy())
                }>Next</button>
        </div>)
    }

}
export default GOT;