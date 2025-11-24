import './App.css';
import NavBar from "./components/NavBar";
import About from './pages/About';
import Home from './pages/Home';
import ContactUS from './pages/ContactUS';
import Footer from './components/Footer';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Category from './pages/Category';
import Login from './pages/Login'
import Cart from './pages/Cart'
import React, {useState} from 'react';

 const App=()=>{
  
const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log('addToCart called in App.js with:', product);
    setCart(prevCart => [...prevCart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="App">
      <Router >
        <NavBar /> 
        <Routes>
          <Route path = "/" element= {<Home/>}/>
          <Route path = "/about" element={<About/>} />
           <Route path = "/contact" element={<ContactUS/>} />
            <Route path= "/category" element={<Category/>}/>
            <Route path= "/login-page" element={<Login/>}/>
        <Route path="/home" element={<Home addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} clearCart={clearCart} />} />
        </Routes>
    <Footer />
      </Router>
    </div>
    
  );
}

export default App;