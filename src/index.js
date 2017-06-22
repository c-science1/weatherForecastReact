require('bootstrap/dist/css/bootstrap.css');
require('../src/custom/styles.css');

window.jQuery = require('jquery/dist/jquery');
require('bootstrap/dist/js/bootstrap.min');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
    <App />,
    document.getElementById("react-app")
    );
