import React, { Component } from 'react'
import axios from 'axios';
import Postman from '../Api/Postman';
import './Login.css';



 class Login extends Component {
  constructor(props){
    super(props)
  
  this.state={
    name:'',
	email:'',
    password:'',
	confirm_password: ''
   }
  }

  changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = async (e)  => {
		
		e.preventDefault()
		console.log(this.state)
					
		const response = await Postman.post('/', this.state ,{
            params: { query: e},
            
        }).then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			});
	
	}

	


	Focus = () => {
		document.getElementById("message").style.display = "block";
	  }
	  
	Blur = () => {
		document.getElementById("message").style.display = "none";
	  }

	render() {
		const { name, email, password, confirm_password } = this.state
		
		return (
			
			<div>

				<form onSubmit={this.submitHandler } className="modal-content animate" action="http://localhost:3000/Site" method="post">
    
					<div className="imgcontainer">
					<img src="https://semantic-ui.com/images/avatar/large/steve.jpg" alt="Avatar" width="200" height="450" className="avatar" />
					</div>

					<div className="container">
								
	  						<label for="usrname"><b>Username</b></label>
							<input type="text" placeholder="Enter Username" id="usrname" name="name" value={name} onChange={this.changeHandler} required/>
						
							<label for="usrname"><b>E-Mail</b></label>
							<input type="text" placeholder="E-mail" id="usrname" name="email" value={email} onChange={this.changeHandler} required/>
						
							<label for="psw"><b>Password</b></label>
							<input type="password" onFocus={this.Focus} onBlur={this.Blur}  placeholder="Enter Password" id="psw" name="password" value={password} onChange={this.changeHandler} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" password="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
							
							<label for="psw"><b>Confirm Password</b></label>
							<input type="password" name="confirm_password" onFocus={this.Focus} onBlur={this.Blur}  placeholder="Re-Enter Password" id="psw" value={confirm_password} onChange={this.changeHandler} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" confirm_password="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />

							<button type="submit" >Submit</button>

							<label>
								<input type="checkbox" checked="checked" name="remember" /> Remember me
							</label>

					</div>

					<div class="container" style={{backgroundColor:"#f1f1f1"}}>
							<button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
							<span class="psw">Forgot <a href="#">password?</a></span>
					</div>
							
							<div id="message">
								<h3>Password must contain the following:</h3>
								<p id="letter" class="invalid">A <b>lowercase</b> letter</p>
								<p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
								<p id="number" class="invalid">A <b>number</b></p>
								<p id="length" class="invalid">Minimum <b>8 characters</b></p>
							</div>

				</form>
			
			</div>
		)
	}
}
export default Login
