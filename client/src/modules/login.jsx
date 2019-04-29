
import React from "react";
import { Input, Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

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
        this.setState({
            displayed: this.state.input
        })
    }

    render() {
      return (
        <div className='login-form'>
        
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              {/* <Image src='/logo.png' /> Log-in to your account */}
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />
    
                <Button color='teal' fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href='#'>Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
            {/* <Input placeholder='Search...' onChange={this.changeInput}/>
            <Button onClick={this.changeDisplayed}/>
            <h2> hi {this.state.displayed}</h2> */}
        </div>    
      )
    }
  }


export default Login;

{/* <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}
        </style> */}