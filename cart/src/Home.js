import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from './fkheaderlogo_exploreplus-44005d.svg'
import logo1 from './car1.png'
import './Home.css'
import { cartbag } from './Cartcreate'



const Home = () => {
  const state = useContext(cartbag)  ////////cnnot destructure state here
    
  return (
    <div className='Home'>
      <div className='gridd'><Link to={"/"} className='nav'><img src={logo} className="nav" alt="logo"  /></Link></div>
      <div className='gridd' style={{color:"white",padding:"3px"}}><input type='text' placeholder='Search...'  width={"80px"} style={{padding:"4px"}} ></input></div>  
      <div className='gridd'><Link to={"/Cart"} className='nav'><img src={logo1} className="nav" alt="logo" /></Link> </div>
      <div className='gridd'><Link to={"/Checkout"} className='nav'>Checkout</Link> </div>

    </div>
  )
}

export default Home