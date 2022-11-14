import React from "react";
import { Content, Icon, LockerContent, NumberContent, Option, Wrapper } from "./Header.styles";
import Search from '../../assets/images/search.svg'
import User from '../../assets/images/user.png'
import Lock from '../../assets/images/lock.png'
import { useLocation } from "react-router-dom";

const Header = ()=>{
    const location = useLocation()
    return(
        <Wrapper>
            <Content>
                <h1>Blink</h1>
                <Option>
                    <h2 style={{
                        textDecoration: location.pathname === '/' ? 'underline': 'none'
                    }}>HOME</h2>
                    <h2>ABOUT</h2>
                    <h2>CONTACT</h2>
                    <h2>LOG IN</h2>
                </Option>
                <Icon>
                    <img src={Search} alt="search"/>
                    <img src={User} style={{
                        width: 20
                    }} alt="user"/>
                    <LockerContent>
                    <img src={Lock} style={{
                        width: 15,
                        height: 20
                    }} alt="lock"/>
                    <NumberContent>
                        2
                    </NumberContent>
                    </LockerContent>
                    
                </Icon>
            </Content>
        </Wrapper>
    )
}

export default Header;