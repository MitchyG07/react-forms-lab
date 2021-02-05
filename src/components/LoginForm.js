import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.username != '' && this.state.passwod != '') {
      this.props.handleLogin(this.state)
    } else {
      console.log('this isnt working dingus')
    }
  }

  render() {
    console.log(this.state)
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input onChange={event => this.handleUsernameChange(event)} id="username" name="username" type="text" value = {this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.handlePasswordChange(event)} id="password" name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
