import React from "react";
import { Content, Items, ItemsContainer, JobSelect, Line, Search, Wrapper } from "./Career.styles";

const Career = () =>{
    return(
        <Wrapper>
            <Content>
                <h1 style={{textAlign: 'center'}}>Career Opportunities!</h1>
                <Search type="text" placeholder="&#x1F50D; Search Jobs"/>
                <ItemsContainer>
                    <JobSelect>
                        <option>
                            Location
                        </option>
                    </JobSelect>
                    <JobSelect>
                        <option>
                            Departement
                        </option>
                    </JobSelect>
                    <JobSelect>
                        <option>
                            Work Type
                        </option>
                    </JobSelect>
                </ItemsContainer>
                <ItemsContainer>
                    <Items>
                        <h1>Product Lead</h1>
                        <h2>Posted 1hr ago</h2>
                    </Items>
                    <Items>
                        
                        <h2>Kilimani, Nairobi</h2>
                    </Items>
                    <Items>
                        
                        <h2>Part Time</h2>
                    </Items>
                </ItemsContainer>
                <Line/>
                <ItemsContainer>
                    <Items>
                        <h1>Graphic Designer</h1>
                        <h2>Posted 1 day ago</h2>
                    </Items>
                    <Items>
                        
                        <h2>Lavington, Nairobi</h2>
                    </Items>
                    <Items>
                        
                        <h2>Full Time</h2>
                    </Items>
                </ItemsContainer>
                <Line/>

                <ItemsContainer>
                    <Items>
                        <h1>Marketing Manager</h1>
                        <h2>Posted 5 days ago</h2>
                    </Items>
                    <Items>
                        
                        <h2>CBD, Kisumu</h2>
                    </Items>
                    <Items>
                        
                        <h2>Full Time</h2>
                    </Items>
                </ItemsContainer>
                <Line/>

                <ItemsContainer>
                    <Items>
                        <h1>Branch Manager</h1>
                        <h2>Posted 9 days ago</h2>
                    </Items>
                    <Items>
                        
                        <h2>CBD, Eldoret</h2>
                    </Items>
                    <Items>
                        
                        <h2>Full Time</h2>
                    </Items>
                </ItemsContainer>
                <Line/>
            </Content>
        </Wrapper>

    )
}

export default Career;