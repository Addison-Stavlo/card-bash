import React from 'react';
import '../../App.css';
import Hand from '../cards/playerhand';
import styled from 'styled-components';
import playerDeck from '../../playerDeck.js';
import PlayerTable from '../cards/playerTable';
import { AlertTriangle } from 'react-feather';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            playerHealth: 20,
            compHealth: 20,
            manaPool: 0,
            playerDeck: playerDeck.map((item,index) => {
                Object.assign(item, {id: index});
                return item;
            }),
            playerHand: [],
            playerTable: [],
            playerTableLands: [],
            hasPlayedLand: false,
            isResetting: true,
            helpText: 'Draw a card to begin your Turn.'
        }
    }
    
    componentDidMount() {
        this.setState({playerDeck: this.state.playerDeck.slice(7,this.state.playerDeck.length), playerHand: this.state.playerDeck.slice(0,7)})
    }

    componentDidUpdate() {
        if(this.state.compHealth <= 0){
            alert('YOU WIN!');
        }
    }

    attackComp = (damage) => {
        this.setState({compHealth: this.state.compHealth-damage, helpText: 'Play another card or click "End Turn"'});
    }

    playCard = (cost,id,type,damage) => {
        if(this.state.isResetting){
            return alert('Please draw a card.')
        }
        if(type === 'Land Card' && this.state.hasPlayedLand === true){
            return alert('you must wait until next turn to play another land card.')
        }
        else if(type === 'Land Card' && this.state.hasPlayedLand === false){
            this.setState(
                {
                    playerHand: this.state.playerHand.filter((item)=>{
                        return item.id !== id;}),
                    playerTableLands: [...this.state.playerTableLands, this.state.playerHand.find((item)=>{
                        return item.id === id})],
                    hasPlayedLand: true,
                    helpText: 'Click a played Land to tap it for Mana'
                 })
        }
        else if(type === 'Magic Damage' && cost <= this.state.manaPool){
            this.setState({
                playerHand: this.state.playerHand.filter((item)=>{
                    return item.id !== id;}),
                manaPool: this.state.manaPool - cost,
                compHealth: this.state.compHealth - damage,
                helpText: 'Play another card or click "End Turn"'           
            })
        }
        else if(type !== 'Land Card' && cost <= this.state.manaPool) {
            this.setState(
                {
                    playerHand: this.state.playerHand.filter((item)=>{
                        return item.id !== id;}),
                    playerTable: [...this.state.playerTable, this.state.playerHand.find((item)=>{
                        return item.id === id;})],
                    manaPool: this.state.manaPool - cost,
                    helpText: 'Attack by clicking your creature card'
                 })
        }
    }


    harvestMana = () => {
        this.setState({
            manaPool: this.state.manaPool + 1,
            helpText: 'Play a creature or magic card with your newly harvested Mana.'
        })
    }

    endTurn = () => {
        this.setState({manaPool: 0, isResetting: true, hasPlayedLand: false, helpText: 'Draw a card to begin your turn'});
    }

    startTurn = () => {
        if(this.state.playerDeck.length > 0){
        this.setState({isResetting: false, playerHand: [...this.state.playerHand, this.state.playerDeck.shift()]})
        }
        else{
            this.setState({isResetting: false});
            alert('you have no more cards in the deck')
        }
        this.setState({helpText: 'Play a Land Card if able'})
    }

    render(){
        return(
            <div>
                <HelpBox>
                    {this.state.helpText}
                </HelpBox>
                <HealthBoxes>
                    <div className="healthbox compHealth">
                        <div>Comp</div>
                        <div>Health: {this.state.compHealth}</div>
                    </div>

                    <div>
                        <div className="healthbox end-turn" onClick={this.endTurn}>End Turn</div>
                        <div className="healthbox end-turn" onClick={this.startTurn}>Draw Card</div>
                    </div>
                    <div className="healthbox playerHealth">
                        <div>Player</div>
                        <div>Health: {this.state.playerHealth}</div>
                        <div>Mana: {this.state.manaPool}</div>
                    </div>
                </HealthBoxes>
                <PlayerTable cards={this.state.playerTable}  attack={this.attackComp} lands={this.state.playerTableLands} harvest={this.harvestMana} isResetting={this.state.isResetting} />
                <Hand playerHand={this.state.playerHand} playCard={this.playCard} hasPlayedLand={this.playedLand} isResetting={this.state.isResetting}/>
            </div>
        );
    }
}

const HelpBox = styled.div`
    position: fixed;
    right: 5%;
    max-width: 70%;
    top: 20px;
    font-size: 30px;
    padding: 20px;
    font-weight: bold;
    border: 2px solid red;
    border-radius: 30px;
    background: white;
    z-index: 2;
`

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
    .end-turn {
        cursor: pointer;
    }
`

export default Main;