import React from 'react';
import NavigationBar from './components/Navigation/Navbar';
import Footer from "./components/Footer/Footer";
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

const App = () => {
   let routes;
   routes = (
     <>
      <Switch>
       <Route path="/" exact component={Home} />
       <Redirect to="/" />
     </Switch>
     </>
   )

  return (
    <div className="Main">
      <NavigationBar />
       {routes}
      <Footer />
    </div>
  );
}

export default App;
