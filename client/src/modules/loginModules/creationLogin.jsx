import React from "react";
import {
  Icon,
  Button,
  Form,
  Grid,
  Header,
  Segment,
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
    this.setAttribute = this.setAttribute.bind(this);

    this.grades = [
      { key: 'prek', text: 'PreK', value: 'PreK' },
      { key: 'Kindergarten', text: 'Kindergarten', value: 'Kindergarten' },
      { key: '1st', text: '1st', value: '1st' },
      { key: '2nd', text: '2nd', value: '2nd' },
      { key: '3rd', text: '3rd', value: 'html' },
      { key: '4th', text: '4th', value: '4th' },
      { key: '5th', text: '5th', value: '5th' },
      { key: '6th', text: '6th', value: '6th' },
      { key: '7th', text: '7th', value: '7th' },
      { key: '8th', text: '8th', value: '8th' },
      { key: '9th', text: '9th', value: '9th' },
      { key: '10th', text: '10th', value: '10th' },
      { key: '11th', text: '11th', value: '11th' },
      { key: '12th', text: '12th', value: '12th' }
    ];
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

  handleChange(e, value) {
    console.log(e, value)
    this.setAttribute(value);
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

                    <Dropdown onChange={(e, { value }) => this.handleChange(e, value)} placeholder='Add Grade Levels' multiple selection fluid options={this.grades} value={this.state.gradeLevels} style={{width: "38.5em", visibility: this.state.step === 1 ? "visible" : "hidden"}}/>
  
                    <Button color="teal" fluid size="large" onClick={() => this.setAttribute(this.state.input)} style={{ marginTop: "3em" }} style={{visibility: this.state.step === 2 ? "visible" : "hidden"}}>
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
