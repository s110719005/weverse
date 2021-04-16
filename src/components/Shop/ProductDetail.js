import { useContext,useState } from "react";
import { Row, Col } from "antd";
import { Select } from 'antd';
//import AddToCart from "./AddToCart"
import { StoreContext } from "../../store";
import { setProductDetail } from "../../actions"

import { useSpring, animated } from 'react-spring'

const { Option } = Select;

function ProductDetail() {
   const { state: { productDetail: { product, qty} }, dispatch } = useContext(StoreContext);
   const [isFrontPage, setIsFrontPage] = useState(true);
   const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  const dropped = useSpring({
   marginTop:isFrontPage?"1.5rem":"50rem",
   marginRight:isFrontPage?"0rem":"200rem",
});

   return (
     

      <div className="mainarea">
            <div className="mainarea-topic-text">
                Weverse Shop
            </div>
            <div  className="productdetail-card-area" 
            // onClick={() => setFlipped(!flipped)}
            >
               {/* <div className="productdetail-card2">

               </div>
               <animated.div style={dropped} className="productdetail-card">
                  <div className="productdetail-button-flip"
                  onClick={() => {
                     setIsFrontPage(!isFrontPage);
                   }}
                  >
                     More Info...
                  </div>
               </animated.div> */}
               
               <animated.div  class="productdetail-card" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                  <>
                     {flipped ? (
                        <>
                          <div class="productdetail-card"></div>
                        </>
                     ):(
                        <>
                           <div class="productdetail-card2" ></div>
                              <div class="productdetail-card1">
                                 <div className="productdetail-button-flip"
                                    onClick={() => setFlipped(!flipped)}
                                 >
                                    More Info...
                                 </div>
                           </div>
                        </>
                     )}
                  </>
                  
                 
               </animated.div>
               <animated.div class="productdetail-card" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(-180deg)`) }}>
               <>
                  {flipped ? (
                     <>
                        <div class="productdetail-card1-back"></div>
                        <div class="productdetail-card2-back">
                           <div className="productdetail-button-flip"
                              onClick={() => setFlipped(!flipped)}
                           >
                              Go Back
                           </div>
                        </div>
                     </>
                  ):(
                     <>
                        <div class="productdetail-card"></div>
                     </>
                  )}
               </>
                  

               </animated.div>
               
            </div>
            
            
            
      </div>
      
   );
}

export default ProductDetail;


 // <Row gutter={[32, 32]}>
      //    <Col
      //       lg={{ span: 10, offset: 1 }}
      //    >
      //       <img
      //          alt=""
      //          className="product-image"
      //          src={product.image}
      //       />
      //    </Col>
      //    <Col
      //       lg={{ span: 12 }}
      //    >
      //       <div className="product-info--detail">
      //          <h2 className="product-category">
      //             {product.category}
      //          </h2>
      //          <h1 className="product-name product-name--large">
      //             {product.name}
      //          </h1>
      //          <p className="product-description">{product.description_long}</p>
      //          <div className="product-price-wrap">
      //             <p className="product-price product-price--large">
      //                ${product.price}.00
      //          </p>
      //             <p className="product-status">
      //                Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
      //             </p>
      //             <div className="product-qty">
      //                Qty: {"   "}
      //                <Select
      //                   defaultValue={qty}
      //                   value={qty}
      //                   className="select-style"
      //                   onChange={val => setProductDetail(dispatch, product.id, val)}
      //                >
      //                   {[...Array(product.countInStock).keys()].map((x) => (
      //                      <Option key={x + 1} value={x + 1}>
      //                         {x + 1}
      //                      </Option>
      //                   ))}
      //                </Select>
      //             </div>
      //             <p className="product-qty">
      //                Total Price: ${product.price * qty}
      //             </p>
      //             {/* <AddToCart /> */}
      //          </div>
      //       </div>
      //    </Col>
      // </Row>