import React, { useContext } from 'react'
import { cartbag } from './Cartcreate'




const Cart = () => {
   const {cartt,remove} = useContext(cartbag)
  return (
    <div>
  {
    cartt.map((el,id)=>{
      return(
        <div style={{display:"grid",gridTemplateColumns:"auto auto auto auto auto"}}>
            <div key={id}>
                <img src={el.image} alt='' style={{width:"250px",height:"200px"}}></img>
                <p>Product Name : {el.title}</p>
                <p>Price :₹ {el.price}</p>
                <button onClick={()=>remove(el)}>Remove To Cart</button>
            
            </div>
        </div>
    )

    })
  }
    
    </div>
  )
}

export default Cart