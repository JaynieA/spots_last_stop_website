import React from 'react';
import {Jumbotron} from 'react-bootstrap';

class HomeContainer extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className={'jumbo_header_half'}>
            Spot's Last Stop Canine Rescue
          </h1>
        </Jumbotron>
      </div>
    )
  }
}

export default HomeContainer;
