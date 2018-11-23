import React from 'react';
import Card from './card';
import styled from 'styled-components';
import playerDeck from '../../playerDeck.js'

class PlayerHand extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <Hand>
                {playerDeck.map(card => {
                    // return <div className='card-holder' ><Card thisCard={card} /></div>
                    return <Card thisCard={card} attack={this.props.attack} />
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

    /* .card-holder {
        height: 150px;
        width: 100px;
        cursor: pointer;

        &:hover {
            height: 300px;
            width: 200px;
        }

        &:first-of-type {
            height: 300px;
            width: 200px;
        }
    } */
`

export default PlayerHand;