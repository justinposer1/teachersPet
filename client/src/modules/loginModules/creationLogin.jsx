import React from "react";
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
} from "semantic-ui-react";
import CompletionBar from "./completionBar.jsx"
import axios from "axios";


class CreationLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      schoolName: null,
      gradeLevels: [],
      verifiedEmails: {},
      verifiedCode: false
    };
  }

  render() {
    return (
      <div className="creation-form">
            <Grid
              textAlign="center"
              style={{ height: "100%", marginTop: "3em" }}
              verticalAlign="middle"
            >
              <Grid.Column style={{ maxWidth: 450 }}>
                <div>
                  <Header as="h2" icon textAlign="center">
                    <Icon name="student" circular />
                    <Header.Content>teachersPet</Header.Content>
                  </Header>
                </div>
                <Header as="h2" color="teal" textAlign="center">
                  Log into your account
                </Header>
                <Form size="large">
                  <Segment stacked>
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="E-mail address"
                    />
                    <Form.Input
                      fluid
                      icon="lock"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                    />

                    <Button color="teal" fluid size="large">
                      Login
                    </Button>
                  </Segment>
                </Form>
                <Message>
                  Once your admin has verified your email, create an account{" "}
                  <a href="#">here</a>!
                </Message>
                
              </Grid.Column>
            </Grid>
            <CompletionBar/>
          </div>
    )
  }
}

export default CreationLogin;
