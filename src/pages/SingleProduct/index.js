import React from "react";
import { AddToCart, ArrowContainer, Color1, Color2, ColorContent, Content, Feedback, FeedbackImage, ProductContent, ProductDetails, ProductImageContent, QuantityContent, Review, Table, TableContent, Word, Wrapper } from "./SingleProduct.styles";
import ArrowForward from '../../assets/images/arrowforward.png'
import Hair from '../../assets/images/hairsingle.png'
import Shadow from '../../assets/images/shadow.png'
import Twitter from '../../assets/images/twittersingle.png'
import Cart from '../../assets/images/whitecart.png'
import Marquee from "react-fast-marquee";
import { Badge, OfferImage, OfferImageContent } from "../Home/Home.styles";
import { Popular, DealButton } from "../Groceries/Groceries.styles";
import BlackCart from '../../assets/images/cart.png'
import Brushes from '../../assets/images/brushessingle.png'
import Kettle from '../../assets/images/kettlesingle.png'
import Perfume from '../../assets/images/perfumesingle.png'
import Nivea from '../../assets/images/niveasingle.png'
import Customer from '../../assets/images/singleImage.png'
import ArrowDown from '../../assets/images/arrowsingle.png'
import Add from '../../assets/images/add.png'
import Reduce from '../../assets/images/reduce.png'
import { useNavigate } from "react-router-dom";

