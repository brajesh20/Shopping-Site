import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem'

const Cart = () => {

  const {cart}=useSelector((state)=>state)
  const [totalAmount, setTotalAmonut]=useState(0)

  useEffect(()=>{
    setTotalAmonut( cart.reduce( (acc, curr) => acc + curr.price , 0))
  },[cart])

  return (
    <div>
      {
        cart.length === 0 ? (
          <div>
            <h1>Cart is Empty</h1>
            <div>
              <NavLink to='/'><button>Shop Now</button></NavLink>
            </div>
          </div>
          ) : (
              <div>
                <div>
                {
                  cart.map((item,index)=>(
                    <CartItem key={item.id} item={item} itemIndex={index} />
                  ))
                }
                </div>

                <div>
                  <div>
                    <div>Your Cart</div>
                    <div>Summary</div>
                    <p>
                      <span>Total Items: {cart.length}</span>
                    </p>
                  </div>
                </div>

                <div>
                  <p>Total Amount: {totalAmount}</p>
                  <button>Checkout Now</button>
                </div>

              </div>
          )
      }
    </div>
  )
}

export default Cart
