import React from 'react'
import { gameStart } from './Game'



class GameContainer extends React.Component {



    render() {
        return (
            <div> Kill robot aliens to gain points, try and get to the end.Check your score vs  others!
                <br />
                <div className='game-container-div'>

                    {this.props.loggedIn ? (gameStart()) : "Please Log In To Play"}
                </div>
            </div>
        )
    }
}



export default GameContainer