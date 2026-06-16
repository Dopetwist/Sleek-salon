import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductSection from './components/ProductSection';
import OrderSummary from './pages/OrderSummary';
import ScrollRevealWrapper from './components/ScrollRevealWrapper';
import Checkout from './pages/Checkout';
import Toast from './components/animation/Toast';
import OrderConfirmation from './pages/OrderConfirmation';


function App() {

  const [ toast, setToast ] = useState(null);

  // Save Cart to Local Storage for persistence
  const [ cart, setCart ] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // Load cart from localstorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

      <Routes>
        <Route 
          path='/'
          element={
            <>
              <Home />
              <About />
              <Service />
              <Gallery />
              <ProductSection 
                cart={cart} 
                addToCart={addToCart}
                setToast={setToast}
              />
              <Contact />

              {/* Render Toast */}
              {toast && (
                  <Toast
                      message={toast.message}
                      type={toast.type}
                      onClose={() => setToast(null)}
                  />
              )}
            </>
          }
        />

        <Route 
          path='/order'
          element={ <OrderSummary 
              cart={cart} 
              setCart={setCart}
              toast={toast}
              setToast={setToast}
            /> }
        />

        <Route 
          path='/checkout'
          element={ <Checkout setCart={setCart} /> }
        />

        <Route 
          path='/confirmation'
          element={ <OrderConfirmation /> }
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App;
