import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import {remove} from './redux/Slices/CartSlice'
import { toast } from 'react-hot-toast';

const CartItem = ({item, itemIndex}) => {
  
  const dispatch=useDispatch();

  const removeItem=()=>{
    dispatch(remove(item.id))
    toast.success("Item removed from Cart")
  }

  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt='' />
        </div>

        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div onClick={removeItem}>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
