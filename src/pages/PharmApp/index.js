import React from "react";
import { BannerContent, BannerImage, Button1, Button2, Button3, Content, WelcomeBanner, WelcomeButtonContent, Wrapper } from "./PharmApp.styles";
import WelcomeImage from '../../assets/images/welcomeimage.png' 

const PharmApp = ()=>{
    return(
        <Wrapper>
            <Content>
                <WelcomeBanner>
                    <BannerContent>
                        <h1>Don't Miss out on Amazing Offers</h1>
                        <h2>Save up to 50% on Your first order</h2>
                    </BannerContent>
                    <BannerImage src={WelcomeImage} alt="banner"/>
                </WelcomeBanner>
                <WelcomeButtonContent>
                    <Button1>Upload your Prescription</Button1>
                    <Button2>Shop by Brands</Button2>
                    <Button3>Shop by Condition</Button3>
                </WelcomeButtonContent>
            </Content>
            <hr/>
        </Wrapper>
    )
}

export default PharmApp;