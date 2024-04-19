import React from "react";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import './App.css'
import { Route, Routes, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route exact path="/" Component={Home}/>
    <Route exact path="/rooms/" Component={Rooms}/>
    <Route exact path="/single/:slug" Component={SingleRoom}/>
    <Route Component={Error}/>
    </Routes>
    </>
  );
}

export default App;
