import React from "react";
import { Icon, Grid, Step } from "semantic-ui-react";

const CompletionBar = props => {
  let numGrades = props.gradeLevels.length;
  let numStaff = Object.keys(props.verifiedEmails).length;
  return (
    <Step.Group fluid>
      <Step className={props.step < 1 ? "active" : "completed"}>
        <Icon name="building outline" />
        <Step.Content>
          <Step.Title>School Name</Step.Title>
          <Step.Description> {props.step < 1 ? "Input your school's name!" : props.schoolName} </Step.Description>
        </Step.Content>
      </Step>

      <Step className={props.step < 2 ? "active" : "completed"}>
        <Icon name="book" />
        <Step.Content>
          <Step.Title>Grade Levels</Step.Title>
          <Step.Description> {props.step < 2 ?  "Input your school's grade levels" : `Grade${!numGrades === 1? '' : 's'}: ${props.gradeLevels}`} </Step.Description>
        </Step.Content>
      </Step>

      <Step className={props.step < 3 ? "active" : "completed"}>
        <Icon name="users" />
        <Step.Content>
          <Step.Title>Approved Staff</Step.Title>
          <Step.Description> {props.step < 3 ? "Input staff emails" : `${numStaff} approved staff member${numStaff === 1? '' : 's'}`} </Step.Description>
        </Step.Content>
      </Step>

      <Step className={props.step < 4 ? "active" : "completed"}>
        <Icon name="lock" />
        <Step.Content>
          <Step.Title>Authentication</Step.Title>
          <Step.Description>
            Enter the code provided by teachersPet
          </Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  );
};

export default CompletionBar;
