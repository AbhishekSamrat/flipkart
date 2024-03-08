
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Allproducts from './Allproducts';
import Cartcreate from './Cartcreate';
import Checkout from './Checkout';



function App() {
 
  return (
    <div className="App">
      <Routes>
       <Route path='/' element = {<Home></Home>}></Route>
       <Route path='/Cart' element = {<Cart></Cart>}></Route>
       <Route path='/Checkout' element = {<Checkout></Checkout>}></Route>

      </Routes>
    
  <Cartcreate>
  <Allproducts></Allproducts>
  <Cart></Cart>
  </Cartcreate>
      
    </div>
  );
}

export default App;
