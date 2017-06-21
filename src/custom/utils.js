var utils = function(){

    this.day1 = [];
    this.day2 = [];
    this.day3 = [];
    this.day4 = [];
    this.day5 = [];
    
    this.formatDate = function (givenDate){
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dd;
        (givenDate) ? dd = new Date((givenDate)) : dd = new Date(); 

        const dayTime =  `${days[dd.getDay()]}`;
        
        return dayTime;
        
    }

    this.formatTime = function (givenDate){
        let dd;
        (givenDate) ? dd = new Date((givenDate)) : dd = new Date(); 

        let dTime = givenDate.split(' ');
        let onlyTime =  `${dTime[1]}`;

        return onlyTime;
    }

    this.createNewLists = function (dayName, itemP){
        let itemDate = new Date(itemP.dt_txt);
        let currentDate = new Date();
        let nextDate = new Date(); ;
 
        if (itemDate.getDate() == currentDate.getDate() ){
            this.day1.push(itemP);
            this.day1Name = dayName;
        }

        nextDate.setDate(nextDate.getDate() + 1);
        if (itemDate.getDate() === nextDate.getDate()){
            this.day2.push(itemP);
            this.day2Name = dayName;
        }
     
       nextDate.setDate(nextDate.getDate() + 1);
         if (itemDate.getDate() === nextDate.getDate()){
            this.day3.push(itemP);
            this.day3Name = dayName;
        }

        nextDate.setDate(nextDate.getDate() + 1);
        if (itemDate.getDate() === nextDate.getDate()){
            this.day4.push(itemP);
            this.day4Name = dayName;
        }

        nextDate.setDate(nextDate.getDate() + 1);
        if (itemDate.getDate() === nextDate.getDate()){
            this.day5.push(itemP);
            this.day5Name = dayName;
        }
    }
    this.weatherImg = function(desc){
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
    this.celTempConversion = function (kelvinTemp){
        var celTemp = kelvinTemp - 273.15;
        return Math.round(celTemp);
    }
}
module.exports = utils;




