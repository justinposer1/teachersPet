import React from "react";
import {
  Icon,
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Menu,
  Dropdown
} from "semantic-ui-react";
import CompletionBar from "./completionBar.jsx"
import axios from "axios";


class CreationLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      schoolName: "",
      gradeLevels: [],
      verifiedEmails: {},
      verifiedCode: false,
      input: "",
      warning: false,
      formContent: {0: {icon: "building outline", placeHolder: "enter your school's name", text: "Submit your school's name"}, 1: {icon: "building outline", placeHolder: "enter your school's grade levels", text: "Submit your school's grade levels", text2: "Add grade level"}, 2: {icon: "users", placeHolder: "enter emails of staff members", text: "Submit approved emails", text2: "Add staff email"}, 3: {icon: "lock", placeHolder: "enter the code sent to you by teachersPet", text: "Verify"}}
    };

    this.moveStep = this.moveStep.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  moveStep(num) {
    this.setState({step: this.state.step + num, input: ""});
  }

  setAttribute(input) {
    if (!this.state.input) {
      this.setState({warning: true});
      return;
    } else if (this.state.step === 0) {
      this.setState({ schoolName: input},() => {
        this.moveStep(1)
      });
    } else if (this.state.step === 1) {
      this.state.gradeLevels.push(input);
    } else if (this.state.step === 2) {
      this.state.verifiedEmails[input] = true;
    } else if (this.state.step === 3) {
      // fill in authentication logic
    }
    this.setState({warning: false, input: ""})
  }

  changeInput(e) {
    this.setState({input: e.target.value});
  }

  submit() {
    if (this.state.step === 0) {
      this.setAttribute(this.state.input);
    } else {
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
                    <Form.Input fluid icon={this.state.formContent[this.state.step].icon} value={this.state.input} iconPosition="left" placeholder={this.state.formContent[this.state.step].placeHolder} onChange={(e) => this.changeInput(e)} style={{visibility: this.state.step === 1 ? "hidden" : "visible"}}/>

                    <Menu vertical style={{visibility: this.state.step === 1 ? "visible" : "hidden"}}>
                      <Dropdown item text='Grade Levels' onChange={(e) => this.changeInput(e)>
                        <Dropdown.Menu>
                          <Dropdown.Item> PreK </Dropdown.Item>
                          <Dropdown.Item> Kindergarten </Dropdown.Item>
                          <Dropdown.Item> 1st </Dropdown.Item>
                          <Dropdown.Item> 2nd </Dropdown.Item>
                          <Dropdown.Item> 3rd </Dropdown.Item>
                          <Dropdown.Item> 4th </Dropdown.Item>
                          <Dropdown.Item> 5th </Dropdown.Item>
                          <Dropdown.Item> 6th </Dropdown.Item>
                          <Dropdown.Item> 7th </Dropdown.Item>
                          <Dropdown.Item> 8th </Dropdown.Item>
                          <Dropdown.Item> 9th </Dropdown.Item>
                          <Dropdown.Item> 10th </Dropdown.Item>
                          <Dropdown.Item> 11th </Dropdown.Item>
                          <Dropdown.Item> 12th </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Menu>
  
                    <Button color="teal" fluid size="large" onClick={() => this.setAttribute(this.state.input)} style={{ marginTop: "3em" }} style={{visibility: this.state.step === 1 || this.state.step === 2 ? "visible" : "hidden"}}>
                    {this.state.formContent[this.state.step].text2}
                    </Button>

                    <Button color="teal" fluid size="large" onClick={() => this.submit()} style={{ marginTop: "3em" }}>
                      {this.state.formContent[this.state.step].text}
                    </Button>

                    
                    
                  </Segment>
                </Form>
                
              </Grid.Column>
            </Grid>
            <CompletionBar step={this.state.step} moveStep={this.moveStep} schoolName={this.state.schoolName} gradeLevels={this.state.gradeLevels} verifiedEmails={this.state.verifiedEmails}/>
          </div>
    )
  }
}

export default CreationLogin;
