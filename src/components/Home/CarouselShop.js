
import { Carousel ,Image} from 'antd';
import { useState,useContext } from "react";
import {useSpring, animated} from 'react-spring'

import { StoreContext } from "../../store"

const contentStyle = {
    height: 'auto',
    color: '#fff',
    textAlign: 'center',
  };


function CarouselShop({isNavBarVisible}) {
    const { state: { page: { title, products } } } = useContext(StoreContext);
  
    return (
        <Carousel autoplay
        autoplaySpeed={5000}
        >
                <div>
                    <h3 style={contentStyle}>
                        <div className="carousel-artists">
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/pd/notebook/pd_notebook_1.png?raw=true"
                                />
                                <div className="text-white carousel-artists-name">BT21 Notebook</div>
                            </div>
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/pd/hairband/pd_hairband_1.png?raw=true"
                                />
                                <div className="text-white carousel-artists-name">BT21 Hairband</div>
                            </div>
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/pd/keychain/pd_keychain_1.png?raw=true"
                                />
                                <div className="text-white carousel-artists-name">BT21 KeyChain</div>
                            </div>
                            
                        </div>
                    </h3>
                    
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <div className="carousel-artists">
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/pd/pencilcase/pd_pencilcase_2.png?raw=true"
                                />
                                <div className="text-white carousel-artists-name">BT21 Pencil case</div>
                            </div>
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/pd/memo/pd_memo_3.png?raw=true"
                                />
                                <div className="text-white carousel-artists-name">BT21 Memo</div>
                            </div>
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/pd/purse/pd_purse_1.png?raw=true"
                                />
                                <div className="text-white carousel-artists-name">Bt21 Purse</div>
                            </div>
                            
                        </div>
                    </h3>
                    
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <div className="carousel-artists">
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/pd/notebook/pd_notebook_1.png?raw=true"
                                />
                                <div className="text-white carousel-artists-name">BT21 Notebook</div>
                            </div>
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/pd/hairband/pd_hairband_1.png?raw=true"
                                />
                                <div className="text-white carousel-artists-name">BT21 Hairband</div>
                            </div>
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/pd/keychain/pd_keychain_1.png?raw=true"
                                />
                                <div className="text-white carousel-artists-name">BT21 KeyChain</div>
                            </div>
                            
                        </div>
                    </h3>
                    
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <div className="carousel-artists">
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/pd/pencilcase/pd_pencilcase_2.png?raw=true"
                                />
                                <div className="text-white carousel-artists-name">BT21 Pencil case</div>
                            </div>
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/pd/memo/pd_memo_3.png?raw=true"
                                />
                                <div className="text-white carousel-artists-name">BT21 Memo</div>
                            </div>
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/pd/purse/pd_purse_1.png?raw=true"
                                />
                                <div className="text-white carousel-artists-name">Bt21 Purse</div>
                            </div>
                            
                        </div>
                    </h3>
                    
                </div>
                
                
            </Carousel>
            
    );
}

export default CarouselShop;