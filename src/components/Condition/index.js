import React from "react";
import { Close, CloseContainer, ConditionContent, Content, Wrapper } from "./Condition.styles";
import { setGlobalState } from "../../store/state";
import CloseImage from '../../assets/images/closeimage.png'
import Red from '../../assets/images/red.png'
import { useNavigate } from "react-router-dom";

const Condition = ()=>{
    const navigate = useNavigate()
    return(
        <Wrapper>
            <Content>
                <CloseContainer>
                    <img src={CloseImage} alt="close" style={{marginLeft: '85%', cursor: 'pointer', width: 50}} onClick={()=>setGlobalState('condition', false)}/>
                </CloseContainer>

                <h3>Shop by conditions</h3>
                <hr/>
                <ConditionContent onClick={()=>navigate('/pharm-App/conditions/ear')}>
                    <h5>Ear Conditions</h5>
                    <img src={Red} alt="red" style={{height: 35}}/>
                </ConditionContent>
                <hr/>
                <ConditionContent>
                    <h5>Pain Relief</h5>
                    <img src={Red} alt="red" style={{height: 35}}/>
                </ConditionContent>
                <hr/>
                <ConditionContent>
                    <h5>Stomach care & Digestive health</h5>
                    <img src={Red} alt="red" style={{height: 35}}/>
                </ConditionContent>
                <hr/>
                <ConditionContent>
                    <h5>Eye Care</h5>
                    <img src={Red} alt="red" style={{height: 35}}/>
                </ConditionContent>
                <hr/>
                <ConditionContent>
                    <h5>Reproductive health</h5>
                    <img src={Red} alt="red" style={{height: 35}}/>
                </ConditionContent>
                <hr/>
                <ConditionContent>
                    <h5>Hypertension</h5>
                    <img src={Red} alt="red" style={{height: 35}}/>
                </ConditionContent>
                <hr/>
                <ConditionContent>
                    <h5>Diabetes</h5>
                    <img src={Red} alt="red" style={{height: 35}}/>
                </ConditionContent>
                <hr/>
                
            </Content>
        </Wrapper>
    )
}

export default Condition;