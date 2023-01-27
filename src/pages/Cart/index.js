import React from "react";
import { Content, Wrapper, ArrowContainer, DetailsContent, Details1, Data, ProductContent, Product, QuantityContent, DeleteImage, Details2, Summary, Proceed, Continue } from "./Cart.styles";
import ArrowForward from '../../assets/images/arrowforward.png'
import WomenVitamin from '../../assets/images/womenvitamin2.png'
import Add from '../../assets/images/add.png'
import Reduce from '../../assets/images/reduce.png'
import Delete from '../../assets/images/delete.png'
import Droite from '../../assets/images/droite.png'
import Marquee from "react-fast-marquee";
import { Badge, OfferImage, OfferImageContent } from "../Home/Home.styles";
import { Popular, DealButton } from "../Groceries/Groceries.styles";
import BlackCart from '../../assets/images/cart.png'
import Brushes from '../../assets/images/brushessingle.png'
import Kettle from '../../assets/images/kettlesingle.png'
import Perfume from '../../assets/images/perfumesingle.png'
import Nivea from '../../assets/images/niveasingle.png'
import { useNavigate } from "react-router-dom";


const Cart =()=>{
    const navigate = useNavigate()
    return(
        <Wrapper>
            <Content>
            <ArrowContainer>
                <h4>Home</h4>
                <img src={ArrowForward} style={{height: 14, marginLeft: 20}} alt="arrow"/>
                <h4 style={{color: '#EA9414', marginLeft: 20}}>Cart</h4>
            </ArrowContainer>

            <DetailsContent>
                <Details1>
                    <Data>
                        <h4 style={{marginLeft: 10}}>Shopping Cart</h4>
                        <h4 style={{marginLeft: 20}}> >/ </h4>
                        <h4 style={{marginLeft: 20}}>4 items</h4>
                    </Data>

                    <ProductContent>
                        <Product>
                        <img src={WomenVitamin} alt="product" style={{height: 110, marginTop: 10}}/>
                        <div style={{
                            width: '40%'
                        }}>
                            <h3>Multivitamin</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, lectus at fermentum vestibulum</p>
                        </div>

                        <QuantityContent>
                        <img src={Reduce} alt="reduce" style={{marginLeft: 5, cursor: 'pointer'}}/>
                        <h5>50</h5>
                        <img src={Add} alt="add" style={{marginRight: 5, cursor: 'pointer'}}/>
                    </QuantityContent>
                    <h3 style={{marginRight: 10}}>Kes 970</h3>
                    <DeleteImage src={Delete}/>
                        </Product>

                        <hr style={{marginBottom: 10}}/>

                        <Product>
                        <img src={WomenVitamin} alt="product" style={{height: 110, marginTop: 10}}/>
                        <div style={{
                            width: '40%'
                        }}>
                            <h3>Multivitamin</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, lectus at fermentum vestibulum</p>
                        </div>

                        <QuantityContent>
                        <img src={Reduce} alt="reduce" style={{marginLeft: 5, cursor: 'pointer'}}/>
                        <h5>50</h5>
                        <img src={Add} alt="add" style={{marginRight: 5, cursor: 'pointer'}}/>
                    </QuantityContent>
                    <h3 style={{marginRight: 10}}>Kes 970</h3>
                    <DeleteImage src={Delete}/>
                        </Product>

                        <hr style={{marginBottom: 10}}/>

                        <Product>
                        <img src={WomenVitamin} alt="product" style={{height: 110, marginTop: 10}}/>
                        <div style={{
                            width: '40%'
                        }}>
                            <h3>Multivitamin</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, lectus at fermentum vestibulum</p>
                        </div>

                        <QuantityContent>
                        <img src={Reduce} alt="reduce" style={{marginLeft: 5, cursor: 'pointer'}}/>
                        <h5>50</h5>
                        <img src={Add} alt="add" style={{marginRight: 5, cursor: 'pointer'}}/>
                    </QuantityContent>
                    <h3 style={{marginRight: 10}}>Kes 970</h3>
                    <DeleteImage src={Delete}/>
                        </Product>

                        <hr style={{marginBottom: 10}}/>

                        <Product>
                        <img src={WomenVitamin} alt="product" style={{height: 110, marginTop: 10}}/>
                        <div style={{
                            width: '40%'
                        }}>
                            <h3>Multivitamin</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, lectus at fermentum vestibulum</p>
                        </div>

                        <QuantityContent>
                        <img src={Reduce} alt="reduce" style={{marginLeft: 5, cursor: 'pointer'}}/>
                        <h5>50</h5>
                        <img src={Add} alt="add" style={{marginRight: 5, cursor: 'pointer'}}/>
                    </QuantityContent>
                    <h3 style={{marginRight: 10}}>Kes 970</h3>
                    <DeleteImage src={Delete}/>
                        </Product>

                        <hr style={{marginBottom: 10}}/>

                        <Product>
                        <img src={WomenVitamin} alt="product" style={{height: 110, marginTop: 10}}/>
                        <div style={{
                            width: '40%'
                        }}>
                            <h3>Multivitamin</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, lectus at fermentum vestibulum</p>
                        </div>

                        <QuantityContent>
                        <img src={Reduce} alt="reduce" style={{marginLeft: 5, cursor: 'pointer'}}/>
                        <h5>50</h5>
                        <img src={Add} alt="add" style={{marginRight: 5, cursor: 'pointer'}}/>
                    </QuantityContent>
                    <h3 style={{marginRight: 10}}>Kes 970</h3>
                    <DeleteImage src={Delete}/>
                        </Product>

                        <hr style={{marginBottom: 10}}/>

                        <Product>
                        <img src={WomenVitamin} alt="product" style={{height: 110, marginTop: 10}}/>
                        <div style={{
                            width: '40%'
                        }}>
                            <h3>Multivitamin</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, lectus at fermentum vestibulum</p>
                        </div>

                        <QuantityContent>
                        <img src={Reduce} alt="reduce" style={{marginLeft: 5, cursor: 'pointer'}}/>
                        <h5>50</h5>
                        <img src={Add} alt="add" style={{marginRight: 5, cursor: 'pointer'}}/>
                    </QuantityContent>
                    <h3 style={{marginRight: 10}}>Kes 970</h3>
                    <DeleteImage src={Delete}/>
                        </Product>

                        <hr style={{marginBottom: 10}}/>

                        <Product>
                        <img src={WomenVitamin} alt="product" style={{height: 110, marginTop: 10}}/>
                        <div style={{
                            width: '40%'
                        }}>
                            <h3>Multivitamin</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, lectus at fermentum vestibulum</p>
                        </div>

                        <QuantityContent>
                        <img src={Reduce} alt="reduce" style={{marginLeft: 5, cursor: 'pointer'}}/>
                        <h5>50</h5>
                        <img src={Add} alt="add" style={{marginRight: 5, cursor: 'pointer'}}/>
                    </QuantityContent>
                    <h3 style={{marginRight: 10}}>Kes 970</h3>
                    <DeleteImage src={Delete}/>
                        </Product>

                        <hr style={{marginBottom: 10}}/>
                        

                    </ProductContent>
                </Details1>

                <Details2>
                    <Summary>
                        <div style={{display: 'flex', justifyContent: 'space-around'}}>
                        <h3>CART SUMMARY</h3>
                        <h3>4 (Items)</h3>
                        </div>

                        <hr/>

                        <div style={{display: 'flex', justifyContent: 'space-between', width: '80%', marginLeft: '10%'}}>
                        <h3 style={{fontWeight: '300'}}>Delivery Charges</h3>
                        <h3 style={{fontWeight: '300'}}>Kes 270</h3>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'space-between', width: '80%', marginLeft: '10%'}}>
                        <h3 style={{fontWeight: '300'}}>Subtotal</h3>
                        <h3 style={{fontWeight: '300'}}>Kes 770</h3>
                        </div>

                        <hr/>

                        <div style={{display: 'flex', justifyContent: 'space-between', width: '80%', marginLeft: '10%'}}>
                        <h3>Subtotal</h3>
                        <h3 style={{fontWeight: '300'}}>Kes 970</h3>
                        </div>
                        
                    </Summary>

                    <Proceed onClick={()=>navigate('/location')}>Proceed <img src={Droite} alt="droite"/></Proceed>
                    <Continue>
                        <h3 style={{color: 'red', fontWeight: '700'}}>Continue shopping</h3>
                    </Continue>

                </Details2>
            </DetailsContent>

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

                <h4 style={{marginTop: 100}}>Offers in this category</h4>
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
            </Content>
        </Wrapper>
    )
}

export default Cart;