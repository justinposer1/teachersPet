
import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import Login from './modules/loginModules/login.jsx';
import CreationLogin from './modules/loginModules/creationLogin.jsx';
import LoadingScreen from './modules/utility/loadingScreen.jsx';
import '../../node_modules/semantic-ui-css/semantic.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'loadingScreen',
      theme: 'default',
      message: ''
    }

    this.changeAttribute = this.changeAttribute.bind(this);
  }

  changeAttribute(attribute, input) {
    if (attribute === 'page') {
      this.setState({
        currentView: input
      });
    } else if (attribute === 'theme') {
      this.setState({
        theme: input
      });
    } else if (attribute === 'message') {
      this.setState({
        message: input
      });
    }
    
  }

  render() {
    if (this.state.currentView === 'login') {
      return (
        <Login changeAttribute={this.changeAttribute}/>
      )
    } else if (this.state.currentView === 'creationLogin') {
      return (
        <CreationLogin changeAttribute={this.changeAttribute}/>
      )
    } else if (this.state.currentView === 'loadingScreen') {
      return (
        <LoadingScreen changeAttribute={this.changeAttribute} message={this.state.message}/>
      )
    }
    
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
