import React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import WhySewWithUs from "./components/WhySewWithUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
// import "./styles/global.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <ProductGrid />
      <WhySewWithUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
