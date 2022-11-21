import React from "react";
import { Background, Content, Upload, Wrapper } from "./Prescription.styles";
import Gallery from '../../assets/images/gallery.png'

const Prescription = ()=>{
    return(
        <Wrapper>
            <Content>
            <h2>Hi! Please Upload your prescription below</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lacinia nisl. Curabitur ornare turpis non fringilla tempor. Sed lacus libero, dignissim ac accumsan ac, tempor at ex.</p>
            <Upload>Upload</Upload>
            <Background>
                <img src={Gallery} style={{width: 200, marginLeft: '40%', marginTop: 90}} alt="gallery"/>
            </Background>
            </Content>
        </Wrapper>
    )
}

export default Prescription;