import React from 'react';
import styled from 'styled-components';
import Card from './card';

class PlayerTable extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <PlayerTableWrapper>
                <div className="card-row cards">
                {this.props.cards.map(card=>{
                    return <Card thisCard={card[0]} key={card.id} inHand={false} attack={this.props.attack} isResetting={this.props.isResetting} />
                })}
                </div>
                <div className="card-row lands">
                {this.props.lands.map(card=>{
                    return <Card thisCard={card[0]} key={card.id} inHand={false} harvest={this.props.harvest} isResetting={this.props.isResetting} />
                })}
                </div>
            </PlayerTableWrapper>
        );
    }
}

const PlayerTableWrapper = styled.div`
    border: 1px solid red;
    width: 80%;
    left: 110px;
    height: auto;
    position: fixed;
    bottom: 150px;
    display: flex;
    flex-direction: column;

    .card-row {
        display: flex;
    }
`

export default PlayerTable;