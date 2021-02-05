import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "Your Tweet",

    };
  }

  handleTweetChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  remainingChars = () => {
    let max = this.props.maxChars
    let message = this.state.message

    return max - message.length
  }

  render() {
    console.log(this.remainingChars())
    return (
      <div>
        <strong>Your message:</strong>
        <form>
        <input onChange={event => this.handleTweetChange(event)} type="text" name="message" id="message" value={this.state.message}/>
        </form>
        <p>{this.remainingChars()}</p> 
      </div>
    );
  }
}

export default TwitterMessage;
