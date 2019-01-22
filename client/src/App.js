import React, { Component } from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';


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
              Get Users
            </MenuButton>
            <MenuButton>
              Login
            </MenuButton>
            <MenuButton>
              Register
            </MenuButton>
          </NavBarDiv>
        </nav>

        <div>
          <ContentContainer>
            Select Option in Navigation
          </ContentContainer>
        </div>
      </div>
    );
  }
}

export default App;
