import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home-page";
import About from "./pages/about-page";
import NotFound from "./pages/page-not-found";
import Events from "./pages/event-page";
import Testimonials from "./pages/testimonials-page";
import SignUp from "./pages/signup-page";
import loginPage from "./pages/login-page";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/about' exact Component={About} />
          <Route path='/events' exact Component={Events} />
          <Route path='/testimonials' exact Component={Testimonials} />
          <Route path='/signup' exact Component={SignUp} />
          <Route path='/login' exact Component={loginPage} />
          <Route path='/not-found' Component={NotFound} />
          <Route path='/' exact Component={Home} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
