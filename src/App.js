import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio"
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/portfolio" component={Portfolio}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
