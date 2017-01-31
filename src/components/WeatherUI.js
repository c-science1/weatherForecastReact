import React, {Component} from 'react';

import WeatherEachDay from './WeatherEachDay';

var utilFunc = require('../../custom/utils.js');
var utils = new utilFunc();

export default class WeatherUI extends Component{
	render(){
		return <div>
            <h4>{this.props.city.name}, {this.props.city.country}</h4>
                {      this.props.list.map(function(item){
                        {utils.createNewLists(utils.formatDate(item.dt_txt), item)}
                        })        
                }

            <ul className="nav nav-tabs" role="tablist" id="myTabs">
                <li role="presentation" className="active"><a href="#day1" aria-controls="home" role="tab" data-toggle="tab">{utils.day1Name}</a></li>
                <li role="presentation"><a href="#day2" aria-controls="Day 2" role="tab">{utils.day2Name}</a></li>
                <li role="presentation"><a href="#day3" aria-controls="Day 3" role="tab">{utils.day3Name}</a></li>
                <li role="presentation"><a href="#day4" aria-controls="Day 4" role="tab">{utils.day4Name}</a></li>
                <li role="presentation"><a href="#day5" aria-controls="Day 5" role="tab">{utils.day5Name}</a></li>
            </ul>

            <div className="tab-content" id="myTabContent">
            <div role="tabpanel" className="tab-pane fade in active" id="day1">
                 <WeatherEachDay key="day1" list={utils.day1} />
            </div>
            <div role="tabpanel" className="tab-pane fade" id="day2">
                <WeatherEachDay  key="day2" list={utils.day2} />
            </div>
            <div role="tabpanel" className="tab-pane fade" id="day3">
                <WeatherEachDay  key="day3" list={utils.day3} />
            </div>
            <div role="tabpanel" className="tab-pane fade" id="day4">
                <WeatherEachDay  key="day4" list={utils.day4} />
            </div>
            <div role="tabpanel" className="tab-pane fade" id="day5">
                <WeatherEachDay  key="day5" list={utils.day5} />
            </div>
                    
        </div>
        </div>
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

var $ = require('jquery/dist/jquery');
$( document ).ready(function() {
    $('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
});
 
 