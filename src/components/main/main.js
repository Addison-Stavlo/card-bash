import React from 'react';
import '../../App.css';
import Hand from '../cards/playerhand';
import styled from 'styled-components';
import playerDeck from '../../playerDeck.js';
import PlayerTable from '../cards/playerTable';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playerHealth: 20,
            compHealth: 20,
            manaPool: 0,
            playerHand: playerDeck,
            playerTable: []
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

    playCard = (cost,id) => {
        if(cost <= this.state.manaPool){
            this.setState(
                {
                    playerHand: this.state.playerHand.filter((item)=>{
                        return item.id !== id;}),
                    playerTable: [...this.state.playerTable, this.state.playerHand.filter((item)=>{
                        return item.id === id;})]
        })
        }
    }

    harvestMana = (amount) => {
        this.setState({
            manaPool: this.state.manaPool + amount
        })
    }

    render(){
        return(
            <div>
                <HealthBoxes>
                    <div className="healthbox compHealth">
                        <div>Comp</div>
                        <div>Health: {this.state.compHealth}</div>
                    </div>
                    <div className="healthbox playerHealth">
                        <div>Player</div>
                        <div>Health: {this.state.playerHealth}</div>
                        <div>Mana: {this.state.manaPool}</div>
                    </div>
                </HealthBoxes>
                <PlayerTable cards={this.state.playerTable} harvest={this.harvestMana} />
                <Hand attack={this.attackComp} playerHand={this.state.playerHand} playCard={this.playCard} />
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
        height: 100px;
        border: 1px solid black;
        border-radius: 5px;
        font-size: 20px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        font-weight: bold;

            div {
                width: 100%;
                height: 33%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
    }
`

export default Main;