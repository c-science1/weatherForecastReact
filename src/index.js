require('bootstrap/dist/css/bootstrap.css');
require('../custom/styles.css');
require('bootstrap/dist/js/bootstrap.js');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
    <App />,
    document.getElementById("react-app")
    );