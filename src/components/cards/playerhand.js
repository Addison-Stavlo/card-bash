import React from 'react';
import Card from './card';
import styled from 'styled-components';

class PlayerHand extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Hand>
                {this.props.playerHand.map((card,index) => {
                    // return <div className='card-holder' ><Card thisCard={card} /></div>
                    return <div className='card-holder'><Card thisCard={card} inHand={true}
                    onClick={()=>this.props.playCard(card.castingCost,card.id)} key={card.id} /></div>
                })}
            </Hand>
        )
    }
}

const Hand = styled.div`
    display: flex;
    align-items: flex-end;
    width: auto;
    position: fixed;
    bottom: 0;
    left: 110px;

    .card-holder {
        margin-left: -30px;

        &:first-of-type {
            margin-left: 0;
        }

        &:hover {
            margin-left: 0;
            margin-right: 30px;
        }
    }
`

export default PlayerHand;