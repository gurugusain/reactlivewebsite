import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import Footer from "./Footer";


const App = () => {
    return (
        <>
             <Navbar/>
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/about" element={<About/>} />
                <Route path="*" element={<Navigate to="/"/>} />
             </Routes>
             <Footer/>
        </>
    )
}

export default App;