import React, {  useContext, useState } from 'react'

import './Allproduct.css'
import { cartbag } from './Cartcreate'



const Allproducts = () => {
    const {addedcart} = useContext(cartbag)
    
  
    const [data,setdata] = useState([])
    async function listprodct(){
        let fetchproduct = await fetch("https://fakestoreapi.com/products")
        let data =  await fetchproduct.json()
        setdata(data)
        console.log(data)
    }
    listprodct()
     
   
  return (
    <div className='dis'>
    {
        data.map((el,id)=>{
            return(
                <div>
                    <div key={id}>
                        <img src={el.image} alt=''></img>
                        <p>Product Name : {el.title}</p>
                        <p>Price :₹ {el.price}</p>
                        <button onClick={()=>addedcart(el)}>Add To Cart</button>
                    
                    </div>
                </div>
            )

          })
    }
   
    
      
    </div>
  )
}

export default Allproducts