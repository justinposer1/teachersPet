
import React from 'react';
// import axios from 'axios';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'creationLogin',
      theme: 'default',
      message: '',
      user: {}
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
    } else if (attribute === 'user') {
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
    } else if (this.state.currentView === 'homePage') {
      return (
        <HomePage changeAttribute={this.changeAttribute}/>
      )
    }
    
  }
}

export default HomePage;