import { Row, Col } from "antd";
import ProductItem from "./ProductItem";
import btsProducts from "../../json/btsProducts.json";

export default function ProductList(isNavBarVisible) {
  return (
    // <Row gutter={[32, 32]}>
    // {products.map(product => (
    //     <Col 
    //       key={product.id} 
    //       lg={{ span: 12 }} 
    //       xl={{ span: 8 }}
    //       xxl={{ span: 6 }}
    //     >
    //       {/* <ProductItem product={product}/> */}
    //       <ProductItem key={product.id} product={BtsProducts} />
    //     </Col>
    //   ))}
    // </Row>
    <Row gutter={[32, 32]}>
        {btsProducts.map(product => (
        <Col 
          key={btsProducts.id} 
          xs={{ span: 32 }} 
          sm={{ span: 12 }} 
          md={{ span: 8 }} 
          lg={{ span: 6 }}
          xl={{ span: 4 }}
          xxl={{ span: 2 }}
        >
          <ProductItem product={product}/>
        </Col>
      ))}
      
    </Row>
    // <>
    // {isNavBarVisible ? true : false }
    //           {!isNavBarVisible ? (
    //             <div>hi</div>
    //           ):(
                
    //           )}
    //         </>


    
    
  );
}

