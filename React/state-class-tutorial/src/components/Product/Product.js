import React, { Component } from 'react';
import './Product.css';

const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 5
  },
  {
    emoji: '🍩',
    name: 'donuts',
    price: 2.5,
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  }
];


export default class Product extends Component {
  //cart is array as it can eventually hold many items
  state ={
  cart : [],
  total: 0
}


remove = (product) =>{
  this.setState(state=>{
   const cart = [...state.cart];
    cart.splice(cart.indexOf(product.name))
    return({
      cart,
      total: state.total-product.price  
  })
});
}
add = (product) =>{
  this.setState(state=>(
{
  cart:[...state.cart,product.name],
  total: state.total+ product.price
  }
));
}
currencyOptions ={
minimumFractionDigits:2,
maximumFractionDigits:2,
}
getTotal = () =>{
  console.log(this)
  return this.state.total.toLocaleString(undefined,this.currencyOptions)
}
// getTotal(){
// console.log(this)
// }
  render() {
    return(
      <div className="wrapper">
        <div>
          Shopping Cart: {this.state.cart.length} total items.
        </div>
        <div>Total: {this.getTotal()}</div>
        {products.map(product =>(
          <div key={product.name}>
          <div className="product"><span role="img" aria-label={products.name}>{product.emoji}</span></div>
        <button onClick={()=>this.add(product)}>Add</button> <button onClick={()=>this.remove(product)}>Remove</button>
        </div>
))}
        
      </div>
    )
  }
}