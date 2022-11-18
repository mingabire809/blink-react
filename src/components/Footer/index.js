import React, {useState, useEffect} from "react";
import { Arrow, Arrow2, Content, Content2, FooterButton, FooterButton2, Input, Wrapper, Wrapper2 } from "./Footer.styles";
import Left from '../../assets/images/left.png'
import Instagram from '../../assets/images/instagram.png'
import Twitter from '../../assets/images/twitter.png'
import Facebook from '../../assets/images/facebook.png'
import C from '../../assets/images/c.png'


const Footer = ()=>{
    const Top = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 515px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 515px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    return(
        <>
        <Wrapper>
            <Content>
            <h1>Blink</h1>
            <div>
                <h1>Quick Links</h1>
                <h3>FAQ</h3>
                <h3 style={{marginTop: -10}}>About Us</h3>
                <h3 style={{marginTop: -10}}>Help</h3>
                <h3 style={{marginTop: -10}}>My account</h3>
                <h3 style={{marginTop: -10}}>Contacts</h3>
            </div>
            {screen ? null: <div>
                <h1>Categories</h1>
                <h3>Top Categories</h3>
                <h3 style={{marginTop: -10}}>Best Rated</h3>
                <h3 style={{marginTop: -10}}>Best Price</h3>
                <h3 style={{marginTop: -10}}>Latest Additions</h3>
                
            </div>}
            
            <div>
                <h1>Contacts</h1>
                <h3>Dar es salaam Rd</h3>
                <h3 style={{marginTop: -10}}>Nairobi</h3>
                <h3 style={{marginTop: -10}}>+2547 891 234 567</h3>
                <h3 style={{marginTop: -10}}>info@domain.com</h3>
            </div>
            </Content>
            {screen ? null :<Content2>
                <div style={{width: '33.333%'}}>
                    <h1>Stay Updated</h1>
                    <div style={{display: 'flex'}}>
                    <Input type="email" placeholder="Your email"/>
                    <FooterButton>
                        <Arrow src={Left}/>
                    </FooterButton>
                    </div>
                    
                </div>
                <div style={{display: 'flex', alignItems: 'center', width: '33.333%'}}>
                    <img src={Twitter} style={{width: 30, height: 30}} alt="social"/>
                    <img src={Instagram} style={{width: 30, height: 30}} alt="social"/>
                    <img src={Facebook} style={{width: 35, height: 35}} alt="social"/>
                </div>
                <FooterButton2 onClick={Top}>
                        <Arrow2 src={Left}/>
                    </FooterButton2>
            </Content2>}
            
        </Wrapper>
        {screen ? null:<Wrapper2>
            <div style={{display: 'flex', alignItems: 'center', marginLeft: 20}}>
            <h4>Terms and Conditions | Privacy |</h4>
            <img src={C} alt="c" style={{width: 20, height: 20}}/>
            <h4>Blink</h4>
            </div>
            <h4 style={{fontWeight: '400', marginRight: 20}}>Design crafted By <span style={{fontWeight: '700'}}>Vesen Computing</span></h4>
        </Wrapper2>}
        </>

    )
}

export default Footer;