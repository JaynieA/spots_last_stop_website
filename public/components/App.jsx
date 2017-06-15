import React from 'react';
import ReactRouter, {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavbarContainer from '../containers/NavbarContainer';
import HomeContainer from '../containers/HomeContainer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavbarContainer/>
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
