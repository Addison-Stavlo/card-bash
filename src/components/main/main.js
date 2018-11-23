import React from 'react';
import '../../App.css';
import Hand from '../cards/playerhand';
import styled from 'styled-components';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playerHealth: 20,
            compHealth: 20
        }
    }
    componentDidUpdate() {
        if(this.state.compHealth <= 0){
            alert('YOU WIN!');
        }
    }

    attackComp = (damage) => {
        this.setState({compHealth: this.state.compHealth-damage});
    }

    render(){
        return(
            <div>
                <HealthBoxes>
                    <div className="healthbox compHealth">Comp: {this.state.compHealth}</div>
                    <div className="healthbox playerHealth">Player: {this.state.playerHealth}</div>
                </HealthBoxes>
                <Hand attack={this.attackComp} />
            </div>
        );
    }
}

const HealthBoxes = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .healthbox {
        width: 100px;
        height: 50px;
        border: 1px solid black;
        border-radius: 5px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }
`

export default Main;