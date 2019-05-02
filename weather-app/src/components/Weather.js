import React from 'react';

const Weather = props => (
  <div>
    { props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
    { props.temperature && <p>Temperature: {props.temperature}</p> }
    { props.humidity && <p>Humidity: {props.humidity}</p>}
    { props.description && <p>Conditions: {props.description}</p>}
    { props.error && <p>{props.error}</p>}
  </div>
)

// if you're returning 1 single element, which in this case we are (1 div element), you can explicitely return from the arrow function, meaning you can get rid of the return function and curly brackets

export default Weather;