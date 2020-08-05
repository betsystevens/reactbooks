### Setup

```
$ npx create-react-app reactbooks
$ cd reactbooks
$ git init
$ npm i bootstrap
$ npm i reactstrap
$ npm i react-popper @popperjs/core
```

### Compile, run in browser
```
$ npm start
```

### Beginning changes to app
- Add to index.html
```
import 'bootstrap/dist/css/bootstrap.min.css'
```

- Update App.js to the following 
```
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">O'Really Books</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

```
