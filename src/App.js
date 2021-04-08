import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Component
import Navbar from './Components/Navbar/NavBar';

// Pages
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Rooms from './Pages/Rooms/Rooms';
import SingleRoom from './Pages/SingleRoom/SingleRoom';
import Bookings from './Pages/Bookings/Bookings';
import Error from './Pages/Error/Error';
import Contact from './Pages/Contact/Contact';
// style
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/room/:slug" component={SingleRoom} />
          <Route exact path="/bookings" component={Bookings} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}
