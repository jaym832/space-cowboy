import React from 'react'
// import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import Scores from './Scores'
import { gameOver } from '../Game/Game'




class ScoresContainer extends React.Component {
    state = {
        scores: [],
        name: '',
        id: '',
        role: ''


    }

    componentDidMount() {
        // fetch('/me')
        // .then(res=> res.json())
        // .then(data => this.setState({
        //     id: data.id,
        //     role: data.role
        // }))

        axios.get(`/me`)
            .then(res => {
                const data = res.data;
                this.setState({
                    id: data.id,
                    role: data.role
                });
            })

        this.props.loginOffToggle()


    }





    render() {
        let row = 1
        return (
            <div>
                {this.props.loggedIn == false ? (gameOver()) : null}
                <Scores userId={this.state.id}
                    userRole={this.state.role}
                />

            </div>
        )
    }
}

export default ScoresContainer
