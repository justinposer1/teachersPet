
import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import Login from './modules/login.jsx';
import '../../node_modules/semantic-ui-css/semantic.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <Login/>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
