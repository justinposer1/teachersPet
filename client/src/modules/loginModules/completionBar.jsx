import React from "react";
import { Icon, Grid, Step } from "semantic-ui-react";

const CompletionBar = props => {
  return (
    <Step.Group fluid>
      <Step className={props.step < 1 ? "active" : "completed"}>
        <Icon name="building outline" />
        <Step.Content>
          <Step.Title>School Name</Step.Title>
          <Step.Description> {props.schoolName || "Input your school's name!"} </Step.Description>
        </Step.Content>
      </Step>

      <Step className={props.step < 2 ? "active" : "completed"}>
        <Icon name="book" />
        <Step.Content>
          <Step.Title>Grade Levels</Step.Title>
          <Step.Description> {props.step < 2 ?  "Input your school's grade levels" : `Grades: ${props.gradeLevels}`} </Step.Description>
        </Step.Content>
      </Step>

      <Step className={props.step < 3 ? "active" : "completed"}>
        <Icon name="users" />
        <Step.Content>
          <Step.Title>Approved Staff</Step.Title>
          <Step.Description> {props.step < 3 ? "Input staff emails" : `${Object.keys(props.verifiedEmails).length} approved staff members`} </Step.Description>
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
