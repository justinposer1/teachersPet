import React from "react";
import { Icon, Grid, Step } from "semantic-ui-react";

const CompletionBar = props => {
  switch (props.step) {
    case 0:
      return (
        <Step.Group fluid>
          <Step className={props.active ? "example active" : "example completed"}>
            <Icon name="building outline" />
            <Step.Content>
              <Step.Title>School Name</Step.Title>
              <Step.Description>Input your school's name!</Step.Description>
            </Step.Content>
          </Step>

          <Step active>
            <Icon name="users" />
            <Step.Content>
              <Step.Title>Approved Staff</Step.Title>
              <Step.Description>Enter emails of staff members</Step.Description>
            </Step.Content>
          </Step>

          <Step active>
            <Icon name="lock" />
            <Step.Content>
              <Step.Title>Authentication</Step.Title>
              <Step.Description>Enter the code provided by teachersPet</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
      );
    case 1:
      return (
        <Step.Group fluid>
          <Step completed>
            <Icon name="building outline" />
            <Step.Content>
              <Step.Title>School Name</Step.Title>
              <Step.Description> {props.schoolName} </Step.Description>
            </Step.Content>
          </Step>

          <Step active>
            <Icon name="users" />
            <Step.Content>
              <Step.Title>Approved Staff</Step.Title>
              <Step.Description>Enter emails of staff members</Step.Description>
            </Step.Content>
          </Step>

          <Step active>
            <Icon name="lock" />
            <Step.Content>
            <Step.Title>Authentication</Step.Title>
              <Step.Description>Enter the code provided by teachersPet</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
      );
    case 2:
      return (
        <Step.Group fluid>
          <Step completed>
            <Icon name="building outline" />
            <Step.Content>
              <Step.Title>School Name</Step.Title>
              <Step.Description>Input your school's name!</Step.Description>
            </Step.Content>
          </Step>

          <Step completed>
            <Icon name="users" />
            <Step.Content>
              <Step.Title>Approved Staff</Step.Title>
              <Step.Description>Enter emails of staff members</Step.Description>
            </Step.Content>
          </Step>
          <Step active>
            <Icon name="lock" />
            <Step.Content>
            <Step.Title>Authentication</Step.Title>
              <Step.Description>Enter the code provided by teachersPet</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
      );
  }
};

export default CompletionBar;
