
import React from "react";
import { Input, Button } from 'semantic-ui-react';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          input: '',
          displayed: 'nothing'
      }
      this.changeInput = this.changeInput.bind(this);
      this.changeDisplayed = this.changeDisplayed.bind(this);
    }

    changeInput(e) {
        this.setState({
            input: e.target.value
        })
    }

    changeDisplayed() {
        console.log(this.state)
        this.setState({
            displayed: this.state.input
        })
    }

    render() {
      return (
        <div>
            <Input placeholder='Search...' onChange={this.changeInput}/>
            <Button onClick={this.changeDisplayed}/>
            <h2> hi {this.state.displayed}</h2>
        </div>    
      )
    }
  }


export default Login;