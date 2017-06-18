import React from 'react';
import ReactRouter, {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavbarContainer from '../containers/NavbarContainer';
import HomeContainer from '../containers/HomeContainer';
import FooterContainer from '../containers/FooterContainer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavbarContainer/>
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
          </Switch>
          <FooterContainer/>
        </div>
      </Router>
    )
  }
}

export default App;
