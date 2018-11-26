import React from 'react';
import Main from '../main/main';

const LogIn = App =>
    class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
             isLoggedIn: false
            }
        }

        logIn = () => {
            this.setState({isLoggedIn: true})
        }  

        render() {
            if(this.state.isLoggedIn){
                return <Main />
            }
            else{
                return <App logIn={this.logIn} />
            }
        }
    }


export default LogIn;