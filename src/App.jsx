import React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
// import "./styles/global.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default App;
