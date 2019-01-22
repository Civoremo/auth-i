import React, { Component } from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import HomeScreen from './components/homeSplashScreen';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';


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
      users: [],
    }
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavBarDiv>
            <MenuButton>
              <Link to='/'>Home</Link>
            </MenuButton>
            <MenuButton>
              <Link to='/users'>Get Users</Link>
            </MenuButton>
            <MenuButton>
              <Link to='/login'>Login</Link>
            </MenuButton>
            <MenuButton>
              Logout
            </MenuButton>
            <MenuButton>
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
              <Route path={'/login'} render={props => <LoginForm {...props} />}></Route>
            </div>
            <div> 
              <Route path={'/register'} render={props => <RegisterForm {...props} />}></Route>
            </div> 
          </ContentContainer>
        </div>
      </div>
    );
  }
}

export default App;
