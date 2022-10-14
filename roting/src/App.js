import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";
import React from 'react';
import { MainContextProvider } from './context/MainContext';

function App() {

  return (
    <MainContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="about" />
          <Route element={<Contact />} path="contact" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </MainContextProvider>
  );
}

export default App;
