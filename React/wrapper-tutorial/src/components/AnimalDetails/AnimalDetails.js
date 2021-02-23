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
export default function AnimalDetails({diet,scienticName}){
return(
<div>
<h4>Details:</h4>
<div>
Scientic Name:{scienticName}
</div>
<div>
Diet:{diet.map(food=>covertFood(food)).join(' ')}
</div>
</div>
)
}

AnimalDetails.propTypes ={
diet: PropTypes.arrayOf(PropTypes.string).isRequired,
scienticName:PropTypes.string.isRequired,
}