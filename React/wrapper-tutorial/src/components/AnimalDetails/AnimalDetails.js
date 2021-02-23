import React from 'react';
import PropTypes from 'prop-types';
import './AnimalDetails.css'


function covertFood(food){
switch(food){
case 'insects':
return '🐜';
case 'meat':
return '🍖';
case 'plants':
default:
      return '🌱';
}
}
export default function AnimalDetails({diet}){
return(
<div>
<h4>Details:</h4>
<div>
Diet:{diet.map(food=>covertFood(food)).join(' ')}
</div>
</div>
)
}

AnimalDetails.propTypes ={
diet: PropTypes.arrayOf(PropTypes.string).isRequired,
}