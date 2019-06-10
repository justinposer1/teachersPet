import React from "react";
import {
  Icon,
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Dropdown,
  Message
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
      error: false,
      stepContent: {0: {icon: "building outline", placeHolder: "enter your school's name", text: "Submit your school's name", error: "Please enter your school's name"}, 1: {icon: "building outline", placeHolder: "enter your school's grade levels", text: "Submit your school's grade levels", text2: "Add grade level", error: "Please add at least one grade level"}, 2: {icon: "users", placeHolder: "enter emails of staff members", text: "Submit approved emails", text2: "Add staff email", error: "Please add at least one valid email"}, 3: {icon: "lock", placeHolder: "enter the code sent to you by teachersPet", text: "Verify"}}
    };

    this.moveStep = this.moveStep.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.setAttribute = this.setAttribute.bind(this);

    this.grades = [
      { key: 'prek', text: 'PreK', value: 'PreK' },
      { key: 'kindergarten', text: 'Kindergarten', value: 'Kindergarten' },
      { key: '1st', text: '1st', value: '1st' },
      { key: '2nd', text: '2nd', value: '2nd' },
      { key: '3rd', text: '3rd', value: '3rd' },
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
    if (this.state.step === 1 && num === 1) {
      if (this.state.gradeLevels.length === 0) {
        this.setState({error: true});
        return;
      }
      let newGrades = this.sortGrades(this.state.gradeLevels);
      this.setState({step: this.state.step + num, input: "", gradeLevels: newGrades});
    } else if (this.state.step === 2 && num === 1 && Object.keys(this.state.verifiedEmails).length === 0) {
      this.setState({error: true});
        return;
    }
    this.setState({step: this.state.step + num, input: "", warning: false});
  }

  setAttribute(input) {
    if (!input) {
      this.setState({error: true});
      return;
    } else if (this.state.step === 0) {
      this.setState({ schoolName: input},() => {
        this.moveStep(1)
      });
    } else if (this.state.step === 1) {
      this.state.gradeLevels = input;
    } else if (this.state.step === 2) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
          this.state.verifiedEmails[input] = true;
        } else {
          this.setState({error: true});
          return;
        }
    } else if (this.state.step === 3) {
      // fill in authentication logic
    }
    this.setState({error: false, input: ""})
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

  sortGrades(grades) {
    let order = {
     'PreK' : 0,
     'Kindergarten' : 1,
     '1st' : 2, 
     '2nd' : 3, 
     '3rd' : 4, 
     '4th' : 5, 
     '5th' : 6, 
     '6th' : 7, 
     '7th' : 8, 
     '8th' : 9,
     '9th' : 10, 
     '10th' : 11,
     '11th' : 12,
     '12th' : 13,
    };

    let newArray = [];
    grades.forEach((grade) => {newArray[order[grade]] = " " + grade});
    let i = 0;
    while (i < newArray.length) {
      if (!newArray[i]) {
        newArray.splice(i, 1);
      } else {
        i++;
      }
    }
    return newArray;
  }

  render() {
    return (
      <div className="creation-form">
            <CompletionBar step={this.state.step} moveStep={this.moveStep} schoolName={this.state.schoolName} gradeLevels={this.state.gradeLevels} verifiedEmails={this.state.verifiedEmails}/>
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
                <Form size="large" error>
                  <Segment stacked>
                    <Form.Input fluid icon={this.state.stepContent[this.state.step].icon} value={this.state.input} iconPosition="left" placeholder={this.state.stepContent[this.state.step].placeHolder} onChange={(e) => this.changeInput(e)} style={{visibility: this.state.step === 1 ? "hidden" : "visible"}}/>

                    <Dropdown onChange={(e, { value }) => this.handleChange(e, value)} placeholder='Add Grade Levels' multiple selection fluid options={this.grades} values={this.state.gradeLevels} style={{width: "38.5em", display: this.state.step === 1 ? "block" : "none"}}/>

                    <Message error={this.state.error} content={this.state.stepContent[this.state.step].error} size="large" style={{display: this.state.error ? "block" : "none"}}/>
  
                    <Button color="teal" fluid size="large" onClick={() => this.setAttribute(this.state.input)} style={{display: this.state.step === 2 ? "block" : "none"}}>
                    {this.state.stepContent[this.state.step].text2}
                    </Button>

                    <Button color="teal" fluid size="large" onClick={() => this.submit()} style={{ marginTop: "1em", marginBottom: "1em" }}>
                      {this.state.stepContent[this.state.step].text}
                    </Button>

                    <Button color="teal" fluid size="large" onClick={() => this.moveStep(-1)} style={{ marginTop: "1em" }} style={{display: this.state.step === 0 ?  "none" : "block"}}>
                      Go back
                    </Button>
                    
                  </Segment>
                </Form>
                
              </Grid.Column>
            </Grid>
          </div>
    )
  }
}

export default CreationLogin;
