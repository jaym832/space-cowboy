import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import "./CreateLogIn.css"

function CreateLogIn(props) {

    const [name, setName] = useState("")



    const onNewUsername = e => {
        setName(
            e.target.value
        )
    }



    function handleSubmit(event) {
        event.preventDefault();
        props.createUsername(name)

    }




    return (
        <div className="Username">
            <form onSubmit={handleSubmit}>
                <MDBInput label='Username' id='typeText' type='text' onChange={onNewUsername} value={name} />
                <br></br>
                <input type="submit" name="submit" value="Create New Player" className="submit" />
            </form>
        </div>
    )
}


export default CreateLogIn
