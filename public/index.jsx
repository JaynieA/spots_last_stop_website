import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

require("!style-loader!css-loader!sass-loader!./scss/main.scss");

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
