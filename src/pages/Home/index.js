import React from "react";
import { Categories, CategoryContent, Content, Data, FirstDot, ImageCategory, Phone, PhoneContainer, PhoneContent, Play, Product, ProductContent, SecondDot, Welcome, WhiteContent, Word, Wrapper } from "./Home.styles";
import PhoneMockup from '../../assets/images/PhoneMockup.png'
import AppStore from '../../assets/images/appstore.jpg'
import PlayStore from '../../assets/images/google.jpg'
import Groceries from '../../assets/images/groceries.png'

const Home = () =>{
    return(
        <Wrapper>
            <Content>
                <Welcome>
                <Word>
                <h1 style={{ marginLeft: 25}}><Data></Data></h1>
                <h1 style={{marginTop: -70, marginLeft: 25}}>At Your Door</h1>
                <h1 style={{marginTop: -70, marginLeft: 25}}>In <span style={{color: 'rgba(255,200,1,255)'}}>10 Minutes</span></h1>
                <h2 style={{marginTop: -43, marginLeft: 25}}>The future of Supermarkets is here!</h2>
                <Play><img src={PlayStore} style={{
                    width: 200,
                    cursor: 'pointer'
                }} alt="app"/>
                <img src={AppStore} style={{
                    width: 200,
                    cursor: 'pointer'
                }} alt="app"/>
                </Play>
               </Word>
               <PhoneContent>
                <FirstDot></FirstDot>
                <PhoneContainer>
                <Phone src={PhoneMockup} alt="phone"/>
                </PhoneContainer>
                <SecondDot></SecondDot>
               </PhoneContent>
                </Welcome>

<Categories>
    <h1 style={{textAlign: 'center', textDecoration: 'underline 5px rgba(255,200,1,255)'}}>Our Categories</h1>
    <CategoryContent>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Groceries} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Groceries</h3>
        </Product>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Groceries} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Groceries</h3>
        </Product>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Groceries} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Groceries</h3>
        </Product>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Groceries} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Groceries</h3>
        </Product>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Groceries} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Groceries</h3>
        </Product>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Groceries} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Groceries</h3>
        </Product>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Groceries} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Groceries</h3>
        </Product>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Groceries} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Groceries</h3>
        </Product>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Groceries} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Groceries</h3>
        </Product>
        <Product>
            <ProductContent>
                <WhiteContent>
                    <ImageCategory src={Groceries} alt="category"/>
                </WhiteContent>
            </ProductContent>
            <h3>Groceries</h3>
        </Product>
    </CategoryContent>
</Categories>

               
            </Content>
        </Wrapper>
    )
}

export default Home;