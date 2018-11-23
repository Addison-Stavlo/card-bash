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
                {this.props.cards.map(card=>{
                    return <Card thisCard={card[0]} key={card.id} />
                })}
            </PlayerTableWrapper>
        );
    }
}

const PlayerTableWrapper = styled.div`
    border: 1px solid red;
    width: 80%;
    height: 300px;
    position: fixed;
    bottom: 150px;
    display: flex;
`

export default PlayerTable;