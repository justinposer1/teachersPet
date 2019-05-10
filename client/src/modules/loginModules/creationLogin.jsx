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
      buttonContent: {icon: "building outline"}
    };

    this.moveStep = this.moveStep.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  moveStep(num) {
    this.setState({step: this.state.step + num})
  }

  setAttribute(input) {
    if (this.state.step === 0) {
      this.setState({ schoolName: input});
    } else if (this.state.step === 1) {
      this.state.gradeLevels.push(input);
    } else if (this.state.step === 2) {
      this.state.gradeLevels[input] = true;
    }
  }

  changeInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  buttonPress() {
    this.setAttribute(this.state.input);
    if (this.state.step !== 1) {
      this.moveStep(1);
    }
    
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
                    <Form.Input fluid icon={this.state.buttonContent.icon} iconPosition="left" placeholder="enter your school's name" onChange={(e) => this.changeInput(e)}/>

                    <Button color="teal" fluid size="large" onClick={() => this.buttonPress()} style={{ marginTop: "3em" }}>
                      Submit school name
                    </Button>
                    
                  </Segment>
                </Form>
                
              </Grid.Column>
            </Grid>
            <CompletionBar step={this.state.step} moveStep={this.moveStep} schoolName={this.state.schoolName}/>
          </div>
    )
  }
}

export default CreationLogin;
