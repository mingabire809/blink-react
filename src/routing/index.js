import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";
//import PopUp from "../components/PopUp";
import ScrollToTop from "../components/ScrolltoTop";
import BlinkCafe from "../pages/BlinkCafe";
import Career from "../pages/Career";
import Cosmetics from "../pages/Cosmetics";
import Delivery from "../pages/Delivery";
import Electronics from "../pages/Electronics";
import Groceries from "../pages/Groceries";
import Home from "../pages/Home";
import Lpg from "../pages/LPG";
import PharmApp from "../pages/PharmApp";
import Supplier from "../pages/Supplier";
const Routing = ()=>{

 //   const [popup, setPopUp] = useState(true)

  //  useEffect(() => {
        
    
        // logic stays the same
        
    
        // update the word
   //     setTimeout(() => {
    //        setPopUp(false)
   //     }, 4000);
   //   }, [popup]);
    
    return(
        <Router>
            
            
            <ScrollToTop/>
            <Header/>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/careers" element={<Career/>}/>
                <Route path="/suppliers" element={<Supplier/>}/>
                <Route path="/delivery-agents" element={<Delivery/>}/>
                <Route path="/pharm-App" element={<PharmApp/>}/>
                <Route path="/LPG-gas" element={<Lpg/>}/>
                <Route path="/Groceries" element={<Groceries/>}/>
                <Route path="/Electronics" element={<Electronics/>}/>
                <Route path="/Cosmetics" element={<Cosmetics/>}/>
                <Route path="/Blink-Cafe" element={<BlinkCafe/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default Routing;