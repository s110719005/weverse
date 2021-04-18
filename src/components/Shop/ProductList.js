import { Row, Col } from "antd";
import ProductItem from "./ProductItem";
import btsProducts from "../../json/btsProducts.json";

export default function ProductList({products}) {
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
        {products.map(product => (
        <Col 
          key={product.id} 
          xs={{ span: 12 }} 
          sm={{ span: 8 }} 
          md={{ span: 8 }} 
          lg={{ span: 6 }}
          xl={{ span: 6 }}
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

