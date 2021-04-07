import React from 'react';
import './WeatherWidget.css';

const WeatherWidget = () => {
  return (
    <div className="WeatherWidget">
      <div className="currentWeather">
        <div className="locationName">
          <h1>ADELAIDE</h1>
          <span>WEATHER</span>
        </div>
        <div className="currentWeatherIcon">
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
        </div>
        <div className="currentConditions">
          <div className="currentTemp">20°C</div>
          <div className="currentDesc">clear sky</div>
        </div>
      </div>
      <div className="forcast">
        <div className="day">
          <div className="dayName">Monday</div>
          <div className="dayIcon">
            <img src="http://openweathermap.org/img/wn/02d.png" alt=""/>
          </div>
          <div className="temps">
            <div className="dayMaxTemp">17°C</div>
            <div className="dayMinTemp">11°C</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;