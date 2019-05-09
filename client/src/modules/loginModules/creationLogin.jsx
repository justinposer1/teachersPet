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
      schoolName: '',
      gradeLevels: [],
      verifiedEmails: {},
      verifiedCode: false,
      input: null,
      buttonContent: null
    };

    this.moveStep = this.moveStep.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  moveStep(num) {
    this.setState({step: this.state.step + num})
  }

  setAttribute(category, input) {
    if (category === 'schoolName') {
      this.setState({ schoolName: input});
    } else if (category === 'gradeLevels') {
      this.state.gradeLevels.push(input);
    } else if (category === 'verifiedEmails') {
      this.state.gradeLevels[input] = true;
    }
  }

  changeInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <div className="creation-form">
            <Grid textAlign="center" style={{ height: "100%", marginTop: "3em", marginBottom: "10em" }} verticalAlign="middle">
              <Grid.Column style={{ maxWidth: 600 }}>
                <div>
                  <Header as="h2" icon textAlign="center">
                    <Icon name="student" circular />
                    <Header.Content>teachersPet</Header.Content>
                  </Header>
                </div>
                <Header as="h2" color="teal" textAlign="center">
                  Follow the instructions to set up your school's site on teachersPet:
                </Header>
                <Form size="large">
                  <Segment stacked>
                    <Form.Input fluid icon="building outline" iconPosition="left" placeholder="enter your school's name" onChange={this.changeInput}/>

                    <Button color="teal" fluid size="large" onClick={() => this.moveStep(1)} style={{ marginTop: "3em" }}>
                      Submit school name
                    </Button>
                    
                  </Segment>
                </Form>
                
              </Grid.Column>
            </Grid>
            <CompletionBar step={this.state.step} moveStep={this.moveStep}/>
          </div>
    )
  }
}

export default CreationLogin;
