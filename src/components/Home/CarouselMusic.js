
import { Carousel ,Image} from 'antd';
import { useState,useContext } from "react";
import {useSpring, animated} from 'react-spring'

import { StoreContext } from "../../store"

const contentStyle = {
    height: 'auto',
    color: '#fff',
    textAlign: 'center',
  };


function CarouselMusic({isNavBarVisible}) {
    const { state: { page: { title, products } } } = useContext(StoreContext);
  
    return (
        <Carousel autoplay
        autoplaySpeed={4000}
        >
                <div>
                    <h3 style={contentStyle}>
                        <div className="carousel-artists">
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/music/album_1.jpeg?raw=true"
                                />
                                <div className="text-white carousel-artists-name">Wulpurgis</div>
                            </div>
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/music/album_2.jpg?raw=true"
                                />
                                <div className="text-white carousel-artists-name">BE</div>
                            </div>
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/music/album_3.png?raw=true"
                                />
                                <div className="text-white carousel-artists-name">Flower</div>
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
                                    src="https://github.com/unbeliebubble/img/blob/main/music/album_7.jpg?raw=true"
                                />
                                <div className="text-white carousel-artists-name">We are</div>
                            </div>
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/music/album_5.png?raw=true"
                                />
                                <div className="text-white carousel-artists-name">Hello</div>
                            </div>
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/music/album_6.jpg?raw=true"
                                />
                                <div className="text-white carousel-artists-name">Teenage</div>
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
                                    src="https://github.com/unbeliebubble/img/blob/main/music/album_1.jpeg?raw=true"
                                />
                                <div className="text-white carousel-artists-name">Wulpurgis</div>
                            </div>
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/music/album_2.jpg?raw=true"
                                />
                                <div className="text-white carousel-artists-name">BE</div>
                            </div>
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/music/album_3.png?raw=true"
                                />
                                <div className="text-white carousel-artists-name">Flower</div>
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
                                    src="https://github.com/unbeliebubble/img/blob/main/music/album_7.jpg?raw=true"
                                />
                                <div className="text-white carousel-artists-name">We are</div>
                            </div>
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/music/album_5.png?raw=true"
                                />
                                <div className="text-white carousel-artists-name">Hello</div>
                            </div>
                            <div className="carousel-artists-img-con">
                                <Image
                                    width={"100%"}
                                    style={{borderRadius:"10px"}}
                                    src="https://github.com/unbeliebubble/img/blob/main/music/album_6.jpg?raw=true"
                                />
                                <div className="text-white carousel-artists-name">Teenage</div>
                            </div>
                            
                        </div>
                    </h3>
                    
                </div>
                
                
            </Carousel>
            
    );
}

export default CarouselMusic;