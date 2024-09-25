
import Hero from "./components/Hero/Hero"
import Header from "./components/Layout/Header"
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart"
import { useState } from "react";
function App() {
  
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () =>{
    setCartIsShow(true)
  }

  const hideCartHandler = (e) =>{
    e.preventDefault();    
    setCartIsShow(false)
  }

  return (
    <div className='App'>         
      <Header onShowCart={showCartHandler}/>
      <Hero/>
      <Products/>
      {cartIsShow && <Cart onClose={hideCartHandler}/>}
    </div>
  )
}

export default App