const SingleProduct = ()=>{

    const navigate = useNavigate()
    return(
        <Wrapper>
            <Content>
            <ArrowContainer>
                <h4>Home</h4>
                <img src={ArrowForward} style={{height: 20}} alt="arrow"/>
                <h4>Cosmetics</h4>
                <img src={ArrowForward} style={{height: 20}} alt="arrow"/>
                <h4>Hair Care</h4>
                <img src={ArrowForward} style={{height: 20}} alt="arrow"/>
                <h4 style={{color: 'gray'}}>Tcb LEAVE-IN TREATMENT</h4>
            </ArrowContainer>
            <ProductDetails>
                <ProductContent>
                    <ProductImageContent>
                        <img src={Hair} style={{marginLeft: '34%'}} alt="product"/>
                        <img src={Shadow} style={{marginLeft: '25%'}} alt="product"/>
                    </ProductImageContent>
                    <hr/>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                    <h4 style={{fontWeight: '400'}}>SHARE THIS PRODUCT</h4>
                    <img src={Twitter} alt="twitter" style={{height: 40, cursor: 'pointer'}}/>
                    </div>
                    
                </ProductContent>

                
                <ProductContent>
                    <div style={{
                        backgroundColor: '#FFC34E',
                        width:105,
                        color: 'white',
                        fontWeight: 'bold'
                    }}>Official Store</div>
                    <h4>TCB LEAVE-IN TREATMENT - 500ML</h4>
                    <h5 style={{fontWeight: '400', marginTop: -10}}>Brand - <span style={{color: 'red'}}>tcb/similar products from tcb</span> </h5>
                    
                    <div style={{display: 'flex', marginTop: -30}}>
                    <h5 style={{fontWeight: '400'}}>Rating</h5>
                    <div style={{display: 'flex', marginLeft: '10%'}}>
                        <h6 style={{color: '#EA9414'}}>&#9733;</h6>
                        <h6 style={{color: '#EA9414'}}>&#9733;</h6>
                        <h6 style={{color: '#EA9414'}}>&#9733;</h6>
                        <h6 style={{color: '#EA9414'}}>&#9733;</h6>
                        <h6>&#9734;</h6>
                    </div>
                    </div>
                    <hr style={{marginTop: -5}}/>
                    <h4 style={{marginTop: 0}}>KES 187</h4>
                    <div style={{display: 'flex', marginTop: -0}}>
                    <h5 style={{textDecoration: 'line-through', fontWeight: '400'}}>KES 243</h5>
                    <h6 style={{color: 'red', marginLeft: 5, fontSize: 8}}>-14%</h6>
                    </div>

                    <h6 style={{fontWeight: '400', marginTop: -5}}>In Stock</h6>
                    <h5 style={{fontWeight: '400', marginTop: -5, fontSize: 13}}>+ kes 75 delivery around CBD- Koja/ Globe/River Road</h5>
                    
                    <h4 style={{marginTop: 0}}>Quantity</h4>
                    <QuantityContent>
                        <img src={Reduce} alt="reduce" style={{marginLeft: 5, cursor: 'pointer'}}/>
                        <h5>50</h5>
                        <img src={Add} alt="add" style={{marginRight: 5, cursor: 'pointer'}}/>
                    </QuantityContent>
                    
                    <AddToCart onClick={()=>navigate('/cart')}>
                        <img src={Cart} alt="cart" style={{height: 20}}/>
                        Add to cart
                        </AddToCart>
                       

                </ProductContent>

                
                <ProductContent style={{backgroundColor: 'white', padding: 10}}>
                <h4 style={{fontWeight: '500', textAlign: 'center'}}>DELIVERY & RETURNS</h4>
                <hr/>
                <h5 style={{fontWeight: '400', fontSize: 17, marginTop: -5}}>Blink <span style={{color: '#EA9414'}}>Express</span></h5>
                <p style={{fontSize: 13, marginTop: -17}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, lectus at fermentum vestibulum</p>

                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -20}}>
                    <h5 style={{fontWeight: '400', fontSize: 17}}>Door Delivery</h5>
                    <h5 style={{fontWeight: '400', fontSize: 13, color: '#EA9414'}}>More Details</h5>
                </div>
                <p style={{fontSize: 13, marginTop: -17}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, lectus at fermentum vestibulum</p>

                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -20}}>
                    <h5 style={{fontWeight: '400', fontSize: 17}}>PickUp Station</h5>
                    <h5 style={{fontWeight: '400', fontSize: 13, color: '#EA9414'}}>More Details</h5>
                </div>
                <p style={{fontSize: 13, marginTop: -17}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, lectus at fermentum vestibulum</p>

                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -20}}>
                    <h5 style={{fontWeight: '400', fontSize: 17}}>Return Policy</h5>
                    
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: -40}}>
                <p style={{fontSize: 13}}>Lorem ipsum dolor sit amet</p>
                    <h5 style={{fontWeight: '400', fontSize: 13, color: '#EA9414'}}>More Details</h5>
                </div>
                

                </ProductContent>
            </ProductDetails>

            <ColorContent>
            <Color1></Color1>
            <Color2></Color2>
            </ColorContent>

            <h4 style={{fontWeight: '500', marginTop: 100, marginLeft: 20}}>DELIVERY & RETURNS</h4>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, lectus at fermentum vestibulum, tortor nulla mattis dolor, nec interdum nisl mauris consectetur ligula.Donec gravida arcu eu leo dictum fringilla. Nunc venenatis ut ligula et pretium. Sed eleifend nisl at finibus bibendum. Curabitur in quam orci.

                </p>

                <h4 style={{fontWeight: '500', marginTop: 100, marginLeft: 20}}>SPECIFICATIONS</h4>
                <hr/>
                <TableContent>
                <Table>
                    <h5 style={{marginLeft: 10, fontWeight: '200'}}>KEY FEATURES</h5>
                    <hr/>
                    <h5 style={{marginLeft: 10}}>Brand Name- tcb</h5>
                    <h5 style={{marginLeft: 10}}>Product Type- Hair Care</h5>
                    <h5 style={{marginLeft: 10}}>Quality- Top Quality</h5>
                </Table>

                <Table>
                    <h5 style={{marginLeft: 10, fontWeight: '200'}}>What's In The Box</h5>
                    <hr/>
                    <h5 style={{marginLeft: 10}}>Tcb Leave In Hair Treatment-500ml</h5>
                    
                </Table>

                <Table>
                    <h5 style={{marginLeft: 10, fontWeight: '200'}}>Specifications</h5>
                    <hr/>
                    <ul>
                        <li>SKU: CE996OT08NW5HNAFAMZ</li>
                        <li>Weight (Kg): 500ml</li>
                        <li>Main Material: Liquid</li>
                        <li>Shop Type: Blink Cosmetics</li>
                    </ul>
                    
                </Table>
                </TableContent>

                <h4 style={{marginTop: 100}}>You May Also Like</h4>
                <Marquee gradient={false} speed={40} play={true}>
                <Popular>
                        <Badge>New</Badge>
                        <OfferImageContent style={{height: 220}}>
                            <OfferImage src={Nivea} style={{marginLeft: 100}}/>
                            
                        </OfferImageContent>
                        <h3>Men's Lotion</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div style={{
                                display: 'flex',
                                color: '#EA9414',
                                marginTop: -30
                            }}>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9734;</h3>
                            </div>
                            <h3 style={{marginTop: -20}}>By Nivea</h3>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 300}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                <DealButton style={{height: 40, width: 80, fontSize: 20, borderRadius: 20, marginLeft: 70}}>
                                    Add
                                    <img src={BlackCart} style={{width: 23, height:23, marginLeft: 5}} alt="cart"/>
                                </DealButton>
                            </div>
                    </Popular>

                    <Popular>
                        <Badge style={{backgroundColor: 'red'}}>Sale</Badge>
                        <OfferImageContent style={{height: 220}}>
                            <OfferImage src={Perfume} style={{marginLeft: 100}}/>
                            
                        </OfferImageContent>
                        <h3>Victoria's essence</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div style={{
                                display: 'flex',
                                color: '#EA9414',
                                marginTop: -30
                            }}>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9734;</h3>
                            </div>
                            <h3 style={{marginTop: -20}}>By Victorias</h3>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 300}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                <DealButton style={{height: 40, width: 80, fontSize: 20, borderRadius: 20, marginLeft: 70}}>
                                    Add
                                    <img src={BlackCart} style={{width: 23, height:23, marginLeft: 5}} alt="cart"/>
                                </DealButton>
                            </div>
                    </Popular>

                    <Popular>
                        <Badge style={{backgroundColor: '#1AFFD6'}}>New</Badge>
                        <OfferImageContent style={{height: 220}}>
                            <OfferImage src={Kettle} style={{marginLeft: 100}}/>
                            
                        </OfferImageContent>
                        <h3>Kettle</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div style={{
                                display: 'flex',
                                color: '#EA9414',
                                marginTop: -30
                            }}>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9734;</h3>
                            </div>
                            <h3 style={{marginTop: -20}}>By Ramptons</h3>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 300}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                <DealButton style={{height: 40, width: 80, fontSize: 20, borderRadius: 20, marginLeft: 70}}>
                                    Add
                                    <img src={BlackCart} style={{width: 23, height:23, marginLeft: 5}} alt="cart"/>
                                </DealButton>
                            </div>
                    </Popular>

                    <Popular style={{marginRight: 320}}>
                        <Badge>New</Badge>
                        <OfferImageContent style={{height: 220}}>
                            <OfferImage src={Brushes}/>
                            
                        </OfferImageContent>
                        <h3>MakeUp Kit</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div style={{
                                display: 'flex',
                                color: '#EA9414',
                                marginTop: -30
                            }}>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9733;</h3>
                                <h3>&#9734;</h3>
                            </div>
                            <h3 style={{marginTop: -20}}>By Beauty</h3>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: -15, width: 300}}>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: '#00FF85', marginRight: 10}}>KES 345</h3>
                                <h3 style={{fontSize: 15, fontWeight: '700', color: 'gray', textDecoration: 'line-through'}}>KES 345</h3>
                                <DealButton style={{height: 40, width: 80, fontSize: 20, borderRadius: 20, marginLeft: 70}}>
                                    Add
                                    <img src={BlackCart} style={{width: 23, height:23, marginLeft: 5}} alt="cart"/>
                                </DealButton>
                            </div>
                    </Popular>
                </Marquee>

                <h4 style={{marginTop: 100}}>Customer Feedback</h4>
                <Feedback>
                    <FeedbackImage src={Customer}/>
                    <Word>
                        <h4>Package arrived fast and as described</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                        </p>
                        <div style={{marginLeft: '80%'}}>
                        <div style={{display: 'flex', marginTop: -20}}>
                        <h4 style={{color: '#EA9414'}}>&#9733;</h4>
                        <h4 style={{color: '#EA9414'}}>&#9733;</h4>
                        <h4 style={{color: '#EA9414'}}>&#9733;</h4>
                        <h4 style={{color: '#EA9414'}}>&#9733;</h4>
                        <h4>&#9734;</h4>
                    </div>
                    <h5 style={{marginTop: -5}}>4.5/5</h5>
                        </div>
                        

                    </Word>
                </Feedback>

                <Feedback>
                    <FeedbackImage src={Customer}/>
                    <Word>
                        <h4>Package arrived fast and as described</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                        </p>
                        <div style={{marginLeft: '80%'}}>
                        <div style={{display: 'flex', marginTop: -20}}>
                        <h4 style={{color: '#EA9414'}}>&#9733;</h4>
                        <h4 style={{color: '#EA9414'}}>&#9733;</h4>
                        <h4 style={{color: '#EA9414'}}>&#9733;</h4>
                        <h4 style={{color: '#EA9414'}}>&#9733;</h4>
                        <h4>&#9734;</h4>
                    </div>
                    <h5 style={{marginTop: -5}}>4.5/5</h5>
                        </div>
                        

                    </Word>
                </Feedback>

                <Feedback>
                    <FeedbackImage src={Customer}/>
                    <Word>
                        <h4>Package arrived fast and as described</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                        </p>
                        <div style={{marginLeft: '80%'}}>
                        <div style={{display: 'flex', marginTop: -20}}>
                        <h4 style={{color: '#EA9414'}}>&#9733;</h4>
                        <h4 style={{color: '#EA9414'}}>&#9733;</h4>
                        <h4 style={{color: '#EA9414'}}>&#9733;</h4>
                        <h4 style={{color: '#EA9414'}}>&#9733;</h4>
                        <h4>&#9734;</h4>
                    </div>
                    <h5 style={{marginTop: -5}}>4.5/5</h5>
                        </div>
                        

                    </Word>
                </Feedback>
                <Review>
                    <h4>View All Reviews</h4>
                    <img src={ArrowDown} alt="arrow"/>
                </Review>
            </Content>
        </Wrapper>
    )
}

export default SingleProduct;