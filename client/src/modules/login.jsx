
import React from "react";
import { Input, Button } from 'semantic-ui-react';



class Login extends React.Component {
    constructor(props) {
      super(props);
        
  
    }
  
    render() {
      return (
        <div>
            <Input placeholder='Search...' />
        </div>    
      )
    }
  }


export default Login;