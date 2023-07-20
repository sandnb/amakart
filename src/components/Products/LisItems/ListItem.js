import React from 'react'
import AddToCart from "../../../assets/icons/add_cart.svg"
import { useState } from 'react'


function ListItem( {data, updateItemTitle}   ) {
    const [counter,setCounter] = useState(0);

    const increaseCounterByOne = () => {
        setCounter(counter + 1);
    }

    const decreaseCounterByOne = () => {
        if(counter === 0){
            return;
        }
        setCounter(counter -1);
    }
   
  return (
    <div>
        <div className={'item-card'}>
            <img className={'img-fluid'}  src={`/assets/${data.thumbnail}`} alt={data.title}/>
            <div className={'item-card__information'}>
                <div className={'pricing'}>
                    <span>&#8377; {data.discountedPrice}</span>
                    <small>
                        <strike>&#8377;{data.price}</strike>
                    </small>
                </div>
                <div className={'title'}>
                    <h3>{data.title}</h3>
                </div>
            </div>
            <button onClick={() => updateItemTitle(data.id)}>Update the title</button>
            {
                counter < 1 ?

            <button className={'cart-add'} onClick={increaseCounterByOne}>
                <span>Add to Cart</span>
                <img src={AddToCart} alt="cart-icon"/>
            </button> 
             :
            <div className='cart-addon'>
                <button onClick = {decreaseCounterByOne}><span>-</span></button>
                <span>{counter}</span>
                <button onClick={increaseCounterByOne}><span>+</span></button>
            </div>

            }
           
            
        </div>
    </div>
  )
}

export default ListItem