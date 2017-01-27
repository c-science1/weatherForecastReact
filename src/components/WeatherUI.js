import React, {Component} from 'react';

import WeatherEachDay from './WeatherEachDay';

var utilFunc = require('../../custom/utils.js');
var utils = new utilFunc();

console.log("from utils " + utils.test);

$( document ).ready(function() {
    $('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
});
export default class WeatherUI extends Component{
	render(){
		return <div>
            <h4>{this.props.city.name}, {this.props.city.country}</h4>
            {
                this.props.list.map(function(item){
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
                        
                        {utils.day1.map(function(item){
                            return <div className="weatherRow" key={item.id}>
                                            <div>
                                                {item.weather.map(function(wDesc){
                                                    return <div key={item.id}>
                                                    <img src= {utils.weatherImg(wDesc.description)} className="weatherImg" />
                                                     <span className="weather-text">{wDesc.description}</span>  Temp:  {utils.celTempConversion(item.main.temp)}&#x2103; &nbsp;</div>
                                                })
                                                }
                                                <span className="text-uppercase pull-right"> {utils.formatTime(item.dt_txt)}</span>
                                            </div>
                                            <div>
                                                min:  {utils.celTempConversion(item.main.temp_min)} &nbsp;
                                                max:  {utils.celTempConversion(item.main.temp_max)} &nbsp;
                                                humidity: {item.main.humidity} &nbsp;
                                            <br />
                                            </div>                           
                                    </div>
                        })}
            </div>
            <div role="tabpanel" className="tab-pane fade" id="day2">
                        {utils.day2.map(function(item){
                            return <div className="weatherRow" key={item.id}>
                                           <div>
                                                {item.weather.map(function(wDesc){
                                                    return <div key={item.id}>
                                                    <img src= {utils.weatherImg(wDesc.description)} className="weatherImg" />
                                                     <span className="weather-text">{wDesc.description}</span>  Temp:  {utils.celTempConversion(item.main.temp)}&#x2103; &nbsp;</div>
                                                })
                                                }
                                                <span className="text-uppercase pull-right"> {utils.formatTime(item.dt_txt)}</span>
                                            </div>
                                            <div>
                                               
                                                min:  {utils.celTempConversion(item.main.temp_min)} &nbsp;
                                                max:  {utils.celTempConversion(item.main.temp_max)} &nbsp;
                                                humidity: {item.main.humidity} &nbsp;
                                            <br />
                                            </div>         
                                    </div>
                        })}

            </div>
            <div role="tabpanel" className="tab-pane fade" id="day3">
                        {utils.day3.map(function(item){
                            return <div className="weatherRow" key={item.id}>
                                         <div>
                                                {item.weather.map(function(wDesc){
                                                    return <div key={item.id}>
                                                    <img src= {utils.weatherImg(wDesc.description)} className="weatherImg" />
                                                     <span className="weather-text">{wDesc.description}</span>  Temp:  {utils.celTempConversion(item.main.temp)}&#x2103; &nbsp;</div>
                                                })
                                                }
                                                <span className="text-uppercase pull-right"> {utils.formatTime(item.dt_txt)}</span>
                                            </div>
                                            <div>
                                               
                                                min:  {utils.celTempConversion(item.main.temp_min)} &nbsp;
                                                max:  {utils.celTempConversion(item.main.temp_max)} &nbsp;
                                                humidity: {item.main.humidity} &nbsp;
                                            <br />
                                            </div>          

                                    </div>
                        })}
            
            </div>
            <div role="tabpanel" className="tab-pane fade" id="day4">
                        {utils.day4.map(function(item){
                            return <div className="weatherRow" key={item.id}>
                                          <div>
                                                {item.weather.map(function(wDesc){
                                                    return <div key={item.id}>
                                                    <img src= {utils.weatherImg(wDesc.description)} className="weatherImg" />
                                                     <span className="weather-text">{wDesc.description}</span>  Temp:  {utils.celTempConversion(item.main.temp)}&#x2103; &nbsp;</div>
                                                })
                                                }
                                                <span className="text-uppercase pull-right"> {utils.formatTime(item.dt_txt)}</span>
                                            </div>
                                            <div>
                                               
                                                min:  {utils.celTempConversion(item.main.temp_min)} &nbsp;
                                                max:  {utils.celTempConversion(item.main.temp_max)} &nbsp;
                                                humidity: {item.main.humidity} &nbsp;
                                            <br />
                                            </div>     
                                    </div>
                        })}
            </div>
            <div role="tabpanel" className="tab-pane fade" id="day5">
                        {utils.day5.map(function(item){
                            return <div className="weatherRow" key={item.id}>
                                           <div>
                                                {item.weather.map(function(wDesc){
                                                    return <div key={item.id}>
                                                    <img src= {utils.weatherImg(wDesc.description)} className="weatherImg" />
                                                     <span className="weather-text">{wDesc.description}</span>  Temp:  {utils.celTempConversion(item.main.temp)}&#x2103; &nbsp;</div>
                                                })
                                                }
                                                <span className="text-uppercase pull-right"> {utils.formatTime(item.dt_txt)}</span>
                                            </div>
                                            <div>
                                               
                                                min:  {utils.celTempConversion(item.main.temp_min)} &nbsp;
                                                max:  {utils.celTempConversion(item.main.temp_max)} &nbsp;
                                                humidity: {item.main.humidity} &nbsp;
                                            <br />
                                            </div>  
                                    </div>
                        })}

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
 
 
 