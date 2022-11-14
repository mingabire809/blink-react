import React from "react";
import { Button, Content, FormInput, ItemsContainer, ProductInput, ProductSelect, WordContent, Wrapper } from "./Supplier.styles";

const Supplier = ()=>{
    return(
        <Wrapper>
            <Content>
                <WordContent>
                    <h1>Become A Supplier</h1>
                    <p>Do you have a product and want to supply blink? This is the place to be!
                        We aim to support local business regardless of the size. What matter is the
                        product quality and efficiency.
                    </p>
                    <h2>Fill In The Form to Apply</h2>
                </WordContent>
                <ItemsContainer>
                    <FormInput type="text" placeholder="First Name"/>
                    <FormInput type="text" placeholder="Last Name"/>
                    <FormInput type="number" placeholder="Phone Number"/>
                    <FormInput type="email" placeholder="Email"/>
                    <FormInput type="text" placeholder="Product"/>
                    <ProductSelect>
                        <option>Product Category</option>
                    </ProductSelect>
                    <ProductInput type="text" placeholder="Product Description"/>
                </ItemsContainer>
                <Button>Submit</Button>
            </Content>
        </Wrapper>
    )
}

export default Supplier;