import React, {Component} from 'react';

import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

import WeatherUI from './WeatherUI';

export default class App extends Component{
    
    componentWillMount(){
        AppActions.apiGetAll();
    }
    componentDidMount(){
        AppStore.addChangeListener(this.onChange);
    }
    componentWillUnmount(){
         AppStore.removeChangeListener(this.onChange);
    }
    onChange(){
        this.setState({
            appList: AppStore.getAll()
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            appList: AppStore.getAll()
          
      };
        
        this.onChange = this.onChange.bind(this);
    }
	 render(){
		return <main className="container">
                <div className="row">
                <section className="col-xs-12 col-sm-9">
                 <div className=" panel panel-default">
                  <div className="panel-heading"><h3>Weather forecast</h3></div>
                     <div className="panel-body">
                    <div className="col-sm-12">
                     <div className="current">
                        <h4></h4>
                          <WeatherUI id={this.state.appList.id} city={this.state.appList.city} list={this.state.appList.list}
                                  cnt={this.state.appList.cnt}/>
                      </div>
                    </div>
                
                    <div className="col-sm-12">
               
                    </div>

                </div>       
                  
                </div>
                </section>  
                </div>   
          </main>
	}
  
};