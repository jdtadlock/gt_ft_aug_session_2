import React, { Component } from 'react';
import axios from 'axios';
window.axios = axios;

class App extends Component {
	constructor() {
		super();

		this.state = {
			logged_in: false,
			email: '',
			password: ''
		}
	}

	handleChange = e => {
		let change = {};
		change[e.target.name] = e.target.value;

		this.setState(change);
	}

	register = e => {
		e.preventDefault();
		
		window.axios.post('/auth/register', {
      email: this.state.email,
      password: this.state.password
    }).then(res => {
        if ( res.data.success ) {
	    		console.log(res.data);
          // this.setState({user: {...res.data.info}, logged_in: true});
        }
    }).catch(err => console.log('error: ' + err));
	}

	login = e => {
		e.preventDefault();
		
		window.axios.post('/auth/login', {
      email: this.state.email,
      password: this.state.password
    }).then(res => {
        if ( res.data.success ) {
	    		console.log(res.data);
          // this.setState({user: {...res.data.info}, logged_in: true});
        }
    }).catch(err => console.log('error: ' + err));
	}

  render() {
    return (
      <div>
      	<h2>Register</h2>
        <form className="column">
        	<input type="email" name="email" onChange={this.handleChange} value={this.state.email}/>
        	<input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
        	<button onClick={this.register}>Submit</button>
        </form>

        <h2>Login</h2>
        <form className="column">
        	<input type="email" name="email" onChange={this.handleChange} value={this.state.email}/>
        	<input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
        	<button onClick={this.login}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
