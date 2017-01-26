 import React, {Component} from 'react';
 export default class WeatherEachDay extends Component{
	render(){
        return <div className="weatherRow">
                        {this.props.detailsList.map(function(item){
                                /* to be implemented by decomposing WeatherUI Component */        
                                        
                        })}
                                              
                </div>
    }

 }