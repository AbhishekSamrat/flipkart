import { Action } from '@remix-run/router'
import React, { createContext, useReducer, useState } from 'react'



 const cartbag = createContext()
const Cartcreate = ({children}) => {
    const [cartt,setcart] = useState([])
    const addedcart = (itemm)=>{
       setcart([...cartt,itemm])
       console.log(cartt)
       dispatch("increment")
             
    }

    const remove = (itemm)=>{
        setcart(cartt.filter(product=> product.id !== itemm.id))
        dispatch("decrement")
        
   }
const initialstate = 0
const reducer = (curr,action)=>{
    switch(action){
      case "increment":
        return curr+1
        case "decrement":
          return curr-1
          default :
            return curr
    }
   
}
  const[state,dispatch] = useReducer(reducer,initialstate)
   
  return (
    <div>
<cartbag.Provider value={{cartt,addedcart,remove,state}}>
{children}
</cartbag.Provider>

    </div>
  )
}

export default Cartcreate
export {cartbag}