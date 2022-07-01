import React from 'react';
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from "./components/Navbar/index";
import Home from "./components/Home/index";
import About from "./components/About/index";
import Login from "./components/Login/index";
import Signup from "./components/Signup/index";
import ErrorPage from "./components/ErrorPage/index";
import Logout from "./components/Logout/index";
import { ApplicationContextProvider } from './components/Context/ApplicationContext';

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </>
  )
};

const App = () => {
  return (
    <ApplicationContextProvider>
      <Navbar />
      <Routing />
    </ApplicationContextProvider>
  );
};

export default App;

