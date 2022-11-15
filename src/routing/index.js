import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";
import PopUp from "../components/PopUp";
import ScrollToTop from "../components/ScrolltoTop";
import Career from "../pages/Career";
import Delivery from "../pages/Delivery";
import Home from "../pages/Home";
import PharmApp from "../pages/PharmApp";
import Supplier from "../pages/Supplier";
const Routing = ()=>{

    const [popup, setPopUp] = useState(true)

    useEffect(() => {
        
    
        // logic stays the same
        
    
        // update the word
        setTimeout(() => {
            setPopUp(false)
        }, 4000);
      }, [popup]);
    
    return(
        <Router>
            {popup ? <PopUp/>: null}
            
            <ScrollToTop/>
            <Header/>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/careers" element={<Career/>}/>
                <Route path="/suppliers" element={<Supplier/>}/>
                <Route path="/delivery-agents" element={<Delivery/>}/>
                <Route path="/pharm-App" element={<PharmApp/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default Routing;