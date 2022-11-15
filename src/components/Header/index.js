import React from "react";
import { Content, Icon, Option, Wrapper } from "./Header.styles";
import Search from '../../assets/images/search.svg'
import User from '../../assets/images/user.png'
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
                    
                </Option>
                <Icon>
                <img src={Cart} style={{
                        width: 25
                    }} alt="cart"/>
                    <img src={Search} alt="search" style={{
                        width: 25
                    }}/>
                    <img src={User} style={{
                        width: 25
                    }} alt="user"/>
                    
                    
                    
                    
                    
                </Icon>
            </Content>
        </Wrapper>
    )
}

export default Header;