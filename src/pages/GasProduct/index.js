import React, {useState} from "react";
import { Accessory, AccessoryContent, Category, CategoryContent, Content, Gas, GasContent, Wrapper } from "./GasProduct.styles";
import Line from '../../assets/images/line.png'
import Gas1 from '../../assets/images/gas1.png'
import Gas2 from '../../assets/images/gas2.png'
import Angle from '../../assets/images/angle.png'
import Pipe from '../../assets/images/pipe.png'
import Pump from '../../assets/images/pump.png'

const GasProduct=()=>{
    const [product, setProduct] = useState(true)
    return(
        <Wrapper>
                <Content>
                    <CategoryContent>
                        <Category style={{
                            backgroundColor: product ? '#FFC903': 'white'
                        }} onClick={()=>setProduct(true)}>Products</Category>
                        <img src={Line} alt="line"/>
                        <Category style={{
                            backgroundColor: !product ? '#FFC903': 'transparent'
                        }} onClick={()=>setProduct(false)}>Accessories</Category>
                    </CategoryContent>

                   {product ?  <GasContent>
                        <Gas>
                        <img src={Gas1} alt="gas" style={{
                            marginLeft: '40%',
                           
                        }}/>
                        <img src={Angle} alt="angle"/>
                        <img src={Gas2} alt="gas" style={{
                            marginLeft: '40%',
                            marginTop: -50
                           
                        }}/>
                        <div style={{marginLeft: 30}}>
                        <h3>Refill</h3>
                        <h5 style={{fontWeight: '200'}}>5 kgs: kes 1100</h5>
                        <h5 style={{marginTop: -10, fontWeight: '200'}}>13 kgs: kes 2100</h5>
                        </div>
                        
                        </Gas>

                        <Gas>
                        <img src={Gas1} alt="gas" style={{
                            marginLeft: '40%',
                           
                        }}/>
                        <img src={Angle} alt="angle"/>
                        <img src={Gas2} alt="gas" style={{
                            marginLeft: '40%',
                            marginTop: -50
                           
                        }}/>
                        <div style={{marginLeft: 30}}>
                        <h3>Gas & Cylinder</h3>
                        <h5 style={{fontWeight: '200'}}>5 kgs: kes 1100</h5>
                        <h5 style={{marginTop: -10, fontWeight: '200'}}>13 kgs: kes 2100</h5>
                        </div>
                        
                        </Gas>


                    </GasContent>:<AccessoryContent>
                        <Accessory>
                            <img src={Pump} alt="accessory" style={{marginLeft: '14%'}}/>
                            <div style={{marginLeft: 10}}>
                        <h4>Burner</h4>
                        <h6 style={{fontWeight: '200'}}>5 kgs: kes 1100</h6>
                        <h6 style={{marginTop: -10, fontWeight: '200'}}>13 kgs: kes 2100</h6>
                        </div>
                        </Accessory>

                        <Accessory>
                            <img src={Pipe} alt="accessory" style={{marginLeft: '14%'}}/>
                            <div style={{marginLeft: 10}}>
                        <h4>Gas Pipe</h4>
                        <h6 style={{fontWeight: '200'}}>5 kgs: kes 1100</h6>
                        <h6 style={{marginTop: -10, fontWeight: '200'}}>13 kgs: kes 2100</h6>
                        </div>
                        </Accessory>
                        <Accessory>
                            <img src={Pump} alt="accessory" style={{marginLeft: '14%'}}/>
                            <div style={{marginLeft: 10}}>
                        <h4>Burner</h4>
                        <h6 style={{fontWeight: '200'}}>5 kgs: kes 1100</h6>
                        <h6 style={{marginTop: -10, fontWeight: '200'}}>13 kgs: kes 2100</h6>
                        </div>
                        </Accessory>

                        <Accessory>
                            <img src={Pipe} alt="accessory" style={{marginLeft: '14%'}}/>
                            <div style={{marginLeft: 10}}>
                        <h4>Gas Pipe</h4>
                        <h6 style={{fontWeight: '200'}}>5 kgs: kes 1100</h6>
                        <h6 style={{marginTop: -10, fontWeight: '200'}}>13 kgs: kes 2100</h6>
                        </div>
                        </Accessory>

                        <Accessory>
                            <img src={Pump} alt="accessory" style={{marginLeft: '14%'}}/>
                            <div style={{marginLeft: 10}}>
                        <h4>Burner</h4>
                        <h6 style={{fontWeight: '200'}}>5 kgs: kes 1100</h6>
                        <h6 style={{marginTop: -10, fontWeight: '200'}}>13 kgs: kes 2100</h6>
                        </div>
                        </Accessory>

                        <Accessory>
                            <img src={Pipe} alt="accessory" style={{marginLeft: '14%'}}/>
                            <div style={{marginLeft: 10}}>
                        <h4>Gas Pipe</h4>
                        <h6 style={{fontWeight: '200'}}>5 kgs: kes 1100</h6>
                        <h6 style={{marginTop: -10, fontWeight: '200'}}>13 kgs: kes 2100</h6>
                        </div>
                        </Accessory>
                        <Accessory>
                            <img src={Pump} alt="accessory" style={{marginLeft: '14%'}}/>
                            <div style={{marginLeft: 10}}>
                        <h4>Burner</h4>
                        <h6 style={{fontWeight: '200'}}>5 kgs: kes 1100</h6>
                        <h6 style={{marginTop: -10, fontWeight: '200'}}>13 kgs: kes 2100</h6>
                        </div>
                        </Accessory>

                        <Accessory>
                            <img src={Pipe} alt="accessory" style={{marginLeft: '14%'}}/>
                            <div style={{marginLeft: 10}}>
                        <h4>Gas Pipe</h4>
                        <h6 style={{fontWeight: '200'}}>5 kgs: kes 1100</h6>
                        <h6 style={{marginTop: -10, fontWeight: '200'}}>13 kgs: kes 2100</h6>
                        </div>
                        </Accessory>

                        <Accessory>
                            <img src={Pump} alt="accessory" style={{marginLeft: '14%'}}/>
                            <div style={{marginLeft: 10}}>
                        <h4>Burner</h4>
                        <h6 style={{fontWeight: '200'}}>5 kgs: kes 1100</h6>
                        <h6 style={{marginTop: -10, fontWeight: '200'}}>13 kgs: kes 2100</h6>
                        </div>
                        </Accessory>

                        <Accessory>
                            <img src={Pipe} alt="accessory" style={{marginLeft: '14%'}}/>
                            <div style={{marginLeft: 10}}>
                        <h4>Gas Pipe</h4>
                        <h6 style={{fontWeight: '200'}}>5 kgs: kes 1100</h6>
                        <h6 style={{marginTop: -10, fontWeight: '200'}}>13 kgs: kes 2100</h6>
                        </div>
                        </Accessory>
                        <Accessory>
                            <img src={Pump} alt="accessory" style={{marginLeft: '14%'}}/>
                            <div style={{marginLeft: 10}}>
                        <h4>Burner</h4>
                        <h6 style={{fontWeight: '200'}}>5 kgs: kes 1100</h6>
                        <h6 style={{marginTop: -10, fontWeight: '200'}}>13 kgs: kes 2100</h6>
                        </div>
                        </Accessory>

                        <Accessory>
                            <img src={Pipe} alt="accessory" style={{marginLeft: '14%'}}/>
                            <div style={{marginLeft: 10}}>
                        <h4>Gas Pipe</h4>
                        <h6 style={{fontWeight: '200'}}>5 kgs: kes 1100</h6>
                        <h6 style={{marginTop: -10, fontWeight: '200'}}>13 kgs: kes 2100</h6>
                        </div>
                        </Accessory>
                    </AccessoryContent>

                        }
                </Content>
        </Wrapper>
    )
}

export default GasProduct;