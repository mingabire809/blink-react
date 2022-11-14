import React from "react";
import { Content, Icon, Option, Wrapper } from "./Header.styles";
import Search from '../../assets/images/search.svg'
import User from '../../assets/images/user.png'
import Lock from '../../assets/images/lock.png'
import { useLocation, useNavigate } from "react-router-dom";
import Cart from '../../assets/images/cart.png'

const Header = ()=>{
    const location = useLocation()
    const navigate = useNavigate()
    return(
        <Wrapper>
            <Content>
                <h1>Blink</h1>
                <Option>
                    <h2 style={{
                        textDecoration: location.pathname === '/' ? 'underline': 'none'
                    }} onClick={()=>navigate('/')}>HOME</h2>
                    <h2>ABOUT</h2>
                    <h2>CONTACT</h2>
                    <h2>LOG IN</h2>
                </Option>
                <Icon>
                    <img src={Search} alt="search"/>
                    <img src={User} style={{
                        width: 20
                    }} alt="user"/>
                    
                    <img src={Lock} style={{
                        width: 15,
                        height: 20
                    }} alt="lock"/>
                    
                    
                    <img src={Cart} style={{
                        width: 20
                    }} alt="cart"/>
                    
                </Icon>
            </Content>
        </Wrapper>
    )
}

export default Header;