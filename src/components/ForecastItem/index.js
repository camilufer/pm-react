import React from 'react';
import PropTypes from 'prop-types';

const ForecastItem = ({weekDay}) => (
	<div>{weekDay}</div>
	)

	ForecastItem.propTypes = {
		weekDay: PropTypes.string.isRequired,
	}

export default ForecastItem;