import React from 'react';
import ReactRouter, {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavbarInstance from '../components/NavbarInstance';
import HomeContainer from '../containers/HomeContainer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavbarInstance/>
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
