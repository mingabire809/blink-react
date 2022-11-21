import React from "react";
import { Content, EventContent, Wrapper, Event, EventTitle, AllEvent, EventPlannerContent, EventPlanner, EventPlannerImage } from "./Catering.styles";
import { WelcomeBanner, BannerContent, BannerImage, BannerButton } from "../Kitchen/Kitchen.styles";
import { Button } from "../LPG/LPG.styles";
import CosmeticBanner from '../../assets/images/cosmeticswelcome.png'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Birthday from '../../assets/images/birthday.png'
import Wedding from '../../assets/images/wedding.png'
import BabyShower from '../../assets/images/babyshower.png'
import Party from '../../assets/images/party.png'
import EventPlannerPerson from '../../assets/images/eventplanner.png'
import Ellipse6 from '../../assets/images/Ellipse6.png'
import Ellipse7 from '../../assets/images/Ellipse7.png'



const Catering = ()=>{

        const welcome = [
            <WelcomeBanner style={{backgroundColor: '#FED7FF'}}>
                        <BannerContent>
                        <h1>Don't Miss out on Amazing Offers</h1>
                        <h2>Save up to 50% on Your first order</h2>
                        <BannerButton>Shop Now</BannerButton>
                        </BannerContent>
                        <BannerImage src={CosmeticBanner}/>
                        
                    </WelcomeBanner>,
    
    <WelcomeBanner style={{backgroundColor: 'lightgray'}}>
    <BannerContent>
    <h1>Don't Miss out on Amazing Offers</h1>
    <h2>Save up to 50% on Your first order</h2>
    <BannerButton>Shop Now</BannerButton>
    </BannerContent>
    <BannerImage src={CosmeticBanner}/>
    </WelcomeBanner>,
    
    <WelcomeBanner style={{backgroundColor: 'pink'}}>
                        <BannerContent>
                        <h1>Don't Miss out on Amazing Offers</h1>
                        <h2>Save up to 50% on Your first order</h2>
                        <BannerButton>Shop Now</BannerButton>
                        </BannerContent>
                        <BannerImage src={CosmeticBanner}/>
                    </WelcomeBanner>
        ]

            

    return(
        <Wrapper>
            <Content>
            <Slider autoplay={3000}>
                {welcome.map((slide, index) => <div>
                    <div>{slide}</div>
                </div>)}
               </Slider>
               <Button>Events</Button>
               <EventContent>
                <Event style={{backgroundImage: `url(${Birthday})`}}>
                    <EventTitle>BIRTHDAYS EVENT</EventTitle>
                </Event>

                <Event style={{backgroundImage: `url(${Wedding})`}}>
                    <EventTitle>WEDDING EVENT</EventTitle>
                </Event>

                <Event style={{backgroundImage: `url(${BabyShower})`}}>
                    <EventTitle>BABY SHOWER EVENTS</EventTitle>
                </Event>

                <Event style={{backgroundImage: `url(${Party})`}}>
                    <EventTitle>PARTY EVENT</EventTitle>
                </Event>
               </EventContent>
            </Content>

            <AllEvent>View All Events</AllEvent>

            <Content>
                <h2>Choose Your Event Planner</h2>
                <EventPlannerContent>
                    <EventPlanner>
                        <EventPlannerImage src={Ellipse6}/>
                        <h3 style={{textAlign: 'center'}}>John Doe</h3>
                        <h4 style={{marginTop: -15, width: '100%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                    </EventPlanner>

                    <EventPlanner>
                        <EventPlannerImage src={EventPlannerPerson}/>
                        <h3 style={{textAlign: 'center'}}>Jane Smitch</h3>
                        <h4 style={{marginTop: -15, width: '100%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                    </EventPlanner>

                    <EventPlanner>
                        <EventPlannerImage src={Ellipse7}/>
                        <h3 style={{textAlign: 'center'}}>Katyln Chan</h3>
                        <h4 style={{marginTop: -15, width: '100%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                    </EventPlanner>
                </EventPlannerContent>
            </Content>
        </Wrapper>
    )
}

export default Catering;