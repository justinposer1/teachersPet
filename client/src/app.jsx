
import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import Login from './modules/loginModules/login.jsx';
import CreationLogin from './modules/loginModules/creationLogin.jsx';
import '../../node_modules/semantic-ui-css/semantic.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'creationLogin',
      theme: 'default'
    }

    this.changeView = this.changeView.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.propsPackage = {
      changeView: this.changeView,
      theme: this.theme
    }
  }

  changeView(pageString) {
    this.setState({
      currentView: pageString
    });
  }

  changeTheme(themeString) {
    this.setState({
      theme: themeString
    });
  }

  render() {
    if (this.state.currentView === 'login') {
      return (
        <Login propsPackage={this.propsPackage}/>
      )
    } else if (this.state.currentView === 'creationLogin') {
      return (
        <CreationLogin/>
      )
    }
    
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
