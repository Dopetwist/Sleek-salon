import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Product from './components/Product';
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
