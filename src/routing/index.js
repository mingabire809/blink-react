import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";
//import PopUp from "../components/PopUp";
import ScrollToTop from "../components/ScrolltoTop";
import BlinkCafe from "../pages/BlinkCafe";
import Career from "../pages/Career";
import Cart from "../pages/Cart";
import Catering from "../pages/Catering";
import ConfirmLocation from "../pages/Confirm";
import Cosmetics from "../pages/Cosmetics";
import Delivery from "../pages/Delivery";
import EarCondition from "../pages/EarCondition";
import Electronics from "../pages/Electronics";
import GasProduct from "../pages/GasProduct";
import Groceries from "../pages/Groceries";
import GroceryDetails from "../pages/GroceryDetails.js";
import Home from "../pages/Home";
import Kitchen from "../pages/Kitchen";
import LastMile from "../pages/LastMile";
import Location from "../pages/Location";
import Lpg from "../pages/LPG";
import Payment from "../pages/Payment";
import PaymentConfirm from "../pages/PaymentConfirm";
import PharmApp from "../pages/PharmApp";
import Prescribed from "../pages/Prescribed";
import Prescription from "../pages/Prescription";
import SingleProduct from "../pages/SingleProduct";
import Supplier from "../pages/Supplier";
import Track from "../pages/Track";
import Vitamins from "../pages/Vitamins";
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
                <Route path="/pharm-App/prescribed" element={<Prescribed/>}/>
                <Route path="/pharm-App/vitamins" element={<Vitamins/>}/>
                <Route path="/pharm-App/conditions/ear" element={<EarCondition/>}/>
                <Route path="/LPG-gas" element={<Lpg/>}/>
                <Route path="/LPG-gas/product" element={<GasProduct/>}/>
                <Route path="/Groceries" element={<Groceries/>}/>
                <Route path="/Groceries/details" element={<GroceryDetails/>}/>
                <Route path="/Electronics" element={<Electronics/>}/>
                <Route path="/Cosmetics" element={<Cosmetics/>}/>
                <Route path="/Blink-Cafe" element={<BlinkCafe/>}/>
                <Route path="/Kitchen" element={<Kitchen/>}/>
                <Route path="/Catering" element={<Catering/>}/>
                <Route path="/Last-Mile" element={<LastMile/>}/>
                <Route path="/Prescription" element={<Prescription/>}/>
                <Route path="/single-product" element={<SingleProduct/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/location" element={<Location/>}/>
                <Route path="/confirm-location" element={<ConfirmLocation/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/payment-confirmation" element={<PaymentConfirm/>}/>
                <Route path="/track" element={<Track/>}/>

            </Routes>
            <Footer/>
        </Router>
    )
}

export default Routing;