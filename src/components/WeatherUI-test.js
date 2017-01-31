jest.dontMock('../WeatherUI');
jest.dontMock('../../../custom/utils.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const WeatherUI = require('../WeatherUI');
var utilFunc = require('../../../custom/utils.js');
describe('In a WeatherUI component', () => {
    let weatherUI = TestUtils.renderIntoDocument(
        <WeatherUI city="London"/>
    );
    //let buttons = TestUtils.scryRenderedDOMComponentsWithTag(reaction, 'button');
    //let firstButtonNode = ReactDOM.findDOMNode(buttons[0]);
    let cityNode = ReactDOM.findRenderedDOMComponentWithTag(weatherUI, 'h4');


    it('Heading should display the city name', () => {

        expect(cityNode).toEqual('London');

    });
});