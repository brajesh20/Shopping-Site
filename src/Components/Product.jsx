import React, { lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import {add,remove} from './redux/Slices/CartSlice'

const Product = ({post}) => {

    const {cart}=useSelector((state)=>state)

    const dispatch= useDispatch()

    const removeItem=()=>{
      dispatch(remove(post.id))
      toast.error("Item removed from Cart")
    }

    const addItem=()=>{
      dispatch(add(post))
      toast.success("Item added to Cart")
    }

  return (
    <div style={{width:"240px", height:"320px", border:"1px solid black"}}>
      <div>
        <p>{post.title.length >20 ? `${post.title.substring(0,20)}...` : post.title}</p>
      </div>
      <div>
        <p>{post.description.length>20 ? `${post.description.substr(0,40)}...` : post.description}</p>

      </div>
      <div>
        <img src={post.image} width={120} height={150} alt='' loading={lazy} />
      </div>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <p>{post.price}</p>
      {
        cart.some((p)=> p.id === post.id) ? 
        (
          <button onClick={removeItem}>Remove Item</button>
        ) :
        (
          <button onClick={addItem}>Add Item</button>
        )
      }
      </div>
    </div>
  )
}

export default Product
