import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import ListBooks from './components/ListBooks';
import { BOOKS } from './shared/books';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: BOOKS
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">O'Really Books</NavbarBrand>
          </div>
        </Navbar> 
        <ListBooks books={this.state.books} />
      </div> 
    )
  }
}
export default App;
