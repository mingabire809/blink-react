import React, {useState, useEffect} from "react";
import { Button, Content, DetailsContent, DetailsInput, Wrapper } from "./LastMile.styles";

const LastMile = ()=>{

    const [screen, setScreen] = useState(
        window.matchMedia("(max-width: 515px)").matches
    )
    useEffect(()=> {
        window.matchMedia("(max-width: 515px)").addEventListener('change', e =>setScreen(e.screen));
    }, []);
    return(
        <Wrapper>
            <Content>
                <h2>Hi! Please Upload description of your items</h2>
                <DetailsContent>
                    <h3>Weight</h3>
                    <DetailsInput placeholder="35 kgs"/>
                </DetailsContent>

                <DetailsContent>
                    <h3>Height</h3>
                    <DetailsInput placeholder="23 cm"/>
                </DetailsContent>

                <DetailsContent>
                    <h3>Length</h3>
                    <DetailsInput placeholder="32 cm"/>
                </DetailsContent>

                <DetailsContent>
                    <h3>Width</h3>
                    <DetailsInput placeholder="32 cm"/>
                </DetailsContent>
                <div style={{width: screen ? '95%': '70%', justifyContent: 'space-between', display: 'flex', marginLeft: 'auto', marginRight: 'auto', marginTop: 50}}>
                <Button>Upload Photo</Button>
                <Button style={{backgroundColor: 'red', color: 'white', width: screen ? 180: 210}}>Choose a delivery</Button>
                </div>
                
            </Content>
        </Wrapper>
    )
}

export default LastMile;