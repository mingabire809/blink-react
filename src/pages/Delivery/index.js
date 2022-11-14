import React from "react";
import { Button, Content, FormInput, ItemsContainer, Select, WordContent, Wrapper } from "./Delivery.styles";

const Delivery = ()=>{
    return(
        <Wrapper>
            <Content>
            <WordContent>
                <h1>Become A Delivery Agent</h1>
                <p>Help change the way people deliver items ang get paid fo it.</p>
                <h2>Fill In The Form To Apply</h2>
            </WordContent>
            <ItemsContainer>
                <FormInput type="text" placeholder="First Name"/>
                <FormInput type="text" placeholder="Last Name"/>
                <FormInput type="number" placeholder="Phone Number"/>
                <FormInput type="email" placeholder="Email"/>
                <Select>
                    <option>Hub</option>
                </Select>

                <Select>
                    <option>Delivery Mode</option>
                </Select>
            </ItemsContainer>
            <Button>Submit</Button>
            </Content>
        </Wrapper>
    )
}

export default Delivery;