import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';   

class Scores extends React.Component{
  state={
    scores:[],
    name:'',
    id:'',
    role:''

    
}

     componentDidUpdate(){
      console.log('im working')
      console.log(this.props.userRole)
      const userId = this.props.userId
    if (this.state.scores.length < 1) {

      if (this.props.userRole == "admin") {
        console.log('im admin')
          axios.get('/score')
          .then(res =>{
              const data= res.data;
              this.setState({
                  scores:data
              })
          })
        

    } else {
        console.log('im Not admin')
        axios.get(`/score/${userId}`)
        .then(res =>{
            const data= res.data;
            this.setState({
              scores:data
          })
        })
    }
    }
    }


    handleDelete(scoreObject){

      let newArr=this.state.scores.filter(score=>score!=scoreObject)
      this.setState({
          scores:newArr
      })
          
        fetch(`/deletescore/${scoreObject.id}`,{
            method: "DELETE",
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(res =>res.json())
          .then((newScore) => this.setState({scores:newArr}) )
        }




    render() {
      let row = 1

        return (
            <div className="table">
              
            <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Username</th>
          <th scope='col'>Score</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      

      {this.state.scores.map(score=>{
          
                return(
            <tr>
                <th>{row++}</th>
                <td>{score.user.name}</td>
                <td>{score.score}</td>
                {this.props.userRole==='admin'? 
                <td onClick={()=>this.handleDelete(score)} >delete</td>:null}
            </tr>
                )
            })}
            
      </MDBTableBody>
    </MDBTable>
    </div>
    )
}
}

export default Scores