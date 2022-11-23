import React, {useState, useEffect} from "react";
import { BannerButton, BannerContent, BannerImage, Button, Content, GasContent, Gas, GasImage, WelcomeBanner, Wrapper, WhiteContent } from "./LPG.styles";
import Welcome from '../../assets/images/lpgbanner.png'
import Afrigas from '../../assets/images/afrigas.png'
import Total from '../../assets/images/total.png'
import Total50 from '../../assets/images/total50kg.png'
import KGas from '../../assets/images/Kgas.png'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Lpg = ()=>{
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 515px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 515px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    const freshArray = [
        <WelcomeBanner>
            <BannerContent>
                <h2>Smart Kitchen</h2>
                <BannerButton>Shop Now</BannerButton>
            </BannerContent>
            <BannerImage src={Welcome}/>
        </WelcomeBanner>,
        <WelcomeBanner style={{backgroundColor: 'lightgray'}}>
        <BannerContent>
            <h2>Smart Kitchen</h2>
            <BannerButton>Shop Now</BannerButton>
        </BannerContent>
        <BannerImage src={Welcome}/>
    </WelcomeBanner>,
    <WelcomeBanner style={{backgroundColor: 'lightblue'}}>
    <BannerContent>
        <h2>Smart Kitchen</h2>
        <BannerButton>Shop Now</BannerButton>
    </BannerContent>
    <BannerImage src={Welcome}/>
</WelcomeBanner>
    
    ]
    return(
        <Wrapper>
            <Content>
            <Slider autoplay={3000}>
                {freshArray.map((slide, index) => <div>
                    <div>{slide}</div>
                </div>)}
               </Slider>
        <Button style={{marginTop: screen ? -140: 0}}>Shop by Category</Button>

        <GasContent>
            <Gas style={{backgroundColor: '#FF8383'}}>
                <GasImage src={KGas}/>
                <WhiteContent>
                    <h3>Pro Gas</h3>
                </WhiteContent>
            </Gas>
            <Gas style={{backgroundColor: '#89FFC7'}}>
                <GasImage src={Total} style={{width: '80%', marginLeft: '14%'}}/>
                <WhiteContent style={{marginTop: -20}}>
                    <h3>Safe Gas</h3>
                </WhiteContent>
            </Gas>
            <Gas style={{backgroundColor: '#FF9FE4'}}>
                <GasImage src={KGas} />
                <WhiteContent>
                    <h3>K Gas</h3>
                </WhiteContent>
            </Gas>
            <Gas style={{backgroundColor: '#FFC702'}}>
                <GasImage src={Total} style={{width: '80%', marginLeft: '14%'}}/>
                <WhiteContent style={{marginTop: -20}}>
                    <h3>Total Gas</h3>
                </WhiteContent>
            </Gas>
            <Gas style={{backgroundColor: '#02FF86'}}>
                <GasImage src={Afrigas} style={{width: '70%'}}/>
                <WhiteContent>
                    <h3>Sea Gas</h3>
                </WhiteContent>
            </Gas>

            <Gas style={{backgroundColor: '#FFC702'}}>
                <GasImage src={Total50} style={{width: '80%', marginLeft: '8%'}}/>
                <WhiteContent>
                    <h3>Lake Gas</h3>
                </WhiteContent>
            </Gas>

            <Gas style={{backgroundColor: '#02FFFF'}}>
                <GasImage src={Afrigas} style={{width: '70%'}}/>
                <WhiteContent>
                    <h3>AfriGas</h3>
                </WhiteContent>
            </Gas>
        </GasContent>
            </Content>
        </Wrapper>
    )
}

export default Lpg;