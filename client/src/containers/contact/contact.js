import React, {Component} from 'react';
import axios from 'axios';
import Radium from 'radium';

class Contact extends Component {
  state ={
    email: {
      emailInput:'',
      subjectInput: '',
      messageInput: ''
    }
  }

  sendemail = (event) => {
    event.preventDefault();
    const email = this.state.email;
    console.log(email);
    axios.post('http://localhost:3001/api/email', email )
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  getEmail = (event) =>{
    event.preventDefault();
    let target = event.target;
    let info = target.value;
    const id = event.target.id;
    let state = this.state
    state.email[id] = info;
    this.setState(state.email, ()=>{
      console.log(this.state[id])
    });
  }

  render(){
    const formStyle = {
      fontFamily:"'Raleway', sans-serif"
    }

    const formTitleStyle = {
      fontFamily: "'Cabin', sans-serif"
    }

    return(
      <div className="row justify-content-center" style={formStyle}>
        <form className="col-10 col-md-6">
          <div className="form-group text-left">
            <label for="emailInput" style={formTitleStyle}>Email address</label>
            <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" onChange={this.getEmail}/>
          </div>
          <div className="form-group text-left">
            <label for="subjectInput" style={formTitleStyle}>Subject</label>
            <input type="text" className="form-control" id="subjectInput" placeholder="subject..." onChange={this.getEmail}/>
          </div>
          <div className="form-group text-left">
            <label for="messageInput" style={formTitleStyle}>Message</label>
            <textarea className="form-control" id="messageInput" rows="3" style={{height: "25vh"}} onChange={this.getEmail}></textarea>
          </div>
          <div className="form-group text-left">
            <button className="btn btn-danger col-6 col-md-4" style={formTitleStyle} onClick={this.sendemail}>Contact us</button>
          </div>
        </form>
      </div>
    )
  }
}

Contact = Radium(Contact);
export default Contact
