import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
//styles

import "./styles/main.scss";

//pages
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/booking' component={Booking} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
