import React from "react";
import { Circle, CircleContent, Confirm, Content, Details, DetailsContent, Map, TrackContent, Wrapper } from "./Track.styles";
import Map2 from '../../assets/images/map2.png'
import { useNavigate } from "react-router-dom";
import Yes from '../../assets/images/yes.png'

const Track = ()=>{
    const navigate = useNavigate()
    return(
        <Wrapper>
            <Content>
                <Details>
                    <TrackContent>
                    <CircleContent>
                        <Circle style={{backgroundColor: '#00E05A'}}>
                            <img src={Yes} style={{width: 25, marginLeft: 5, marginTop: 10}} alt="yes"/>
                        </Circle>
                        <hr style={{width: 1, height: 50, backgroundColor: '#EA9414', marginTop: -1}}/>
                        <Circle>

                        </Circle>
                        <hr style={{width: 1, height: 50, backgroundColor: '#EA9414', marginTop: -1}}/>
                        <Circle>

                        </Circle>
                        <hr style={{width: 1, height: 50, backgroundColor: '#EA9414', marginTop: -1}}/>
                        <Circle>

                        </Circle>
                        
                        </CircleContent>

                    <DetailsContent>
                        <h3 style={{marginTop: 0}}>Order received</h3>
                        <h3 style={{marginTop: 70}}>Order ready for dispatch</h3>
                        <h3 style={{marginTop: 70}}>Order dispatched</h3>
                        <h3 style={{marginTop: 60}}>Order arrived</h3>
                    </DetailsContent>
                    </TrackContent>

                    <Confirm onClick={()=>navigate('/')}>Back Home</Confirm>
                </Details>
                
            </Content>
            <Map src={Map2}/>
        </Wrapper>
    )
}

export default Track;