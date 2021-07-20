import React,{useState} from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import "./LandingPage.css"
import {useHistory} from 'react-router-dom'

function LandingPage(props) {

    const [name, setName] = useState("")
    const history = useHistory();

    // onSubmit = (e) => {
    //     e.preventDefault()
    //     this.props.requestUsername(this.state.name)
    //     // need to write in the request username 

    // }


   const onNewUsername = e => {
       setName(
         e.target.value
        )
    }

   

//     const loggedIn = () => { 
//         if (this.props.loggedIn) {
//             <Link to='/game'></Link>
//         }
//  }

function handleSubmit(event) {
    event.preventDefault();
    props.requestUsername(name)
  
  }

    function gameRedirect() {
        if (props.loggedIn === true) {
            history.push("/game");
          } 
    }


        return(
            <div className="Username">
            {gameRedirect()}
            <form onSubmit={handleSubmit}>
            <MDBInput label='Username' id='typeText' type='text' onChange={onNewUsername} value={name} />
            {/* <Link to='/game'> */}
            <br></br>
            <input type="submit" name="submit" value="Log-in" className="submit"/>
            {/* </Link> */}
            </form>
            </div>
        )
    }


export default LandingPage

