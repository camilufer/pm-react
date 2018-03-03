import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css'

import {CLOUD, 
		CLOUDY, 
		SUN, 
		RAIN, 
		SNOW, 
		WINDY} from './../../constant/weathers';

//creando const para llamar a api
const api_key = "e471c51cea5c2be7e3219da7bac95506";
const location = 'Santiago,scl'
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;

const data1={
	temperature:10,
	weatherState:SNOW,
	humidity:10,
	wind:'100m/s'
}

const data2={
	temperature:20,
	weatherState:SUN,
	humidity:30,
	wind:'80m/s'
}

class WeatherLocation extends Component {
	constructor () {
		super ();
		this.state = {
		city: 'Santiago',
		data:  data1
		}
	}

	getWeatherState = weather => {
		return SUN;
	}

    getData = (weather_data) => {
    	const { humidity, temp } = weather_data.main;
    	const { speed } = weather_data.wind;
    	const weatherState = this.getWeatherState(this.weather);

    	const data = {
    		humidity,
    		temperature:temp,
    		weatherState,
    		wind:`${speed} m/s`
    	}
    	return data;
    }

handleUpdateClick = () => {
	fetch(api_weather).then(data => {
		console.log(data);
		return data.json();
	}).then(weather_data =>{
		const data = this.getData(weather_data);
		this.setState({ data })
		console.log(weather_data);
	})

	console.log('actualizado')
}

render = () => {
	const {city, data } = this.state;
	return(
    <div className='WeatherLocation'>
      <Location city = { city }/>
      <WeatherData data ={ data }/>
      <button className='btn' onClick= {this.handleUpdateClick }>Actualizar</button>
    </div>
    )
}
}



export default WeatherLocation;