import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import ListBooks from './components/ListBooks'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">O'Really Books</NavbarBrand>
          </div>
        </Navbar> 
        <ListBooks />
      </div> 
    )
  }
}
export default App;
