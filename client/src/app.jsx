
import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import Login from './modules/login.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <Login></Login>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
