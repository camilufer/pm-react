import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../../constant/weathers';
import './styles.css';

const WeatherData = () => (
    <div className = 'weatherDataCont'>
      <WeatherTemperature temperature = {23} weatherState = {SNOW}/>
      <WeatherExtraInfo humidity = {80} wind = {'10m/s'}/>
    </div>
  )

export default WeatherData;