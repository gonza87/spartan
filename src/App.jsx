import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
