import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import UserList from './UserList/UserList';
import LoginContol from './LoginControl/LoginControl';
import ProtoForm from './Form/ProtoForm';
import Clock from './Clock';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);

    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    return (
      <div className="App">
        <LoginContol isLoggedIn={this.state.isLoggedIn}
          onHandleLoginClick={this.handleLoginClick}
          onHandleLogoutClick={this.handleLogoutClick}
          />

        <Clock  isLoggedIn={this.state.isLoggedIn}/>
        <UserList   isLoggedIn={this.state.isLoggedIn}/>
        <ProtoForm   isLoggedIn={this.state.isLoggedIn}/>

      </div>
    );
  }
}

export default App;
