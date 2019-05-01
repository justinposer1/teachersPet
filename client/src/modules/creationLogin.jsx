
import React from 'react';
import {
    Icon,
  Input,
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Step
} from 'semantic-ui-react';
import axios from 'axios';

class CreationLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.changeInput = this.changeInput.bind(this);
    this.changeDisplayed = this.changeDisplayed.bind(this);
  }

  changeInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  changeDisplayed() {
    this.setState({
      displayed: this.state.input
    });
  }

  render() {
    return (
      <div className='login-form'>
        <Grid
          textAlign='center'
          style={{ height: '100%', marginTop: '3em' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <div>
              <Header as='h2' icon textAlign='center'>
                <Icon name='student' circular />
                <Header.Content>teachersPet</Header.Content>
              </Header>
            </div>
            <Header as='h2' color='teal' textAlign='center'>
               Log into your account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                />
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
            Once your admin has verified your email, create an account <a href='#'>here</a>!
            </Message>
          </Grid.Column>
        </Grid>
        {/* <Input placeholder='Search...' onChange={this.changeInput}/>
            <Button onClick={this.changeDisplayed}/>
            <h2> hi {this.state.displayed}</h2> */}
            <Step.Group ordered>
    <Step completed>
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>

    <Step completed>
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
      </div>
    );
  }
}

export default CreationLogin;


