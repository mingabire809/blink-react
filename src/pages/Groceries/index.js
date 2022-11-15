import React from "react";
import { BannerContent, BannerImage, Content, GroceryContent, WelcomeBanner, Grocery,Wrapper, WhiteContent, GroceryImage } from "./Groceries.styles";
import Grocery0 from '../../assets/images/grocerybanner.png'
import Grocery1 from '../../assets/images/grocery1.png'
import Grocery2 from '../../assets/images/grocery2.png'
import Grocery3 from '../../assets/images/grocery3.png'
import Grocery4 from '../../assets/images/grocery4.png'
import Grocery5 from '../../assets/images/grocery5.png'
import Grocery6 from '../../assets/images/grocery6.png'
import Grocery7 from '../../assets/images/grocery7.png'

const Groceries = ()=>{
    return(
        <Wrapper>
            <Content>
                <WelcomeBanner>
                    <BannerContent>
                    <h1>Fresh Vegetables Big Discount</h1>
                        <h2>Save up to 50% on Your first order</h2>
                    </BannerContent>
                    <BannerImage src={Grocery0} alt="product"/>
                </WelcomeBanner>
                <h2 style={{
                    textDecoration: '3px solid underline red',
                    marginTop: 50
                }}>Top Sub Categories</h2>

                <GroceryContent>
                    <Grocery>
                        <GroceryImage src={Grocery1} alt="product"/>
                        <WhiteContent>
                            <h3>Fruits & Vegie</h3>
                        </WhiteContent>
                    </Grocery>
                    <Grocery style={{backgroundColor: '#2BFF80'}}>
                        <GroceryImage src={Grocery2} style={{marginTop: -20}} alt="product"/>
                        <WhiteContent>
                            <h3>Meat & Fish</h3>
                        </WhiteContent>
                    </Grocery>
                    <Grocery style={{backgroundColor: '#FFAA1E'}}>
                        <GroceryImage src={Grocery3} style={{marginTop: 60}} alt="product"/>
                        <WhiteContent>
                            <h3>Bakery</h3>
                        </WhiteContent>
                    </Grocery>

                    <Grocery>
                        <GroceryImage src={Grocery4} style={{width: '80%', marginLeft: '10%', marginTop: 15}} alt="product"/>
                        <WhiteContent>
                            <h3>Beverage</h3>
                        </WhiteContent>
                    </Grocery>
                    <Grocery>
                        <GroceryImage src={Grocery5} style={{width: '45%', marginLeft: '25%', marginTop: 20}} alt="product"/>
                        <WhiteContent>
                            <h3>Milk & Yogurt</h3>
                        </WhiteContent>
                    </Grocery>
                    <Grocery style={{backgroundColor: '#04EBFA'}}>
                        <GroceryImage src={Grocery6} style={{marginTop: 10}} alt="product"/>
                        <WhiteContent>
                            <h3>Snacks</h3>
                        </WhiteContent>
                    </Grocery>
                    <Grocery>
                        <GroceryImage src={Grocery7} style={{marginTop: 50}} alt="product"/>
                        <WhiteContent>
                            <h3>Egg & Poutry</h3>
                        </WhiteContent>
                    </Grocery>
                </GroceryContent>
                <h2 style={{
                    textDecoration: '3px solid underline #FFC801',
                    marginTop: 50
                }}>Top Sub Categories</h2>
            </Content>
        </Wrapper>
    )
}
export default Groceries;