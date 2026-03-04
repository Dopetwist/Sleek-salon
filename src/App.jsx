import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductSection from './components/ProductSection';
import ScrollRevealWrapper from './components/ScrollRevealWrapper';


function App() {
  const [ cart, setCart ] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        // Increase quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add new product
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <ScrollRevealWrapper />
      <Header cart={cart} />
      <Home />
      <About />
      <Service />
      <Gallery />
      <ProductSection addToCart={addToCart} />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
