import React from 'react';
import styled from 'styled-components';
import wand from  './magic-wand.svg'
import sword from  './swords.svg'
import shield from  './shield.svg'

class Card extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <CardWrapper>
                <div className="card">
                
                    <div className="card-title">{this.props.thisCard.name}

                    { this.props.thisCard.castingCost === 0 ? '' : <div><img className="card-title-icon" src={wand} />{this.props.thisCard.castingCost}</div> }
                        
                    </div>
                        

                    <div className="card-picture">
                        <img src={this.props.thisCard.picture}></img>
                    </div>
                    <p className="card-type">{this.props.thisCard.type}</p>
                    <div className="card-description">
                        <p>{this.props.thisCard.description}</p>
                    </div>
                    <div className="card-combat-info">

                    {
                        this.props.thisCard.damage === null ? <div></div> : <div><img className='card-damage-icon' src={sword} /> {this.props.thisCard.damage} </div>
                    }
                    {
                        this.props.thisCard.health === null ? <div></div> : <div><img className='card-health-icon' src={shield}/> {this.props.thisCard.health} </div>
                    }

                    {/* {
                        if(this.props.thisCard.damage !== null) {
                            return <div><img className='card-damage-icon' src={sword} /> {this.props.thisCard.damage} </div>;
                        }
                    } */}
                            
                            
                    </div>
                    {/* <p>{this.props.thisCard.damage} / {this.props.thisCard.health}</p> */}
                </div>
            </CardWrapper>
        );
    }
}


const CardWrapper = styled.div`
    box-sizing: border-box;
    height: 150px;
    width: 100px;
    border-radius: 10px;
    /* border: 1px solid gray; */
    background-color: lightgray;
    padding: 2px;
    color: white;
    font-size: 10px;
    cursor: pointer;

    .card {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        background: darkgreen;
        background-image: url('https://previews.123rf.com/images/anoushkatoronto/anoushkatoronto1608/anoushkatoronto160800826/61512607-colorful-blue-green-stone-texture-background-closeup.jpg');
        background-size: cover;
        border-radius: 5px;
        padding: 0 5px;
        
        .card-title {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .card-title-icon {
                height: 10px;
            }
        }

        .card-picture {
            box-sizing: border-box;
            width: 100%;
            height: 40%;
            /* background-image: url('https://upload.wikimedia.org/wikipedia/commons/b/bc/Rainforest_Fatu_Hiva.jpg'); */
            /* border-radius: 10px; */
            /* background-size: cover; */
            img {
                width: 100%;
                height: 100%;
                border-radius: 5px;
            }
        }
        .card-type {
            font-size: 7px;
        }

        .card-description {
            box-sizing: border-box;
            width: 100%;
            height: 40%;
            background: tan;
            border-radius: 5px;
            font-size: 9px;
            padding: 1px 2px;
        }

        .card-combat-info {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0;

            img {
                height: 10px;
            }
        }

    }


        &:hover {
            height: 300px;
            width: 200px;
            font-size: 18px;
            padding: 5px;

            .card {
                border-radius: 10px;
                padding: 0 10px;
                
                .card-title-icon {
                height: 20px;
                }
                .card-type {
                    font-size: 14px;
                }

                .card-description {
                    font-size: 16px;
                    padding: 2px 5px;
                }

            .card-combat-info {

                img {
                height: 18px;
                }
            }
            }
        }

        /* &:first-of-type {
            height: 300px;
            width: 200px;
            font-size: 18px;
            padding: 5px;

            .card {
                border-radius: 10px;
                padding: 0 10px;

                .card-type {
                    font-size: 14px;
                }

                .card-description {
                    font-size: 16px;
                    padding: 2px 5px;
                }
            }
        }            */

`


export default Card;