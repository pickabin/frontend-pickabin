import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import { HelmetProvider } from "react-helmet-async";
const helmetContext = {};
const App = () => {
  return (
    <HelmetProvider context={helmetContext}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;