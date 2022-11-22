import React, {useEffect, useState} from "react";
import { Background, Content, Upload, Wrapper } from "./Prescription.styles";
import Gallery from '../../assets/images/gallery.png'

const Prescription = ()=>{
    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 515px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 515px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    return(
        <Wrapper>
            <Content>
            <h2>Hi! Please Upload your prescription below</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id lacinia nisl. Curabitur ornare turpis non fringilla tempor. Sed lacus libero, dignissim ac accumsan ac, tempor at ex.</p>
            <Upload>Upload</Upload>
            {screen ?<Upload style={{
                marginLeft: '25%',
                backgroundColor: '#FF03D7'
            }}>Camera</Upload> :null}
            <Background>
                <img src={Gallery} style={{width: screen? 120: 200, marginLeft: screen? '35%':'40%', marginTop: screen ? 60: 90}} alt="gallery"/>
            </Background>
            {screen ?<Upload style={{
                color: 'white',
                borderRadius: 10,
                backgroundColor: '#EA9414'
            }}>Back</Upload> :null}
            </Content>
        </Wrapper>
    )
}

export default Prescription;