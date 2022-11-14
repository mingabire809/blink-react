import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Career from "../pages/Career";
import Delivery from "../pages/Delivery";
import Home from "../pages/Home";
import Supplier from "../pages/Supplier";
const Routing = ()=>{
    return(
        <Router>
            <Header/>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/careers" element={<Career/>}/>
                <Route path="/suppliers" element={<Supplier/>}/>
                <Route path="/delivery-agents" element={<Delivery/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default Routing;