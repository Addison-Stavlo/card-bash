import React from 'react';
import '../../App.css';
import Hand from '../cards/playerhand';

class Main extends React.Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <Hand />
        );
    }
}

export default Main;