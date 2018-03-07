import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList.js';
import './App.css';

const cities = [
	'Santiago,scl',
	'Buenos Aires,ar',
	'Bogotá,col',
	'Ciudad de México, mx',
	'Madrid,es',
	'Rio de Janeiro,br',
	'London,uk'
];

class App extends Component {
	
	hadlerSelectionLocationClick = city => {
		console.log('hadlerSelectionLocationClick')
	}

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
         <LocationList cities={cities}
         onSelectedLocation={this.hadlerSelectionLocationClick}/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
