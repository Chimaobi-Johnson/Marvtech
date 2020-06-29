import React from 'react';
import NavigationBar from './components/Navigation/Navbar';
import WebDesign from "./pages/WebDesign";
import WebDevelopment from "./pages/WebDevelopment";
import MobileDesign from "./pages/MobileDesign";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import SectionQuote from "./components/Home/SectionQuote";
import ContactSection from "./components/Home/ContactSection";
import './App.css';

const App = () => {
   let routes;
   routes = (
     <>
      <Switch>
       <Route path="/contact" component={Contact} />
       <Route path="/about" component={About} />
       <Route path="/services" component={Services} />
       <Route path="/get-a-quote" component={Pricing}/>
       <Route path="/mobile-design" component={MobileDesign} />
       <Route path="/web-development" component={WebDevelopment} />
       <Route path="/web-design" component={WebDesign} />
       <Route path="/" exact component={Home} />
       <Redirect to="/" />
     </Switch>
     </>
   )

  return (
    <div className="Main">
      <NavigationBar />
       {routes}
      <SectionQuote />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
