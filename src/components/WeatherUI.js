'use strict';

import React, {Component} from 'react';
var $ = require('jquery/dist/jquery');

//App component
import WeatherEachDay from './WeatherEachDay';
import SingleDayTab from './SingleDayTab';

//Extra utility functions in a separate module
var utilFunc = require('../custom/utils.js');
var utils = new utilFunc();

class WeatherUI extends Component {
    
    render() {
        return (
                <div>
                    <h4>{this.props.city.name}, {this.props.city.country}</h4>
                    {   this.props.list.map(function(item){
                            {utils.createNewLists(utils.formatDate(item.dt_txt), item)}
                        })        
                    } 
                    <ul className="nav nav-tabs" role="tablist" id="myTabs">
                        <SingleDayTab id="day1Tab" name={utils.day1Name} activeClass="active" />
                        <SingleDayTab id="day2Tab" name={utils.day2Name} activeClass="" />
                        <SingleDayTab id="day3Tab" name={utils.day3Name} activeClass="" />
                        <SingleDayTab id="day4Tab" name={utils.day4Name} activeClass="" />
                        <SingleDayTab id="day5Tab" name={utils.day5Name} activeClass="" />
                        <SingleDayTab id="day6Tab" name={utils.day6Name} activeClass="" />
                        <SingleDayTab id="day7Tab" name={utils.day7Name} activeClass="" />
                    </ul>

                    <div className="tab-content" id="myTabContent">
                        <div role="tabpanel" className="tab-pane fade in active" id="day1">
                            <WeatherEachDay key="day1" list={utils.day1} />
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="day2">
                            <WeatherEachDay key="day2" list={utils.day2} />
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="day3">
                            <WeatherEachDay key="day3" list={utils.day3} />
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="day4">
                            <WeatherEachDay key="day4" list={utils.day4} />
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="day5">
                            <WeatherEachDay key="day5" list={utils.day5} />
                        </div>
                    </div>
                  
                </div>
            );
	}
}

WeatherUI.defaultProps = {
            city: "",
            country: "",
            weatherImg : "loading...",
            temp: "loading...",
            pressure: "loading...",
            Humidity: "loading...",
            Wind: "loading...",
            list: []
}

export default WeatherUI;
 
 