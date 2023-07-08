import React from 'react'
import AddToCart from "../../../assets/icons/add_cart.svg"


function ListItem( {data} ) {
   
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
            <button className={'cart-add'}>
                <span>Add to Cart</span>
                <img src={AddToCart} alt="cart-icon"/>
            </button>
        </div>
    </div>
  )
}

export default ListItem