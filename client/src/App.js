import React, { Component } from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';
import HomeScreen from './components/homeSplashScreen';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import DisplayUsers from './components/displayUsers';


const NavBarDiv = styled.div`
  background-color: #222222;
  height: 50px;
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const MenuButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const ContentContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });    
  }

  clearFormText = e => {
    e.preventDefault();
    this.setState({
      username: '',
      password: '',
    });
  }

  registerNewUser() {
    axios({
        method: 'post',
        url: 'http://localhost:3521/api/register',
        params: {
          "username": this.state.username,
          "password": this.state.password,
        }
      })
      .then(id => {
        alert(`Added new user, id: ${id}`);
      })
      .catch(err => {
        alert('error adding new user');
      });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavBarDiv>
            <MenuButton  onClick={this.clearFormText}>
              <Link to='/'>Home</Link>
            </MenuButton>
            <MenuButton  onClick={this.clearFormText}>
              <Link to='/users'>Get Users</Link>
            </MenuButton>
            <MenuButton  onClick={this.clearFormText}>
              <Link to='/login'>Login</Link>
            </MenuButton>
            <MenuButton>
              Logout
            </MenuButton>
            <MenuButton  onClick={this.clearFormText}>
              <Link to='/register'>Register</Link>
            </MenuButton>
          </NavBarDiv>
        </nav>

        <div>
          <ContentContainer>
            <div>
              <Route exact path={'/'} render={props => <HomeScreen {...props} />}></Route>
            </div>
            <div>
              <Route path={'/users'} render={props => <DisplayUsers {...props} loggedIn={this.state.loggedIn} />}></Route>
            </div>
            <div>
              <Route path={'/login'} render={props => <LoginForm {...props} handleChange={this.handleChange} username={this.state.username} password={this.state.password}/>}></Route>
            </div>
            <div> 
              <Route path={'/register'} render={props => <RegisterForm {...props} registerNewUser={this.registerNewUser} handleChange={this.handleChange} username={this.state.username} password={this.state.password} />}></Route>
            </div> 
          </ContentContainer>
        </div>
      </div>
    );
  }
}

export default App;
