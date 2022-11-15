import React, {useState, useEffect} from "react";
import { Content, ImageContent, Wrapper } from "./Popup.styles";
import Groceries from '../../assets/images/groceries.png'
import Electronics from '../../assets/images/electronics.png'
import PharmApp from '../../assets/images/pharmapp.png'
import Cosmetics from '../../assets/images/toppng.com-grocery-png-3.png'
import LPG from '../../assets/images/toppng.com-grocery-png-4.png'
import Cafe from '../../assets/images/toppng.com-grocery-png-5.png'
import Last from '../../assets/images/toppng.com-grocery-png-6.png'
import Kitchen from '../../assets/images/toppng.com-grocery-png-7.png'
import Catering from '../../assets/images/toppng.com-grocery-png-8.png'

const PopUp = ()=>{
    const [activeIndex, setActiveIndex] = useState(1)
    const Images = [
    {Images: Groceries, title: 'Groceries'},
    {Images: Electronics, title: 'Electronics'},  
    {Images: PharmApp, title: 'PharmApp'},  
    {Images: Cosmetics, title: 'Cosmetics'},  
    {Images: LPG, title: 'LPG Gas'},  
    {Images: Cafe, title: 'BlinkCafe'},  
    {Images: Last, title: 'Last Mile Delivery'},  
    {Images: Kitchen, title: 'Kitchen'},  
    {Images: Catering, title: 'Catering'},      
    ]
    

  

    useEffect(() => {
        
    
        // logic stays the same
        
    
        // update the word
        setTimeout(() => {
            if(activeIndex === Images.length){
                setActiveIndex(1)
            }else{
                setActiveIndex(activeIndex + 1)
            }
        }, 400);
      }, [activeIndex, Images.length]);
    return(
        <Wrapper>
            <Content>
                {Images.slice(activeIndex - 1, activeIndex).map((picture)=>{
                    return(<div>
                        <ImageContent src={picture.Images}/>
                        <h1 style={{textAlign: 'center'}}>{picture.title}</h1>
                        </div>
                    )
                })}
                
            </Content>
        </Wrapper>
    )
}

export default PopUp;