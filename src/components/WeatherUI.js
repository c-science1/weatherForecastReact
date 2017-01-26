import React, {Component} from 'react';

import WeatherEachDay from './WeatherEachDay';
var day1 = [], day1Name,
    day2 = [], day2Name,
    day3 = [], day3Name,
    day4 = [], day4Name,
    day5 = [], day5Name;

 function formatDate(givenDate){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dd;
    (givenDate) ? dd = new Date((givenDate)) : dd = new Date(); 

    const dayTime =  `${days[dd.getDay()]}`;
    return dayTime;
     
 }
 function formatTime(givenDate){
      let dd;
      (givenDate) ? dd = new Date((givenDate)) : dd = new Date(); 

      let dTime = givenDate.split(' ');
      let onlyTime =  `${dTime[1]}`;

     return onlyTime;
 }
 function createNewLists(dayP, itemP){
     let itemDate = new Date(itemP.dt_txt);
     let currentDate = new Date();
   
     if (itemDate.getDate() == currentDate.getDate() ){
          day1.push(itemP);
          day1Name = dayP;
     }
     if (Number(itemDate.getDate()) === Number(currentDate.getDate() + 1)){
          day2.push(itemP);
          day2Name = dayP;
         
     }
    if (Number(itemDate.getDate()) === Number(currentDate.getDate() + 2) ){
          day3.push(itemP);
          day3Name = dayP;
         
     }
    if (Number(itemDate.getDate()) === Number(currentDate.getDate() + 3) ){
          day4.push(itemP);
          day4Name = dayP;
         
     }
    if (itemDate.getDate() == currentDate.getDate() + 4 ){
          day5.push(itemP);
          day5Name = dayP;
         
     }

 }
 function weatherImg(desc){
     var imgSrc = '';
     switch(desc){
         case "few clouds":
         imgSrc = '../../assets/partly_cloudy.png';
         break;

        case "broken clouds":
         imgSrc = '../../assets/rain_s_cloudy.png';
         break;

        case "clear sky":
         imgSrc = '../../assets/sunny.png';
         break;

         case "light rain":
         imgSrc = '../../assets/rain_light.png';
         break;

     }
     return imgSrc;
 }
 function celTempConversion(kelvinTemp){
     var celTemp = kelvinTemp - 273.15;
     return Math.round(celTemp);
 }

 $( document ).ready(function() {
    $('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
});

 export default class Today extends Component{
	render(){

		return <div>
            <h4>{this.props.city.name}, {this.props.city.country}</h4>
   
            {
                this.props.list.map(function(item){
                    {createNewLists(formatDate(item.dt_txt), item)}
                })
            }

            <ul className="nav nav-tabs" role="tablist" id="myTabs">
                <li role="presentation" className="active"><a href="#day1" aria-controls="home" role="tab" data-toggle="tab">{day1Name}</a></li>
                <li role="presentation"><a href="#day2" aria-controls="Day 2" role="tab">{day2Name}</a></li>
                <li role="presentation"><a href="#day3" aria-controls="Day 3" role="tab">{day3Name}</a></li>
                <li role="presentation"><a href="#day4" aria-controls="Day 4" role="tab">{day4Name}</a></li>
                <li role="presentation"><a href="#day5" aria-controls="Day 5" role="tab">{day5Name}</a></li>
            </ul>

            <div className="tab-content" id="myTabContent">
            <div role="tabpanel" className="tab-pane fade in active" id="day1">
                        <WeatherEachDay detailsList={day1} />
                        {day1.map(function(item){
                            return <div className="weatherRow">
                                            <div>
                                                {item.weather.map(function(wDesc){
                                                    return <div>
                                                    <img src= {weatherImg(wDesc.description)} className="weatherImg" />
                                                     <span className="weather-text">{wDesc.description}</span>  Temp:  {celTempConversion(item.main.temp)}&#x2103; &nbsp;</div>
                                                })
                                                }
                                                <span className="text-uppercase pull-right"> {formatTime(item.dt_txt)}</span>
                                            </div>
                                            <div>
                                               
                                                min:  {celTempConversion(item.main.temp_min)} &nbsp;
                                                max:  {celTempConversion(item.main.temp_max)} &nbsp;
                                                humidity: {item.main.humidity} &nbsp;
                                            <br />
                                            </div>                           
                                    </div>
                        })}
            </div>
            <div role="tabpanel" className="tab-pane fade" id="day2">
                        {day2.map(function(item){
                            return <div className="weatherRow">
                                           <div>
                                                {item.weather.map(function(wDesc){
                                                    return <div>
                                                    <img src= {weatherImg(wDesc.description)} className="weatherImg" />
                                                     <span className="weather-text">{wDesc.description}</span>  Temp:  {celTempConversion(item.main.temp)}&#x2103; &nbsp;</div>
                                                })
                                                }
                                                <span className="text-uppercase pull-right"> {formatTime(item.dt_txt)}</span>
                                            </div>
                                            <div>
                                               
                                                min:  {celTempConversion(item.main.temp_min)} &nbsp;
                                                max:  {celTempConversion(item.main.temp_max)} &nbsp;
                                                humidity: {item.main.humidity} &nbsp;
                                            <br />
                                            </div>         
                                    </div>
                        })}

            </div>
            <div role="tabpanel" className="tab-pane fade" id="day3">
                        {day3.map(function(item){
                            return <div className="weatherRow">
                                         <div>
                                                {item.weather.map(function(wDesc){
                                                    return <div>
                                                    <img src= {weatherImg(wDesc.description)} className="weatherImg" />
                                                     <span className="weather-text">{wDesc.description}</span>  Temp:  {celTempConversion(item.main.temp)}&#x2103; &nbsp;</div>
                                                })
                                                }
                                                <span className="text-uppercase pull-right"> {formatTime(item.dt_txt)}</span>
                                            </div>
                                            <div>
                                               
                                                min:  {celTempConversion(item.main.temp_min)} &nbsp;
                                                max:  {celTempConversion(item.main.temp_max)} &nbsp;
                                                humidity: {item.main.humidity} &nbsp;
                                            <br />
                                            </div>          

                                    </div>
                        })}
            
            </div>
            <div role="tabpanel" className="tab-pane fade" id="day4">
                        {day4.map(function(item){
                            return <div className="weatherRow">
                                          <div>
                                                {item.weather.map(function(wDesc){
                                                    return <div>
                                                    <img src= {weatherImg(wDesc.description)} className="weatherImg" />
                                                     <span className="weather-text">{wDesc.description}</span>  Temp:  {celTempConversion(item.main.temp)}&#x2103; &nbsp;</div>
                                                })
                                                }
                                                <span className="text-uppercase pull-right"> {formatTime(item.dt_txt)}</span>
                                            </div>
                                            <div>
                                               
                                                min:  {celTempConversion(item.main.temp_min)} &nbsp;
                                                max:  {celTempConversion(item.main.temp_max)} &nbsp;
                                                humidity: {item.main.humidity} &nbsp;
                                            <br />
                                            </div>     
                                    </div>
                        })}
            </div>
            <div role="tabpanel" className="tab-pane fade" id="day5">
                        {day5.map(function(item){
                            return <div className="weatherRow">
                                           <div>
                                                {item.weather.map(function(wDesc){
                                                    return <div>
                                                    <img src= {weatherImg(wDesc.description)} className="weatherImg" />
                                                     <span className="weather-text">{wDesc.description}</span>  Temp:  {celTempConversion(item.main.temp)}&#x2103; &nbsp;</div>
                                                })
                                                }
                                                <span className="text-uppercase pull-right"> {formatTime(item.dt_txt)}</span>
                                            </div>
                                            <div>
                                               
                                                min:  {celTempConversion(item.main.temp_min)} &nbsp;
                                                max:  {celTempConversion(item.main.temp_max)} &nbsp;
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

Today.defaultProps = {
            city: "",
            country: "",
            weatherImg : "loading...",
            temp: "loading...",
            pressure: "loading...",
            Humidity: "loading...",
            Wind: "loading...",
            list: []
}
 
 
 