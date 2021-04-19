// @refresh reset
import { useContext,useState } from "react";
import { Row, Col } from "antd";
import { Select } from 'antd';
//import AddToCart from "./AddToCart"
import { StoreContext } from "../../store";
import { setProductDetail } from "../../actions"

import { useSpring, animated } from 'react-spring'
import AddToCart from "./AddToCart"

const { Option } = Select;
function handleChange(value) {
   console.log(`selected ${value}`);
 }

 const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
 const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
 const calc2 = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
 const trans2 = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
 

function ProductDetail() {
   const { state: { productDetail: { product, qty,typ,typNum} }, dispatch } = useContext(StoreContext);
   const [isFrontPage, setIsFrontPage] = useState(true);
   const [flipped, setFlipped] = useState(false);
   const [productType, setProductType] = useState(0);
   const [typeOpa, setTypeOpa] = useState([false,false,false]);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 1, tension: 400, friction: 60 }
  })

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  const [props2, set2] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  
  const clickType = useSpring({
   backgroundColor:isFrontPage?"rgba(158,144,242,0.2)":"rgba(158,144,242,0)"
   
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
            <div  className="productdetail-card-area">
               <animated.div  class="productdetail-card" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                  <>
                     {flipped ? (<><div class="productdetail-card"></div></>
                     ):(
                        <>
                           <div class="productdetail-card2" ></div>
                              <div class="productdetail-card1">
                                 <div className="productdetail-card1-left">
                                    <div className="text-white productdetail-card1-name">
                                       {product.name}
                                    </div>
                                    <div className="text-white productdetail-card1-overview">
                                       {product.description}
                                    </div>
                                    <div className="text-purple productdetail-button-flip"
                                       onClick={() => setFlipped(!flipped)}
                                    >
                                       More Info...
                                    </div>
                                    <div className="product-type-imagecon">
                                    {[...Array(product.typeNum).keys()].map((x) => (
                                      <>
                                      {!typeOpa[x] ? (
                                         <>
                                          <img
                                             alt=""
                                             className="product-type-image"
                                             src={product.image[x]}
                                             onClick={() => {
                                                setProductType(x);
                                                //setTypeOpa([!typeOpa[0],!typeOpa[1],!typeOpa[2]]);
                                             }}
                                          />
                                         </>
                                      ):(
                                         <>
                                         <img
                                             alt=""
                                             className="product-type-image-opa"
                                             src={product.image[x]}
                                             onClick={() => {
                                                setProductType(x);
                                                //setTypeOpa([!typeOpa[0],!typeOpa[1],!typeOpa[2]]);
                                             }}
                                          />
                                          
                                         </>
                                      )}
                                   </>
                                      

                                          
                                       ))}
                                    </div>
                                    
                                 </div>
                                 <div class="productdetail-card1-middle" >
                                    {/* <img
                                       alt=""
                                       className="product-image"
                                       src={product.image[productType]}
                                    /> */}
                                    <animated.div
                                       class="card"
                                       onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                       onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                       style={{ transform: props.xys.interpolate(trans) }}
                                    >
                                       <img
                                          alt=""
                                          className="product-image"
                                          src={product.image[productType]}
                                       />
                                    </animated.div>
                                             
                                 </div>
                                 <div class="productdetail-card1-right" >
                                    <div>
                                       <div className="text-white productdetail-card1-type">
                                          Type
                                       </div>
                                       <Select defaultValue={"None"}
                                          value={typ}
                                          style={{ 
                                             width: 150, 
                                             borderRadius:"50px",
                                          }} 
                                          onChange={handleChange}
                                          onChange={val => {setProductDetail(dispatch, product.id, qty,product.type[val],val);
                                             console.log(val);
                                          }}
                                          
                                       >
                                          {[...Array(product.typeNum).keys()].map((x) => (
                                             <Option key={x + 1} value={x}>{product.type[x]}</Option>
                                          ))}
                                          
                                       </Select>
                                    </div>
                                    <div>
                                       <div className="text-white productdetail-card1-type">
                                          Amount
                                       </div>
                                       <Select defaultValue={qty}
                                          value={qty}
                                          style={{ 
                                             width: 150, 
                                             borderRadius:"50px",
                                          }} 
                                          onChange={handleChange}
                                          onChange={val => {setProductDetail(dispatch, product.id, val,typ,typNum);
                                          console.log(val);
                                          }}
                                       >
                                          {[...Array(product.countInStock).keys()].map((x) => (
                                             <Option key={x + 1} value={x+1}>{x+1}</Option>
                                          ))}
                                          
                                       </Select>
                                    </div>
                                    <div>
                                       <div className="text-white productdetail-card1-type">
                                          Price
                                       </div>
                                       <div className="text-white productdetail-card1-price">
                                          $ {Math.trunc(product.price * qty)}
                                          
                                       </div>
                                       {/* <div className="text-white">
                                       {typ}
                                       </div> */}
                                    </div>
                                    
                                    <AddToCart/>
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
                           <div className="productdetail-card2-left">
                              <div className="text-white productdetail-card2-name">
                                 {product.name}
                              </div>
                              <div className="productdetail-card2-info">
                                 <div className="text-white productdetail-card2-info-topic">
                                    Overview
                                 </div>
                                 <div className="text-grey productdetail-card2-info-text">
                                    {product.overview}
                                 </div>
                                 <div className="text-white productdetail-card2-info-topic">
                                    Material
                                 </div>
                                 <div className="text-grey productdetail-card2-info-text">
                                    {product.Material}
                                 </div>
                                 <div className="text-white productdetail-card2-info-topic">
                                    Product Size
                                 </div>
                                 <div className="text-grey productdetail-card2-info-text">
                                    {product.ProductSize}
                                 </div>
                              </div>
                              <div className="productdetail-button-flip"
                                 onClick={() => setFlipped(!flipped)}
                              >
                                 I want it...
                              </div>
                           </div>
                           <div className="productdetail-card2-right">
                              <animated.div
                                 class="card2"
                                 onMouseMove={({ clientX: x, clientY: y }) => set2({ xys: calc2(x, y) })}
                                 onMouseLeave={() => set2({ xys: [0, 0, 1] })}
                                 style={{ transform: props2.xys.interpolate(trans2) }}
                              >
                                 <img
                                    alt=""
                                    className="product-image"
                                    src={product.image[productType]}
                                 />

                              </animated.div>
                              <div className="product-type-imagecon">
                              {[...Array(product.typeNum).keys()].map((x) => (
                                    <img
                                             alt=""
                                             className="product-type-image"
                                             src={product.image[x]}
                                             onClick={() => setProductType(x)}
                                          />
                                 ))}
                              </div>
                           </div>
                           
                        </div>
                     </>
                  ):(<><div class="productdetail-card"></div></>)}
               </>
               </animated.div>
               <animated.div  class="productdetail-card-phone" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                  <>
                     {flipped ? (<><div class="productdetail-card"></div></>
                     ):(
                        <>
                           <div class="productdetail-card2" ></div>
                              <div class="productdetail-card1">
                              
                                 <animated.div
                                       class="card"
                                       onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                       onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                       style={{ transform: props.xys.interpolate(trans) }}
                                    >
                                       <img
                                          alt=""
                                          className="product-image"
                                          src={product.image[productType]}
                                       />
                                    </animated.div>
                                 <div className="product-type-imagecon">
                                    {[...Array(product.typeNum).keys()].map((x) => (
                                      <>
                                      {!typeOpa[x] ? (
                                         <>
                                          <img
                                             alt=""
                                             className="product-type-image"
                                             src={product.image[x]}
                                             onClick={() => {
                                                setProductType(x);
                                                //setTypeOpa([!typeOpa[0],!typeOpa[1],!typeOpa[2]]);
                                             }}
                                          />
                                         </>
                                      ):(
                                         <>
                                         <img
                                             alt=""
                                             className="product-type-image-opa"
                                             src={product.image[x]}
                                             onClick={() => {
                                                setProductType(x);
                                                //setTypeOpa([!typeOpa[0],!typeOpa[1],!typeOpa[2]]);
                                             }}
                                          />
                                          
                                         </>
                                      )}
                                   </>
                                      

                                          
                                       ))}
                                    </div>
                                    <div className="text-white productdetail-card1-name">
                                       {product.name}
                                    </div>
                                    <div className="text-grey productdetail-card1-dis">
                                       {product.description}
                                    </div>
                                    <div className="text-purple productdetail-button-flip"
                                       onClick={() => setFlipped(!flipped)}
                                    >
                                       More Info...
                                    </div>
                                    <div className="productdetail-card1-select-con">
                                       <div
                                       style={{marginRight:"1rem"}}
                                       >
                                          <div className="text-white productdetail-card1-type">
                                             Type
                                          </div>
                                          <Select defaultValue={"None"}
                                             value={typ}
                                             style={{ 
                                                width: 120, 
                                                borderRadius:"50px",
                                             }} 
                                             onChange={handleChange}
                                             onChange={val => {setProductDetail(dispatch, product.id, qty,product.type[val],val);
                                                console.log(val);
                                             }}
                                             
                                          >
                                             {[...Array(product.typeNum).keys()].map((x) => (
                                                <Option key={x + 1} value={x}>{product.type[x]}</Option>
                                             ))}
                                             
                                          </Select>
                                       </div>
                                       <div>
                                          <div className="text-white productdetail-card1-type">
                                             Amount
                                          </div>
                                          <Select defaultValue={qty}
                                             value={qty}
                                             style={{ 
                                                width: 120, 
                                                borderRadius:"50px",
                                             }} 
                                             onChange={handleChange}
                                             onChange={val => {setProductDetail(dispatch, product.id, val,typ,typNum);
                                             console.log(val);
                                             }}
                                          >
                                             {[...Array(product.countInStock).keys()].map((x) => (
                                                <Option key={x + 1} value={x+1}>{x+1}</Option>
                                             ))}
                                             
                                          </Select>
                                       </div>
                                    </div>
                                    <div>
                                       <div className="text-white productdetail-card1-type">
                                          Price
                                       </div>
                                       <div className="text-white productdetail-card1-price">
                                          $ {Math.trunc(product.price * qty)}
                                          
                                       </div>
                                       {/* <div className="text-white">
                                       {typ}
                                       </div> */}
                                    </div>
                                    
                                    <AddToCart/>
                                 
                                 
                           </div>
                        </>
                     )}
                  </>
               </animated.div>

               <animated.div class="productdetail-card-phone" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(-180deg)`) }}>
               <>
                  {flipped ? (
                     <>
                        <div class="productdetail-card1-back"></div>
                        <div class="productdetail-card2-back">
                        <animated.div
                                 class="card2"
                                 onMouseMove={({ clientX: x, clientY: y }) => set2({ xys: calc2(x, y) })}
                                 onMouseLeave={() => set2({ xys: [0, 0, 1] })}
                                 style={{ transform: props2.xys.interpolate(trans2) }}
                              >
                                 <img
                                    alt=""
                                    className="product-image"
                                    src={product.image[productType]}
                                 />

                              </animated.div>
                              <div className="product-type-imagecon">
                              {[...Array(product.typeNum).keys()].map((x) => (
                                    <img
                                             alt=""
                                             className="product-type-image"
                                             src={product.image[x]}
                                             onClick={() => setProductType(x)}
                                          />
                                 ))}
                              </div>
                           <div className="productdetail-card2-left2">
                              <div className="text-white productdetail-card2-name">
                                 {product.name}
                              </div>
                              <div className="productdetail-card2-info">
                                 <div className="text-white productdetail-card2-info-topic">
                                    Overview
                                 </div>
                                 <div className="text-grey productdetail-card2-info-text">
                                    {product.overview}
                                 </div>
                                 <div className="text-white productdetail-card2-info-topic">
                                    Material
                                 </div>
                                 <div className="text-grey productdetail-card2-info-text">
                                    {product.Material}
                                 </div>
                                 <div className="text-white productdetail-card2-info-topic">
                                    Product Size
                                 </div>
                                 <div className="text-grey productdetail-card2-info-text">
                                    {product.ProductSize}
                                 </div>
                              </div>
                              <div className="productdetail-button-flip"
                                 onClick={() => setFlipped(!flipped)}
                              >
                                 I want it...
                              </div>
                           </div>
                           <div className="productdetail-card2-right">
                              
                           </div>
                           
                        </div>
                     </>
                  ):(<><div class="productdetail-card"></div></>)}
               </>
               </animated.div>
               
            </div>
            <div className="mainarea-topic-text">
               Recommend for you
            </div>
            
            
      </div>
      
   );
}

export default ProductDetail;

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