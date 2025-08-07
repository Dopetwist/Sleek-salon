import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Service from './components/Service.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Product from './components/Product.jsx';
import ScrollRevealWrapper from './components/ScrollRevealWrapper';


function App() {

  return (
    <>
      <ScrollRevealWrapper />
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
