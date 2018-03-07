import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
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
	constructor(){
		super();
		this.state = {
            city: null
        }
	}
	
	hadlerSelectionLocationClick = city => {
        this.setState({city});
		console.log(`hadlerSelectionLocationClick ${city}`)
	}

  render() {
    const { city } = this.state;
    return (
    	<MuiThemeProvider>
    		<Grid>
    			<Row>
    				<Col xs={12} >
    					<AppBar title='Camilú'/>
    				</Col>
    			</Row>
    			<Row>
    				<Col xs={12} md={6}>
    					<LocationList cities={cities}
              onSelectedLocation={this.hadlerSelectionLocationClick}/>
    				</Col>
    				<Col xs={12} md={6}>
    					<Paper zDepth={4}>
    							<div className="detail">
                                {
                                    city === null ? <h1>No se seleccionó ciudad</h1> : <ForecastExtended city={city}></ForecastExtended>
                                }

    							</div>
    					</Paper>
    				</Col>
    			</Row>
    		</Grid>
    	</MuiThemeProvider>

    	
    );
  }
}

export default App;
