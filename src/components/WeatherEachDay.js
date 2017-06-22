'use strict';

import React, {Component} from 'react';

var utilFunc = require('../custom/utils.js');
var utils = new utilFunc();

class WeatherEachDay extends Component {
render(){
        return  <div>
                {this.props.list.map(function(item){
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
        }

 }
 
 export default WeatherEachDay;