import React, {useState, useEffect} from "react";
import { Content, Icon, Option, UnderHeader, Wrapper } from "./Header.styles";
import Search from '../../assets/images/search.svg'
import User from '../../assets/images/user.png'
import { useLocation, useNavigate } from "react-router-dom";
import Cart from '../../assets/images/cart.png'
import Hamburger from '../../assets/images/hamburger.png'

const Header = ()=>{
    const location = useLocation()
    const navigate = useNavigate()
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 515px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 515px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    return(
        <><Wrapper>
        <Content>
            {screen ? <img src={Hamburger} alt="menu"/>:null}
            <h1 onClick={()=>navigate('/')} style={{cursor: 'pointer'}}>Blink</h1>
            <Option>
                <h2 style={{
                    textDecoration: location.pathname === '/' ? 'underline': 'none'
                }} onClick={()=>navigate('/')}>HOME</h2>
                <h2>ABOUT</h2>
                <h2>CONTACT</h2>
                
            </Option>
            <Icon>
                {screen? null: <img src={Cart} style={{
                    width: 25,
                    cursor: 'pointer'
                }} onClick={()=>navigate('/cart')} alt="cart"/>}
           
                <img src={Search} alt="search" style={{
                    width: 25,
                    cursor: 'pointer'
                }}/>
                <img src={User} style={{
                    width: 25,
                    cursor: 'pointer'
                }} alt="user"/>
                
                
                
                
                
            </Icon>
            
        </Content>
    </Wrapper>
    <UnderHeader>
        
    </UnderHeader>
    </>
        
    )
}

export default Header;