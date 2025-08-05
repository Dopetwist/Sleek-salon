import { useState } from 'react';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Service from './components/Service.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Product from './components/Product.jsx';
import { productsPhotos } from "../index.js";

function displayProduct(item) {
  <Product 
  id={item.id}
  key={item.id}
  image={item.img}
  title={item.title}
  description={item.description}
  price={item.price}
  />
}

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Service />
      <Gallery />
      <Product />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
