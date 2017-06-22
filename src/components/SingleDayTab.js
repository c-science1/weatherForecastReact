'use strict';

import React from 'react';
var $ = require('jquery/dist/jquery');

const showContent = e => $(`#${e.target.id}`).tab('show');

const SingleDayTab = (props) => {
    return (
            <li role="presentation" className={props.activeClass}>
                <a href="#day1" onClick={showContent} id={props.id} aria-controls="home" role="tab" data-toggle="tab">
                {props.name}</a>
            </li>
    );
}

export default SingleDayTab;

