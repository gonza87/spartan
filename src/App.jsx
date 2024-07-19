import React, { useRef } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import About from "./pages/About";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";
import ServicePorteria from "./pages/ServicePorteria";
import ServiceLimpiezaObra from "./pages/ServiceLimpiezaObra";
import ServiceSeguridadVigilancia from "./pages/ServiceSeguridadVigilancia";
import ServiceLimpiezaMantenimiento from "./pages/ServiceLimpiezaMantenimiento";
import NotFound404 from "./pages/pageError/NotFound404";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const location = useLocation();
  const nodeRef = useRef(null); // Create a ref

  return (
    <>
      <Header />

      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="page"
          timeout={300}
          nodeRef={nodeRef} // Pass the ref here
        >
          <div ref={nodeRef}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
              <Route path="/porteria" element={<ServicePorteria />} />
              <Route path="/limpiezadeobra" element={<ServiceLimpiezaObra />} />
              <Route
                path="/seguridadyvigilancia"
                element={<ServiceSeguridadVigilancia />}
              />
              <Route
                path="/limpiezamantenimiento"
                element={<ServiceLimpiezaMantenimiento />}
              />
              <Route path="*" element={<NotFound404 />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <WhatsApp />
      <Footer />
    </>
  );
}

export default App;
