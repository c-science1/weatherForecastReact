jest.dontMock('../WeatherEachDay');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import WeatherEachDay from '../WeatherEachDay';

describe('In WeatherEachDay component', () => {
    let weather= TestUtils.renderIntoDocument(
        <WeatherEachDay />
    );

    let chev = TestUtils.findRenderedDOMComponentWithClass(PackagesComponent, 'heading');

	it('h1 inner HTML', () => {

		expect(chev.innerHTML)
		.toEqual('In WeatherEachDay');
		});


    it('should exist', function() {
	   expect(TestUtils.isCompositeComponent(weather)).toBeTruthy();
	 });
});